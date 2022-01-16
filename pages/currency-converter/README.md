# Making a New Page for the Currency Converter

1. In the `pages/currency-converter` folder, create a new file called `<your-page-name-here>.js`
2. In your new file, enter the following boilerplate code:

```javascript
import Head from "../../components/head";
import Main from "../../components/main";

export default () => {
  return (
    <>
      <Head title={"your-title-here"} />

      <Main className="currency-converter">your-content-here</Main>
    </>
  );
};
```

3. Change `"your-title-here"` to be whatever you want the page title (i.e. the text you see in the browser tab) to be.

4. Change `your-content-here` to be whatever content you want on the page.
