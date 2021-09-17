// Declaring Variables
const FirstNumber = parseInt(document.querySelector('#firstNumber').value);
const SecondNumber =parseInt(document.querySelector('#secondNumber').value);
const RESULT = parseInt(document.querySelector('#ansfirstNumbersecondNumber').value);
const SumFirstNumberSecondNumber = FirstNumber + SecondNumber;
const DiffFirstNumberSecondNUmber = FirstNumber - SecondNumber;
const ProductFirstNumberSecondNUmber = FirstNumber * SecondNumber;
const DivFirstNumberSecondNUmber = FirstNumber / SecondNumber;
const Clear = document.querySelector('#firstNumber');
const ButtonAdd = document.querySelector('#Add');
const ButtonSub = document.querySelector('#Sub');
const ButtonMultiply = document.querySelector('#Multiply');
const ButtonDiv = document.querySelector('#Div');
const BClear = document.querySelector('#Clear');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#calcForm')


// Action

// function doSum(){
    
//     ButtonAdd.addEventListener('click',()=>{
//         RESULT.value = SumFirstNumberSecondNumber;
       
//     })
   
// }
// doSum();

//Addition
function doSum(){
    var a = parseInt((document.querySelector('#firstNumber').value));
    var b = parseInt((document.querySelector('#secondNumber').value));
    RESULT = parseInt(document.querySelector('#ansfirstNumbersecondNumber').value = a+b);
}
doSum();

// Subtruction
function doSub(){
    var a = parseInt((document.querySelector('#firstNumber').value));
    var b = parseInt((document.querySelector('#secondNumber').value));
    RESULT = parseInt(document.querySelector('#ansfirstNumbersecondNumber').value = a-b);
}
doSub();
 
//Multiplication

function doProduct(){
    var a = parseInt((document.querySelector('#firstNumber').value));
    var b = parseInt((document.querySelector('#secondNumber').value));
    RESULT = parseInt(document.querySelector('#ansfirstNumbersecondNumber').value = a*b);
}
doProduct();

//Division
function doDiv(){
    var a = parseInt((document.querySelector('#firstNumber').value));
    var b = parseInt((document.querySelector('#secondNumber').value));
    RESULT = parseInt(document.querySelector('#ansfirstNumbersecondNumber').value = a/b);
}
doDiv();

//Clear button
function calcClear(){
    form.reset ()
}
BClear.addEventListener('click',()=>{
    calcClear();
});