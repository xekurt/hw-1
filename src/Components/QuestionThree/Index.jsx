import React, { useState } from "react";
import "./style.css";
const Index = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState({
    usd: 0,
    eur: 0,
    aus: 0,
    can: 0,
    pnd: 0,
  });
  const handleSelectRadio = (e) => {
    const { id } = e.target;
    setSelectedCurrency(id);
  };
  const handleAmount = (e) => {
    const { value } = e.target;
    setAmount(value);
  };

  const handleSubmit = () => {
    if (!amount || amount === 0) return;
    if (selectedCurrency === "usd") {
      setResult((prevState) => ({
        ...prevState,
        usd: amount * 1,
        eur: amount * 1.41544,
        aus: amount * 0.88297,
        can: amount * 1.01941,
        pnd: amount * 1.13262,
      }));
    }
    if (selectedCurrency === "eur") {
      setResult((prevState) => ({
        ...prevState,
        usd: amount * 0.70641,
        eur: amount * 1,
        aus: amount * 0.62382,
        can: amount * 0.72037,
        pnd: amount * 0.43448,
      }));
    }
    if (selectedCurrency === "aus") {
      setResult((prevState) => ({
        ...prevState,
        usd: amount * 1.13262,
        eur: amount * 1.60329,
        aus: amount * 1,
        can: amount * 1.15498,
        pnd: amount * 2.29964,
      }));
    }
    if (selectedCurrency === "can") {
      setResult((prevState) => ({
        ...prevState,
        usd: amount * 0.98054,
        eur: amount * 1.38814,
        aus: amount * 0.86613,
        can: amount * 1,
        pnd: amount * 1.99169,
      }));
    }
    if (selectedCurrency === "pnd") {
      setResult((prevState) => ({
        ...prevState,
        usd: amount * 0.49246,
        eur: amount * 0.69714,
        aus: amount * 0.43497,
        can: amount * 0.50221,
        pnd: amount * 1,
      }));
    }
  };

  return (
    <div class="exchange__container">
      <h1 class="header">تبدیل ارز</h1>
      <div class="exchange-form">
        <div class="currency-choose-container">
          <div style={{ display: "flex", width: "100%" }}>
            <label for="usd">دلار آمریکا</label>
            <input
              class="radio"
              type="radio"
              name="currency-choose"
              id="usd"
              checked={selectedCurrency === "usd"}
              onChange={handleSelectRadio}
            />

            <label for="eur">یورو</label>
            <input
              class="radio"
              type="radio"
              name="currency-choose"
              id="eur"
              checked={selectedCurrency === "eur"}
              onChange={handleSelectRadio}
            />

            <label for="aus">دلار استرالیا</label>
            <input
              class="radio"
              type="radio"
              name="currency-choose"
              id="aus"
              checked={selectedCurrency === "aus"}
              onChange={handleSelectRadio}
            />

            <label for="can">دلار کانادا</label>
            <input
              class="radio"
              type="radio"
              name="currency-choose"
              id="can"
              checked={selectedCurrency === "can"}
              onChange={handleSelectRadio}
            />

            <label for="pnd">پوند انگلیس</label>
            <input
              class="radio"
              type="radio"
              name="currency-choose"
              id="pnd"
              checked={selectedCurrency === "pnd"}
              onChange={handleSelectRadio}
            />
          </div>
          <div class="exchange-amount">
            <label for="amount" id="amount-label">
              مقدار ارز موردنظر
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="0"
              required
              autofocus
              onChange={handleAmount}
            />
          </div>

          <button class="calculate-btn" onClick={handleSubmit}>
            محاسبه
          </button>
        </div>

        <div className="result">
          <p>
            دلار آمریکا = <span>{result.usd}</span>
          </p>

          <p>
            یورو = <span>{result.eur}</span>
          </p>
          <p>
            دلار استرالیا = <span>{result.aus}</span>
          </p>
          <p>
            دلار کانادا = <span>{result.can}</span>
          </p>
          <p>
            پوند انگلیس <span>{result.pnd}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
