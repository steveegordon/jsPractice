// JS Practice Challenges

// Pyramid
var pyramid = function(num){
  let st = '';
  for (let i = 0; i < num; i++){
    st = st + '#';
    console.log(st);
    }
};

// FizzBuzz
var fizzBuzz = function(num){
  for (let i = 0; i < num; i++){
            if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
            }
            else if (i % 5 == 0 && i % 3 != 0){
        console.log("Buzz");
            }
            else if (i % 3 == 0 && i % 5 != 0){
        console.log("Fizz");
            }
            else {
        console.log(i);
            }
    }
};

// Chessboard
var chessboard = function(size){
  var row = '', board ='';
  for (let i = 0; i < size; i++){
    row = '';
    for (let k = 0; k < size; k++){
      if (k % 2 == 0 && i % 2 == 0){
        row = row + ' ';
            }
      else if (k % 2 == 0) {
        row = row + '#';
            }
      else if (k % 2 != 0 && i % 2 == 0){
        row = row + '#';
            }
      else {
        row = row + ' ';
            }
      if (k == size - 1){
        row = row + '\n';
        board = board + row;
            }
        }
    }
console.log(board);
};

// Minimum
let min = (num1, num2) => {
  if (num1 < num2) {
    return num1;
    }
  else return num2;
};

// Is Even Recursive
let isEven = num => {
  if (num < 0) {
    num = num * -1;
  };
  let findEven = number => {
    if (number == 0) {
      return true;
    }
    else if (number == 1) {
      return false;
    }
    else {
      return findEven(number - 2);
    };
  };
  return findEven(num);
};

// Count Character
let countChar = (string, character) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == character) {
      counter++;
    };
  };
  return counter;
};

let countBs = text => countChar(text, "B");

// Range
let range = (start, end, step = 1) => {
  let array = [];
  if (start < end) {
    while (start <= end) {
      array.push(start);
      start+=step;
    }
  }
  else {
    if (step > 0) {
      step = step - (step*2);
    }
    while (end <= start) {
      array.push(start);
      start+=step;
    }
  }
  return array;
};
// sum
let sum = array => {
  var total = 0;
  for (let element of array) {
    total +=element;
  }
  return total;
};

// reverseArray
let reverseArray = array => {
  let newArray = [];
  for (let element of array) {
    newArray.unshift(element);
  }
  return newArray;
};

// reverseInPlace
let reverseArrayInPlace = array => {
  let counter = Math.floor(array.length/2), front;
  for (let i = 0; i < counter; i++ ) {
    front = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = front;
  };
  return array;
};

// arrayToList
let arrayToList = array => {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    let list = {};
    list.value = array[array.length - i - 1];
    if (i == 0) {
    list.rest = null;
    }
    else {
      list.rest = object;
    }
    object = list;
  }
  return object;
}

// listToArray
let listToArray = list => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
