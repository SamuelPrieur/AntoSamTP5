document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    document.getElementById("code").value = "";
    document.getElementById("display").innerHTML = "";
  });
