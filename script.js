const myb = document.getElementById("myb");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");


const min =1;
const max =6;

let randomNum1;
let randomNum2;
let randomNum3;
myb.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    result1.textContent =  randomNum1;
    result2.textContent =  randomNum2;
    result3.textContent =  randomNum3;
}