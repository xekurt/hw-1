"use strict";

const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1;
const nowDay = now.getDay() + 6;

let yearBirth = 0;
let monthBirth = 0;
let dayBirth = 0;

const yearInput = document.querySelector("#year");
const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");

yearInput.addEventListener("input", (e) => {
  yearBirth = e.target.value;
});

monthInput.addEventListener("input", (e) => {
  monthBirth = e.target.value;
});

dayInput.addEventListener("input", (e) => {
  dayBirth = e.target.value;
});

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  if (!yearBirth || !monthBirth || !dayBirth) return;
  let finalYear = nowYear - yearBirth;
  if (monthBirth >= nowMonth) {
    finalYear = finalYear - 1;
  }
  let finalMonth = 12 - Math.abs(nowMonth - Number(monthBirth));

  if (dayBirth >= nowDay) {
    finalMonth = finalMonth - 1;
  }
  const finalDay = Math.abs(nowDay - dayBirth);

  if (finalYear >= 0 && finalMonth >= 0 && finalDay > 0) {
    const result = document.querySelector(".resultAge");
    result.textContent = `سن شما برابر است با : ${finalYear} سال و : ${finalMonth} ماه و : ${finalDay} روز`;
  } else {
    const result = document.querySelector(".resultAge");
    result.textContent = "خطا ! تاریخ تولد خود را مجددا وارد کنید";
  }
});
