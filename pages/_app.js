import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
