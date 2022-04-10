# SASS
## Summary
You might wonder "what is SASS?" and that's not an unreasonable question. It's basically just CSS *and more*. You can write SASS as if you're just doing CSS but with some extra conveniences available to you *if you want to use them*.

## Adding to Your Project
*Assuming* you have a project in your `~/Documents/projects` folder (we're going to assuming the project is called `my-site` for the purpose of this documentation):

### Install `sass` to the project
```zsh
cd ~/Documents/projects

cd my-site

npm install --save-dev sass
```

### Add `sass` to your site:
1. create a sass file in your `styles` directory. Not super important *what* it's called, so lets just call it `puppies.scss`
2. inside `puppies.scss` you can add:
```scss
body {
	background-color: #ffc0cb;
}
```
3. Make the last `import` in `_app.js` be `import "../styles/puppies.scss";`, when you save, and view the main page, the colour should now be pink!
4. That colour code is going to be a pain to memorize though. Maybe we can call it "pale-pink":
```scss
$pale-pink: #ffc0cb;

body {
	background-color: $pale-pink;
}
```
5. Save the changes and look at the page. It should be the same. Mission accomplished.

## What is SASS *for* though?
### Variables
I want to use this shade of green in my CSS: `#077055`. So I can do this:
```css
.something {
	background-color: #077055;
}

.something .button {
	border-color: #077055;
}

.something .my-text {
	color: #077055;
}
```

That's... a lot of repetition, and typos could probably screw us in the future. What we can do in SASS though is create a variable that's easy to remember, and use it a bunch of times instead:
```scss
$my-green: #077055;

.something {
	background-color: $my-green;
}

.something .button {
	border-color: $my-green;
}

.something .my-text {
	color: $my-green;
}
```

You might not think it's a big deal off the cuff, but it makes big projects with huge SASS files way easier to manage if you don't have to remember 6-letter/number codes for colours.