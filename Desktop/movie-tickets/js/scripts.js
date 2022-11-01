//create user input to select name of movie; new release = $18, oldieButAGoodie = $10
//time of day to see movie; mantinee = $2 discount
//user age 65+ = another $2 discount

//outputs cost of movie

//business logic

function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
}

function getPrice(ticket) {
  let price = 18;
  price = checkReleasePrice(ticket.title, price);
  console.log("after Release discount" + price);
  price = checkMatineeDiscount(ticket.time, price);
  console.log("after Matinee discount" + price);
  price = checkGoldenDiscount(ticket.age, price);
  console.log("after Golden discount" + price);
  return price;
}

function checkReleasePrice(title, price){
  if (title === "ticketToRide") {
  return price
} else {
  return price - 8
}
};

function checkMatineeDiscount(time, price) {
  if (time === "1pm-Matinee") {
    return price - 2
  } else {
    return price
  }
};

function checkGoldenDiscount(age, price) {
  if (age === "senior") {
    return price - 2;
  } else {
    return price;
  }
}

// user interface logic

function handleSubmit(e) {
  e.preventDefault();
  const movieTitle = document.getElementById('movie-title').value;
  const movieTime = document.querySelector('input[name=movieTime]:checked').value;
  const age = document.querySelector('input[name=seniorId]:checked').value;  
  const ticket = new Ticket (movieTitle, movieTime, age);

  let price = getPrice(ticket);

  document.getElementById('ticketType').innerText = age;
  document.getElementById('movie').innerText = movieTitle;
  document.getElementById('time').innerText = movieTime;
  document.getElementById('price').innerText = price + "$";

  document.getElementById('results').removeAttribute('class');
}

window.addEventListener('load', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);  
})