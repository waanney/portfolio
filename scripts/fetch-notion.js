import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

async function getPosts() {
  if (!DATABASE_ID) {
    console.warn("No NOTION_DATABASE_ID provided, skipping notion fetch.");
    return;
  }

  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: "Status",
        status: {
          equals: "Done"
        }
      },
      sorts: [
        {
          property: "Date",
          direction: "descending"
        }
      ]
    });

    const posts = await Promise.all(response.results.map(async (page) => {
      const mdBlocks = await n2m.pageToMarkdown(page.id);
      const mdString = n2m.toMarkdownString(mdBlocks);
      
      return {
        id: page.id,
        title: page.properties.Name.title[0]?.plain_text || "Untitled",
        date: page.properties.Date.date?.start || new Date(page.created_time).toISOString().split('T')[0],
        content: mdString.parent
      };
    }));

    const outputPath = path.resolve("./src/data/posts.json");
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, JSON.stringify(posts, null, 2));

    console.log(`Successfully fetched ${posts.length} posts from Notion.`);
  } catch (error) {
    console.error("Error fetching posts from Notion:");
    console.error(error);
  }
}

getPosts();
