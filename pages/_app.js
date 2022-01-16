import Head from "../components/head";
import Script from "next/script";
import "../styles/index.scss";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head title="Default Page Title" />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
};
