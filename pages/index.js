import Head from "next/head";

import Post from "../components/Post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ posts }) {
  return (
    <section className="p-12 overflow-y-auto md:w-3/4 md:h-screen">
      <Head>
        <title>Oliver Rebolledo — Photographer &amp; Videographer</title>
      </Head>
      <div className="grid flex-row gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
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
