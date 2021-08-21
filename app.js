'use strict';

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