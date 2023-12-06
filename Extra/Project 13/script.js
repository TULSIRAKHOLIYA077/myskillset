var aElements = document.querySelectorAll(".icons a");

for (var i = 0; i < aElements.length; i++) {
    var a = aElements[i];
    var b = a.querySelector("i");
    var c = a.querySelector("p");
  
    a.addEventListener("mouseenter", function() {
      addBorder(this);
    });
  a.addEventListener("mouseleave", function() {
      removeBorder(this);
    });
  }
  
  function addBorder(element) {
    element.style.border = "2px solid #ff5555";
    element.style.borderRadius = "10px";
    var b = element.querySelector("i");
    var c = element.querySelector("p");
    b.style.color = "#ff5555";
    c.style.color = "#ff5555";
  }
  function removeBorder(element) {
    element.style.border = "";
    element.style.borderRadius = "";
    var b = element.querySelector("i");
    var c = element.querySelector("p");
    b.style.color = "";
    c.style.color = "";

  }
