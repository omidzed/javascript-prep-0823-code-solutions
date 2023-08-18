/* exported initial */

const arr1 = ['foo', 'bar', 'baz'];

function initial(array) {
  const arr = [];
  let i = 0;
  while (i < array.length - 1) {
    arr.push(array[i]);
    i++;
  }

  return arr;
}

console.log(initial(arr1));
