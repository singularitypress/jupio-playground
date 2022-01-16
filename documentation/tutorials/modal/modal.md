# Foundations of Web Development

## Preface

There are only three main things that matter in web development: HTML, CSS, and JS. I'm being extremely literal here, everything revolves around you being able to send someone content (HTML), styling that content (CSS), then letting people click and interact with your content (JS). Everything else you see in web development like React, SASS, Less, and everything else , they're just tools for you to be able to create better HTML, better CSS, and better JS.

For example, React just gets transpiled (i.e. converted) and bundled into a thicc JS file, with that JS file just making some HTML elements. SASS and Less are just supersets of CSS (basically the same thing with extra features) that eventually get converted and bundled into a thicc CSS file for the browser.

In this tutorial, we're going to make a modal, a popup essentially. The cool thing about a modal is that it's (in my opinion) the perfect cross-section of web development. You need to use HTML to make an element, you need to use CSS to make that element look like a modal, then you need to use JS to make that modal to show and hide itself.

## Making a Modal (Tutorial)

### Step 1

Make a folder, it doesn't really matter where or what it's called. I'm going to make one in my `Documents/projects` folder and call it `modal-tutorial` like so:

```bash
cd ~/Documents/projects
```

```bash
mkdir modal-tutorial
```

```bash
cd modal-tutorial
```

### Step 2

Open the folder you created in VSCode, then create an empty HTML, CSS, and JS in your folder. Call them all `index`, i.e. index.html, index.css, and index.js

![files](https://i.imgur.com/qpP9AKX.png)

### Step 3

There's some boilerplate stuff we need for our HTML file:

_index.html_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>

  <body></body>
</html>
```

This is pretty much standard stuff you'd have in an HTML file so the browser knows what this file is for, I wouldn't worry about what any of this ultimately means. Also, I never memorize this, I usually have a file somewhere I use as a reference because how or why would I remember this.

### Step 4

Lets add a `<div>` into the `<body>`, give it the class of `i-dunno` because I couldn't think of anything better, and have some text in it like "hello there". After that, add a `<button>` element with the class of `my-button` because I couldn't think of a better name, with some text in it like "Click me". When you're done your `<body>` should look like this:

![](https://i.imgur.com/hKCrNiV.png)

Now, if you open your page (double click on the `index.html` file in Finder on Mac or Windows Explorer on Windows) and refresh, you should see your text and a button.

### Step 5

We're going to make the colour purple in two steps, the first will be adding the CSS file to the HTML page, the second will be actually doing the CSS to make the colour purple.

Add the following inside the `<head>` element:

```html
<link rel="stylesheet" type="text/css" href="index.css" />
```

If you're wondering how to remember this, it's like I said earlier, _I_ don't remember it myself. What I do remember is that I need a `<link />` element in the `<head>`, and an `href` attribute that points to my CSS file, then I just look at some other previous projects/files or whatever as a reference on actually _how_ to do it.

Anyway, once you've done that, it should look like this:

![](https://i.imgur.com/qEkXdoz.png)

Next, open `index.css` and add the following to make the colour of the text purple:

```css
.i-dunno {
  color: blueviolet;
}
```

Refresh and the colour of the text should now be purple.

### Step 6

Here we're gonna start adding JS to change the colour back to black (or whatever default colour your browser uses, whatever). First, we'll want to add the JS file to our `<body` element and make it the last thing on the page, so add:

```html
<script src="index.js"></script>
```

Our `<body>` element should now look like this:
![](https://i.imgur.com/1RDVQ2o.png)

A good rule of thumb is that `<script>` tags should be the last thing you add in the `<body>` tags because if your script is actually trying to do something on the page it helps to have the stuff on your page actually load before the script does and tries to actually do anything.

Next thing we need to do is add another class to the `<div>` we already have because I completely forgot and I don't want to re-write this tutorial and take screenshots again. Add a class called `my-modal` to the div so it now looks like this:
_index.html_

```html
<div class="i-dunno my-modal">hello there</div>
```

Anyway, the next thing we want to do is toggle the colour when you click the button.

_index.js_

```javascript
const textOrSomething = document.querySelector(".my-modal");
const myClickButton = document.querySelector(".my-button");

const iDunnoLol = () => {
  textOrSomething.classList.toggle("i-dunno");
};

myClickButton.addEventListener("click", iDunnoLol);
```

Essentially, `textOrSomething` is the `<div>` element, we're getting it by the class name of `"my-modal"`. The `myClickButton` variable is the `<button>` element, we're getting it by the class name `"my-button"`. The `iDunnoLol` variable is a function that toggles the `"i-dunno"` class on `textOrSomething` which is just the element with the class `"my-modal"`.

The last line we're adding an event listener to the `myClickButton` to listen for `"click"` so that whenever anyone clicks on the button the `iDunnoLol` function runs. Refresh the browser and try it out.

### Step 7

Go to the CSS and change `color: blueviolet;` to `display: none;`, save, then refresh the page. Click the button and you should see the text appear then disappear. Congrats, you've essentially made a modal. Sure it doesn't _look_ like one but you've done most of the work. The rest involves:

1. Making the text look like a popup modal with CSS
2. Adding a second button that literally does the same thing as `myClickButton` with `iDunnoLol` to close the modal.

These steps will come later because I'm tired and I've written over 1000 words.
