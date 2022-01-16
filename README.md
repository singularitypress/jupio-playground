# Getting Started

1. Go to the folder of your choice:

```bash
cd ~/Documents/projects
```

2. We're going to grab the code from github ("clone the repo") like so:

```bash
git clone https://github.com/singularitypress/jupio-playground.git
```

3. We're going to install our packages like so:

```bash
npm i
```

4. To start developing, run:

```bash
npm run dev
```

5. Go to `localhost:3000` to see the site.

## Making New Pages

Instructions:

1. [How to make a new Currency Converter page](/pages/currency-converter)

## Styling

1. Add a class to the element you want to style i.e.

```javascript
<button className="my-button">text</button>
```

2. Then go to the relevant CSS file, like if you're changing something for the currency-converter, go to `currency-converter.css` and add:

```css
.my-button {
  background-color: white;
}
```

Done! Easy right? No importing or any other kinds of shenanigans.

### Bootstrap

This project uses bootstrap, which means they have classes for you to use out of the box without needing to make your own styles. You still might want to do your own CSS for stuff like rounded buttons, images inside circles, your own background colours for things, but bootstrap should have you covered for stuff like [cards](https://getbootstrap.com/docs/5.1/components/card/), or [nav bars](https://getbootstrap.com/docs/5.1/components/navbar/). You can find bootstrap notes [here](https://getbootstrap.com/docs/5.1/getting-started/introduction/), and if you're not sure where to find something, you can search for it in the "Search docs..." searchbox.
