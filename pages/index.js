import Head from "next/head";

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

      <div className="p-12 md:px-24 md:mb-12 w-full landing-section ab-chanel">
        <div className="flex flex-col w-full md:flex-row md:items-end md:justify-between overflow-hidden">
          <h1 className="text-6xl lg:text-8xl font-bold overflow-hidden">
            <span className="ani-1">PHOTO</span>
            <br />
            <span className="ani-2">&amp;</span>{" "}
            <span className="ani-3">VIDEO</span>
          </h1>
          <p className="my-2 ani-4 md:pl-2">
            ENGINEERED FOR YOUR HIGH-END BRAND
          </p>
        </div>
      </div>

      <div id="projects" className="bg-red-700 p-12 md:px-24">
        <h2 className="text-2xl mb-4 font-bold">PROJECTS</h2>
        <div className="grid flex-row gap-2 grid-cols-1 md:grid-cols-2">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

// {
//   posts.map((post, index) => <Post key={index} post={post} />);
// }

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
