# Basic Widget How-Tos

## I wanna make a banner

### Sizing

Maybe you want to do a full-screen banner, maybe you want to do a banner that's full-width but only `n` pixels tall.

Full width and full height:

```scss
.your-banner-idk {
  width: 100vw;
  height: 100vh;
}
```

Full width and half-height:

```scss
.your-banner-idk {
  width: 100vw;
  height: 50vh;
}
```

Full width and... whatever height, lets just say 300px:

```scss
.your-banner-idk {
  width: 100vw;
  height: 300px;
}
```

### Background

You might say, "cool, I made a box, but there's nothing in there, no images, colour, or anything!". Fair enough, here I'll show you how to set a background image or colour to your element. This isn't really specific to banners and you can add a background image theoretically _anything_.

A background image (the link I used is for a puppy):

```scss
.your-banner-idk {
  /* whatever your other stuff goes here (size, etc) */
  background-image: url("https://i.imgur.com/R5PiUTG.jpg");
}
```

A background colour (I googled for the indigo hex colour to get a random one):

```scss
.your-banner-idk {
  /* whatever your other stuff goes here (size, etc) */
  background-color: #4b0082;
}
```

## I wanna make a pill button

Look, I don't memorize these things. Here's my process, I google for it, find a simple link to instructions that show me to make what I want.

![googling pill button](https://i.imgur.com/VyvOIqM.png)

## Everything else

This will be filled with more patterns as time goes on, but for now if you have bootstrap in your project, you should be able to search how to do things on the [bootstrap docs.](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

![bootstrap search](https://i.imgur.com/u7Lsqrp.png)
