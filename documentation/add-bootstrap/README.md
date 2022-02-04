# Add Bootstrap

NOTE: This is for adding Bootstrap to a NextJS site. The **Making Sites** tutorial will tell you how to set up a NextJS site and put it on the internet, and this tutorial will tell you how to add Bootstrap to that site.

## Getting Bootstrap CSS and JS

I don't actually remember the site for where this is, so I'll just walk you through my process:

1. I just google `bootstrap cdn`

![google bootstrap cdn](https://i.imgur.com/HJSKQyb.png)

2. Seems like the first link has what we need

![click first result](https://i.imgur.com/3i64pf4.png)

3. Oh look, we found the CDN links, I assume the down arrows will show us the HTML we want to copy.

![cdn links](https://i.imgur.com/hrs9qyE.png)

4. If you open the down arrow next to the CSS link you should see the HTML you need to copy, then copy it:

![html for css cdn](https://i.imgur.com/f8HG9e3.png)

5. Go to `_app.js` in your NextJS project, and add this to the top if you don't already have it:

```Javascript
import Head from "next/head";
```

6. Add the `<Head></Head>` tags above your `<Component>`:

![head tags](https://i.imgur.com/ZXQmCqH.png)

7. Paste the bootstrap css CDN stuff in the head tags. This means the Bootstrap CSS will be on your whole site.

![add link tag](https://i.imgur.com/6cILUHE.png)

8. As you can see, the `link` tag is yelling at me with an error. When it says the element `link` has no corresponding closing tag, it just means the tag isn't closed properly. If you scroll to the end of the tag, you can see what I mean with the second screenshot.

![error message](https://i.imgur.com/ScR2nyQ.png)

![no closing tag](https://i.imgur.com/xaaZWcH.png)

9. Add a `/` in there. (The screenshot is yelling at me and is probably yelling at you too. It's basically saying the `crossorigin` attribute is wrong, and to use `crossOrigin` instead. That's fine, just do what it says. Then you can right-click and `Format Document` to make it prettier):

![closing tag](https://i.imgur.com/aFjzIty.png)

10. Alright, we'll do bootstrap's JS now. Go back to the site, and copy the HTML.

![copy js cdn](https://i.imgur.com/LweayTb.png)

11. Paste it under `<Component>`:

![pasted script tag](https://i.imgur.com/ZYP6tNo.png)

12. It's freaking out, so first I'll `right-click` and `Format Document`. Then I'll add the attributes: `async` and `defer`, then I'll change `crossorigin` to `crossOrigin`:

![script tags](https://i.imgur.com/h2deWt4.png)

Great. Now you have bootstrap on your site. Guess you're done now.
