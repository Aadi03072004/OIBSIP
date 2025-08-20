function convertTemperature() {
  const temp = parseFloat(document.getElementById('temperatureInput').value);
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultArea = document.getElementById('resultArea');

  if (isNaN(temp)) {
    resultArea.textContent = "Please enter a valid number.";
    return;
  }

  let result = "";

  switch (unit) {
    case 'celsius':
      result = `${(temp * 9/5 + 32).toFixed(2)} °F (Fahrenheit), ${(temp + 273.15).toFixed(2)} K (Kelvin)`;
      break;
    case 'fahrenheit':
      result = `${((temp - 32) * 5/9).toFixed(2)} °C (Celsius), ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
      break;
    case 'kelvin':
      result = `${(temp - 273.15).toFixed(2)} °C (Celsius), ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
      break;
  }

  resultArea.textContent = `Converted: ${result}`;
}