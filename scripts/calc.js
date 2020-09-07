Calculator = function() {
    this.value = 0;
}
Calculator.prototype.add = function(num){
    if(typeof(num) == "number"){
        this.value += num;
    } else {
        alert("Error!")
    }
}



/*
const addition = (a, b) => {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else {
    alert("Error!");
  }
};
*/