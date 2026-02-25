

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
const zeroAmount = document.querySelector(".zero-amount")
const zeroTerm = document.querySelector(".zero-term")
const zeroInterest = document.querySelector(".zero-interest")

// collecting Input values

// The Function before Button is clicked
const handleClick = function(e){
   
    // Amount Value INput
    let amountValue = mortageAmount.value
        if(amountValue.trim() === ""){
            errorAmount.style.display = "block"
        } else{
            errorAmount.style.display = "none"

            amountValue = Number(mortageAmount.value)
        }
        if(amountValue <= 0){
            zeroAmount.style.display = "block"
        } else{
            zeroAmount.style.display = "none"
        }
        


        // Term Input
    let termValue = mortageTerm.value
        if(termValue.trim() === ""){
            errorTerm.style.display = "block"
        } else{
            errorTerm.style.display = "none"

            termValue = Number(mortageAmount.value)
        }
        if(termValue === 0){
            zeroTerm.style.display = "block"
        } else{
            zeroTerm.style.display = "none"
        }


        // Interest Input
    const interestValue = Number(interestRate.value)
        if(interestValue === ""){
            errorRate.style.display = "block"
        } else{
            errorRate.style.display = "none"
        }
        if(interestValue <= 0){
            zeroInterest.style.display = "block"
        } else {
            zeroInterest.style.display = "none"
        }
        

    console.log(amountValue, termValue, interestValue)
}



calculateBtn.addEventListener(
    'click', 
    handleClick
)