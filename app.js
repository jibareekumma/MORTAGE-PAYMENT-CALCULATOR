

'use strict';

const cFnc = function() {
    console.log('This feature worked')
};


// Storing the elements 

const mortageAmount = document.getElementById('mortage-amount');
const clearBtn = document.getElementById('clear-all-btn');
const mortageTerm = document.getElementById('mortage-term');
const interestRate = document.getElementById('interest-rate');
const repaymentRadio = document.getElementById('repayment-radio');
const interestRadio = document.getElementById('interest-radio');
const calculateBtn = document.getElementById('calculate-button');
const monthlyRepayment = document.getElementById('monthly-repayment');
const totalRepayment = document.getElementById('total-repayment');


// Selecting Error Variables for inputs
const errorAmount = document.querySelector(".error-amount")
const errorTerm = document.querySelector(".error-term")
const errorRate = document.querySelector(".error-rate")
const errorRadio = document.querySelector(".error-radio")
// collecting Input values

// The Function before Button is clicked
const handleClick = function(e){

    let isValid = true;

    // Amount value Inputs
    let amountValue = mortageAmount.value
    if(amountValue === ""){
        errorAmount.style.display = "block"
        isValid = false;
    } else{
        errorAmount.style.display = "none"
    }
    amountValue = Number(amountValue)
    

    // Term Value Inputs
    let termValue = mortageTerm.value
    if(termValue === ""){
        errorTerm.style.display = "block"
        isValid = false;
    } else{
        errorTerm.style.display = "none"
    }
    termValue = Number(termValue)
    const termValueC = termValue * 12;

    // Interest Value Inputs
    let interestValue = interestRate.value
    if(interestValue === ""){
        errorRate.style.display = "block"
         isValid = false;
    } else{
        errorRate.style.display = "none"
    }
    interestValue = Number(interestValue)
    const interestValueC = (interestValue / 100)

    console.log(amountValue, termValue, interestValue)
    console.log(termValueC, interestValueC)


    // Checking and storing the radios
   if( repaymentRadio.checked || interestRadio.checked ){
        errorRadio.style.display = "none"
   } else{
        errorRadio.style.display = "block"
        isValid = false;
   }

   const selectedRadio = document.querySelector('input[name = "type"]:checked')

   let selectedType = null;

   if(selectedRadio){
    selectedType = selectedRadio.value
   } else{
    isValid = false;
   }

   console.log(selectedType)

   if(!isValid) return;


}


calculateBtn.addEventListener(
    'click', 
    handleClick
)