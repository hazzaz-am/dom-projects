// console.log("modaraba");

document.getElementById("add-btn").addEventListener("click", function () {
  const addInput = document.getElementById("add-input");
  const addInputValue = parseFloat(addInput.value);

  const prevDepositAmount = document.getElementById("deposit-amount");
  const prevBalance = parseFloat(prevDepositAmount.innerText);

  const prevTotalAmount = document.getElementById("total-amount");
  const prevTotalBalance = parseFloat(prevTotalAmount.innerText);

  
  addInput.value = "";

  if (!isNaN(addInputValue)) {
    const newBalance = addInputValue + prevBalance;
    prevDepositAmount.innerText = newBalance;

    const newTotalAmount = addInputValue + prevTotalBalance;
    prevTotalAmount.innerText = newTotalAmount;
  } else {
    alert("Please enter valid Amount");
    return;
  }

});

// ************** Withdraw money **************

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawValue = parseFloat(withdrawInput.value);

  const prevWithdrawValue = document.getElementById("withdraw-amount");
  const prevWithdrawAmount = parseFloat(prevWithdrawValue.innerText);

  const prevTotalAmount = document.getElementById("total-amount");
  const prevTotalBalance = parseFloat(prevTotalAmount.innerText);

  withdrawInput.value = "";

  if (withdrawValue > prevTotalBalance) {
    alert("Sorry you dont have enough money");
    return;
  }

  if (!isNaN(withdrawValue)) {
    const newWithdrawAmount = withdrawValue + prevWithdrawAmount;
    prevWithdrawValue.innerText = newWithdrawAmount;

    const newTotalAmount = prevTotalBalance - withdrawValue;
    prevTotalAmount.innerText = newTotalAmount;
  } else {
    alert("Please enter valid Amount");
    return;
  }
});
