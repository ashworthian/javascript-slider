/* jshint esversion: 6 */

//alert("Javascript is working!");

//When I click the next button
//Show the next page
//Each page should show a different background color, circle color and contents

//When I click the previous button
//Show the previous page

//When I click the random button
//Show a random page

//When I press a key
//Show the next or previous page

//Step 1: Add the content for our pages
//To create a list use square brackets
//To create an object use {
//title: "description",
//}
//To create a list of objects use both brackets

const pages = [{
    content: "a London-born web designer and developer",
    background: "linear-gradient(180deg, rgba(244, 59, 9, 1) 0%, rgba(154, 184, 27, 1) 50%, rgba(93, 139, 210, 1) 100%)",
    circle: "#dde714",
  },
  {
    content: "currently available for work",
    background: "linear-gradient(180deg, rgba(221, 231, 20, 1) 0%, rgba(162, 27, 184, 1) 50%, rgba(244, 59, 9, 1) 100%)",
    circle: "#5d8bd2",
  },
  {
    content: "someone who loves to do Creative Writing",
    background: "linear-gradient(180deg, rgba(93, 139, 210, 1) 0%, rgba(212, 137, 11, 1) 50%, rgba(221, 231, 20, 1) 100%)",
    circle: "#f43b09",
  },
  {
    //back ticks allow raw html as a string value
    content: `letting you <a href="cv.pdf">download his CV</a>`,
    background: "linear-gradient(180deg, rgba(154, 184, 27, 1) 0%, rgba(162, 27, 184, 1) 50%, rgba(212, 137, 11, 1) 100%)",
    circle: "#000000",
  }
];

//Step 2: Pick the relevant tags we want to use in HTML and save them in constants

const bodyTag = document.querySelector("body");
const circleTag = document.querySelector(".circle");
const nextTag = document.querySelector(".next");
const previousTag = document.querySelector(".previous");
const randomTag = document.querySelector(".random");
const h2Tag = document.querySelector("h2");

//Step 3: We need to know which page we are on in order to change it - so we need a way of tracking this

let pageNumber = 0;

//Step 4: Create an action that increases the page page number
const next = function() {
  pageNumber = pageNumber + 1;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
};

//Step 5: Create an action that decreases the page number
const previous = function() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
};

//Step 8: Create an action that generates a random number
const random = function() {
  //Creates a random number using Math.random() = this creates a number between 0 and 1 that has a decimal place
  //So we multiply it by the number of pages we have
  //We want a whole number so we wrap Math.random() * pages.length in Math.floor
  pageNumber = Math.floor(Math.random() * pages.length);
};

//Step 10: Update the content on our page with the content from the pages list
const updatePage = function() {
  //Update the content in the bodyTag
  h2Tag.innerHTML = pages[pageNumber].content;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.background = pages[pageNumber].background;
};

// EVENT LISTENERS

//Step 6: Attach an event listener to the next button & call the next function
nextTag.addEventListener("click", function() {
  next();
  //console.log(pageNumber);
  updatePage();
  //We only have four pages so we don't want to be able to go past that limit

  // Pages.length will print out the number of pages in our list. Currently this is four. However we start counting from zero in programming so we minus one
});

//Step 7: Attach an event listener to the previous button & call the previous function
previousTag.addEventListener("click", function() {
  previous();
  //console.log(pageNumber);
  updatePage();
});

//Step 9: Attach an event listener to the random button & call the random function
randomTag.addEventListener("click", function() {
  random();
  //console.log(pageNumber);
  updatePage();
});