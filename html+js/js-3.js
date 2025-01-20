name = "Rahim";
age = 38;
height = 5.9;
male = true;

console.log(name, age, male, 90, "Bangladesh");

x = 5;
y = 10;
z = 3;

p = x + y;
q = x - y;
r = x * y;
s = x / y;
t = y % z;

console.log(p, q, r, s, t);

names = ["Rahim", "Karim", "Jarif", "Shakib"];
console.log(names);

ages = [5, 6, 7, 8];
console.log(ages);

ages.push(10);
ages.push(15);
console.log(ages);

console.log(ages[0]);
console.log(ages[4]);

console.log("length of ages:", ages.length);

for (let i = 0; i < ages.length; i++) {
  console.log(i, ages[i]);
}

number = 85;

if (number % 2 == 0) {
  console.log(number, " is even");
} else {
  console.log(number, " is odd");
}

marks = 74;
gender = "F";
// <= != ==
if (marks >= 80 && gender == "F") {
  console.log("4.00");
} else if (marks >= 75 || gender == "F") {
  console.log("3.80");
} else if (marks >= 70) {
  console.log("3.50");
} else if (marks >= 60) {
  console.log("3.25");
} else {
  console.log("0.00");
}

function sum() {
  console.log("This is from sum function");
}

sum();
sum();

function sum2(a, b) {
  console.log("sum is", a + b);
}

sum2(5, 6);
sum2(10, 20);
sum2("asd", "ABC");
aa = sum2(9, 10);
console.log("Value of aa", aa);

function sum3(a, b, c) {
  return a + b + c;
}

aaa = sum3(10, 20, 30);
console.log(aaa);
