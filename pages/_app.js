import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <main className="flex flex-col bg-black text-white scroll-smooth">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Head>
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000" />
        <meta name="msapplication-TileColor" content="#ff0000" />

        {/* HTML Meta Tags */}
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
      <Component {...pageProps} />
      <script
        data-host="https://microanalytics.io"
        data-dnt="false"
        src="https://microanalytics.io/js/script.js"
        id="ZwSg9rf6GA"
        async
        defer
      />
      <Footer />
    </main>
  );
}

export default App;
