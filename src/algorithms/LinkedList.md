
LinkedList 
1. singly
2. doubly

### singly 
Each node has the position/index of the next node

### Doubly 
Each node has the position of the next and previous node

## Time/Space complexity

1. Prepend / Append - constant
2. Insertion in the middle - traversal cost
3. Deletion from the middle - you also have to traverse (costly depends on the )
4. Deletion from the ends - constant
5. Get the head / tail
6. Get in general

```ts
interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}
```

### Examples:
1. Stacks
2. Queues
3. Binary Tree
4. Hash Table
5. LRU (Least Recently Used) and MRU (Most Recently Used)

### Real world applications
1. Song Playlist
2. Photo Albums
3. Netflix movie playlist (ie next episode)
4. Undo and Redo