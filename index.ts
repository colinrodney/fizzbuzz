// app elements

// app container
const app = document.getElementById("app");

// header
const header = document.getElementById("header");

// fizzBuzz Button
const fizzBuzzButton = document.getElementById("fizzBuzzButton");


// append sections of page into app section... NOTE: ELEMENTS NEED TO BE PLACED IN ORDER AS THEY SHOULD APPEAR

app?.appendChild(header);
app?.appendChild(fizzBuzzButton);

// testing area

// log response when fizzbuzz button is clicked
fizzBuzzButton.addEventListener("click", function(){
  console.log("fizzbuzz clicked");
})



