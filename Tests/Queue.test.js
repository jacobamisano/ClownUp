import { assert } from '../Errors/Assert.js';
import { describe, test } from '@jest/globals';
import { Queue } from '../AbstractDataTypes/Queue.js'
import { areEquivalentArrays } from '../AbstractDataTypes/ADTHelper'

describe('Queue tests', () => {
  test('Queue constructor test', () => {
    let q = new Queue();
    assert(areEquivalentArrays([], q.elements) == true, 'Queue constructor test failed');
  })

  test('Enqueue test', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    assert(areEquivalentArrays([1, 2], q.elements), 'Enqueue test failed')
  })

  test('Dequeue test', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    const element = q.dequeue();
    assert(element == 1, 'Dequeue is returning the incorrect value');
    assert(areEquivalentArrays([undefined, 2], q.elements), 'Dequeue is removing the incorrect value');
  })
});