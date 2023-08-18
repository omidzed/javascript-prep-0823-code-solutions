/* exported tail */

const arrChallenge = ['foo', 'bar', 'baz'];

function tail(array) {
  const arr = [];
  let i = 1;
  while (i < array.length) {
    arr.push(array[i]);
    i++;
  }
  return arr;
}

console.log(tail(arrChallenge));
