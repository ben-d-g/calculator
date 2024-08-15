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
        displayNumber.textContent = currentNum;
        console.log(currentNum)
    });
});

const ac = document.querySelector("#AC");
ac.addEventListener("click", () => {
    currentNum = "";
    operationList = [];
    displayNumber.textContent = currentNum;
});


const point = document.querySelector("#point");
point.addEventListener("click", () => {
    if (currentNum.slice(-1) == "."){
        currentNum = currentNum.slice(0, -1);
        displayNumber.textContent = currentNum;
    }
    else if (currentNum.includes(".")){
        displayNumber.textContent = currentNum;
    }
    else{
        currentNum += "."
        displayNumber.textContent = currentNum;
    }
});

const operations = document.getElementsByClassName("operation");
Array.from(operations).forEach((operationButton) => {
    operationButton.addEventListener("click", () => {
        //operationList will either be empty or be of the form [number, "operation"]
        if (operationList.length == 0){
            operationList.push(Number(currentNum));
            currentNum = "0";
            displayNumber.textContent = currentNum;
            operationList.push(operationButton.id);
            console.log(operationList)
        }
        else{
            //do operation
            operationList.push(Number(currentNum));
            currentNum = String(operation(operationList));
            displayNumber.textContent = currentNum;
            currentNum = 0;
            operationList = [operation(operationList), operationButton.id];
            console.log(operationList)
        }
    })
})