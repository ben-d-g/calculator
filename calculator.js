function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let operationList = [];

//currentNum holds the sequence of numbers pressed since last operation
//when an operation is selected, parse to int and add to operationList
let currentNum = "";

let numbers = document.getElementsByClassName("number");
Array.from(numbers).forEach((numButton) => {
    numButton.addEventListener("click", (numButton) => {
        console.log(numButton.target.id);
        currentNum += numButton.target.id;
        
        //display currentNum
        let displayNumber = document.querySelector("#displayNumber");
        displayNumber.textContent = currentNum;
    })
})

const ac = document.querySelector("#AC");
ac.addEventListener("click", () => {
    currentNum = "";
    operationList = [];
    displayNumber.textContent = currentNum;
})