document
  .getElementsByTagName("button")[1]
  .addEventListener("click", function () {
    document.getElementById("code").value = "";
    document.getElementById("display").innerHTML = "";
  });
