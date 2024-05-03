document.getElementById("add-btn").addEventListener("click", function () {
  const addInputValue = getInputFieldValue("add-input");

  const prevBalance = getTextElementValueById("deposit-amount");

  const prevTotalBalance = getTextElementValueById("total-amount");

  if (!isNaN(addInputValue)) {
    const newBalance = addInputValue + prevBalance;
    setTextElementValueById("deposit-amount", newBalance);

    const newTotalAmount = addInputValue + prevTotalBalance;
    setTextElementValueById("total-amount", newTotalAmount);
  } else {
    alert("Please enter valid Amount");
    return;
  }
});
