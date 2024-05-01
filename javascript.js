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
        prevOp = null;
        current.splice(0,current.length);
        updateScreen(total, current, prevOp);
    }
});

function updateScreen(totalNum, currentNum, op){
    if(typeof currentNum == "object"){
        if(currentNum.length == 0){
            y = "";
        }
        else
            y = parseFloat(currentNum.join(""));
        if(prevOp == '='){
            op = "";
            totalNum = "";
        }
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
var prevOp;
var total = 0;
var currentInt = 0;

zeroBtn.addEventListener("click", () => {
    current.push('0');
    updateScreen(total, current, prevOp);
});

oneBtn.addEventListener("click", () => {
    current.push('1');
    updateScreen(total, current, prevOp);
});

twoBtn.addEventListener("click", () => {
    current.push('2');
    updateScreen(total, current, prevOp);
});

threeBtn.addEventListener("click", () => {
    current.push('3');
    updateScreen(total, current, prevOp);
});

fourBtn.addEventListener("click", () => {
    current.push('4');
    updateScreen(total, current, prevOp);
});

fiveBtn.addEventListener("click", () => {
    current.push('5');
    updateScreen(total, current, prevOp);
});

sixBtn.addEventListener("click", () => {
    current.push('6');
    updateScreen(total, current, prevOp);
});

sevenBtn.addEventListener("click", () => {
    current.push('7');
    updateScreen(total, current, prevOp);
});

eightBtn.addEventListener("click", () => {
    current.push('8');
    updateScreen(total, current, prevOp);
});

nineBtn.addEventListener("click", () => {
    current.push('9');
    updateScreen(total, current, prevOp);
});

decimalBtn.addEventListener("click", () => {
    current.push('.');
    updateScreen(total, current, prevOp);
});

plusBtn.addEventListener("click", function (){operate('+');});
subtractBtn.addEventListener("click", function (){operate('-');});
divideBtn.addEventListener("click", function (){operate('/');});
multiplyBtn.addEventListener("click", function () {operate('*');});
equalBtn.addEventListener("click", function (){operate('=');});


function operate(op){
    if(prevOp == null){
        total = parseFloat(current.join(""));
        updateScreen("", total, prevOp);
        current.splice(0,current.length);
        prevOp = op;
    }
    else if(op == '='){
        currentInt = parseFloat(current.join(""));
        (prevOp == '+') ? total += currentInt
        : (prevOp == '-') ? total -= currentInt
        : (prevOp == '/') ? total /= currentInt
        : total *= currentInt;
        updateScreen("", total, op);
        current.splice(0,current.length);
        prevOp = op;
    }
    else if(prevOp == '+'){
        if(current.length > 0){
            currentInt = parseFloat(current.join(""));
            total += currentInt;
            current.splice(0,current.length);
            prevOp = op;
            updateScreen(total, current, prevOp);
        }
        else{
            total += currentInt;
            prevOp = op;
            updateScreen(total, currentInt, prevOp);
        }
    }
    else if(prevOp == '-'){
        if(current.length > 0){
            currentInt = parseFloat(current.join(""));
            total -= currentInt;
            current.splice(0,current.length);
            prevOp = op;
            updateScreen(total, current, prevOp);
        }
        else{
            total -= currentInt; 
            prevOp = op;
            updateScreen(total, currentInt, prevOp);
        }
    }
    else if(prevOp == '/'){
        if(current.length > 0){
            currentInt = parseFloat(current.join(""));
            if(currentInt == 0){
                document.querySelector(".display").innerHTML = "ERROR";
                total = 0;
                currentInt = 0;
                prevOp = null;
            }
            else{
                total /= currentInt;
                current.splice(0,current.length);
                prevOp = op;
                updateScreen(total, current, prevOp);
            }
        }
        else{
            total /= currentInt; 
            prevOp = op;
            updateScreen(total, currentInt, prevOp);
        }
    }
    else if(prevOp == '*'){
        if(current.length > 0){
            currentInt = parseFloat(current.join(""));
            total *= currentInt;
            current.splice(0,current.length);
            prevOp = op;
            updateScreen(total, current, prevOp);
        }
        else{
            total *= currentInt; 
            prevOp = op;
            updateScreen(total, currentInt, prevOp);
        }
    }
    else if(prevOp == '=' && current.length == 0){
        updateScreen("", total, null);
        prevOp = op;
    }
    else if(prevOp == '=' && current.length > 0){
        total = parseFloat(current.join(""));
        prevOp = op;
        updateScreen(total, "", prevOp);
        current.splice(0,current.length);
    }
}