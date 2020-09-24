var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3))

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var rndm = document.getElementById("randomGradient")
//randomGradient is ID for the button

console.log(css);
console.log(color1);
console.log(color2);

css.value =  "background = linear-gradient(to right," + color1.value +", " + color2.value + " );";


function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css.textContent = body.style.background + ";";
}

function randomGen(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    
    var bgColor = `linear-gradient(to right, rgb(${x},${y},${z}), rgb(${b},${a},${c}))`
    
    body.style.background = bgColor;
    
    css.textContent = body.style.background + ";";
    
    }

    //event listener
rndm.addEventListener("click", randomGen);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);