function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(1, 3);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const hoursToMinutes = convertHoursToMinutes(3);
console.log(hoursToMinutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
const helloName = getGreeting('Omid');
console.log(helloName);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addedAndMultipliedBy5 = addAndMultiplyBy5(3, 4);
console.log(addedAndMultipliedBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multipliedAndDividedBy5 = multiplyAndDivideBy5(4, 6);
console.log(multipliedAndDividedBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractedTwoNumbers = subtractTwoNumbers(15, 30);
console.log(subtractedTwoNumbers);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circleCircumference = getCircleCircumference(7);
console.log(circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Omid', 'Asadi');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
const cubed = cube(5);
console.log(cubed);
