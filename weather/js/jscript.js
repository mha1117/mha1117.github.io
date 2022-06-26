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

function displayBanner() {
    dayOfWeek = new Date().getDay();
    if (dayOfWeek == 6) {
        document.querySelector('#banner').style.display = "block";
    }
    console.log(dayOfWeek);
}

function activeLink() {
    let page = 0;
    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].href === document.URL) {
            page = i;
        }
    }
document.links[page].className = 'activeLink';
}