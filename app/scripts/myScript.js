var bgColor = '#c69',
    fontSize = 24,
    fontWeight = 300;

function changeBody(color, font, weight) {
  var myElement = document.querySelector("body");
  myElement.style.backgroundColor = color;
  myElement.style.fontSize = font + "px";
  myElement.style.fontWeight = weight;
};

changeBody(bgColor, fontSize, fontWeight)