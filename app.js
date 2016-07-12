/******************************************************
*                 JavaScript Scope                    *
******************************************************/
myFunction();
document.getElementById("scope").innerHTML = "The type of carName is " + typeof carName;

function myFunction() {
  var carName = "Volvo";
}

/******************************************************
*               Global JavaScript Variables           *
******************************************************/
var carNameG = "Ford";
myFunctionG();

function myFunctionG() {
  document.getElementById("global").innerHTML = "I can display " + carNameG;
}

/******************************************************
*                 Automatically Global                *
******************************************************/
myFunctionA();

document.getElementById("auto").innerHTML = "I can display " + carNameA;

function myFunctionA(){
  carNameA = "Tesla";
}
