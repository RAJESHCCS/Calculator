// var displayArea = document.getElementById('display')

// function buttonClicked(digitOrOperator) {

   
//     displayArea.innerText = displayArea.innerText + digitOrOperator
   
// }
// if(digitOrOperator=='='){
//     displayResult();
// }
// if(digitOrOperator=='CLR'){
//     clearDisplay()
// }
// if(digitOrOperator==DEL){
//     deleteLastDigit()
// }
// function displayResult() {
//     let calculate = displayArea.innerText;
//     if (calculate != "") {
//         displayArea.innerText = eval(calculate);
//     }
// }

// function clearDisplay() {
//     displayArea.innerText = "";
// }

// function deleteLastDigit() {
//     displayArea.innerText = displayArea.innerText.substring(0, displayArea.innerText.length - 1);
// }
var displayArea=document.getElementById('display');

function buttonClicked(digitOrOperator){
    displayArea.innerText=displayArea.innerText + digitOrOperator;
}

function displayResult() {
    console.log('hi')
    let calculate = displayArea.innerText;
    if (calculate != "") {
        displayArea.innerText = eval(calculate);
    }
}

function clearDisplay(){
    displayArea.innerText="";
}

function deleteLastDigit(){
    displayArea.innerText=displayArea.innerText.substring(0,displayArea.innerText.length-1);
}
