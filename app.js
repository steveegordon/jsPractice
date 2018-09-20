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

//  nth
let nth = (n, list) => {
  let counter = 0;
  let value;
  for (let node = list; counter <= n ; node = node.rest) {
    value = node.value;
    counter++;
  }
  return value;
};

let prepend = (val, list) => {
  let newList = {};
  newList.value = val;
  newList.rest = list;
  return newList;
};

let nthRecursive = (n, list) => {
  let dig = (n, list) => {
    if (n == 0) {
      return list.value
    }
    else {
      return dig(n - 1, list.rest);
    }
  }
  return dig(n, list);
};

// DeepEqual
let deepEqual = (obj1, obj2) => {
  if (obj1 == null && obj2 == null) {
    return true;
  }
  else if (typeof(obj1) == typeof(obj2) && typeof(obj1) == "object") {
    if (obj1.length == obj2.length && obj1.length == undefined) {
      if (Object.keys(obj1).length == Object.keys(obj2).length) {
        let keyArray = Object.keys(obj1);
        for (let key of keyArray) {
          if (obj2[key] != obj1[key]) {
            return false
          }
        }
      }
      else {
        return false;
      }
    }
    else if (obj1.length == obj2.length) {
      for (let [index, item] of obj1.entries()) {
        if (item !== obj2[index]) {
          return false
        }
      }
    }
    else {
    }
  }
  else {
    if (obj1 !== obj2) {
    return false;
    }
  }
  return true;
};

// Flatten arrays
let arrays = [[1,2,3],[4,5],[6]];
arrays = arrays.reduce((a, b) => a.concat(b));

// High-order loop function
let loop = (n, func1, func2, func3) => {
  while (func1(n) == true) {
      func3(n);
      n = func2(n);
    }
};

loop(3, n => n > 0, n => n - 1, console.log);

// Every
let every = (array, test) => {
  for (element of array) {
    if (test(array) == false) {
      return false;
    }
  }
  return true;
};

let everyAlt = (array, test) => {
  return !array.some(element => !test(element));
}

// Dominant direction
let dominantDirection = text => {
  let results = [], answer = [];
  for (let char of text) {
    results.push(characterScript(char.codePointAt(0)));
  }
  results = countBy(results.filter(n => n != null), n => n.direction)
  return results.reduce((a, b) => a.count >= b.count ? a : b, 0).name
};


// Create Matrix and iterator interface
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.height = height;
    this.width = width;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x,y) {
    return this.content[y * this.width + x];
  }
  set(x,y, value) {
    this.content[y * this.width + x] = value;
  }
};

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)
                }
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
};

var test = new Matrix(4, 4, (x, y) => {return (x * y) == 0 ? `value is ${x + y}` : `value is ${x * y}`});

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

for (let {x, y, value} of test) {
  console.log(x, y, value);
};
// Vector Class
class Vec {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.plus = function(vector){
      return new Vec(this.x + vector.x, this.y + vector.y);
    };
    this.minus = function(vector){
      return new Vec(this.x - vector.x, this.y - vector.y);
    };
  }
  get length() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
  set(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Group class
class Group {
  constructor() {
    this.content = [];
    this.add = function(val) {
      for (let num of this.content) {
        if (val === num) return new Error(`Value already exists, cancelled`);
      }
      this.content.push(val);
    };
    this.delete = function(x) {
      return this.content = this.content[0].filter(n => n != x);
    }
    this.has = function(val) {
      for (let num of this.content[0]) {
        if (val === num) return true;
      }
      return false;
    }
  }
  static from(object) {
    let result = new Group();
    for (let objects of object) {
      result.add(object);
    }
    return result;
  }
}

