function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b !== 0){
        return a/b;
    }
}

const clearBtn = document.querySelector("#clearBtn");
const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const plusBtn = document.querySelector("#plus");
const subtractBtn = document.querySelector("#subtract");
const divideBtn = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const decimalBtn = document.querySelector("#decimal");
const equalBtn = document.querySelector("#equal");

clearBtn.addEventListener("click", function clearScreen(){
    let response = prompt("Are you sure you'd like to clear? Type 'yes' if so.").toLowerCase();
    if(response == "yes" || response == "y"){
        document.querySelector(".display").innerHTML = "hello";
    }
});

function convertArrToFloat(arr){
    return parseFloat(arr.join(""));
}

var current = new Array();
var operator;
var total;
//function operate(){
    zeroBtn.addEventListener("click", () => current.push('0'));
    oneBtn.addEventListener("click", () => current.push('1'));
    twoBtn.addEventListener("click", () => current.push('2'));
    threeBtn.addEventListener("click", () => current.push('3'));
    fourBtn.addEventListener("click", () => current.push('4'));
    fiveBtn.addEventListener("click", () => current.push('5'));
    sixBtn.addEventListener("click", () => current.push('6'));
    sevenBtn.addEventListener("click", () => current.push('7'));
    eightBtn.addEventListener("click", () => current.push('8'));
    nineBtn.addEventListener("click", () => current.push('9'));
    decimalBtn.addEventListener("click", () => current.push('.'));
    plusBtn.addEventListener("click", function addition(){
        intTwo = convertArrToFloat(current);
        console.log(intTwo);
        if(isNaN(total)){
            total = intTwo;
        }
        else{
            total = add(total,intTwo);
        }
        current.splice(0,current.length);
        operator = '+';
        console.log(total);
    });
    subtractBtn.addEventListener("click", () => operator = '-');
    divideBtn.addEventListener("click", () => operator = '/');
    multiplyBtn.addEventListener("click", () => operator = '*');
//}

//operate();