alert(3 > 1);
alert(2 == 1);
alert(5 != 3);
let result = 6 > 7;
alert(result);
alert(null == undefined);
let str = "Hello";
let str2 = "Single";
let str3 = `Slant`;
alert(`Hello,${str2}!`);
let value = true;
alert(typeof value);
value = String(value);
alert(typeof value);
let x = 1;
x = x - 1;
alert(x);
let year = prompt("What year did Trump become president ");
if (year == 2017) {
  alert("correct");
  alert(typeof year);
}
let day = prompt("What day was Eve born?");
if (day == 9) {
  alert(`You are correct it's ${day}!`);
} else {
  alert(`You Are Wrong it's 9!`);
}
let month = prompt("What month did WW2 start?");
if (month < 9) {
  alert("No, that is too early");
} else if (month > 9) {
  alert("No, that is too late");
} else {
  alert("Bingo");
}
let accessAllowed = prompt("What is your age?");
if (age > 18) {
  let accessAllowed = (age > 18) ? true : false;
  alert(accessAllowed);
}
let hour = 8;
let minute = 30;
if(hour<19||hour>10);
alert('Closed');
if (hour==10&& minute==30);
alert('Breaks');

let a = prompt("2+2");
switch (a) {
  case "3":
    alert("higher");
    break;
  case "5":
    alert("lower");
    break;
  case "4":
    alert("correct");
    break;
  default:
    alert("Wrong");
    break;
}
let userName = "Bob";
function showMessage() {
  alert("Hi," + userName);
}
showMessage();

function showText(from, text) {
  from = "*" + from + "*";
  alert(from + ":" + text);
}
let from = "Max";
showText(from, "hello");

alert(from);

function showAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permison?");
  }
}
let userAge = prompt("How old are you", 18);
if (showAge(userAge)) {
  alert("Yes");
} else {
  alert("No");
}


function sayHi() {
  alert("Hi");
}
alert(sayHi); //shows the function code
let func = sayHi;
func();
sayHi();

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You Accepted.");
}





