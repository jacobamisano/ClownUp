import { validateNewADTData } from './ADTHelper.js'
export class Stack {
  constructor () {
    this.elements = [];
    this.tail = 0;
  }

  add(element){
    validateNewADTData(this.elements, element);
    this.elements[this.tail] = element;
    this.tail++;
  }

  pop() {
    const element = this.elements[this.tail];
    delete this.elements[this.tail];
    return element;
  }
}