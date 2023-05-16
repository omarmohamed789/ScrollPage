
function reveal() {
  var boxes = document.querySelectorAll(".box");
  for (var i = 0; i < boxes.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = boxes[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      boxes[i].classList.add("show");
    } else {
     boxes[i].classList.remove("show");
    }
  }
}

window.addEventListener("scroll",  reveal);
reveal();