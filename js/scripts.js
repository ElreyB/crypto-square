var onlyLetters = "";
var cryptosquare = [];



// return boolean if input is a letter
function checkChar(letter){
  if(letter.match(/[a-z]/i)){
    return true;
  }
  return false;
}

// with an already declared empty array and the amount of arrays you can created an array of arrays
function nestedArrayMaker(emptyArray, amount){
  for(i = 1; i <= amount; i++){
    emptyArray.push([]);
  }
}

// it create a single word string of listed characters
function onlyLettersMaker(listOfChar){
  listOfChar.forEach(function(letter){
      if (checkChar(letter)) {
        onlyLetters += letter;
      }
    });
}


// populate nested array
function populateArrays(oneString){

  var messageArray = oneString.split("");
  var index = 0;

  messageArray.forEach(function(message){
    nestedArrays[index].push(message);
    index++;
    // still nees right sqaure number
    if(index === 6){
      index = 0;
    }
  });
}


$(document).ready(function(){
  $("form#sentenceform").submit(function(event){
    event.preventDefault();
    var lettersInput = $("input#sentence").val().split("");
    onlyLettersMaker(lettersInput);

    nestedArrayMaker(cryptosquare, 6);
    $(".result").text(onlyLetters);
  });
});
