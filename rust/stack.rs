use std::mem;

#[derive(Debug)]
enum Link<T> {
    Empty,
    More(Box<Node<T>>),
}

#[derive(Debug)]
struct Node<T> {
    data: T,
    next: Link<T>,
}

struct LinkedList<T> {
    size: u64,
    head: Link<T>,
}

trait Stack<T> {
    fn new() -> Self;
    fn push(&mut self, data: T);
    fn pop(&mut self) -> Option<T>;
    fn size(&self) -> u64;
    fn peek(&mut self) -> Option<T>;
}

impl<T> Stack<T> for LinkedList<T> {
    fn push(&mut self, data: T) {
        let node = Box::new(Node {
            data,
            next: mem::replace(&mut self.head, Link::Empty),
        });

        self.head = Link::More(node);
        self.size += 1;
    }

    fn pop(&mut self) -> Option<T> {
        match mem::replace(&mut self.head, Link::Empty) {
            Link::Empty => None,
            Link::More(node) => {
                self.head = node.next;
                self.size -= 1;
                Some(node.data)
            }
        }
    }

    fn peek(&mut self) -> Option<T> {
        match mem::replace(&mut self.head, Link::Empty) {
            Link::Empty => None,
            Link::More(node) => {
                Some(node.data)
            }
        }
    }

    fn new() -> Self {
        LinkedList {
            size: 0,
            head: Link::Empty,
        }
    }

    fn size(&self) -> u64 {
        self.size
    }
}

fn main() {
    let mut stack: LinkedList<u64> = Stack::new();
    stack.push(10);
    stack.push(20);
    stack.push(30);
    println!("Size: {}, Data: {:?}", stack.size, stack.head);

    let data = stack.pop();
    println!("Size: {}, Popped: {}", stack.size, data.unwrap());

    stack.push(40);
    println!("Size: {}, Data: {:?}", stack.size, stack.head);

    let peek = stack.peek();
    println!("Size: {}, Peeked: {}", stack.size, peek.unwrap());
}
