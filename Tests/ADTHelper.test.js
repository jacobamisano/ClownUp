import {describe, test, toBe} from '@jest/globals';
import { validateNewData } from '../AbstractDataTypes/ADTHelper.js'
import {assert} from '../Errors/Assert.js'
import {NotEquivalentException} from '../Errors/Assert.js';

describe('validateNewData Tests', () => {
  test('validateNewData with correct data', () => {
    const elements = [0, 1, 2];
    const newElement = 3;
    assert(validateNewData(elements, newElement) == true, 'ValidateNewData failed with correct data');
  });

  test('validateNewData with incorrect data', () => {
    const elements = [0, 1, 2];
    const newElement = "Not Right";
    try {
      assert(validateNewData(elements, newElement) == null, 'ValidateNewData succeeded with incorrect data');
    } catch (e) {
      if (!(e instanceof NotEquivalentException)) {
        console.log(`${typeof e} is NOT a NotEquivalentException ${e}`)
        throw 'Unexpected error when testing';
      }
    }
  });
})
