console.warn("connected");

// 1. INIT DOM ELEMENTS
const FizzbuzzButton = document.getElementById("fizzbuzzButton");
console.log(FizzbuzzButton);

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
    // document.body.appendChild(div);
    document.querySelector("main").appendChild(div);
  }
}

/*B. CREATE RELOAD BUTTON: 
> creates reload button + initializes .reload class
> assigns text to button
> adds button to body via appendChild() method
> returns dynamically created button from function 
such that it can be used in global scope (see event listener section)
*/
createReloadButton = () => {
  const reloadButton = document.createElement("button");
  //console.log(reloadButton); <-- CHK FOR EXISTENCE OF NODE
  reloadButton.className = "reload"; // addd class attribute to new element
  reloadButton.innerText = "reload";
  reloadButton.addEventListener("click", (e) => {
    location.reload();
  });
  // return document.body.appendChild(reloadButton);
  return reloadButton;
};

// append reload button to body of document in global scope??
document.body.appendChild(createReloadButton());

// END FUNCTIONS

/*
4. EVENT LISTENERS:
> reload button event listener @ createReloadButton() function
*/
FizzbuzzButton.addEventListener("click", fizzbuzz);
// createReloadButton.addEventListener("click", createReloadButton);
