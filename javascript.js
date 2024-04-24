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
        operator = null;
        current.splice(0,current.length);
        updateScreen(total, current, operator);
    }
});

function updateScreen(totalNum, currentNum, op){
    if(typeof currentNum == "object"){
        if(currentNum.length == 0){
            y = 0;
        }
        else
            y = parseFloat(currentNum.join(""));
    }
    else
        y = currentNum;
    if(op == null){
        op = "";
        totalNum = "";
    }
    document.querySelector(".display").innerHTML = totalNum + op + y;
}

var current = new Array();
var operator;
var total = 0;
var currentInt = 0;

zeroBtn.addEventListener("click", () => {
    current.push('0');
    updateScreen(total, current, operator);
});

oneBtn.addEventListener("click", () => {
    current.push('1');
    updateScreen(total, current, operator);
});

twoBtn.addEventListener("click", () => {
    current.push('2');
    updateScreen(total, current, operator);
});

threeBtn.addEventListener("click", () => {
    current.push('3');
    updateScreen(total, current, operator);
});

fourBtn.addEventListener("click", () => {
    current.push('4');
    updateScreen(total, current, operator);
});

fiveBtn.addEventListener("click", () => {
    current.push('5');
    updateScreen(total, current, operator);
});

sixBtn.addEventListener("click", () => {
    current.push('6');
    updateScreen(total, current, operator);
});

sevenBtn.addEventListener("click", () => {
    current.push('7');
    updateScreen(total, current, operator);
});

eightBtn.addEventListener("click", () => {
    current.push('8');
    updateScreen(total, current, operator);
});

nineBtn.addEventListener("click", () => {
    current.push('9');
    updateScreen(total, current, operator);
});

decimalBtn.addEventListener("click", () => {
    current.push('.');
    updateScreen(total, current, operator);
});

//Calculates addition of current numbers when + button is clicked
plusBtn.addEventListener("click", function addition(){
    if(current.length > 0){
        operator = '+';
        currentInt = parseFloat(current.join(""));
        total += currentInt;
        current.splice(0,current.length);
        updateScreen(total, current, operator);
    }
    else{
        total += currentInt; 
        updateScreen(total, currentInt, operator);
    }
});

//Calculates subtraction of current numbers when - button is clicked
subtractBtn.addEventListener("click", function subtraction(){
    if(current.length > 0){
        currentInt = parseFloat(current.join(""));
        (operator) ?  total -= currentInt : total = currentInt;
        current.splice(0,current.length);
        operator = '-';
        updateScreen(total, current, operator);
    }
    else{
        total -= currentInt; 
        updateScreen(total, currentInt, operator);
    }
});

//Calculates division of current numbers when / button is clicked
divideBtn.addEventListener("click", function division(){
    if(current.length > 0){
        currentInt = parseFloat(current.join(""));
        if(currentInt == 0){
            document.querySelector(".display").innerHTML = "ERROR";
            total = 0;
            currentInt = 0;
            operator = null;
        }
        else{
            (operator) ?  total /= currentInt : total = currentInt;
            operator = '/';
            updateScreen(total, current, operator);
        }
        current.splice(0,current.length);
    }
    else{
        total -= currentInt; 
        updateScreen(total, currentInt, operator);
    }
});

//Calculates multiplication of current numbers when * button is clicked
multiplyBtn.addEventListener("click", function multiplication(){
    if(current.length > 0){
        currentInt = parseFloat(current.join(""));
        (operator) ?  total *= currentInt : total = currentInt;
        current.splice(0,current.length);
        operator = '*';
        updateScreen(total, current, operator);
    }
    else{
        total -= currentInt; 
        updateScreen(total, currentInt, operator);
    }
});

//Calculates the remaining number with the most recent operation clicked
equalBtn.addEventListener("click", function equals(){
    total;
    updateScreen()
});