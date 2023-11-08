function init(){
//add your javascrip between these two lines of code
function myEventFunction() {
  alert('Abel Castilla: This is a test');
}
 
var d3 = document.getElementById('entrybutton');
d3.addEventListener('click', myEventFunction);







window.addEventListener('load', init);
