function init(){
//add your javascrip between these two lines of code
function myEventFunction() {
  alert('Abel Castilla: This is a test');
}
 
var d = document.getElementById('entrybutton');
d.addEventListener('click', myEventFunction);







window.addEventListener('load', init);
