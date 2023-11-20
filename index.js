/*
Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, 
print Crackle instead of the number. If it's divisible by 5, print Pop. 
If it's divisible by both 3 and 5, print CracklePop. You can use any language.
*/

for (let num = 1; num <= 100; num++) {
  let output = "";
  if (num % 3 === 0) {
    output += "Crackle";
  }
  if (num % 5 === 0) {
    output += "Pop";
  }
  if (output === "") {
    output = num;
  }
  console.log(output);
}
