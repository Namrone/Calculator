function operate(operator, num1, num2){
    if(operator == '+'){
        return num1 + num2;
    }
    else if(operator == '-'){
        return num1 - num2;
    }
    else if(operator == '*'){
        return num1 * num2;
    }
    else if(operator == '/'){
        if(num2 !== 0){
            return num1 / num2;
        }
        else{
            return 'ERROR';
        }
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
        total = 0;
        currentInt = 0;
        operator = "";
        current.splice(0,current.length);
        updateScreen(total);
    }
});

function updateScreen(arr){
    if(typeof arr == "object"){x = convertArrToFloat(arr);}
    else
        x = arr;
    document.querySelector(".display").innerHTML = x;
}

function convertArrToFloat(arr){
    return parseFloat(arr.join(""));
}

var current = new Array();
var operator;
var total = 0;
var currentInt = 0;

zeroBtn.addEventListener("click", () => {
    current.push('0');
    updateScreen(current);
});

oneBtn.addEventListener("click", () => {
    current.push('1');
    updateScreen(current);
});

twoBtn.addEventListener("click", () => {
    current.push('2');
    updateScreen(current);
});

threeBtn.addEventListener("click", () => {
    current.push('3');
    updateScreen(current);
});

fourBtn.addEventListener("click", () => {
    current.push('4');
    updateScreen(current);
});

fiveBtn.addEventListener("click", () => {
    current.push('5');
    updateScreen(current);
});

sixBtn.addEventListener("click", () => {
    current.push('6');
    updateScreen(current);
});

sevenBtn.addEventListener("click", () => {
    current.push('7');
    updateScreen(current);
});

eightBtn.addEventListener("click", () => {
    current.push('8');
    updateScreen(current);
});

nineBtn.addEventListener("click", () => {
    current.push('9');
    updateScreen(current);
});

decimalBtn.addEventListener("click", () => {
    current.push('.');
    updateScreen(current);
});

plusBtn.addEventListener("click", function addition(){
    operator = '+';
    if(current.length == 0){
        total = operate(operator,total,currentInt); 
        updateScreen(total);
    }
    else{
        currentInt = convertArrToFloat(current);
        total = operate(operator,total,currentInt); 
        updateScreen(total);
    }
    current.splice(0,current.length);
});

subtractBtn.addEventListener("click", function subtraction(){
    operator = '-';
    if(current.length == 0){
        total = operate(operator,total,currentInt); 
        updateScreen(total);
    }
    else{
        currentInt = convertArrToFloat(current);
        total = operate(operator,total,currentInt); 
        updateScreen(total);
    }
    current.splice(0,current.length);
});

divideBtn.addEventListener("click", function division(){
    operator = '/';
    if(current.length == 0){
        total = operate(operator,total,currentInt); 
        updateScreen(total);
    }
    else{
        currentInt = convertArrToFloat(current);
        total = operate(operator,total,currentInt); 
        updateScreen(total);
    }
    current.splice(0,current.length);
});

multiplyBtn.addEventListener("click", function multiplication(){
    operator = '*';
    if(current.length == 0){
        total = operate(operator,total,currentInt); 
        updateScreen(total);
    }
    else{
        currentInt = convertArrToFloat(current);
        total = operate(operator,total,currentInt); 
        updateScreen(total);
    }
    current.splice(0,current.length);
});

equalBtn.addEventListener("click", function equals(){
    total = operate(operator, total, currentInt);
    updateScreen()
});