var images = document.querySelectorAll(".sec-six-imj li img");
for (var i = 0; i < images.length; i++) {
  var img = images[i];

  img.addEventListener("mouseenter", function() {
    addBg(this);
  });
  img.addEventListener("mouseleave", function() {
    removeBg(this);
  });
}

function addBg(element) {
  element.style.backgroundImage = "linear-gradient(to top, rgba(243, 7, 117, 0.596) 40%,rgba(255, 166, 0, 0.671))";
}

function removeBg(element) {
  element.style.backgroundImage = "";
}

