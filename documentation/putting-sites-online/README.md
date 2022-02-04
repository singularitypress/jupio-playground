# Making a site

## Basic Overview

[Link to images](https://imgur.com/a/Phq9pSR)

1. Make a new github repo with a new react project

2. Connect Github to a site called Vercel so you can push your site from github to the internet

3. Making changes to the site and pushing those changes to your site online

## Make a new Github repo with a react project

1. Go to Github, and click the `New` button

![github new button](https://i.imgur.com/o9kY0u0.png)

2. Name your site

![project name](https://i.imgur.com/Vu9SZmK.png)

3. Click the "Create Repository" button

![create repository button](https://i.imgur.com/3rOZmHG.png)

4. Copy the github repo link you see here (sample pictured):

![github link](https://i.imgur.com/o2NmC8w.png)

6. Create a project folder. Assuming your projects are in the `~/Documents/projects` folder (for the purpose of these instructions I'll call the project folder "my-site"):

```bash
cd ~/Documents/projects

mkdir my-site

cd my-site

git init

git remote add origin <PASTE THE LINK YOU COPIED HERE>

npx create-next-app .

git add .

git commit -m "first commit"

git branch -M main

git push -u origin main
```

7. If the above has successfully completed, go back to github, refresh and you should see your repo there.

8. If you wanna run the site, you can look at the README.md for instructions. You can open the project in VSCode with `code .`

## Putting the site on the internet

1. Go to the Vercel site with your Github account [Login – Vercel](https://vercel.com/login?next=%2Fdashboard) (it might ask for permission or whatever, just say yes)

2. On the [Dashboard – Vercel](https://vercel.com/dashboard) you can click the "+ New Project" button

3. You should see a list of your projects here:

![projects](https://i.imgur.com/hyJbgCZ.png)

4. Click "Import" for your project

5. Click "Deploy"

6. Once the deployment is finished, you should see a Congratulations page. When you do, you can click the thumbnail of your site to view it online:

![next congrats](https://i.imgur.com/jTf3b1z.png)

7. Holy shit, your website it online.

## Making a change to your site

1. if you don't have the project open in VSCode already, in the terminal (assuming your project is in a folder like `~/Documents/projects`):

```bash
cd ~/Documents/projects/<YOUR PROJECT NAME>

code .
```

2. Start your app in the terminal. The instructions to do this are in README.md

3. We want to modify the home page and push that change up to our online site. Click on the `index.js` file and look at line 16. We're going to change that to: `Welcome to my site!` and we're going to link it to the github page.

4. Make a new folder called `components` with a file in it called `headline.js` like how you see it in this screenshot:

![new files](https://i.imgur.com/liIsUZ6.png)

5. Inside the `headline.js`, we're going to do something simple:

```jsx
import React from "react";

const Headline = () => {
  return (
    <>
      Welcome to <a href="<YOUR GITHUB PROJECT LINK HERE>">my site</a>
    </>
  );
};

export default Headline;
```

6. In `index.js` import your file like so:

![import statement](https://i.imgur.com/SKy1Z91.png)

7. Replace the content of the `h1` with your new `Headline` component like so:

![component](https://i.imgur.com/ltd8Ilw.png)

8. When you've saved all of your files (and you have your app running on localhost:3000) you can view your change:

![h1 changes](https://i.imgur.com/jv1dWzf.png)

9. To put your changes online, first `control + C` in the terminal to cancel your running app. Then do the following:

```bash
git add .
git commit -m "<YOUR COMMIT MESSAGE HERE>"
git push
```

NOTE: if `git push` doesn't work for whatever insane reason, you can click this on the button left of VSCode to sync your changes with Github: ![sync](https://i.imgur.com/j7HZVhY.png)

10. Go to your [Vercel dashboard](https://vercel.com/dashboard) and click on your project. Then click the "Visit" button on the right. It should open your site in a new tab and show you your changes.
