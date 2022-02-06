export interface Node {
  value: number;
  left: Node | null;
  right: Node | null;
}

export interface BinaryTree {
  add(value: number): void;
  search(value: number): boolean;
  log(): void;
}

export class BinarySearchTree implements BinaryTree {
  private tree: Node;

  constructor() {
    this.tree = null;
  }

  log(): Node {
    return this.tree;
  }

  add(value: number): void {
    this.tree = this.addRecursive(value, this.tree);
  }

  private addRecursive(value: number, tree: Node): Node {
    if (!tree) {
      const node: Node = {
        value,
        left: null,
        right: null,
      };
      tree = node;
      return tree;
    }

    if (value < tree.value) {
      tree.left = this.addRecursive(value, tree.left);
    } else {
      tree.right = this.addRecursive(value, tree.right);
    }

    return tree;
  }

  search(value: number): boolean {
    return this.searchRecursive(value, this.tree);
  }

  private searchRecursive(value: number, tree: Node): boolean {
    if (!tree) {
      return false;
    }

    if (value === tree.value) {
      return true;
    }

    if (value < tree.value) {
      return this.searchRecursive(value, tree.left);
    } else {
      return this.searchRecursive(value, tree.right);
    }
  }
}
