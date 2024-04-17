import logo from "./asset/logo.jpg";
import "./App.css";
import currencyData from "./data.json";
import { useState } from "react";

function App() {
  const [firstCurrency, set1stCurrency] = useState(0);
  const [secondCurrency, set2ndCurrency] = useState(1);
  const [quantity, setQuantity] = useState(0);

  const validate = (value) => {
    if (value < 0) setQuantity("");
    setQuantity(value);
  };

  return (
    <div className="wrapper">
      <img className="logo" src={logo} alt="" />
      <form className="formWrapper">
        <div>
          <label>Base currency</label>
          <select
            className="selectbox input"
            value={firstCurrency}
            onChange={(e) => {
              set1stCurrency(e.target.value);
              setQuantity(0);
            }}
          >
            {currencyData.map((value, index) => (
              <option value={index}>{value.currency}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Swapped currency</label>
          <select
            className="selectbox input"
            value={secondCurrency}
            onChange={(e) => {
              set2ndCurrency(e.target.value);
              setQuantity(0);
            }}
          >
            {currencyData.map((value, index) => (
              <option value={index}>{value.currency}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Swapped quantity</label>
          <input
            className="input input-field"
            type="number"
            value={quantity}
            onChange={(e) => validate(e.target.value)}
          />
        </div>
      </form>
      {quantity ? (
        <p>
          {quantity} {currencyData[firstCurrency].currency} is equal to{" "}
          {(
            (quantity * currencyData[firstCurrency].price) /
            currencyData[secondCurrency].price
          ).toFixed(3)}{" "}
          {currencyData[secondCurrency].currency}
        </p>
      ) : (
        <p>&nbsp;</p>
      )}
    </div>
  );
}

export default App;
