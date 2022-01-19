import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OLIVER REBOLLEDO — MULTIFACETED CREATIVE</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        {/* HTML Meta Tags */}
        <title>OLIVER REBOLLEDO — MULTIFACETED CREATIVE</title>
        <meta name="description" content="BRINGING YOUR VISION TO LIFE." />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://oliverrebolledo.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="OLIVER REBOLLEDO — MULTIFACETED CREATIVE"
        />
        <meta
          property="og:description"
          content="BRINGING YOUR VISION TO LIFE."
        />
        <meta
          property="og:image"
          content="https://oliverrebolledo.com/socialpreview.png"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="oliverrebolledo.com" />
        <meta property="twitter:url" content="https://oliverrebolledo.com/" />
        <meta
          name="twitter:title"
          content="OLIVER REBOLLEDO — MULTIFACETED CREATIVE"
        />
        <meta
          name="twitter:description"
          content="BRINGING YOUR VISION TO LIFE."
        />
        <meta
          name="twitter:image"
          content="https://oliverrebolledo.com/socialpreview.png"
        />
      </Head>
      <Header />
      <main>
        {/* <Component {...pageProps} /> */}
        <section>
          <h1>COMING SOON</h1>
        </section>
      </main>
      <Footer />
      <script
        data-host="https://microanalytics.io"
        data-dnt="false"
        src="https://microanalytics.io/js/script.js"
        id="ZwSg9rf6GA"
        async
        defer
      ></script>
    </>
  );
}

export default App;
