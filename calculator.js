function operation(operationList){
    switch(operationList[1]){
        case "add":
            return operationList[0] + operationList[2];
            break;
        case "subtract":
            return operationList[0] - operationList[2];
            break;
        case "multiply":
            return operationList[0] * operationList[2];
            break;
        case "divide":
            return operationList[0] / operationList[2];
            break;
    }
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