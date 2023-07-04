const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[],
): boolean {
  // Base case

  // out of bound (off map)
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }
  // on wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // if seen
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recursion
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];

    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        path,
      )
    ) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  // initialize all paths as not seen (false)
  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  // walk
  walk(maze, wall, start, end, seen, path);
  return path;
}
