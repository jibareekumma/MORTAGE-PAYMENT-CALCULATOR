

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


// Selecting Results Classes
const tResult = document.querySelector(".total-result")
const mResult = document.querySelector(".monthly-result")

// Selecting The UI
const visibleResult = document.querySelector(".result-section");
const emptyResult = document.querySelector(".result-section-empty");


// The Function before Button is clicked
const handleClick = function(e){

    // e.preventDefault();

    let isValid = true;
    
    // Amount value Inputs
    let amountValue = mortageAmount.value
    if(amountValue === ""){
        errorAmount.style.display = "block"
        isValid = false;
    } else{
        errorAmount.style.display = "none"
    }
    amountValue = Number(amountValue);
   
    

    // Term Value Inputs
    let termValue = mortageTerm.value
    if(termValue === ""){
        errorTerm.style.display = "block"
        isValid = false;
    } else{
        errorTerm.style.display = "none"
    }
    termValue = Number(termValue)
    const termValueC = (termValue / 12)

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

    

    // Checking and storing the radios
   if( repaymentRadio.checked || interestRadio.checked ){
        errorRadio.style.display = "none"
   } else{
        errorRadio.style.display = "block"
        isValid = false;
   }

//    Repayment Radio formula
   const repaymentFnc = function(value, term, interest){
     let mainInterest = value * interest * term + (value) 
    return(mainInterest)
}
const tRepayment = repaymentFnc(
    amountValue, termValue, interestValueC
)

// Interest Radio Formula
const interestFnc = function (value, term, interest){
    let mainInterest2 = value * interest * term
    return mainInterest2
}


// Monthly Repayment Function and Formula
    const monthlyRepaymentFnc = function(value, term, interest){
    const monthlyInterest = interest / 12;        // yearly → monthly
    const totalMonths = term * 12;                // years → months

    const monthlyPayment = 
        (value * monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
        (Math.pow(1 + monthlyInterest, totalMonths) - 1);

    return monthlyPayment;
};

const monthlyPaymentResult = monthlyRepaymentFnc(
    amountValue,
    termValue,
    interestValueC
);


   const selectedRadio = 
   document.querySelector('input[name = "type"]:checked')

   let selectedType = null;

   if(selectedRadio){
    selectedType = selectedRadio.value
   } else{
    isValid = false;
   }

   if(!isValid) return;

//    NOW SWITCH UI
    emptyResult.style.display = "none"
    visibleResult.style.display = "flex"

    // console.log(emptyResult);
    // console.log(visibleResult)

   if(selectedType === "repayment"){
    tResult.textContent = tRepayment;
   } 

   if(selectedType === "interest" ){
     tResult.textContent = interestFnc(amountValue, termValue,
     interestValueC);

   }

// Manipulating Style For Monthly Repayment
mResult.textContent = monthlyPaymentResult.toFixed(3);

}


calculateBtn.addEventListener(
    'click', 
    handleClick
)

// Button Taking the Input Back to default Fnction

const clearFnc = function(){
    mortageAmount.value = "";
    mortageTerm.value = ""
    interestRate.value = ""


    emptyResult.style.display = "flex"
    visibleResult.style.display = "none"
}

clearBtn.addEventListener(
    'click', clearFnc
)