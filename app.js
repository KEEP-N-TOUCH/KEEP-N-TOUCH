'use strict';
let noOfCharac = 100;
let contents = document.querySelectorAll('.eventcontent');
contents.forEach(eventcontent => {
  //If text length is less that noOfCharac... then hide the read more button
  if (eventcontent.textContent.length < noOfCharac) {
    eventcontent.nextElementSibling.style.display = "none";
  if(eventcontent.textContent.length < noOfCharac){
    eventcontent.nextElementSibling.style.display = 'none';
  }
  else {
    let displayText = eventcontent.textContent.slice(0, noOfCharac);
    let moreText = eventcontent.textContent.slice(noOfCharac);
    eventcontent.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}


// let tEl = document.getElementsById("content");
let taEl = document.getElementById("table");
let tbodyEl = document.getElementById("tbody");
let tdEl = document.getElementById("td");



let allEvents = [{
  id: 0,
  img: `./images/img0.png`,
  eventName: " Music ",
  price: "35$",
  location: "Amman-Abdoun",
  date: "31/12/2021",
  description: " join us with the best musical event in Jordan the Event will host Amer Diab,Tamer ashour and Tamer husney the tickets will be full board (Drinks , Snacks , singers signature )",
}, {
  id: 1,
  img: `images/img1.png`,
  eventName: " Arts",
  price: "99$",
  location: "Amman-LTUC",
  date: "27/9/2021",
  description: "join us with the best ART event in Jordan the Event will host Tariq  , Omar and Qamar the tickets will be full board (Drinks , Snacks , singers signature )",
}, {
  id: 2,
  img: `images/img2.png`,
  eventName: "Education",
  price: "5$",
  location: "ASAC",
  date: "26/8/2021",
  description: "many Groups will present thier own projects Come and join Us to pick wich one was the most reliaple group to work in big companies ",
}, {
  id: 3,
  img: `images/img3.png`,
  eventName: "Drifting",
  price: "45$",
  location: "Amman-Marka",
  date: "31/5/2021",
  description: "the most popular drifters in Jordan will amaze you with their cars and Drifting show, Don't miss this Event cars driver will be : Ahmad and Omar ",
}, {
  id: 4,
  img: `images/img4.png`,
  eventName: "Hourse Racing ",
  price: "60$",
  location: "Amman-Sport-City",
  date: "5/9/2022",
  description: "horse racing, Equitation and Horsemanship are terms used to indicate the rider’s ability to sit on the horse in a balanced, correct and functional manner and to control the horse effectively.",
}, {
  id: 5,
  img: `images/img5.png`,
  eventName: "Body building show ",
  price: "25$",
  location: "Amman-Sport-City",
  date: "6/3/2022",
  description: "Natural bodybuilding competition. Categories include; Bodybuilding, Figure, Physique, Classic Physique, Bikini Divas, Bikini Mamas, Angel, Sports Model, Evening Gown, Ink, Body Quest, Kids & Teen Fitness & More! This competition is a PNBA Pro Qualifier. One newly PNBA Pro will win the Title of Mr. or Ms. Florida!",
}, {
  id: 6,
  img: "images/img6.png",
  eventName: "Formela one ",
  price: "89$",
  location: "Dubai",
  date: "25/8/2022",
  description: "Are you a big time Crosswords fan and especially the New York Times’s Crossword but can’t find the solution to some of the clues? Then we are here for you!Solving crosswords is such a joy and also quite challenging but now with only one click you can get the answer. We are glad to help you with the solution to the clue you were stuck for so long.",
}, {
  id: 7,
  img: `images/img7.png`,
  eventName: "technology",
  price: "65$",
  location: "Amman-7th circle",
  date: "50%",
  description: "A leader in the business events industry, PCMA and their annual conference provides insight into unique business strategies and learning experiences. In 2021, they’ll be jumping into the hybrid game with a lot of exciting surprises to come.",
}, {



  id: 8,
  img: `images/img8.png`,
  eventName: "Kids party ",
  price: "75$",
  location: "Amman-Sprt-City",
  date: "6/8/2022",
  description: "Have you ever built a Lego set? Do you help your parents bake brownies? If so, you know you have to follow the right steps in the proper order from start to finish! When reading, you need to follow a certain order, as well. The events of a story in order from first to last is called the sequence of events. The sequence of events helps readers retell the most important parts of the story in order.",
}
];



function threeEvents() {
  for (let i = 0; i <= 2; i++) {
    let trEl = document.createElement("tr")
    let name = document.createElement("td");
    let imgs = document.createElement("td");
    let price = document.createElement("td");
    let imgEl = document.createElement("img");
    let location = document.createElement("td");
    let date = document.createElement("td");
    let description = document.createElement("td");
    let h3 = document.createElement("h3");

    trEl.appendChild(h3);
    tbodyEl.appendChild(trEl);
    name.textContent = ((`${allEvents[i].eventName}`));
    h3.textContent = ("Event Name")
    trEl.appendChild((name) );
    price.textContent = ((allEvents[i].price));
    trEl.appendChild(price);
   
    location.textContent = ((allEvents[i].location));
    trEl.appendChild(location);
    
    date.textContent = (allEvents[i].date);
    trEl.appendChild(date);
    
    imgs.appendChild(imgEl);
    trEl.appendChild(imgs);
    imgEl.setAttribute('src',allEvents[i].img) 

    description.textContent = (allEvents[i].description);
    trEl.appendChild(description);
  }

}
threeEvents();


console.log(allEvents[0].img);


function readMore(btn){
  let post = btn.parentElement;
  post.querySelector('.dots').classList.toggle('hide');
  post.querySelector('.more').classList.toggle('hide');
  btn.textContent == 'Read More' ? btn.textContent = 'Read Less' : btn.textContent = 'Read More';
}



///////////////local storage//////////////////

let events = [];

function Events(EventName, Price ){

this.EventName = EventName;
this.Price = Price;

events.push(this);
}



