export class PriorityQueue {
  constructor () {
    this.list = [];
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element, value) {
    this.list[this.head] = {element : value};
    console.log(`HEREEEEEE ` + this.list[this.head]);
    this.head++;
  }

  // dequeue() {
  //   let candidate = tail;
  //   for (let e = list[this.tail].value)

  //   delete this.list;
  //   this.tail++;
  //   return element;
  // }
}

