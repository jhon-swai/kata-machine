export default function bubble_sort(arr: number[]): number[] {
  let arryLength = arr.length;
  let temp: number;
  for (; arryLength > 0; arryLength--) {
    for (let bubble = 0; bubble < arryLength; bubble++) {
      if (arr[bubble] > arr[bubble + 1]) {
        temp = arr[bubble];
        arr[bubble] = arr[bubble + 1];
        arr[bubble + 1] = temp;
      }
    }
  }
  return arr;
}

// big O notation
// O(N^2)