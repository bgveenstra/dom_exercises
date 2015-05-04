# DOM Example - Forms

- Look at `forms.html` and open it in Chrome.
- Open up Chrome DevTools.
- Do the following in the console:

## Part 1

- Use `.innerHTML` to determine the text in the `<label>` with the ID of
  `foodLabel`.
```
document.querySelector("#foodLabel").innerHTML;
```
- Notice that we use `.innerHTML` to retrieve the content that sits
  between the `<label>` and `</label>` tags.

## Part 2

- Use JavaScript to determine what text is entered into the `<input>`
  with the ID of `foodId`.
- Notice how we can't use `.innerHTML` because there *is* no content
  between the `<input>` tags. There's not even a closing `</input>`
  tag!
- Use `.value` to retrieve the entered favorite food instead.

```
document.querySelector(#foodId).value
```

## Part 3

- Use JavaScript to determine whether or not the "calm" checkbox is
  selected.
- Can you use `.innerHTML`? Is there any HTML inside of the `<input>`
  tags?   
  No
- Can you use `.value`?   
  No, because `document.querySelector().value` always returns the default: `true`.

- You google how to use JavaScript to determine if an HTML checkbox is
  checked and you realize everything I've told you is a lie.
```
var isChecked = document.querySelector().checked;
```


## Questions

- When can we use `.innerHTML` and when can we use `.value`?   
We can only use `.innerHTML` when we want to access or change the HTML between two matching tags - an opening tag and a closing tag for the same element. We can use `.value` to get the current value of some form elements, but it only gives the default value of others.  Therefore, we should look up and/or test that we're getting the results we expect as we fill in the form. 

- What do you use when determining if a checkbox is checked?   
To determine if a checkbox is checked, use the `.checked` property.
