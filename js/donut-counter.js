//JS Donut Counter Lab
function donutCounter(){
  var numOfGuest = prompt("Please enter number of guest", "enter here");
  var numOfdonut = prompt("Please enter equired number of donut", "enter here");
  var guest = parseInt(numOfGuest)
  var donut = parseInt(numOfdonut)

  if(donut <=  guest){
    alert("Hello! u have " + guest + "number of guest and"+donut+ "number of donuts,u might need more");
    // alert(`Hello! u have ${guest} number of guest and ${donut} number of donuts, u might need more`);

  }else {
    alert("Hello! u have " + guest + "number of guest and"+donut+ "number of donuts");
  }
}

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
