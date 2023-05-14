class Queue<T> {
  private items: { [index: number]: T };
  private front: number;
  private rear: number;
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(element: T): void {
    this.items[this.front] = element;
    this.front++;
  }
  dequeue(): T | void | undefined {
    const removedElement = this.items[this.rear];
    delete this.items[this.rear];
    this.rear++;
    return removedElement;
  }
  peak(): T | undefined {
    const el = this.items[this.rear];
    return el;
  }
  getlasttwo(): T[] {
    const firstEl = this.items[this.rear];
    const lastEl = this.items[++this.rear];
    return [firstEl, lastEl];
  }
  getQueue(): { [index: number]: T } {
    return this.items;
  }
}

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);

console.log(queue.getlasttwo(), "last two element of queue");
console.log(queue.getQueue(), "last two element of queue");