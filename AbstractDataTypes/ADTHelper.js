import {assert} from '../Errors/Assert.js'
export function validateExistingADT(elements) {
  if (elements.length >= 0){
    const type = typeof elements[0];
    for(let i=1; i<elements.length; i++) {
      assert(typeof elements[i] == type, `${elements[i]} at index ${i} does not match the required type ${type}`);
    }
    return true;
  }
  else {
    return null;
  }
}

export function validateNewADTData(elements, newElement) {
  if (elements.length > 0){
    const type = typeof elements[0];
    assert((typeof newElement == type), `${newElement} does not have the required type of ${type} and cannot be added to the ADT`);
    return true;
  } else {
    return null;
  }
}

export function areEquivalentArrays(first, second) {
  if (first.length == second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]){
        return false;
      }
    }
    return true;
  } 
}