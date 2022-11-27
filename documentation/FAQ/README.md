# Glossary/ Index

## Common Terminal Commands

Note: none of the below actually work if you have something _actually running_. Like if you run `npm start` on your site in the terminal, you can't then use any of these commands until you _cancel_ what's currently running. See **Key Combos** to see how to cancel something that's running.

- `pwd`
  - means "print working directory", shows you the folder you're currently in
- `ls`
  - means "list", shows you other items in the folder you're currently in
- `cd`
  - means "change directory", lets you switch folders. Used in combination with the folder you want to switch to
  - Example 1: if you're in `~/Documents/projects/doggies-site`, running `cd ~/Pictures/summertime` takes you to the `~/Pictures/summertime` folder
  - Example 2: if you're in `~/Documents/projects/doggies-site`, running `cd ../` will take you to `~/Documents/projects` because `../` means "one folder up"
- `mkdir`
  - means "make directory", essentially just makes a folder inside the folder you're currently in
  - If you're in `~/Documents/projects`, you can run `mkdir doggies-site` and it'll make a new folder. You can then navigate to that folder in the terminal with `cd doggies-site`
- `clear`
  - literally just clears the stuff in the terminal so it's easier to read

## Key Combos

- `control + C`
  - It means "cancel". A key combo that's useful to kill whatever's currently running in your terminal
  - i.e. if you're running your site in the terminal and you want to run something else instead, you can use `control + C` to kill whatever's running, `clear` to clean up the terminal, then run whatever you want to run.
  - Note, when using `control + C`, it might take 1-3 tries to _properly_ kill whatever's running. No good reason honestly, I'm honestly in the habit of just spamming it. Sometimes, they'll ask you to type `Y` or `N` to confirm you want to continue killing what you want to kill.
- `control + T`
  - opens a new terminal tab preset to the same folder you're currently in. If you're in `~/Documents/projects/doggie-site` and you use this, it'll open a new terminal tab set to the same folder.
- `up arrow` and `down arrow`
  - Using the up and down arrows can let you see previous commands you've run. I do this all the time.

## Folder Terminology

Folder terms can be confusing, so here's some common things to understand:

- `~/`
  - your effective "root" folder for your laptop/ computer user. If my username on my Macbook is `roberto`, then the `~/` folder is the same as `/User/roberto`. So something like `~/Documents/projects/currency-converter` is the same as `/User/roberto/Documents/projects/currency-converter`
  - All of your main library folders are in here like `Documents`, `Downloads`, etc:

```
- User
	- roberto
		- Documents
			- <other stuff like Projects and whatever>
		- Downloads
		- Pictures
		- Applications
		- Movies
```

- `../`
  - Using this in general just means going to the parent folder/ upper folder. For example, if you're inside the `~/Documents/projects/my-site`, then `../` refers to `~/Documents/projects`. So running the `cd ../` command would take you from `~/Documents/projects/my-site` and into `~/Documents/projects`.
- `./`
  - The current folder you're in. If you have the `code` command set up for VS Code, running `code ./` or `code .` (same difference) basically is telling VS Code to open and to be set to the folder you're in right now.

## Folder Terminology

It turns out that a lot of people don't quite understand how folders or files work, especially people born after '95. So here's the general idea: think of files as like... actual files like documents or something, and think of *folders* and *paths* as addresses. So, when you're creating a project, think about *where* you're making it, at what *address*.

EXAMPLE:
We've got some documents/papers over at the office. The office is at 333 King Street East. That office is in Toronto, Toronto is in Ontario, Ontario is in Canada, and Canada is on Earth. So you can say that the documents are at `/Earth/Canada/Ontario/Toronto/333 King Street E`. 
Similarly, if you have a `projects` folder inside a `Documents` folder, you can say that your project is at `~/Documents/projects` (`~/` is the equivalent of Earth, it's as high-up as you can go).

Terms:
* `~/`
	* This is the "root" of your entire computer (essentially). Sticking to the "address" analogy, it's Earth. It's as high up as you can go in terms of locations. Typically inside `~/` you have `Documents`, `Downloads`, etc, just like how inside `Earth` you have `Canada`, the `United States`, etc.
	* Note that `~/` is another name for `/User/<your laptop name>`

# FAQ

## How do I find my projects?

The truth is, only you can know where your projects are; if you're not sure, you can browse around with Finder and take note of the folder name with your projects in it, and the parent folder, i.e. `Documents/Projects`

If you have the terminal open inside one of your projects, you can see the current folder you're in with the `pwd` command.

## What folder am I in?

You can run `pwd` to see what folder you're currently in.

## Where do I make a new project?

It depends on where you want it to go. Normally, people (like me) have a folder in my Documents folder with my projects folder like `~/Documents/projects` so normally I open a new terminal or terminal tab then `cd ~/Documents/projects`.

## How do I make a new project?

1. It depends on where you want it to go. Normally, people (like me) have a folder in my Documents folder with my projects folder like `~/Documents/projects` so normally I open a new terminal or terminal tab then `cd ~/Documents/projects`.
2. If you're using `Create React App`:
   1. `npx create-react-app <my-project-name>`
   2. `cd <my-project-name>`
   3. `npm start`
3. If you're using `NextJS`
   1. `npx create-next-app@latest <my-project-name>`
   2. `cd <my-project-name>`
   3. `npm run dev`

## How do I start my project?

You can typically check the README.md to see if it tells you how to get started. Usually it'll tell you to run either `npm start` (typical of create-react-app) or `npm run dev` (typical of nextjs). You can also check in the `"scripts"` part of a `package.json` file where you'll typically find a command you need. Create React App will have one called `"start"` and NextJS has one called `"dev"` (it has a start one too, but don't worry about that).

## Why don't any of my commands work?

If you run `npm start` (in Create React App) or `npm run dev`, you'll start up your app. You can't then just dump in other commands in the same terminal while your app is running.

If you're in the terminal, and you're trying to run some commands and they aren't doing anything (i.e. no actual error messages or anything), you're probably running something already. Try spamming `control + C` (see the glossary for why), running `clear`, then running the command you want.
