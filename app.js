'use strict'

let noOfCharac = 100;
let contents = document.querySelectorAll(".eventcontent");
contents.forEach(eventcontent => {
  //If text length is less that noOfCharac... then hide the read more button
  if (eventcontent.textContent.length < noOfCharac) {
    eventcontent.nextElementSibling.style.display = "none";
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

new Events("music", "Aug, 22/2021", "Amman- Alabdali Mall", "main.png", "20$", "Natural bodybuilding competition. Categories include; Bodybuilding, Figure, Physique, Classic Physique, Bikini Divas, Bikini Mamas, Angel, Sports Model, Evening Gown, Ink, Body Quest, Kids & Teen Fitness & More! This competition is a PNBA Pro Qualifier. One newly PNBA Pro will win the Title of Mr. or Ms. Florida!");

console.log(events);




function addingelements() {
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
    imgEl.setAttribute('src', events[i].image);

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
    // button.onclick = function () { readMore() };
    button.innerHTML = "Read More";
    divEl2.appendChild(button);

  }
}
addingelements();

