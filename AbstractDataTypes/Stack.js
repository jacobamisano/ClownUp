import {validateNewData} from 'ADTHelper.js'
export class Stack {
  constructor () {
    this.elements = [];
    this.tail = 0;
  }

  add(element){
    validateNewData(this.elements, element)
    this.elements[tail] = element;
    this.tail++;
  }

  pop() {
    element = this.elements[tail];
    delete this.elements[tail];
    return element;
  }
}