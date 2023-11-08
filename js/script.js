function init(){
//add your javascrip between these two lines of code

function showText(){
  var texting = document.getElementById('entryinput');
  document.getElementById('textoutput').innerHTML = texting.value;
  alert("Abel Castilla: " + texting.value);
}

var button = document.getElementById('entrybutton');
button.addEventListener('click', showText);
}

window.addEventListener('load', init);
