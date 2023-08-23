import { assert } from '../ErrorHandling/Assert.js';
import { describe, test } from '@jest/globals';
import { PriorityQueue } from './../AbstractDataTypes/PriorityQueue';

describe('Priority Queue Test Suite', () => {
  test('Add PriorityQueue Element', () => {
    let pQueue = new PriorityQueue();
    pQueue.enqueue('ABC', 1);
    pQueue.enqueue('DEF', 2);
    assert(pQueue.elements = [{'ABC' : 1}, {'DEF': 2}], 'Adding elements to a stack caused an error');
  })
  // test('Remove Stack Element', () => {
  //   let stack = new Stack();
  //   stack.add('Pizza');
  //   stack.add('Munchkin');
  //   stack.add('Elf');
  //   const item = stack.pop();
  // }) 
})