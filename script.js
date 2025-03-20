// script.js
// EMI Calculator
function calculateEMI() {
  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value);
  const loanTenure = parseFloat(document.getElementById('loan-tenure').value);

  const monthlyInterestRate = (interestRate / 12) / 100;
  const numberOfPayments = loanTenure * 12;

  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  document.getElementById('emi-result').textContent = emi.toFixed(2);
}

// SIP Calculator
function calculateSIP() {
  const sipAmount = parseFloat(document.getElementById('sip-amount').value);
  const sipDuration = parseFloat(document.getElementById('sip-duration').value);
  const sipRate = parseFloat(document.getElementById('sip-rate').value);

  const monthlyRate = sipRate / 12 / 100;
  const numberOfMonths = sipDuration * 12;

  const maturityAmount =
    sipAmount *
    ((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate) *
    (1 + monthlyRate);

  document.getElementById('sip-result').textContent = maturityAmount.toFixed(2);
}

// FD Calculator
function calculateFD() {
  const fdAmount = parseFloat(document.getElementById('fd-amount').value);
  const fdRate = parseFloat(document.getElementById('fd-rate').value);
  const fdTenure = parseFloat(document.getElementById('fd-tenure').value);

  const maturityAmount = fdAmount * Math.pow(1 + fdRate / 100, fdTenure);
  document.getElementById('fd-result').textContent = maturityAmount.toFixed(2);
}

// GST Calculator
function calculateGST() {
  const gstAmount = parseFloat(document.getElementById('gst-amount').value);
  const gstRate = parseFloat(document.getElementById('gst-rate').value);

  const gstValue = (gstAmount * gstRate) / 100;
  document.getElementById('gst-result').textContent = gstValue.toFixed(2);
}

// PPF Calculator
function calculatePPF() {
  const ppfAmount = parseFloat(document.getElementById('ppf-amount').value);
  const ppfRate = parseFloat(document.getElementById('ppf-rate').value);
  const ppfTenure = parseFloat(document.getElementById('ppf-tenure').value);

  const maturityAmount =
    ppfAmount *
    ((Math.pow(1 + ppfRate / 100, ppfTenure) - 1) / (ppfRate / 100));
  document.getElementById('ppf-result').textContent = maturityAmount.toFixed(2);
}
