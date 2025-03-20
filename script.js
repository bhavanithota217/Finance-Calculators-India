// SIP Calculator
function calculateSIP() {
  const totalInvestment = parseFloat(document.getElementById('total-investment').value);
  const returnRate = parseFloat(document.getElementById('return-rate').value);
  const timePeriod = parseFloat(document.getElementById('time-period').value);

  const monthlyRate = returnRate / 12 / 100;
  const numberOfMonths = timePeriod * 12;

  const investedAmount = totalInvestment * numberOfMonths;
  const maturityAmount =
    totalInvestment *
    ((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const estReturns = maturityAmount - investedAmount;

  document.getElementById('invested-amount').textContent = investedAmount.toFixed(2);
  document.getElementById('est-returns').textContent = estReturns.toFixed(2);
  document.getElementById('total-value').textContent = maturityAmount.toFixed(2);
}
