document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawValue = getInputFieldValue("withdraw-input");

  const prevWithdrawAmount = getTextElementValueById("withdraw-amount");

  const prevTotalBalance = getTextElementValueById("total-amount");

  if (withdrawValue > prevTotalBalance) {
    alert("Sorry you dont have enough money");
    return;
  }

  if (!isNaN(withdrawValue)) {
    const newWithdrawAmount = withdrawValue + prevWithdrawAmount;
    setTextElementValueById("withdraw-amount", newWithdrawAmount);

    const newTotalAmount = prevTotalBalance - withdrawValue;
    setTextElementValueById("total-amount", newTotalAmount);
  } else {
    alert("Please enter valid Amount");
    return;
  }
});
