# calculator

## Project Description

The purpose of this project is to create a calculator using HTML, JavaScript, and CSS. The calculator will operate as a standard classroom calculator [for example](https://mrbuddh4.github.io/calculator/). The calculator should be able to do the following operations:

- addition
- subtraction
- multiplication
- division

The calculator will be used in the following way:

1. enter a number
2. select an operation
3. enter a number
4. select equals OR back to step 2

## Project Timeline

- [x] Create wireframe
- [x] Write calculator logic (runnable in console)
- [x] Migrate calculator to wireframe
- [ ] Make CSS

## Calculator Logic

My plan with regards to the logic of the calculator is to store the series of buttons pressed in a string, `operationList`. For example, we may have:

- `operationList = []                   //initialised as an empty string`
- `operationList = [234]                //a number has been entered`
- `operationList = [234, "add"]         //an operation has been selected`
- `operationList = [234, "add", 876]    //a second number has been entered`
- `operationList = []                   //"=" was pressed, 1110 is displayed`