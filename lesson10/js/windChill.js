const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5e89291f21949b0bceed3431b020c859";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentWeather = jsObject.list[0].weather[0].main;
    const windSpeed = jsObject.list[0].wind.speed;
    const humidity = jsObject.list[0].main.humidity;
    const temp = jsObject.list[0].main.temp;
    const tags = document.getElementsByClassName("day");
    const labeltags = document.getElementsByClassName("forecast-label");
    document.getElementById("currently").innerHTML = currentWeather;
    document.getElementById("high").textContent = temp;
    document.getElementById("humidity").textContent = humidity+"%";
    document.getElementById("windspeed").textContent = windSpeed;

    data = jsObject.list;
    let day = 0;
    data.map(entry => {
      if (entry.dt_txt.includes("18:00:00")){
        dayIcon = "https://openweathermap.org/img/wn/" + entry.weather[0].icon + "@2x.png";
        tags[day].setAttribute('src', dayIcon);
        labeltags[day].innerHTML = entry.weather[0].main;
        day += 1;
      }
    });

      
    var temperature= temp;
    var wSpeed= windSpeed;
    var windChill= 35.74 + 0.6215 * temperature - 35.75 * wSpeed ** 0.16 + 0.4275 * temperature * wSpeed ** 0.16;

    var windChill= Math.round(windChill);
    document.getElementById("windchill").innerHTML= windChill;
  });




function replaceFiveDayIcons(){

  
}
