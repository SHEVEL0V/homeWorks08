/** @format */

const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

let age: number;
let names: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;

age = 50;
names = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
