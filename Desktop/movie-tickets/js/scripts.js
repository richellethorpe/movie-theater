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

function ticketPrice(title){
  let price = 18;
  if (title === "ticketToRide") {
  return price
} else {
  return price - 8
}
};

function discount(time, price) {
  if (time === "1pm-Matinee") {
    return price - 2
  } else {
    return price
  }
};

function checkGoldenDiscount(age, price) {
  if (age === "65+"){
    return price - 2;
  } else {
    return price;
  }
}