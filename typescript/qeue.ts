export interface Node<T> {
  data: T;
  next: Node<T> | null;
}

export interface Qeue<T> {
  enqeue(data: T): void;
  deqeue(): T | null;
  peek(): T | null;
  size(): number;
}

export class QeueImpl<T> implements Qeue<T> {
  private _size: number;
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this._size = 0;
    this.head = this.tail = null;
  }

  enqeue(data: T): void {
    const node: Node<T> = {
      data,
      next: null
    };

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    ++this._size;
  }

  deqeue(): T | null {
    if (!this.tail) {
      return null;
    }

    const data = this.head.data;
    this.head = this.head.next;

    --this._size;

    if (!this._size) {
      this.tail = null
    }

    return data;
  }

  peek(): T {
    if (!this._size) {
      return null;
    }

    return this.head.data;
  }

  size(): number {
    return this._size;
  }
}
