

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


// Formula for repaymnent Only

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

    console.log(amountValue, termValue, interestValue)
    console.log(termValueC, interestValueC)


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

// console.log(repaymentFnc(
//     amountValue, termValue, interestValueC
// ))

const interestFnc = function (value, term, interest){
    let mainInterest2 = value * interest * term
    return mainInterest2
}

// console.log(interestFnc(amountValue, termValue, interestValueC))


// Monthly Repayment Function
    // const monthlyRepaymentFnc = function(value, interest, termC){
    //     let mPayment = (value * interest) / termC
    //     return mPayment
    // }
    // console.log(monthlyRepaymentFnc(
    //     amountValue, interestValueC, termValueC
    // ), "yeah5555")

    const monthlyRepaymentFnc = function (value, interest, termC){
        const monthlyRate = interest / 12;
        const numPayments = termC * 12;

        const mPayment = value * (monthlyRate * Math.pow(
            1 + monthlyRate, numPayments
        )) / (Math.pow(1 + monthlyRate, numPayments) - 1);

        return mPayment
    }

    console.log(monthlyRepaymentFnc(
        amountValue, interestValueC, termValueC
    ), "yeah555")


   const selectedRadio = 
   document.querySelector('input[name = "type"]:checked')

   let selectedType = null;

   if(selectedRadio){
    selectedType = selectedRadio.value
   } else{
    isValid = false;
   }
   console.log(selectedType)

   if(!isValid) return;

   if(selectedType === "repayment"){
    tResult.textContent = repaymentFnc(amountValue, termValue,
     interestValueC);
//    console.log(repaymentFnc(amountValue, termValue,
//      interestValueC), "Yahhh1" )
   } 

   if(selectedType === "interest" ){
     tResult.textContent = repaymentFnc(amountValue, termValue,
     interestValueC);
    console.log(interestFnc(amountValue, termValue,
         interestValueC), "yeah222")
   }


}


calculateBtn.addEventListener(
    'click', 
    handleClick
)