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

1. In the `pages` folder, create a new file called `<your-page-name-here>.js`
2. In your new file, enter the following boilerplate code:

```javascript
import Head from "../components/head";
import Main from "../components/main";

export default () => {
  return (
    <>
      <Head title={"your-title-here"} />

      <Main>your-content-here</Main>
    </>
  );
};
```

3. Change `"your-title-here"` to be whatever you want the page title (i.e. the text you see in the browser tab) to be.

4. Change `your-content-here` to be whatever content you want on the page.

## Styling

1. Add a class to the element you want to style i.e.

```javascript
<button className="my-button">text</button>
```

2. Then in the `styles/index.css` file:

```css
.my-button {
  background-color: white;
}
```

Done! Easy right? No importing or any other kinds of shenanigans.

### Bootstrap

This project uses bootstrap, which means they have classes for you to use out of the box without needing to make your own styles. You still might want to do your own CSS for stuff like rounded buttons, images inside circles, your own background colours for things, but bootstrap should have you covered for stuff like [cards](https://getbootstrap.com/docs/5.1/components/card/), or [nav bars](https://getbootstrap.com/docs/5.1/components/navbar/). You can find bootstrap notes [here](https://getbootstrap.com/docs/5.1/getting-started/introduction/), and if you're not sure where to find something, you can search for it in the "Search docs..." searchbox.
