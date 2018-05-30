var convert = function(gallons) {
  return gallons * 3.78541;
}

var gallons = parseInt(prompt("Enter gallons:"));
alert(convert(gallons) + " liters.");



var convert2 = function(tablespoons) {
  return tablespoons * 3;
}

var tablespoons = parseInt(prompt("Enter tablespoons:"));
alert(convert2(tablespoons) + " teaspoons.");
