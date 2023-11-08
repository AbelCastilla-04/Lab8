function init(){
//add your javascrip between these two lines of code

function showText(){
  var textbox = document.getElementById('entryinput');
  document.getElementById('textoutput').innerHTML = textbox.value;
  alert("Abel Castilla: " + textbox.value);
}

var button = document.getElementById('entrybutton');
button.addEventListener('click', showText);
}

window.addEventListener('load', init);
