function init(){
//add your javascrip between these two lines of code
function myEventFunction() {
  alert("Abel Castilla: This is a test");
}
 
var ele = document.getElementById('entrybutton');
ele.addEventListener('click', myEventFunction);







window.addEventListener('load', init);
