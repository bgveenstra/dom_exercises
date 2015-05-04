# DOM Example - Events

We're going to practice listening for DOM events.

We've already used JavaScript to select HTML elements and retrieve
their values and change their properties.

Now, we can also use JavaScript to notify us when certain events
occur. For example, we can detect when buttons are clicked, when the
mouse moves, when keys are pressed, and when forms are submitted.

- Look at `events.html` and open it in Chrome.
- Open `events.js` in Sublime, this is where we will be working.

## Part 1

- Use `.addEventListener` to listen for the `click` event on the
`<button>`.
- Pop up an `alert()` whenever such a click occurs.
```
var button = document.querySelector("#clicker");
button.addEventListener("click", function(event){
	alert(event.target.id + " was clicked!");
});
```

## Part 2

- Change the `backgroundColor` of the box to `yellow` when the mouse
  is over it.
```
var box = document.querySelector("#mouser");
box.addEventListener("mouseover", function(){
	box.style.backgroundColor = "yellow";
});
```

- Change back to `green` when the mouse leaves the box.
```
var box = document.querySelector("#mouser");
box.addEventListener("mouseout", function(){
	box.style.backgroundColor = "green";
});
```
- The `mouseover` and `mouseout` events may be of use.

## Part 3

- Add a `submit` event to the `<form>` element.
```
var myForm = document.querySelector("#former");
myForm.addEventListener("submit", function() { });
```
- `alert()` the text that is typed into the text field.
```
var myForm = document.querySelector("#former");
myForm.addEventListener("submit", function() {
	var inputField = document.querySelector("input");
	alert(inputField.value);
	// or<!--  -->
});
```
- Notice that the page refreshes (see the URL bar).

## Part 4

- Why was the page refreshing in Part 3?   
The URL includes information about the contents of the input box, so when we trigger the submit event the browser checks to see if the contents have changed and updates the URL as needed. 

- Use `event.preventDefault()` to prevent this from happening.
```
var myForm = document.querySelector("#former");
myForm.addEventListener("submit", function(event) {
	event.preventDefault();
	alert();
});
```

## Part 5

- Listen for the `click` event on the `<ul>` element.
``` 
var myUl = document.querySelector("ul");
myUl.addEventListener("click", function(){});
```
- Use `event.target` to see which `<li>` was clicked.
``` 
// change above to 
myUl.addEventListener("click", function(event){
	console.log(event.target);
});
```
    - `alert()` the specific vegetable that was selected.
``` 
// change above to 
myUl.addEventListener("click", function(event){
	alert(event.target.innerHTML);
});
//
```
- Make sure you only use one event listener instead of adding an event
  handler to each `<li>`.

## Part 6

- Move the `<script>` element into the `<head>` element.
- All your event listeners should break.  Why? What errors do you see
  in your JavaScript Console?
```
Uncaught TypeError: Cannot read property 'addEventListener' of null
```
This error message indicates that the things I added event listeners to were `null` when the browser tried to add their event listeners. 

- Listen for the `load` event on the `window` object and put your
  other code inside of the new handler to get things working again.
```
window.addEventListener("load", function(){
	// all other code
});
```

## Questions

- What does `event.preventDefault()` do?   
Prevents the default behavior triggered by the event.   
- Why do we listen for the `submit` event on a `<form>` instead of
  listening for the `click` event on the submit button?   
We like the default behavior of the `submit` event and don't want to rewrite it from scratch. Plus, it makes sense to have the entire form as the `event.target` when it's submitted. That way we have easy access fields other than just the button.
- What does the `window`'s `load` event allow us to do?   
If we wrap our javascript in an event listener for the window's load event, the browser will wait to run any of our javascript until the page has loaded.  That way, we don't run into situations where elements that our javascript looks for don't yet exist when it looks for them.
