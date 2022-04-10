# Adding Fonts
I'm assuming you've got a Next JS app/ project set up already per the [Making a Project and Putting it on the Internet](https://github.com/singularitypress/jupio-playground/tree/main/documentation/putting-sites-online) documentation. Probably best if you went through the [styling]((https://github.com/singularitypress/jupio-playground/tree/main/documentation/your-css/styling.md) documentation too.

1. Go to [Google Fonts](https://fonts.google.com/)
2. Click on a Font you want (I chose [Poppins](https://fonts.google.com/specimen/Poppins))
3. Click "Select this style" for whatever ones you want to use (I added Thin 100, Regular 400, Bold 700)
4. In the sidebar, there should be two textboxes you can copy from. Copy the content of the first one (with the `link` tags), and paste it in the `<Head>` of your `_document.js`. Then copy the contents of the second textbox and paste it into whatever `.css` file you made.
	1. NOTE: when you paste the `link` tags, VSCode or whatever might show you errors. If so, change `crossorigin` to `crossOrigin`, then make sure the `link` tags are closed, i.e. make sure they have a corresponding `</link>` if they don't have one.
	2. NOTE: If you *don't* see the side-bar, there should be an icon on the top right you can click on to open it. 