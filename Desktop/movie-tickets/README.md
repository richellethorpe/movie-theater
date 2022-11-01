# Movie Tickets

#### By Dominik Magic, Richelle Thorpe, Kirsten Opstad

#### A webpage for selecting movie tickets

## Technologies Used

* HTML 
* CSS 
* Bootstrap
* JavaScript

## Description

### Objectives

As input the web application takes in:
* Name of a movie, the time of day that they would like to see the movie and their age
And returns:
* How much their movie ticket will cost, based on those three factors:
  * Non-"first-release" movie price
  * Matinees movie price
  * Senior ticket movie price

Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Tests
```
Describe: Ticket()

Test: "It should return ticket object with the keys: movie title, movie time, patron age"
Code: let newTicket = new Ticket("Ticket to Ride", "11pm", "65+")
Expected Output: Ticket {title: "Ticket to Ride", time: "11pm", age: "65+"}

//create user input to select name of movie; new release = $18, oldieButAGoodie = $10
//time of day to see movie; mantinee = $2 discount
//user age 65+ = another $2 discount

Describe: ticketPrice()
Test:"If user selects a new release movie, it will return a cost of $18."
Code:ticketPrice("Ticket to Ride")
Expected Output: $18

Test:"If user selects a vintage movie, it will return a cost of $10."
Code:ticketPrice("The Net")
Expected Output: $10

Test:"If user selects a matinee movie, it will return a cost of $8."
Code:ticketPrice("6pm")
Expected Output: $8

Describe: goldenDiscount

Test: "If user is over age 65, it will return a discount of $2."
Code: checkGoldenDiscount("65+", 18)
Expected Output: 16

Describe:  getPrice()

Test: "It should return discounted price if vintage, a matine, or golden ticket"
Code: 
let newTicket = new Ticket("ticketToRide", "1pm-Matinee", "65+")
getPrice(newTicket);
Expected Output: 14

```
## Known Bugs

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

[Choose License](https://choosealicense.com/)

Copyright (c) 2022 Dominik Magic, Richelle Thorpe, Kirsten Opstad