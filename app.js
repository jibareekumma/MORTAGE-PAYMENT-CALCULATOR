

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




calculateBtn.addEventListener(
    'click', cFnc
)

