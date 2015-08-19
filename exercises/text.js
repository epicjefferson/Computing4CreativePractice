// Working with text
// This sketch loads a text file into memory 
// and displays a random line

var book;

function preload(){

  book = loadStrings('Capital.txt');

}

function setup() {
  createCanvas(400,400);
  pickString(book);
}

function pickString(result) {
  background(200);
  var ind = floor(random(result.length));
  textSize(20)
  text(result[ind], 10, 80, 10, 80);
}

// Create a button refresh the page with a new line from the book!