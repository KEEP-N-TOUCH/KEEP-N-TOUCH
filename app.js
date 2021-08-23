'use strict'

let noOfCharac = 100;
let contents = document.querySelectorAll(".eventcontent");
contents.forEach(eventcontent => {
  //If text length is less that noOfCharac... then hide the read more button
  if(eventcontent.textContent.length < noOfCharac){
    eventcontent.nextElementSibling.style.display = "none";
  }
  else{
    let displayText = eventcontent.textContent.slice(0,noOfCharac);
    let moreText = eventcontent.textContent.slice(noOfCharac);
    eventcontent.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn){
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}


let events = [];

function Events(eventName, date, location, image, price, description) {
    this.eventName = eventName;
    this.location = location;
    this.image = image;
    this.price = price;
    this.description = description;
    this.date = date;
    events.push(this);
}

new Events("Music", "Dec, 31/2021", "Amman - Alabdali Mall", "images/img0.png", "20$", "join us with the best musical event in Jordan the Event will host Amer Diab,Tamer ashour and Tamer husney the tickets will be full board (Drinks , Snacks , singers signature )");
new Events("Arts", "Sep, 31/2021", "Amman - Abdoun", "images/img1.png", "30$", "join us with the best ART event in Jordan the Event will host Tariq  , Omar and Qamar the tickets will be full board (Drinks , Snacks , singers signature )");
new Events("Education", "Nov, 20/2021", "Amman - ASAC", "images/img2.png", "5$", "many Groups will present thier own projects Come and join Us to pick wich one was the most reliaple group to work in big companies ");

new Events("Drifting", "May, 31/2022", "Amman-Marka", "images/img3.png", "45$", "the most popular drifters in Jordan will amaze you with their cars and Drifting show, Don't miss this Event cars driver will be : Ahmad and Omar");

new Events("Hourse Racing", "May, 9/2022", "Amman-Sport-City", "images/img4.png", "60$", "horse racing, Equitation and Horsemanship are terms used to indicate the rider’s ability to sit on the horse in a balanced, correct and functional manner and to control the horse effectively.");

new Events("Body building show", "Jun, 3/2022", "Amman-Sport-City", "images/img5.png", "25$", "Natural bodybuilding competition. Categories include; Bodybuilding, Figure, Physique, Classic Physique, Bikini Divas, Bikini Mamas, Angel, Sports Model, Evening Gown, Ink, Body Quest, Kids & Teen Fitness & More! This competition is a PNBA Pro Qualifier. One newly PNBA Pro will win the Title of Mr. or Ms. Florida!");

new Events("Formela one", "Aug, 9/2022", "Dubai", "images/img6.png", "89$", "Are you a big time Crosswords fan and especially the New York Times’s Crossword but can’t find the solution to some of the clues? Then we are here for you!Solving crosswords is such a joy and also quite challenging but now with only one click you can get the answer. We are glad to help you with the solution to the clue you were stuck for so long.");

new Events("Technology", "Comming Soon", "Amman-7th circle", "images/img7.png", "65$", "A leader in the business events industry, PCMA and their annual conference provides insight into unique business strategies and learning experiences. In 2021, they’ll be jumping into the hybrid game with a lot of exciting surprises to come.");

new Events("Kids party", "Comming Soon", "Amman-Sprt-City", "images/img8.png", "75$", "Have you ever built a Lego set? Do you help your parents bake brownies? If so, you know you have to follow the right steps in the proper order from start to finish! When reading, you need to follow a certain order, as well. The events of a story in order from first to last is called the sequence of events. The sequence of events helps readers retell the most important parts of the story in order.");
console.log(events);




function addingElements() {

    let divEl = document.getElementById('content');
    let tableEl = document.getElementById('table');
    divEl.appendChild(tableEl);

    let tbody = document.createElement('tbody');

    tableEl.appendChild(tbody);
    for (let i = 0; i < events.length; i++) {
        let trEl = document.createElement('tr')
        tbody.appendChild(trEl);

        let tdEl = document.createElement('td');
        tdEl.className += "fit-width";

        trEl.appendChild(tdEl);

        let spanEl = document.createElement('span');
        spanEl.className += "title";
        spanEl.innerHTML = `Event Name`;

        let spanDe = document.createElement('span');
        spanDe.className += "details";
        spanDe.innerHTML = `<br/> <br/>${events[i].eventName} <br/> ${events[i].date}`;

        tdEl.appendChild(spanEl);
        tdEl.appendChild(spanDe);

        let tdEl2 = document.createElement('td');

        let spanEl2 = document.createElement('span');
        spanEl2.className += "title";
        spanEl2.innerHTML = `Location`;

        let spanEl3 = document.createElement('span');
        spanEl3.className += "details";
        spanEl3.innerHTML = `<br/> <br/>${events[i].location}`;

        tdEl2.appendChild(spanEl2);
        tdEl2.appendChild(spanEl3);
        trEl.appendChild(tdEl2);

        let tdEl3 = document.createElement('td');
        tdEl3.className += "fit-width img";
        let imgEl = document.createElement('img');
        
        tdEl3.appendChild(imgEl);
        
        tdEl3.appendChild(imgEl);
        trEl.appendChild(tdEl3);
        imgEl.setAttribute('src',events[i].image);

        let tdEl4 = document.createElement('td');
        tdEl4.className += "fit-width event";
        trEl.appendChild(tdEl4);
        let divEl2 = document.createElement('div');
        divEl2.className = "post";
        tdEl4.appendChild(divEl2);

        let h1El = document.createElement('h1');
        h1El.textContent = `Price:${events[i].price}`
        divEl2.appendChild(h1El);

        
        let pEl = document.createElement('p');
        pEl.className += "eventcontent";
        pEl.textContent = `${events[i].description}`;
        divEl2.appendChild(pEl);

        let button = document.createElement('button');
        // button.onclick = function(){myFunction()};
        // let button = document.createElement('button');
        button.onclick = function(){readMore(button)};
        button.innerHTML = "Read More";
        divEl2.appendChild(button);
        
    }
}
addingElements();

// function cardElements (){

//   let container = document.getElementById('card');

//   for(let i = 2; i < events.length; i++){

//     let imgEl = document.createElement('img');
//     imgEl.setAttribute('src',events[i].image);
//     container.appendChild(imgEl);

//     let h1El = document.createElement('h1');
//     h1El.textContent = `${events[i].eventName}`
//     container.appendChild(h1El);

//     let pEl = document.createElement('p');
//     pEl.className += "title";
//     pEl.innerHTML = `${events[i].price} </br> </br> ${events[i].description}`
//     container.appendChild(pEl);

//     let pEl2 = document.createElement('p');
//     pEl2.innerHTML = `</br> </br> ${events[i].date} ${events[i].location} `;
//     container.appendChild(pEl2);

//     let pEl3 = document.createElement('p');

//     let buttonEl = document.createElement('button');
//     buttonEl.textContent = "Buy a Ticket";
//     pEl3.appendChild(buttonEl);
//     container.appendChild(pEl3);

//     let brEl = document.createElement('br');
//     container.appendChild(brEl);
// }
// }
// cardElements ();