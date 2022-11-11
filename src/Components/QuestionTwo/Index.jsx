import React, { useState } from "react";
import "./style.css";
const Index = () => {
  const [birthInfo, setBirthInfo] = useState({
    year: null,
    month: null,
    day: null,
  });
  const [result, setResult] = useState(null);

  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDay = now.getDay() + 6;

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    setBirthInfo((prevState) => ({ ...prevState, [id]: value }));
  };
  const handleSubmit = () => {
    if (!birthInfo.year || !birthInfo.month || !birthInfo.day) return;
    let resultYear = nowYear - birthInfo.year;
    if (birthInfo.month >= nowMonth) {
      resultYear = resultYear - 1;
    }
    let resultMonth = 12 - Math.abs(nowMonth - Number(birthInfo.month));
    if (birthInfo.day >= nowDay) {
      resultMonth = resultMonth - 1;
    }
    const resultDay = Math.abs(nowDay - birthInfo.day);

    setResult({ resultYear, resultMonth, resultDay });
  };

  return (
    <div class="age_container">
      <form
        action="#"
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 class="heading">محاسبه گر سن</h1>
        <label for="year">سال تولد</label>
        <input
          type="number"
          name="year"
          id="year"
          min="1970"
          max="2022"
          required
          autofocus
          onChange={handleChangeInput}
        />

        <label for="month">ماه تولد</label>
        <input
          type="number"
          name="month"
          id="month"
          min="1"
          max="12"
          onChange={handleChangeInput}
          required
        />

        <label for="day">روز تولد</label>
        <input
          type="number"
          name="day"
          id="day"
          min="1"
          max="31"
          onChange={handleChangeInput}
          required
        />

        <button onSubmit={handleSubmit}>محاسبه ی سن شما</button>
      </form>
      {result && (
        <div className="result">
          <p>سن شما برابر است با</p>

          <p>{result.resultYear} سال و</p>

          <p>{result.resultMonth} ماه و</p>

          <p>{result.resultDay} روز</p>
        </div>
      )}
    </div>
  );
};

export default Index;
