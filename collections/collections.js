//
//##Part 1
// Use `.querySelectorAll` to retrieve all of the `<li>` elements.
var allLis = document.querySelectorAll("li");
// Set `.style.borderBottom` on *each* of them.
for (var i = 0; i < allLis.length; i++) {
	allLis[i].style.borderBottom = "thick dotted green"; // or your favorite style
}


//
//##Part 2
// Use `.querySelectorAll` to retrieve all of the elements with
//  the class of `datatype`.
var allDataTypes = document.querySelectorAll(".datatype");
// Turn all of them `red`.
for (var i = 0; i < allDataTypes.length; i++) {
	allDataTypes[i].style.color = "red"; 
}


//
//##Part 3
// Use `.querySelectorAll` to retrieve all of the elements with a class
// of `function`.
var allFuns = document.querySelectorAll(".function");
// Use a loop to change color of each one to `blue`.
for (var i = 0; i < allFuns.length; i++) {
	allFuns[i].style.color = "blue"; 
}
