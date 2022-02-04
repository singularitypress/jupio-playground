# Common Errors

## someVariableIDK is not defined

Sometimes you see it as `ReferenceError: someVariableIDK is not defined`. You might also see it in the screenshot like in _fig. 1_ which is how NextJS might yell at you. This basically just means that your variable (in this case `someVariableIDK`) was never really defined as being anything.

Now you're probably wondering _"well how do I fix this?"_ and... it depends. There isn't a one-size-fits-all solution, it depends on your code. Maybe `someVariableIDK` is supposed to a prop you forgot to put in your component, maybe it's a variable you forgot to declare, maybe you forgot to import something.

_fig. 1_
![nextJS error](https://i.imgur.com/Xz377O9.png)

## Cannot GET /somethingsomething

You likely:

- aren't running your project/app or
- are running the _wrong_ project/app

So check the terminal and start/restart the project/app you want.
