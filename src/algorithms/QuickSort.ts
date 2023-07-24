
// recursive function
function qs(arr: number[], lo: number, hi: number): void {
  // base case
  if (lo >= hi) return;

  // recusive case
  const pivotIndx = partition(arr, lo, hi);

  //  first side of the tree 
  qs(arr, lo, pivotIndx - 1);

  //  second side of the tree
  qs(arr, pivotIndx + 1, hi);
}

// partition function
function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let indx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] < pivot) {
      // swap
      indx++;
      const temp = arr[i];
      arr[i] = arr[indx];
      arr[indx] = temp;
    }
  }


  indx++;
  arr[hi] = arr[indx];
  arr[indx] = pivot;

  // return the pivot index
  return indx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
