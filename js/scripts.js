var onlyLetters = "";
var cryptosquare = [];


function checkChar(letter){
  if(letter.match(/[a-z]/i)){
    return true;
  }
  return false;
}

function nestedArrayMaker(emptyArray, amount){
  for(i = 1; i <= amount; i++){
    emptyArray.push(new Array());
  }
}


function onlyLettersMaker(listOfChar){
  listOfChar.forEach(function(letter){
      if (checkChar(letter)) {
        onlyLetters += letter;
      }
    });
}


$(document).ready(function(){
  $("form#sentenceform").submit(function(event){
    event.preventDefault();
    var lettersInput = $("input#sentence").val().split("");
    onlyLettersMaker(lettersInput);

    nestedArrayMaker(cryptosquare, 6);
    $(".result").text(cryptosquare);
  });
});
