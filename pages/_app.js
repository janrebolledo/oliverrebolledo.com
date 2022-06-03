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
      <link
        href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900"
        rel="stylesheet"
      />
      <Footer />
    </main>
  );
}

export default App;
