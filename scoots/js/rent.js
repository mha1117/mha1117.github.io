// function RENTAL PAGE(){
    console.log('hello');
    const requestURL = 'motors.json';
    
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);  
            const chart = jsonObject['chart'];
            console.log(chart)
            for (let i = 0; i < chart.length; i++ ) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let img = document.createElement('img');

                h2.textContent = chart[i].rentType;
                p1.innerHTML = chart[i].maxPerson;
                p2.innerHTML = chart[i].reservation;
                p3.innerHTML = chart[i].walkin;
                img.setAttribute('src', chart[i].imageurl);

                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(img);
                document.querySelector('div.cards').appendChild(card);
            }
        }
        );
// }