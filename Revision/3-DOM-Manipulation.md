# DOM Manipulation

Once we have selected an element, we can manipulate it. Here are some common manipulations:

1. Change the content:

```javascript
let element = document.getElementById("myId");
element.innerHTML = "New content";
```

2. Change the attribute:

```javascript
let element = document.getElementById("myId");
element.setAttribute("class", "newClass");
```

3. Change the style:

```javascript
let element = document.getElementById("myId");
element.style.color = "red";
```

4. Create and add a new element:

```javascript
let newElement = document.createElement("p");
newElement.innerHTML = "This is a new paragraph.";
document.body.appendChild(newElement);
```

5. Remove an element:

```javascript
let element = document.getElementById("myId");
element.remove();
```
