function isCodeCorrect() {
  console.log("oui");
  var text = document.getElementById("code").value;
  document.getElementById("display").innerHTML = text;
  var usrPrompt = document.getElementsByClassName("btn")[0];

  if (usrPrompt == correctAnswer) {
    return true;
  } else {
    return false;
  }
}
