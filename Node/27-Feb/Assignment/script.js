const increment = document.getElementById("inc");
const decrement = document.getElementById("dec");
const countBox = document.getElementById("count");
const resetButton = document.getElementById("reset");

let count = 0;

increment.addEventListener("click", () =>{
    count++;
    countBox.innerText = count;
});

decrement.addEventListener("click", () =>{
    count--;
    countBox.innerText = count;
});

resetButton.addEventListener("click", () =>{
    count = 0;
    countBox.innerText  = count;
});