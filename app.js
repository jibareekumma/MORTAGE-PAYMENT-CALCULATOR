'use strict';

const app = document.querySelector('.app');

const amountInput = document.getElementById('mortgage-amount');
const termInput = document.getElementById('mortgage-term');
const rateInput = document.getElementById('interest-rate');
const repaymentRadio = document.getElementById('repayment-radio');
const interestRadio = document.getElementById('interest-radio');
const calculateBtn = document.getElementById('calculate-button');
const clearBtn = document.getElementById('clear-all-btn');

const monthlyResultEl = document.getElementById('monthly-result');
const totalResultEl = document.getElementById('total-result');

const currencyFormatter = new Intl.NumberFormat('en-GB', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const setFieldValidity = function (inputEl, isValid) {
  const field = inputEl.closest('.field');
  field.classList.toggle('field--invalid', !isValid);
};

const validateForm = function () {
  let isValid = true;

  if (amountInput.value === '') {
    setFieldValidity(amountInput, false);
    isValid = false;
  } else {
    setFieldValidity(amountInput, true);
  }

  if (termInput.value === '') {
    setFieldValidity(termInput, false);
    isValid = false;
  } else {
    setFieldValidity(termInput, true);
  }

  if (rateInput.value === '') {
    setFieldValidity(rateInput, false);
    isValid = false;
  } else {
    setFieldValidity(rateInput, true);
  }

  const radioGroup = document.querySelector('.radio-group');
  if (repaymentRadio.checked || interestRadio.checked) {
    radioGroup.classList.remove('radio-group--invalid');
  } else {
    radioGroup.classList.add('radio-group--invalid');
    isValid = false;
  }

  return isValid;
};

// Repayment mortgage: principal + total interest over the term
const calculateRepaymentTotal = function (principal, termYears, annualRate) {
  return principal * annualRate * termYears + principal;
};

// Interest-only mortgage: total interest paid over the term
const calculateInterestOnlyTotal = function (principal, termYears, annualRate) {
  return principal * annualRate * termYears;
};

// Standard amortising monthly repayment formula
const calculateMonthlyRepayment = function (principal, termYears, annualRate) {
  const monthlyRate = annualRate / 12;
  const totalMonths = termYears * 12;

  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
};

const handleCalculate = function () {
  if (!validateForm()) return;

  const principal = Number(amountInput.value);
  const termYears = Number(termInput.value);
  const annualRate = Number(rateInput.value) / 100;

  const selectedType = document.querySelector('input[name="type"]:checked').value;

  const totalRepayment =
    selectedType === 'repayment'
      ? calculateRepaymentTotal(principal, termYears, annualRate)
      : calculateInterestOnlyTotal(principal, termYears, annualRate);

  const monthlyRepayment =
    selectedType === 'repayment'
      ? calculateMonthlyRepayment(principal, termYears, annualRate)
      : (principal * annualRate) / 12;

  monthlyResultEl.textContent = currencyFormatter.format(monthlyRepayment);
  totalResultEl.textContent = currencyFormatter.format(totalRepayment);

  app.classList.add('has-results');
};

const handleClear = function () {
  amountInput.value = '';
  termInput.value = '';
  rateInput.value = '';
  repaymentRadio.checked = false;
  interestRadio.checked = false;

  [amountInput, termInput, rateInput].forEach((input) => setFieldValidity(input, true));
  document.querySelector('.radio-group').classList.remove('radio-group--invalid');

  app.classList.remove('has-results');
};

calculateBtn.addEventListener('click', handleCalculate);
clearBtn.addEventListener('click', handleClear);