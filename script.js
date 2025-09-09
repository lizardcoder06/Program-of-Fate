const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const minNum = 0;
let maxNum;

let counter = 0;

submitBtn.onclick = function () {
  maxNum = document.getElementById("numOfMax").value;
  document.getElementById("numOfMax").style.border = "";
  document.getElementById("alertMax").textContent = "";
  maxNum = Number(maxNum);
  if (maxNum > 0) {
    counter = Math.floor(Math.random() * maxNum + 1);
    console.log(counter);

    document.getElementById("mainNumberDisplay").textContent = counter;
  } else {
    console.log("must be above");
    document.getElementById("mainNumberDisplay").textContent = 0;
    document.getElementById("numOfMax").value = 0;
    document.getElementById("numOfMax").style.border = "2px solid red";
    document.getElementById("alertMax").textContent =
      "Please enter a valid value.";
  }
};

resetBtn.onclick = function () {
  counter = 0;
  console.log("reset");
  document.getElementById("numOfMax").style.border = "";
  document.getElementById("alertMax").textContent = "";
  document.getElementById("mainNumberDisplay").textContent = counter;
  document.getElementById("numOfMax").value = 0;
};
