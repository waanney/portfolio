{
  description = "waanney 3D Portfolio — Web development shell";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = {nixpkgs, ...}:
  let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
    shell = pkgs.mkShell {
      nativeBuildInputs = with pkgs; [
        nodejs
        bun
        yarn
        pnpm
        neovim
        nushell
        starship
        tailwindcss-language-server
      ];
      shellHook = ''
        export SHELL=$(which nu)
        echo "🐔 waanney 3D Portfolio — Dev Environment"
      '';
    };
  in {
    devShells.${system} = {
      default = shell;
      web-dev = shell;
    };
  };
}
