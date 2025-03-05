const gameList = ["genshin", "minecraft","plantsvszombies"];
 
export default function game(cwd, args) {
  if (args.length === 0) {
    return `game: please specify a game\navailable games: ${gameList.join(", ")}`;
  }
  if (args.length > 1) {
    return `game: too many arguments`;
  }
  let height = window.innerHeight - 50;
  switch (args[0]) {
    case "genshin":
        return `<iframe src="https://www.chriskim.cn/genshin-start/" frameborder="0" width="100%" height="${height}px"></iframe>`;
    case "minecraft":
        return `<iframe src="https://www.chriskim.cn/minecraft-classic/" frameborder="0" width="100%" height="${height}px"></iframe>`;
    case "minecraft":
        return `<iframe src="https://roblnet13.github.io/pvz/game/iframe" frameborder="0" width="100%" height="${height}px"></iframe>`;
    default:
        return "game: unknown game";
  }
}

export function gameHint(cwd, args) {
  if (args.length > 1) {
    return [];
  }
  const arg = args[args.length - 1];
  return gameList.filter((game) => game.startsWith(arg)).map((game) => game.slice(arg.length));
}