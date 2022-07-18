function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function toggleButton() {
    currentHTML = document.querySelector('#menuButton').innerHTML;
    console.log(currentHTML);
    if (currentHTML.includes("☰ Menu")) {
        document.querySelector('#menuButton a').innerHTML = "&#9730; Menu";
    } else {
        document.querySelector('#menuButton a').innerHTML = "&#127746; Menu";
    }
}
/*for Banner*/
let Day = new Date().getDay();

function weekDay (Day) {
    if (Day == 6){
        document.querySelector('#banner').style.display = "block";
    }
    
}

weekDay(Day);