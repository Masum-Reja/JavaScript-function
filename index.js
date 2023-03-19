//1.This function take a positive number as input.it multiply by 3 ,then sum by 10 with the result ,then divide by 2 of the summation result,then subtraction with 5 and then return the final result.

function mindGame(numbers) {
  if (typeof numbers != "number" || numbers < 0) {
    //**FUNCTION REQUIREMENT** Important note-->> This function take only number.
    return "invalid input!! insert a valid input only number";
  }
  let result = (numbers * 3 + 10) / 2 - 5;
  return result;
}
console.log(mindGame(33));

//2.This function take a string as a simple input.Count the character's that means find the string length and then divide by 2 .if the remainder is 0 then print the even,and if the remainder is not 0 then print the odd.

function evenOdd(str) {
  if (typeof str != "string") {
    //**FUNCTION REQUIREMENT** Important note-->> This function take only string.
    return "invalid input!! insert a valid input only string";
  }
  let remainder = str.length % 2;
  let result = "";
  if (remainder == 0) {
    result = "even";
  } else {
    result = "odd";
  }
  return result;
}

console.log(evenOdd("chatgpt"));

//3.This function take a number as input and find the difference with 7. if the difference is less than 7 then print the difference result.and if the difference is greater than or equal 7 then double of the input number and print it as result.

function isLGSeven(numbers) {
  if (typeof numbers != "number" || numbers === null) {
    //**FUNCTION REQUIREMENT** Important note-->> This function take only number.
    return "invalid input!! insert a valid input only number";
  }
  let result = numbers - 7;
  if (result < 7) {
    result = result;
  } else if (result >= 7) {
    result = numbers * 2;
  }
  return result;
}

console.log(isLGSeven(-15));

//4.This function take an array as input.The array element maybe positive or negative numbers.if the number is negative then we consider it the 'Bad data' and for positive is 'Good Data'.This function find out the value that how many negative number/ 'Bad Data' contains the array.1st of all declare variable 'count'.initial value of 'count' is 0.Then execute a for loop to check the all array element and compare with 0 for negative/'Bad Data',if we find a single'Bad Data' then increase 'count' value 1.and finally return the 'count 'value.

function findingBadData(arr) {
  if (typeof arr != "object" || arr.length === 0) {
    //**FUNCTION REQUIREMENT** Important note-->> This function take only valid array.
    return "invalid input!! insert a valid input only array";
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element < 0) {
      count++;
    }
  }
  return count;
}

const myInput = [-4, 3, 2, -9, 1, -5, -33, -55];
console.log(findingBadData(myInput));

//5.This function take 3 number parameter as gems of 3 friends. calculate the total diamond after convert gems to diamond,and then compare with 1000*2. if total diamond is grater than or equal 1000*2 then difference with 2000 and return the value. if total diamond is not grater than or equal 1000*2 then return the value.

function gemsToDiamond(gems1, gems2, gems3) {
  if (typeof gems1 != "number" || gems1 == null) {
    //**FUNCTION REQUIREMENT** Important note-->> This function take only 3 numbers.
    return "invalid input!! insert 1st number as 1st input";
  }
  if (typeof gems2 != "number" || gems2 == null) {
    return "invalid input!! insert 2nd number as 2nd input";
  }
  if (typeof gems3 != "number" || gems3 == null) {
    return "invalid input!! insert 3rd number as 3rd input";
  }
  const firstFriendsDiamond = 21 * gems1;
  const secondFriendsDiamond = 32 * gems2;
  const thirdFriendsDiamond = 43 * gems3;
  let totalDiamond =
    firstFriendsDiamond + secondFriendsDiamond + thirdFriendsDiamond;

  if (totalDiamond >= 1000*2) {
    totalDiamond -= 2000;
  } else {
    totalDiamond = totalDiamond;
  }
  return totalDiamond;
}
console.log(gemsToDiamond(20, 200, 50));
