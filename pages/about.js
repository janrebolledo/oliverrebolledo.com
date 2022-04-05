import Head from "next/head";

export default function About() {
  return (
    <section className="md:w-3/4 p-12 md:flex md:flex-col md:justify-center md:h-screen">
      <Head>
        <title>Desvo Filmz — About</title>
      </Head>
      <h1 className="text-xl font-bold">ABOUT</h1>
      <p>
        Oliver Rebolledo “Desvo Filmz” is a photographer &amp; videographer
        based out of California. Frequently collaborating with Los Gemelos De
        Sinaloa, Angel Tumbado, LDNE, and many more.
        <br />
        <br />
        <b>Languages</b> — English, Native Speaker + Spanish, Fluent
      </p>
    </section>
  );
}
