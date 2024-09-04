function convert() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var url = 'https://api.exchangerate-api.com/v4/latest/USD';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var rate = data.rates[currency];
        var convertedAmount = amount * rate;
        document.getElementById('result').innerHTML = amount + ' USD = ' + convertedAmount.toFixed(2) + ' ' + currency;
      })
      .catch(error => console.log('Error:', error));
  }