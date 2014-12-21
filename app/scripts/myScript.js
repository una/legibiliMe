var bgColor = 'wheat',
    fontSize = 20,
    fontWeight = 300;

// function setStyle( objId, propertyObject )
// {
//  var elem = document.getElementById(objId);
//  for (var property in propertyObject)
//     elem.style[property] = propertyObject[property];
// }

function changeBody(color, font, weight) {
  var myElement = document.querySelector('body');
  // myElement.setAttribute( 'style', '"' +
  //   'font-size:' + size + 'px;
  //   font-weight:' weight + ';
  //   background-color:' + color + ';"');
  myElement.style.backgroundColor = color;
  myElement.style.fontSize = font + 'px';
  myElement.style.fontWeight = weight;
};

changeBody(bgColor, fontSize, fontWeight);

function highlightHandler(e) {
    // get the highlighted text
    var text = document.getSelection();
    // check if anything is actually highlighted
    if(text.length !== '') {
        // we've got a highlight, now do your stuff here
        doStuff(text);
    }
}

function doStuff(text) {
  alert(text.parentNode);
}

document.oncontextmenu = highlightHandler;