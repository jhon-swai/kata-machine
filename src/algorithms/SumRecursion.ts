export default function sum_n(n: number): number {
  if (n === 1) return 1
  return n + sum_n(n - 1)
}