// problem
// Given two crystall balls that will break if dropped from high enough distance,
// Determine the exact spot in which it will break in the most optimized way

// Tip:
// use both binary search and linear search knowledge

export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpSteps: number = Math.floor(Math.sqrt(breaks.length));
  let floorIndex: number = jumpSteps;

  // O(√N)
  for (; floorIndex < breaks.length; floorIndex += jumpSteps) {
    if (breaks[floorIndex]) {
      break;
    }
  }

  // step back from where the first broke
  floorIndex -= jumpSteps;

  for (let j = 0; j < jumpSteps; ++j, ++floorIndex) {
    if (breaks[floorIndex]) {
      return floorIndex;
    }
  }

  return -1;
}
