// We're going to store the images for my animals in an object. Objects are a datatype that allow us to map keys to values, like a dictionary. So, using the object below, if someone selects "cat", our app will be set up to use "http://i.imgur.com/vRmHDi3.gif" as the image.

var animals = {
  cat: "http://i.imgur.com/vRmHDi3.gif",
  fox: "http://i.imgur.com/LW6etmT.gif",
  raccoon: "http://i.imgur.com/F7RDkpx.gif"
};

// We're also going to declare a variable called phrases, and this is going to have all the phrases our animal can say, including any added by the user. An array is a data structure that lets us store lists of things. We'll be letting the user add (or 'push') new phrases to this array.
var phrases = ["Hey there!"];

// We want to select a few elements and store those elements in variables (the 'var' keyword declares a variable, the '=' precedes the value you want to assign to that variable - in this case, elements (or, to be more precise, DOM nodes that represent those elements, but don't worry about that distinction right now)).

// We can pass any valid CSS selector into the 'querySelector' method. So, in this first example, I'm selecting the element with the ID of 'petSelect', and storing it in a JavaScript variable called 'petSelect' (to keep things simple and predictable)
var petSelect = document.querySelector("#petSelect");
var petButton = document.querySelector("#petButton");
var animal = document.querySelector("#animal");
var phaseInput = document.querySelector("#phraseInput");
var phraseButton = document.querySelector("#phraseButton");
var phraseList = document.querySelector("#phraseList");
var speak = document.querySelector("#speak");

// Now we're going to add eventListeners to those elements. These 'listen' for events taking place in the browser, like mouse clicks, scroll events, etc. When those events occur, a function will be executed.

petButton.addEventListener("click", function() {
  // The element we've stored in the variable 'petSelect' (above) is a 'select' input (ie, a drop-down menu). It has a value attribute, which we can access with petSelect.value. We can then look up the image for that value from our animals object (defined at the start of this file) using anumals[petSelect.value], and we can set the 'src' attribute of the animal element (the image with the ID #animal) like so:
  animal.setAttribute("src", animals[petSelect.value]);
});

phraseButton.addEventListener("click", function() {
  // The first thing we're going to do when a user clicks on the 'Add Phrase' button is create a new paragraph element
  var newPhrase = document.createElement("p");
  // Then we'll set the text content of that element to be whatever's in the #phraseInput div at the time the button was clicked.
  newPhrase.innerText = phraseInput.value;
  // Then we'll append that new element to the #phraseList element...
  phraseList.appendChild(newPhrase);
  // ...and add the phrase to our JavaScript array of phrases...
  phrases.push(phraseInput.value);
  // ... and empty out the #phraseInput element so the user can enter a new phrase in there.
  phraseInput.value = "";
});

animal.addEventListener("mousedown", function() {
  // This is going to look a little ugly, but it's how we're going to select a random phrase from our phrases array:
  var randomNumber = Math.floor(Math.random() * phrases.length);
  // We look up elements in an array by putting the 'index' of the element we want into square brackets after the array's variable name. 
  var randomPhrase = phrases[randomNumber];
  speak.innerText = '"' + randomPhrase + '"';
});
