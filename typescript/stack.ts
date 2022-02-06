export interface Node<T> {
  data: T;
  next: Node<T> | null;
}

export interface Stack<T> {
  push(data: T): void;
  pop(): T | null;
  peek(): T | null;
  size(): number;
}

export class StackImpl<T> implements Stack<T> {
  private tail: Node<T> | null;
  private head: Node<T> | null;
  private _size: number;

  constructor() {
    this._size = 0;
    this.tail = null;
    this.head = null;
  }

  push(data: T): void {
    const node: Node<T> = {
      data,
      next: null,
    };

    if (!this.head) {
      this.tail = this.head = node;
    } else {
      node.next = this.tail;
      this.tail = node;
    }

    ++this._size;
  }

  pop(): T | null {
    if (!this._size) {
      return null;
    }

    const data = this.tail.data;
    this.tail = this.tail.next;

    --this._size;

    return data;
  }

  peek(): T | null {
    if (!this._size) {
      return null;
    }

    return this.tail.data;
  }

  size(): number {
    return this._size;
  }
}

