document.getElementById("button").addEventListener("click", function() {
    var paragraphs = document.getElementsByClassName("paragraph");
    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].style.display === "none") {
        paragraphs[i].style.display = "block";
        break;
      }
    }
  });