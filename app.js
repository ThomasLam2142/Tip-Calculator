const calculateBtn = document.querySelector(".calculateButton");
let costTotal = document.querySelector(".costElement");


calculateBtn.addEventListener("click", ()=>{
    let inputAmount = document.querySelector(".preAmount").value;
    let tipPercentage = document.querySelector(".tipPercentage").value;
    let total = 0;

    tipPercentage = (tipPercentage / 100)+1;
    console.log(tipPercentage);
    total = (inputAmount * tipPercentage);
    console.log(total);
    
    

    costTotal.textContent = total.toFixed(2);

    
})

