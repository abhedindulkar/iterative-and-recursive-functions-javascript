// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if(number===1){
    return number;
  }
  return number*findFactorialRecursive(number-1);
}

function findFactorialIterative(number) {
  //code here
  let fact=number;
  for(let i=number-1;i>1;i--){
    fact=fact*i;
  }
  return fact;
}
console.log(findFactorialRecursive(4));
console.log(findFactorialIterative(4))