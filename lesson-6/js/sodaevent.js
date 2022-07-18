function eventDesc (array) {
    document.querySelector('.event-desc-a').innerHTML = array.events[0];
    document.querySelector('.event-desc-b').innerHTML = array.events[1];
    document.querySelector('.event-desc-c').innerHTML = array.events[2];
}

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then((response)=> response.json())
.then((jsonObject)=>{
    const townData = jsonObject['towns']
    let town2 = townData[0]
    if (town2.name == 'Soda Springs'){
        eventDesc(town2)
    }
});