console.warn("connected");

// 1. INIT DOM ELEMENTS
const FizzBuzzButton = document.getElementById("fizzBuzzButton");
console.log(FizzBuzzButton);

// 2. INIT VARIABLES
let multiple_of_three = "fizz";
let multiple_of_five = "buzz";
let multiple_of_three_and_five = "fizzbuzz";
let value;

/* 3. FUNCTIONS */
// A. FIZZBUZZ
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
    // show results of loop in main-content section
    document.querySelector("main").appendChild(div);
  }
}

/*B. CREATE RELOAD BUTTON: 
> creates reload button + initializes .reload class
> assigns text to button
> disables fizzbuzz button after creating 'reload' button
> returns dynamically created button from function +
adds it to body of document.
*/
createReloadButton = () => {
  const reloadButton = document.createElement("button");
  console.log(reloadButton); // <-- CHK FOR EXISTENCE OF NODE
  reloadButton.className = "reload"; // addd class attribute to new element
  reloadButton.innerText = "reset";
  reloadButton.addEventListener("click", (e) => {
    location.reload();
  });

  // disable'fizzbuzz' button after reload button generated!
  FizzBuzzButton.disabled = true;

  // attach created button to body of document
  return document.body.appendChild(reloadButton);
};

// END FUNCTIONS

/*
4. EVENT LISTENERS:

NOTE: event listener for 'reload' button is attached
when button is created. Clicking 'fizzbuzz' button:

1. Triggers fizzbuzz() [runs program]
2. Dynamically creates 'reload' button

*/
FizzBuzzButton.addEventListener("click", fizzbuzz);
FizzBuzzButton.addEventListener("click", createReloadButton);
