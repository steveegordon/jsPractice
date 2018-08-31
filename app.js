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