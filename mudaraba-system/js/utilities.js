function getInputFieldValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  inputField.value = "";
  return inputValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
