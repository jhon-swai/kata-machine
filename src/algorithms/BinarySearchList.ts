export default function BinarySearchList(
    haystack: number[],
    needle: number,
): boolean {
    let low = 0;
    let high: number = haystack.length;
    let mid: number;

    if (high === 0) return false;
    if (haystack[low] > needle) return false;
    if (haystack[high] < needle) return false;

    do {
        mid = Math.floor(low + (high - low) / 2);

        if (needle === haystack[mid]) {
            return true;
        } else if (needle > haystack[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } while (low < high);

    return false;
}

// if the input halves at each step, it's likely O(log n), or O(Nlog N)