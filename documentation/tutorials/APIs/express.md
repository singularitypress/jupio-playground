# APIs

Let's say someone has some data you want, like... some news story and that news story can be found over at [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1). In theory, you can go to that link in your browser like chrome and see some JSON with the news story in it, copy the text, paste it on your site, commit the change to your site to github, etc. to update your website. This seems like kinda a dumb manual process, we should get the code to do it like so:

```JavaScript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((myJson) => console.log(myJson));
```

The `console.log` will output the following:

```bash
{
  id: 1,
  title: '...some text...',
  body: '...some text...',
  userId: 1
}
```

What's happening in the above code you might be wondering? Line by line, here's what's going on:

1. the `fetch(...)` will basically ask the link you supply it to give you whatever it's got.
2. the data that the link gives you is in `response`, if you want it in JSON form (you do, it's gibberish otherwise), you basically say `response.json()` like how we have it. When you do, it gets forwarded to the next line.
3. On this like, the JSON you can see if you were to navigate to the link directly is now stored in `myJson`, so if you `console.log` it, you'll now see it.