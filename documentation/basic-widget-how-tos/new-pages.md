# How to make a New Page
Preamble: This is assuming you've already [made a project](https://github.com/singularitypress/jupio-playground/tree/main/documentation/putting-sites-online).

1. Create a new `js` file in the `pages` folder, and call it whatever you want (lets say for the purpose of this documentation, it's called `dogs-are-the-cutest.js`)
2. Inside your new `js` file, add:
```jsx
import React from "react"

const DogsAreTheCutest = () => {
	return (
		<div>
			<h1>Dogs really are the best</h1>
		</div>
	);
};

export default DogsAreTheCutest;
```

And... that's it. New page that can be found at `localhost:3000/dogs-are-the-cutest`.

## Anatomy of a page
- The filename is where the page should be. Like, making a `dogs-are-the-cutest.js` page, means you can navigate there by going to `localhost:3000/dogs-are-the-cutest`
- The component name can be called whatever you want honestly, as long as you do the `export default` at the end. It's *generally* best to have the component's name be the same as the filename, but without dashes, and with the first letter of each word capitalised. For example, `about-us` component name should be `AboutUs`, or `how-to-train-your-dragon` should be `HowToTrainYourDragon`.
- Make sure you return some `jsx`, whether it's a `<div>` or another component or whatever.