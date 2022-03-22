import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <main className="flex flex-col md:flex-row bg-black text-white">
      <Sidebar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
