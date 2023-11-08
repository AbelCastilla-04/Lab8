function init(){
//add your javascrip between these two lines of code
function myEventFunction() {
  alert("Abel Castilla: This is a test");
}
 
var div1 = document.getElementById('entrybutton');
div1.addEventListener('click', myEventFunction);







window.addEventListener('load', init);
