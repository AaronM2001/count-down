var name = window.prompt("Please enter your name?")
var ageCheck = window.prompt("Please enter your age?");
if (ageCheck < 18) {
    window.alert("You have submited that you are " + ageCheck + " Years old " + name + ".")
    location.replace("age.html");
} else {
    alert("Welcome to the page " + name + "!")
}
var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

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
    document.getElementById("demo").innerHTML = "EXPIRED";
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
var cars = {
    make: "Toyota",
    model: "Rav4",
    year: 2020,
    available: true,
    description: "Toyotas initiative to build a one-size-fits-all suv to serve as a four-door family car"
  }
  
  function display() {
    var place = document.getElementById("submit");
  
    for (value in toyota) {
      place.innerHTML = "Make: " + cars.make + "<br>" +
        "Model: " + cars.model + "<br>" +
        "Year: " + cars.year + "<br>" +
        "Available: " + cars.available + "<br>" +
        "About: " + cars.description;
    }
  };
  
  var toyota = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    available: true,
    description: "The 2020 Toyota Camry is a great reliable car, and it's a real pleasure to drive."
  }
  
  function display2() {
    var place = document.getElementById("submit2");
  
    for (value in toyota) {
      place.innerHTML = "Make: " + toyota.make + "<br>" +
        "Model: " + toyota.model + "<br>" +
        "Year: " + toyota.year + "<br>" +
        "Available: " + toyota.available + "<br>" +
        "About: " + toyota.description;
    }
  };
  
  var car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2020,
    available: true,
    description: "The 2020 Toyota Tacoma also received the same reliability rating. The organization says three out of five is about average for reliability."
  }
  
  function display3() {
    var place = document.getElementById("submit3");
  
    for (value in car) {
      place.innerHTML = "Make: " + car.make + "<br>" +
        "Model: " + car.model + "<br>" +
        "Year: " + car.year + "<br>" +
        "Available: " + car.available + "<br>" +
        "About: " + car.description;
    }
  };