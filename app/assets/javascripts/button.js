$( document ).ready(function() {
  $( "#userButton" ).on("click",function() {
    var target = document.getElementById("userInput").value;
    var finalImage = document.getElementById('userImage').src = "https://robohash.org/" + target + ".png";
    var target = document.getElementById("userInput").value = "";
  })
});
