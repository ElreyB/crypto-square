function checkChar(letter){
  if(letter.match(/[a-z]/i)){
    return true;
  }
  return false;
}


$(document).ready(function(){
  $("form#sentenceform").submit(function(event){
    event.preventDefault();
    var lettersInput = $("input#sentence").val().split("");
    var onlyLetters = "";

    lettersInput.forEach(function(letter){
      if (checkChar(letter)) {
        onlyLetters += letter
      }
    });
    $(".result").text(onlyLetters);
  });
});
