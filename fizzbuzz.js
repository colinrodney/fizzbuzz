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

// generates reload button upon 'fizzbuzz' button click...
// function createReloadButton() {
//   let reloadButton = document.createElement("button");
//   reloadButton.className = "reload"; // addd class attribute to new element
//   reloadButton.innerText = "reload";
//   document.body.appendChild(reloadButton);
//   console.log(reloadButton); // TESTING PURPOSES ONLY- delete this next time!
//   return reloadButton;
// }

createReloadButton = () => {
  let reloadButton = document.createElement("button");
  reloadButton.className = "reload"; // addd class attribute to new element
  reloadButton.innerText = "reload";
  document.body.appendChild(reloadButton);
  console.log(reloadButton); // TESTING PURPOSES ONLY- delete this next time!
  return reloadButton;
};

// add event listeners
BUTTON.addEventListener("click", fizzbuzz);
BUTTON.addEventListener("click", createReloadButton);
createReloadButton.addEventListener("click", (e) => {
  location.reload();
});

// let reload = createReloadButton(); // manipulate dynmically created button in global space

console.log(x); // testing purposes - delete this next time!!
