# DOM Example - Collections

We're going to practice DOM manipulation for collections of elements.

In the first example, we only grabbed elements that had IDs. This
allowed us to work with individual elements.

However, in this example we're going to select groups of elements and
see how to work with them.

- Look at `collections.html` and examine the HTML.
- Also open `collections.js` in Sublime. We're going to write our JavaScript here.
- Open `collections.html` in Chrome.

## Part 1

- Use `.querySelectorAll` to retrieve all of the `<li>` elements.
```
var allLis = document.querySelectorAll("li");
```
- Set `.style.borderBottom` on *each* of them.
```
for (var i = 0; i < allLis.length; i++) {
	allLis[i].style.borderBottom = "thick blue"; 
}
```


## Part 2

- Use `.querySelectorAll` to retrieve all of the elements with
  the class of `datatype`.
```
var allData = document.querySelectorAll(".datatype");
```
- Turn all of them `red`.
- Hint: you'll need to use the `.style.color` property and loop over each element.
```
for (var i = 0; i < allData.length; i++) {
	allData[i].style.color = "red"; 
}
```

## Part 3
- Use `.querySelectorAll` to retrieve all of the elements with a class
  of `function`.
```
var allFuns = document.querySelectorAll(".function");
```
- Use a loop to change color of each one to `blue`.
```
for (var i = 0; i < allFuns.length; i++) {
	allFuns[i].style.color = "blue"; 
}
```

## Further Questions

- What are the differences between `.getElementById`,
  `.getElementsByClassName`, `.getElementsByTagName`, and
  `querySelectorAll`?
  Whereas each of the `.getElementBy_______` methods is specific to only one type of search, `.querySelectorAll` can match ids, classes, or tags based on the argument given.  Tags are passed normally, ids are passed with a # in front, and class names are passed with a . in front. 
- How did you loop over the lists of elements?
The lists of elements returned aren't arrays, they're arry like objects called NodeLists. Thankfully, these still support `.length` and looking up elements with indices in brackets, so a simple for loop worked. 