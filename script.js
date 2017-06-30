var unit = prompt("for temperature unit being converted, enter C for Celcius, F for fahrenheit");
var temp = prompt("enter temperature to be converted");
var calculatedTemp = convertTemp(unit, temp);

function convertTemp(unit, temp){
  if (unit == "f") {
    calculatedTemp = ((temp-32) * (5/9));
    console.log(calculatedTemp);
  } else if (unit =="c"){
    calculatedTemp = ((temp * (9/5) + 32));
    console.log(calculatedTemp);
  } else {
    console.log("invalid temperature unit")
  }
}
