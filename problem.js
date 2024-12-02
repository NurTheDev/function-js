sum = (num1 = 0, num2 = 0, num3 = 0, num4 = 0) => {
  return num1 + num2 + num3 + num4;
};
// console.log(sum(5, 4, 6, 7));
condition1 = (number) => {
  if (number % 2 !== 0) {
    return number * 2;
  }
  return number / 2;
};
// console.log(condition1(21));
let arr = [120, 10, 454, 13, 117, 77];
average = (number) => {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum / arr.length - 1;
};
// console.log(average(arr));
let binary = "11010110101101001100";
count = () => {
  let count = 0;
  for (let n of binary) {
    if (n == "0") {
      count = count + 1;
    }
  }
  return count;
};
// console.log(count(binary));
oddEven = (number) => {
  if (number % 2 == 0) {
    console.log("Even");
  } else console.log("Odd");
};
oddEven(8);
