var name = window.prompt("Please enter your name?")
var ageCheck = window.prompt("Please enter your age?");
if (ageCheck < 18) {
    window.alert("You have submited that you are " + ageCheck + " Years old " + name + ".")
    location.replace("age.html");
} else {
    alert("Welcome to the page " + name + "!")
}
var countDownDate = new Date("Jan 1, 2022 0:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

 // Get today's date and time
 var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *     60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
   clearInterval(x);
    document.getElementById("demo").innerHTML = "HAPPY NEW YEAR!!";
  }
}, 1000);
var fortunes = [
    // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
    "You will win a <em>million</em> dollars! Yay!",
    "You will step on a piece of gum.",
    "You will be attacked by a fluffy bunny."
  ];
  
  function tellFortune() {
  
    // generate a random number between 0 and the number of the array items
    var randomNumber = Math.floor(Math.random() * fortunes.length);
  
    // print the random number to the console log to make sure it's working
    console.log("random number: " + randomNumber);
  
    // take the fortune at the random spot in the array and insert it into the "fortune" div
    document.getElementById("fortune").innerHTML = fortunes[randomNumber];
  }
// const arrayCarousel = [
//     "https://www.kuvo.org/wp-content/uploads/2019/07/fireworks-2019-1024x574.png",
//     "https://b386363e680359b5cc19-97ec1140354919029c7985d2568f0e82.ssl.cf1.rackcdn.com/assets/uploads/post/featured_image/33042/optimized_a484692be03b7e1338b1af442c7d3ed5.jpg"
// ]
// counter = 0
// function setImage() {
//     document.getElementById("carousel-image").src = arrayCarousel[counter];
//     // document.getElementById("carousel-image1").src=arrayCarousel[counter];
//     counter = (counter + 1) % arrayCarousel.length;
// }
// setInterval(setImage, 5000);
var Vegas = {
Hotels: "Shangri-La Hotel Sydney, InterContinental Sydney, Four Seasons Hotel Sydney, Sydney Harbor Marriott Hotel at Circular Bay",

Atractions: "Book a lavish cruise, witness fireworks over Sydney Harbor, attend various New Year events",

Airport: "Kingsford Smith International Airport",

IdealFor: "Families"
}

   
  
  function display() {
    var place = document.getElementById("submit");
  
    for (value in Vegas) {
      place.innerHTML = "Hotels: " + Vegas.Hotels + "<br>" +
        "Atractions: " + Vegas.Atractions + "<br>" +
        "Airport: " + Vegas.Airport + "<br>" +
        "Ideal for: " + Vegas.IdealFor + "<br>" +
        "About: " + Vegas.description;
    }
  };
  
  var Miami = {
    WheretoStay: "InterContinental Miami, Miami Marriott Biscayne Bay, JW Marriott Marquis Miami, Clevelander South Beach Hotel and Bar",
    ThingstoDo: "Enjoy a yacht party, witness stunning fireworks over Miami Downtown and South Beach for free, enjoy rooftop parties at Sugar or EAST Miami.",
    NearestAirport: "Fort Lauderdale International Airport"
    // available: true,
    // description: "The 2020 Toyota Camry is a great reliable car, and it's a real pleasure to drive."
  }
  
  function display2() {
    var place = document.getElementById("submit2");
  
    for (value in Miami) {
      place.innerHTML = "Where to stay: " + Miami.WheretoStay + "<br>" +
        "Things to do: " + Miami.ThingstoDo + "<br>" +
        "Near by Airports: " + Miami.NearestAirport + "<br>" +
        "Available: " + Miami.available + "<br>" +
        "About: " + Miami.description;
    }
  };
  
  var Australia = {
    make: "Shangri-La Hotel Sydney, InterContinental Sydney, Four Seasons Hotel Sydney, Sydney Harbor Marriott Hotel at Circular Bay.",
    model: "Book a lavish cruise, witness fireworks over Sydney Harbor, attend various New Year events.",
    year: " Kingsford Smith International Airport",
    available: true,
    description: "The 2020 Toyota Tacoma also received the same reliability rating. The organization says three out of five is about average for reliability."
  }
  
  function display3() {
    var place = document.getElementById("submit3");
  
    for (value in Australia) {
      place.innerHTML = "Where to stay: " + Australia.make + "<br>" +
        "Things to do: " + Australia.model + "<br>" +
        "Near by Airports: " + Australia.year + "<br>" +
        "Available: " + car.available + "<br>" +
        "About: " + car.description;
    }
  };