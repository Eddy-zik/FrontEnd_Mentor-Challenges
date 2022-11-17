
// const equal1 =  document.getElementById("equal");
// equal1.style.backgroundColor = "red";
// equal1.style.'height = 129px;"

const clearE1 = document.getElementById("clear");
clearE1.style.backgroundColor = "orange";

const equalE1 = document.getElementById("equal");
equalE1.setAttribute ("style", "heigh:100px; background-color: red;" )

//clear function
//navigation function
//equal function
//mul function
//add function
//subt function
//div function
//display function

//Grab the input element 
const displayInputE1 = document.
getElementById("display")

//DisplayValue in the Calculator Screen
function displayChar(clickVal){
    document.getElementById("display").
    value += clickVal
}

// clear the display screen 
function clearScreen() {
    displayInputE1.value = "";
}

function result() {
    displayInputE1.value = eval(displayInputE1.value);
}
 
// function navCursor(){
//     moveTo.value = 
// }

const boxE1 = document.getElementById("box");
function displayBox(){
    boxE1.style.display = "block";
}

function closeBox() {
    boxE1.style.display = "none";
}

const img