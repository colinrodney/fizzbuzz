// app elements
// app container
var app = document.getElementById("app");
// header
var header = document.getElementById("header");
// fizzBuzz Button
var fizzBuzzButton = document.getElementById("fizzBuzzButton");
// append sections of page into app section... NOTE: ELEMENTS NEED TO BE PLACED IN ORDER AS THEY SHOULD APPEAR
app === null || app === void 0 ? void 0 : app.appendChild(header);
app === null || app === void 0 ? void 0 : app.appendChild(fizzBuzzButton);
// testing area
// log response when fizzbuzz button is clicked
fizzBuzzButton.addEventListener("click", function () {
    console.log("fizzbuzz clicked");
});
