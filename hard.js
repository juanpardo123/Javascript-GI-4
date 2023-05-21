// HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to ONLY include that className
// *Note: Check Canvas for the starter code needed for this exercise. The starter code will be located in a folder named hard_js. 

let button1 = document.querySelector(".button1");
console.log(button1);
let button2 = document.querySelector(".button2");
let background = document.getElementsByTagName("BODY")[0];

button1.addEventListener("click", function() {
    className('red');
  });

  button2.addEventListener("click", function() {
    className('white')
  });


function className(name){
    background.classList = name
}