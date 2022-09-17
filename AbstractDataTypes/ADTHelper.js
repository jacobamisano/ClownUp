import {assert} from '../Errors/Assert.js'
export function validateExistingData(elements) {
  if (elements.length >= 0){
    const type = typeof elements[0];
    for(i=1; i<elements.length; i++) {
      assert(typeof elements[x] == type, `${elements[i]} at index ${i} does not match the required type ${type}`);
    }
    return true;
  }
  else {
    return null;
  }
}

export function validateNewData(elements, newElement) {
  if (elements.length > 0){
    const type = typeof elements[0];
    assert((typeof newElement == type), `${newElement} does not have the required type of ${type} and cannot be added to the ADT`);
    return true;
  } else {
    return null;
  }
}