
    console.log('hello');
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);  
            const towns = jsonObject['towns'];
            console.log(towns)
            for (let i = 0; i < towns.length; i++ ) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let img = document.createElement('img');

                h2.textContent = towns[i].name;
                p1.innerHTML =  towns[i].motto;
                p2.innerHTML = towns[i].yearFounded;
                img.setAttribute('src', towns[i].photo);

                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(img);
                document.querySelector('div.cards').appendChild(card);
            }
        }
        );


        function loadEvents(townName){
            // Loads event information for the requested town, used on the preston, fishhaven and sodasprings pages
            const apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
          
            let res = fetch(apiURL)
              .then((response) => response.json())
              .then(data => {
                const thisTown = data.towns.filter(towns => {
                  if (towns.name == townName){
                    events = towns.events;
                    mainDiv = document.querySelector(".events");
                    eventTags = document.getElementsByClassName("event-item");
                    events.map(event => {
                      newEventTag = document.createElement("p");
                      newEventTag.setAttribute("class", "event-item")
                      newEventTag.innerHTML = event;
                      mainDiv.appendChild(newEventTag);
                    })
                  }
                })
                
              });  
          }

