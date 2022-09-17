export class Queue {
  constructor () {
    this.elements = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    const element = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return element;
  }

  peek() {
    return this.elements[head];
  }
}