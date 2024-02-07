
function isCodeCorrect(){

    console.log("oui");

    var usrPrompt = document.getElementsByClassName("btn")[0];

    if (usrPrompt == correctAnswer){
        return true;
    }else{
        return false;
    }

}