function operation(operationList){
    switch(operationList[1]){
        case "plus":
            return operationList[0] + operationList[2];
            break;
        case "minus":
            return operationList[0] - operationList[2];
            break;
        case "times":
            return operationList[0] * operationList[2];
            break;
        case "divide":
            return operationList[0] / operationList[2];
            break;
    }
}

function changeDisplayText(udpate){
    if (udpate.length > 10){
        if (Number(udpate) > 999999999){
            displayNumber.textContent = "ERROR";
            currentNum = 0;
        }
        else{
            displayNumber.textContent = udpate.slice(0,10);
        }
    }
    else{
        displayNumber.textContent = udpate;
    }
}

let operationList = [];
const displayNumber = document.querySelector("#displayNumber")

//currentNum holds the sequence of numbers pressed since last operation
//when an operation is selected, parse to int and add to operationList
let currentNum = "0";

const numbers = document.getElementsByClassName("number");
Array.from(numbers).forEach((numButton) => {
    numButton.addEventListener("click", () => {
        console.log(numButton.id);
        if (currentNum == "0"){
            currentNum = numButton.id;
        }
        else{
            currentNum += numButton.id;
        }
        
        
        //display currentNum
        changeDisplayText(currentNum);
        console.log(currentNum)
    });
});

const ac = document.querySelector("#AC");
ac.addEventListener("click", () => {
    currentNum = "0";
    operationList = [];
    changeDisplayText(currentNum);
});


const point = document.querySelector("#point");
point.addEventListener("click", () => {
    if (currentNum.slice(-1) == "."){
        currentNum = currentNum.slice(0, -1);
        changeDisplayText(currentNum);
    }
    else if (currentNum.includes(".")){
        changeDisplayText(currentNum);
    }
    else{
        currentNum += "."
        changeDisplayText(currentNum);
    }
});

const operations = document.getElementsByClassName("operation");
Array.from(operations).forEach((operationButton) => {
    operationButton.addEventListener("click", () => {
        //operationList will either be empty or be of the form [number, "operation"]
        if (operationList.length == 0){
            operationList.push(Number(currentNum));
            currentNum = "0";
            changeDisplayText(currentNum);
            operationList.push(operationButton.id);
            console.log(operationList)
        }
        else{
            //do operation
            operationList.push(Number(currentNum));
            currentNum = String(operation(operationList));
            changeDisplayText(currentNum);
            currentNum = 0;
            operationList = [operation(operationList), operationButton.id];
            console.log(operationList)
        }
    })
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (operationList.length == 0){
        changeDisplayText(currentNum);
        currentNum = "0";
    }
    else{
        operationList.push(Number(currentNum));
        currentNum = String(operation(operationList));
        changeDisplayText(currentNum);
        operationList = [];
        currentNum = "0";
        console.log(operationList)
    }
});

const plusMinus = document.querySelector("#plusMinus");
plusMinus.addEventListener("click", () => {
    if (currentNum.includes("-")){
        currentNum = currentNum.slice(1);
        changeDisplayText(currentNum);
    }
    else{
        currentNum = "-" + currentNum;
        changeDisplayText(currentNum);
    }
});

const percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    currentNum = String(0.01 * Number(currentNum));
    changeDisplayText(currentNum);
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
    currentNum = currentNum.slice(0, -1);
    changeDisplayText(currentNum);
})