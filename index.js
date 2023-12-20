const btn = document.getElementById("btn");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const phoneNum = document.getElementById("pnum");
const numTwoTwo = document.getElementById("num-2-2");
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.getElementById("back-btn");
const numThreeFive = document.getElementById("num-3-5");
const numOneOne = document.getElementById("num-1-1");
const btnTwo = document.querySelector("#btn-2");
const customBtn = document.getElementById("custom-next");
const confirmBtn = document.getElementById("comfirm-btn");
const finishBtn = document.getElementById("finish-back")
const numThreeThree = document.getElementById("num-3-3");

let containerOne = document.querySelector(".container-1");
let containerTwo = document.querySelector(".container-2");
let containerThree = document.querySelector(".container-3");
let containerFour = document.querySelector(".container-4");

//select the next button in containerOne to go to the next containerTwo and add classlist to containerTwo "num".
btn.addEventListener("click", () => {
    emailInput.setAttribute("required", "");
    if(containerOne.style.display = "none") {
    containerTwo.style.display = "block";
    numTwoTwo.classList.add("num")
    } else {
        containerOne.style.display = "block"
    }
})
//select the next button in containerTwo to display containerThree and add classList to its "num".
nextBtn.addEventListener("click", () =>{
    containerThree.style.display = 'block'; 
    numThreeFive.classList.add('num')
    console.llog("clicked")
})
//select the back button in containerTwo to display containerOne and add classList to the 'num' in containerOne.
function myFunction() {
    backBtn.style.display = 'containerOne'; 
    numOneOne.classList.add("num")
}
//select the back button in containerThree to display containerTwo and add classList to the 'num' in containerTwo.
customBtn.addEventListener("click", () => {
    containerTwo.style.display = 'block';
    numTwoTwo.classList.add("num")
})
//select the next button in containerThree to display containerFour and add classList to the num in containerFour.
btnTwo.addEventListener("click", () =>{
    containerFour.style.display = 'block';
    numThreeFive.classList.add("num");
})
//select the confirm button to end transaction.
//confirmBtn.addEventListener("click", () => {
  // containerOne.style.display = 'block';
//
//select the finish back button to display containerThree and add a claasList of 'num' to the num in containerThree.
finishBtn.addEventListener('click', () => {
    containerThree.style.display = 'block';
    numThreeThree.classList.add("num")
})
