//## Part 6

// Listen for the `load` event on the `window` object and put your
//  other code inside of the new handler to get things working again.
window.addEventListener("load", function(){

	//## Part 1

	// Use `.addEventListener` to listen for the `click` event on the
	// `<button>`.
	// Pop up an `alert()` whenever such a click occurs.

	var button = document.querySelector("#clicker");
	button.addEventListener("click", function(event){
		alert(event.target.id + " was clicked!");
	});

	//## Part 2
	// Change the `backgroundColor` of the box to `yellow` when the mouse
	//  is over it.

	var box = document.querySelector("#mouser");
	box.addEventListener("mouseover", function(){
		box.style.backgroundColor = "yellow";
	});


	// Change back to `green` when the mouse leaves the box.

	box.addEventListener("mouseout", function(){
		box.style.backgroundColor = "green";
	});

	//## Part 3

	// Add a `submit` event to the `<form>` element.

	var myForm = document.querySelector("#former");
	myForm.addEventListener("submit", function(event) { 
		// alert()` the text that is typed into the text field.
		var inputField = document.querySelector("input");
		alert(inputField.value);
		//## Part 4: Use `event.preventDefault()` to prevent 
		// the page refreshing.
		event.preventDefault();
	});


	//## Part 5

	// Listen for the `click` event on the `<ul>` element.
	var myUl = document.querySelector("ul");
	myUl.addEventListener("click", function(event){
		// Use `event.target` to see which `<li>` was clicked.
		console.log(event.target);
		// `alert()` the specific vegetable that was selected.
		alert(event.target.innerHTML);
	});

});

