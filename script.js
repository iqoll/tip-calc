const calculateBtn = document.getElementById('calculateBtn')
const totalAmount = document.getElementById('totalAmount')
const tipAmount = document.getElementById('tipAmount')

const calculateTip = () => {
  const bill = parseFloat(document.getElementById('bill').value);
  const tip = parseFloat(document.getElementById('tipPercentage').value)

  if(isNaN(bill) || isNaN(tip)) {
    alert('Please enter a valid numbers for bill amount and tip percentage')
    return
  }
  const tipAmounts = bill * (tip / 100)
  const totalAmounts = bill + tipAmounts

  totalAmount.textContent = `$${totalAmounts.toFixed(2)}` 
  tipAmount.textContent = `$${tipAmounts.toFixed(2)}` 
}

calculateBtn.addEventListener('click', calculateTip)


// let totalAmount;

// const bills = 55
// const tips = 15

// const calculateTip = (bill, tip) => {
//   return totalAmount = bill + ((bill * tip) / 100)
// }

// console.log(calculateTip(bills, tip))


