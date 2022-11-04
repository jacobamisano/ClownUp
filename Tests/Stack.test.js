import { assert } from '../Errors/Assert.js';
import { describe, test } from '@jest/globals';
import { Stack } from './../AbstractDataTypes/Stack';

describe('Stack Test Suite', () => {
  test('Add Stack Element', () => {
    let stack = new Stack();
    stack.add('ABC');
    stack.add('DEF');
    assert(stack.elements = ['ABC', 'DEF'], 'Adding elements to a stack caused an error');
  })
  test('Remove Stack Element', () => {
    let stack = new Stack();
    stack.add('Pizza');
    stack.add('Munchkin');
    stack.add('Elf');
    const item = stack.pop();
  }) 
})