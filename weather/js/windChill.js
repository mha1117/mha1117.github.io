function calcWindChill(t, s){
    return 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
}

function showWindChill(){
    let speed = document.getElementById("windspeed").innerHTML;
    let temp  = document.getElementById("high").innerHTML;
    if (temp >= 50 && speed >= 3){
        document.getElementById("windchill").innerHTML = Math.round(calcWindChill(temp, speed));
    } else {
        document.querySelector('windchill').innerHTML = "N/A";
    }
}