import Head from "next/head";

export default function About() {
  return (
    <section className="md:w-3/4 p-12 md:flex md:flex-col md:justify-center md:h-screen">
      <Head>
        <title>Desvo Filmz — About</title>
      </Head>
      <h1 className="text-xl font-bold heading">ABOUT</h1>
      <p>
        My name is Oliver Rebolledo and I am an experienced photographer and
        videographer with over 8 years of experience. I&apos;ve worked on a
        variety of projects and have worked with various artists over the years.
        These include Gemelos De Sinaloa, LDNE, Angel Tumbado, David Santos, and
        Zexta Allianza amongst others. I am proficient in videography,
        photography, editing and mixing. I have a large collection of equipment
        to meet the needs of all my clients.
        <br />
        <b>Languages</b> — English, Native Speaker + Spanish, Fluent
      </p>
    </section>
  );
}
