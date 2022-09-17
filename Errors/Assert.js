export function NotEquivalentException(message) {
  this.message = message;
  this.name = 'NotEquivalentException';
}
NotEquivalentException.prototype = new Error();

export function assert(condition, message) {
  if (!condition) {
      throw new NotEquivalentException(message) || "Assertion failed";
  }
}