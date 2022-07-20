function lastModified() {
    let date = new Date(document.lastModified);  
    dateString = date.toLocaleString('default', {weekday: 'long'}) + ', ' + date.getDate() + ' ' + date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear();
    document.querySelector("#lastModified").innerHTML = "Last Updated: " + dateString;
}