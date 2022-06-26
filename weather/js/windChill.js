var temp= 41;
var wSpeed= 5;
var windChill= 35.74 + 0.6215 * temp - 35.75 * wSpeed ** 0.16 + 0.4275 * temp * wSpeed ** 0.16;

var windChill= Math.round(windChill);
document.getElementById("windchill").innerHTML= windChill;