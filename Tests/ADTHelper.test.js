import {describe, test, toBe} from '@jest/globals';
import { validateNewADTData, validateExistingADT } from '../AbstractDataTypes/ADTHelper.js'
import {assert} from '../Errors/Assert.js'
import {NotEquivalentException} from '../Errors/Assert.js';

describe('validateNewADTData Tests', () => {
  test('validateNewADTData with correct data', () => {
    const elements = [0, 1, 2];
    const newElement = 3;
    assert(validateNewADTData(elements, newElement) == true, 'ValidateNewData failed with correct data');
  });

  test('validateNewADTData with incorrect data', () => {
    const elements = [0, 1, 2];
    const newElement = "Not Right";
    try {
      assert(validateNewADTData(elements, newElement) == null, 'ValidateNewData succeeded with incorrect data');
    } catch (e) {
      if (!(e instanceof NotEquivalentException)) {
        console.log(`${typeof e} is NOT a NotEquivalentException ${e}`)
        throw 'Unexpected error when testing';
      }
    }
  });
})

describe('validateExistingADT tests', () => {
  test('validateExistingADT with correct inputs', () => {
    const elements = [1, 2, 3];
    assert(validateExistingADT(elements) == true, 'validateExistingADT failed with correct data');
  })

  test('validateExistingADT with incorrect inputs', () => {
    const elements = [1, 2, "Not Right"];
    try {
      assert(validateExistingADT(elements), 'validateExistingADT succeeded with incorrect data');
    } catch (e) {
      if (!(e instanceof NotEquivalentException)) {
        console.log(`${typeof e} is NOT a NotEquivalentException ${e}`)
        throw 'Unexpected error when testing';
      }
    }
  })
})
