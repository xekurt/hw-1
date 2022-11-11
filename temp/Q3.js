let state = "usDollar";

const radioButton = document.querySelectorAll(".radio");

radioButton.forEach(item=>item.addEventListener("click",(e)=>{
    const {id} = e.target;
    if (id==="currency-choose-us") {
        state = "usDollar"
    }
    
    else if (id==="currency-choose-eur") {
        state = "euro";
    }
    
    else if (id==="currency-choose-aus") {
        state = "ausDollar"
    }
    
    else if (id==="currency-choose-can") {
        state = "canadaDollar";
    }
    
    else {
        state = "pond";
    }
}))

const currencyInput = document.querySelector("#amount");
let input = 1;

currencyInput.addEventListener("change",(e)=>{
    input = e.target.value;
    
});


const calculationButton = document.querySelector(".calculate-btn");

calculationButton.addEventListener("click",(e)=>{
    
    if (state==="usDollar") {
        exchangeResult.textContent = `دلار آمریکا = ${(input*1)} | یورو = ${(input*1.41544)} | دلار استرالیا = ${(input*0.88297)} | دلار کانادا = ${(input*1.01941)} | پوند انگلیس = ${(input*1.13262)}`;
    } 
    else if (state==="euro"){
        exchangeResult.textContent = `دلار آمریکا = ${(input*0.70641)} | یورو = ${(input*1)} | دلار استرالیا = ${(input*0.62382)} | دلار کانادا = ${(input*0.72037)} | پوند انگلیس = ${(input*1.43448)}`;
    }
    else if (state==="ausDollar"){
        exchangeResult.textContent = `دلار آمریکا = ${(input*1.13262)} | یورو = ${(input*1.60329)} | دلار استرالیا = ${(input*1)} | دلار کانادا = ${(input*1.15498)} | پوند انگلیس = ${(input*2.29964)}`;
    }
    else if (state==="canadaDollar"){
        exchangeResult.textContent = `دلار آمریکا = ${(input*0.98054)} | یورو = ${(input*1.38814)} | دلار استرالیا = ${(input*0.86613)} | دلار کانادا = ${(input*1)} | پوند انگلیس = ${(input*1.99169)}`;
    }
    else {
        exchangeResult.textContent = `دلار آمریکا = ${(input*0.49246)} | یورو = ${(input*0.69714)} | دلار استرالیا = ${(input*0.43497)} | دلار کانادا = ${(input*0.50221)} | پوند انگلیس = ${(input*1)}`;
    }
});


const exchangeResult = document.querySelector(".exchange-result");
exchangeResult.innerHTML="";
