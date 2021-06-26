console.warn("connected");

// DOM ELEMENTS
const BUTTON = document.querySelector("button");
console.log(BUTTON);

// Declare some variables
let multiple_of_three = "fizz";
let multiple_of_five = "buzz";
let multiple_of_three_and_five = "fizzbuzz";
let value;

//main fizzbuzz function
function fizzbuzz() {
  for (let num = 1; num < 101; num++) {
    let div = document.createElement("div");

    if (num % 3 === 0 && num % 5 === 0) {
      div.innerText = multiple_of_three_and_five;
      // console.log(multiple_of_three_and_five);
    } else if (num % 3 === 0) {
      div.innerText = multiple_of_three;
      // console.log(multiple_of_three);
    } else if (num % 5 === 0) {
      div.innerText = multiple_of_five;
      // console.log(multiple_of_five);
    } else {
      div.innerText = num;
      // console.log(num);
    }
    // document.body.appendChild(div);
    document.querySelector("main").appendChild(div);
  }
}

// add event listener
BUTTON.addEventListener("click", fizzbuzz);
BUTTON.addEventListener("click", function () {
  location.reload();
});

// invoke function - DONT FORGET TO TURN THIS BACK ON IF NEEDED!!
// fizzbuzz();

// NOTES
/*
research: 
document.createElement()
document.body.appendChild() */
