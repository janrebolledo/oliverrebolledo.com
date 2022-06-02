import Head from "next/head";

import AnimatedText from "react-animated-text-content";
import Link from "next/link";

import Post from "../components/Post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ posts }) {
  var posts = posts.sort((a, b) => {
    return a.frontmatter.order - b.frontmatter.order;
  });
  return (
    <section className="w-full">
      <Head>
        <title>Desvo Filmz — Photographer &amp; Videographer</title>
      </Head>
      <div className="px-10% min-h-screen flex flex-col justify-evenly">
        <div>
          <p>PHOTOGRAPHER &amp; VIDEOGRAPHER</p>
          <h1 className="font-bold text-5xl md:text-6xl xl:text-8xl flex flex-col items-end">
            <AnimatedText
              className="w-full"
              animation={{
                y: "100px",
                ease: "ease",
              }}
            >
              BUILDING BRANDS
            </AnimatedText>
            <AnimatedText
              className="w-full md:w-3/4 whitespace-pre-wrap"
              animationType="blocks"
              animation={{
                y: "100px",
                ease: "ease",
              }}
            >
              THROUGH VISUAL STORYTELLING
            </AnimatedText>
          </h1>
        </div>
        <div className="flex flex-row justify-between items-end w-full">
          <p className="hidden md:block">
            FOUNDER AT
            <br />
            DESVO MEDIA
          </p>
          <Link href="#projects">EXPLORE PROJECTS &darr;</Link>
          <p className="hidden md:block">
            <Link href="#contact">CONTACT</Link>
          </p>
        </div>
      </div>

      <div className="mb-12" id="projects">
        <h1 className="text-2xl font-bold px-10% mb-4">CASE STUDIES</h1>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <div className="px-10% grid grid-cols-12 mb-12" id="about">
        <h1 className="text-2xl font-bold col-span-12 md:col-span-3">ABOUT</h1>
        <p className="col-span-12 md:col-span-9">
          MY NAME IS OLIVER REBOLLEDO AND I AM AN EXPERIENCED PHOTOGRAPHER AND
          VIDEOGRAPHER WITH OVER 8 YEARS OF EXPERIENCE. I&apos;VE WORKED ON A
          VARIETY OF PROJECTS AND HAVE WORKED WITH VARIOUS ARTISTS OVER THE
          YEARS. THESE INCLUDE LOS GEMELOS DE SINALOA, LDNE, ANGEL TUMBADO,
          DAVID SANTOS, AND ZEXTA ALIANZA AMONGST OTHERS. I AM PROFICIENT IN
          VIDEOGRAPHY, PHOTOGRAPHY, EDITING AND MIXING. I HAVE A LARGE
          COLLECTION OF EQUIPMENT TO MEET THE NEEDS OF ALL MY CLIENTS.
          <br />
          <br />
          <span className="font-bold">LANGUAGES</span> — ENGLISH, NATIVE SPEAKER
          + SPANISH, FLUENT
        </p>
      </div>

      <div className="px-10% grid grid-cols-12 mb-12" id="contact">
        <h1 className="text-2xl font-bold col-span-12 md:col-span-3">
          CONTACT
        </h1>
        <div className="col-span-12 md:col-span-9">
          FOR ALL PRICING AND BOOKING INQUIRIES, PLEASE FILL OUT THE FORM BELOW.
          PLEASE INCLUDE AS MUCH RELEVANT INFORMATION AS POSSIBLE, FOR EXAMPLE,
          THE LOCATION OF THE PROJECT, AMOUNT OF IMAGES NEEDED, INTENDED USAGE
          OF THE IMAGES, AND TIMEFRAME FOR PROJECT COMPLETION. I LOOK FORWARD TO
          HEARING FROM YOU.
        </div>
        <form
          data-netlify="true"
          name="contact"
          className="w-full col-span-12 grid gap-y-4 grid-cols-12 mt-4"
        >
          <label className="col-span-12 md:col-span-3 font-semibold">
            NAME
          </label>
          <input
            name="name"
            placeholder="NAME"
            className="col-span-12 md:col-span-9 bg-black border-solid border-2 px-12 py-4"
          />
          <label className="col-span-12 md:col-span-3 font-semibold">
            EMAIL
          </label>
          <input
            name="name"
            placeholder="EXAMPLE@EXAMPLE.COM"
            className="col-span-12 md:col-span-9 bg-black border-solid border-2 px-12 py-4"
          />
          <label className="col-span-12 md:col-span-3 font-semibold">
            MESSAGE
          </label>
          <textarea
            name="message"
            placeholder="MESSAGE"
            className="col-span-12 md:col-span-9 bg-black border-solid border-2 px-12 py-4 h-32"
          />
          <div className="col-span-12 md:flex md:justify-end">
            <button className="bg-white text-black px-12 py-4 w-full md:w-auto">
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("projects"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
