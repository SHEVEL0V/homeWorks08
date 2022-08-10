/** @format */
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var age;
var names;
var toggle;
var empty;
var notInitialize;
age = 50;
names = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
