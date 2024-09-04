import React from 'react'
const Forex = () => {
  return (
      <div className="converter">
          <h2>Currency Converter</h2>
          <label htmlFor="amount">Enter amount in USD:</label>
          <input type="number" id="amount" step="0.01" min={0} />
          <select id="currency">
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
            <option value="JPY">Japanese Yen</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="INR">Indian Rupees</option>
          </select>
          <br></br>
          <br></br>
          <button onclick="convert()">Convert</button>
          <p id="result" />
        <script src="script.js"></script>
        </div>  
  )
}

export default Forex