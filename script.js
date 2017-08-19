//dataset of quotes and their authors
var quotesPool = [["Less is More", "Ludwig Mies Van Der Rohe"],
              ["God is in the Details", "Ludwig Mies Van Der Rohe"],
              ["Architecture starts when you carefully put two bricks together. There it begins", "Ludwig Mies Van Der Rohe"],
              ["Good building come from good people and all problems are solved by good design", "Stephen Gardiner"],
              ["There are 360 degrees, so why stick to one?", "Zaha Hadid"],
              ["Form ever follows function", "Louis Sullivan"],
              ["Recognizing the need is the primary condition of design", "Charles Eames"],
              ["Architecture is the learned game, correct and magnificent, of forms assembled in the light", "Le Corbusier"],
              ["An idea is salvation by imagination", "Frank Lloyd Wright"],
              ["When I'm working on a problem, I never think about beauty. But when I've finished, if the solution is not beautiful I know it's wrong", "Buckminster Fuller"],
              ["As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown", "Norman Foster"],
              ["To provide meaningful architecture is not to parody history but to articulate it", "Daniel Libeskind"],
              ["To create, one must first question everything", "Eileen Gray"],
              ["One of the great beauties of architecture is that each time, it is like life starting all over again", "Renzo Piano"],
              ["You’ve got to bumble forward into the unknown", "Frank Gehry"]];


var colorsPool = [["#ECF5B7", "#9CB418", "#7D9014"],
                  ["#B7E1CE", "#358260", "#1E4835"],
                  ["#FFAB91", "#FF7043", "#E64A19"],
                  ["#C3C8BC", "#919A84", "#5E6553"],
                  ["#EF9A9A", "#F44336", "#D32F2F"],
                  ["#E6EE9C", "#CDDC39", "#827717"],
                  ["#90CAF9", "#2196F3", "#1565C0"],
                  ["#CE93D8", "#AB47BC", "#6A1B9A"],
                  ["#F8BBD0", "#F06292", "#E91E63"],
                  ["#C5CAE9", "#7986CB", "#3F51B5"],
                  ["#B0BEC5", "#78909C", "#546E7A"],
                  ["#B2EBF2", "#26C6DA", "#0097A7"],
                  ["#BCAAA4", "#795548", "#3E2723"]];
  
//Generate & return a random index value based on total array length
function pickRandomIndex(param1) {
  "use strict";
  return param1[Math.floor(Math.random() * param1.length)];
}

//Pick new random quote & assign quote and author to variables
function pickNewQuote() {
  "use strict";
  // Call the pickRandomIndex function to assign random index value
  var randomQuote = pickRandomIndex(quotesPool);
  //assign index values to variables
  var quote = randomQuote[0];
  var author = randomQuote[1];
  return [quote, author];
}

//OnClick EVENT FUNCTION 1
//Display new quote on page and update social media share links
//on 'Next Quote' button click event.
function showNewQuote() {
  "use strict";
  //assign returned values to new variables
  var current = pickNewQuote();
  var currentQuote = current[0];
  var currentAuthor = current[1];
  //Display new random quote and author on page
  document.getElementById("quote").innerHTML = currentQuote;
  document.getElementById("author").innerHTML = currentAuthor;
  //Update Tweet button - modify tweet link to add current quote and author
  var tweet = document.getElementById("tweet-quote");
  tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + currentQuote + '" -' + currentAuthor;
}

//Pick new random color shceeme & assign to variables
function pickNewColor() {
  "use strict";
  // Call the pickRandomIndex function to assign random index value
  var randomColor = pickRandomIndex(colorsPool);
  //assign index values to variables
  var light = randomColor[0];
  var dark = randomColor[1];
  var darker = randomColor[2];
  return [light, dark, darker];

}

//onClick EVENT FUNCTION 2
//Dipslay new random color sheeme on 'Next Quote' button click event.
function showNewColor() {
  "use strict";
  //assign returned values to new variables
  var currentColor = pickNewColor();
  var colorCheck = currentColor
  var currentLight = currentColor[0];
  var currentDark = currentColor[1];
  var currentDarker = currentColor[2];
  //Assign new random color scheeme
  document.body.style.background = currentLight;
  document.body.style.color = currentDarker;
  document.querySelectorAll(".btn")[0].style.background = currentLight;
  document.querySelectorAll(".btn")[1].style.background = currentLight;
  document.querySelector(".border").style.borderColor = currentDark;
  document.querySelector(".border").style.boxShadow =  "4px 4px 0px 3px " + currentDarker;
  document.querySelectorAll(".border-smaller")[0].style.borderColor = currentDark;
  document.querySelectorAll(".border-smaller")[0].style.boxShadow =  "3px 3px 0px 2px " + currentDarker;
  document.querySelectorAll(".border-smaller")[1].style.borderColor = currentDark;
  document.querySelectorAll(".border-smaller")[1].style.boxShadow =  "3px 3px 0px 2px " + currentDarker;
}

//Show random quote every time window is loaded or refreshed
window.onload = function() {
  showNewQuote();
  showNewColor();
//Show random new color every time window is loaded or refreshed
};