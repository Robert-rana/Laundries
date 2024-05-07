// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



let startcount = 5000;

let count1 = setInterval(() =>{
    document.querySelector("#h1").innerHTML = ++startcount;
    if (startcount === 6370){
        clearInterval(count1);
    }
});

let startcount2 = 8000;

let count2 = setInterval(() =>{
    document.querySelector("#h2").innerHTML = ++startcount2;
    if (startcount2 === 9716){
        clearInterval(count2);
    }
});

let startcount3 = 4000;

let count3 = setInterval(() =>{
    document.querySelector("#h3").innerHTML = ++startcount3;
    if (startcount3 === 4600){
        clearInterval(count3);
    }
});

let startcount4 = 100;

let count4 = setInterval(() =>{
    document.querySelector("#h4").innerHTML = ++startcount4;
    if (startcount4 === 967){
        clearInterval(count4);
    }
});



$('.slider-owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  dots: true,
  autoplayTimeout: 1000,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});