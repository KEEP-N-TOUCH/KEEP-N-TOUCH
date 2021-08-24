'use strict';
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

new Events("Body building", "Jun, 3/2022", "Amman-Sport-City", "images/img5.png", "25$", "Natural bodybuilding competition. Categories include; Bodybuilding, Figure, Physique, Classic Physique, Bikini Divas, Bikini Mamas, Angel, Sports Model, Evening Gown, Ink, Body Quest, Kids & Teen Fitness & More! This competition is a PNBA Pro Qualifier. One newly PNBA Pro will win the Title of Mr. or Ms. Florida!");

new Events("Formela one", "Aug, 9/2022", "Dubai", "images/img6.png", "89$", "Are you a big time Crosswords fan and especially the New York Times’s Crossword but can’t find the solution to some of the clues? Then we are here for you!Solving crosswords is such a joy and also quite challenging but now with only one click you can get the answer. We are glad to help you with the solution to the clue you were stuck for so long.");



new Events("Technology", "Comming Soon", "Amman-7th circle", "images/img7.png", "65$", "A leader in the business events industry, PCMA and their annual conference provides insight into unique business strategies and learning experiences. In 2021, they’ll be jumping into the hybrid game with a lot of exciting surprises to come.");


new Events("Kids party", "Comming Soon", "Amman-Sprt-City", "images/img8.png", "75$", "Have you ever built a Lego set? Do you help your parents bake brownies? If so, you know you have to follow the right steps in the proper order from start to finish! When reading, you need to follow a certain order, as well. The events of a story in order from first to last is called the sequence of events.");
console.log(events);

function render(){

for (let i = 0; i < events.length; i++) {

    
let contanier = document.getElementById("contanier");
let evEl = document.createElement('div');

evEl.className +="events";
contanier.appendChild(evEl);

let evEl1 = document.createElement('div');
evEl.appendChild(evEl1);
evEl1.className +="event-card";

let hEl = document.createElement('h2');
hEl.className +="name";
hEl.textContent = (`${events[i].eventName}`);
evEl1.appendChild(hEl);

let spanEl = document.createElement('span');
spanEl.className +="price";
spanEl.textContent = (`${events[i].price}`);
evEl1.appendChild(spanEl);

let popEl = document.createElement('a');
evEl1.appendChild(popEl);
popEl.className +="popup-btn";
popEl.textContent = (`quick view`);

let imgEl = document.createElement('img');
evEl1.appendChild(imgEl);
imgEl.className +="event-img";
imgEl.setAttribute('src',events[i].image);

///////////////////////////////////////////////////////////////////////////////////////////
let divx = document.createElement('div');
evEl.appendChild(divx)
divx.className +="popup-view";

let divEl = document.createElement('div');
divx.appendChild(divEl)
divEl.className +="popup-card";

let aEl = document.createElement('a');
divEl.appendChild(aEl)

let iEl = document.createElement('i');
aEl.appendChild(iEl)
iEl.className +="fas fa-times close-btn";
let divEl1 = document.createElement('div');
divEl.appendChild(divEl1);
divEl1.className +="event-img";
let imgEl1 = document.createElement('img');
divEl1.appendChild(imgEl1);
imgEl1.setAttribute('src',events[i].image);


let info = document.createElement('div');
divEl.appendChild(info);
info.className +="info";


let h2 = document.createElement('h2');
info.appendChild(h2);
h2.textContent = (`${events[i].eventName}`)
let p = document.createElement('p');
info.appendChild(p);
p.textContent = (`${events[i].description}`);
let span = document.createElement('span');
info.appendChild(span);
span.className +="price";
span.textContent = (`${events[i].price}`);
let a = document.createElement('a');
info.appendChild(a);
a.className +="add-card-btn";
a.setAttribute('href','#');
a.textContent=('add to cart')
}
}
render();

var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
    
}
popupBtns.forEach((popupBtn,i)  => {
    
    popupBtn.addEventListener("click",() => {
        popup(i);
    });
    });


    //////////////////////////
    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener("click",()=>{
            popupViews.forEach((popupView)=>{
                popupView.classList.remove('active');
            });
        });

    });



