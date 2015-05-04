# DOM Example - IDs

We're going to practice DOM manipulation for elements with IDs.

- Look at `ids.html` to see the HTML I have written for you.
- Open `ids.html` in Chrome and open up the Chrome Developer Tools.
- Do the following in the console:

## Part 1
- Use `.querySelector` to grab the element with the ID of `main-heading`.
```
var mainHeading = document.querySelector("#main-heading");
```
- Use `.innerHTML` to change the contents of `main-heading` to be "Fun
  DOM Example".
```
mainHeading.innerHTML = "Fun DOM Example";
```

## Part 2

I think the diagram of the DOM is slightly too big. I could open it in
an image editor and shrink it, but I can also change its size with
HTML, CSS, and JavaScript.

- Use `.querySelector` grab the image.
```
// note the image's id is diagram
var diagram = document.querySelector("#diagram");
```
- Change the `.style.height` property of the image to be `5000px`.
```
diagram.style.height = "5000px";
```
- Hmm, that's too big. Try `300px`.  I like that better.
```
diagram.style.height = "300px";
```


## Part 3

Is this image really the best illustration of the DOM we can come up
with? I want to change it to a different image.  How can we do that
using the techniques we've already learned?

- Use `.querySelector` to grab the image.
```
var diagram = document.querySelector("#diagram");
```
- Use `.setAttibute` to change the `src` attribute to be `img/dom_basic.png`.
```
diagram.setAttribute("src", "img/dom_basic.png");
```
- Perhaps that's better.
- Change it back to `img/dom_model.svg` for comparison's sake.
```
diagram.setAttribute("src", "img/dom_model.svg");
```

## Questions

- Why do we use `.innerHTML` to change the heading but `.setAttribute`
  to change the diagram?   
 
For the heading, we wanted to change what was between two matching tags for an element: the opening `<h1>` tag and the closing `</h1>` tag. That stuff is the element's "inner HTML".  For the diagram, we wanted to change something *inside* the `<img>` tag itself, not some HTML between two matching tags. We can't use `.innerHTML` for that.    

- What was different about the way we changed the `style` of the image
  from the way we changed its `src`?     
The `style` and `src` are both attributes of the diagram element. We could have switched it up and used dot notation for `src`:
```
(diagram.src = "img/dom_model.svg");
```
or used the `.setAttribute` method for `style`:
```
diagram.setAttribute("style", "height: '300px'");
```
Note that since `style` is the attribute of the diagram who's value we're trying to set, we have to include everything about the style in the second argument when we use setAttribute. The following doesn't work:
```
// DOES NOT WORK
diagram.setAttribute("style.height", "300px");
```
One resource to read about setAttribute is `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute`.
