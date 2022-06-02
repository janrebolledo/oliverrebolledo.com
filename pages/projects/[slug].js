import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";

export default function ProjectPage({
  frontmatter: { title, date, excerpt, cover_image },
  slug,
  content,
}) {
  return (
    <section className="py-24 px-10% uppercase">
      <Head>
        <title>Desvo Filmz — {title}</title>
        <meta name="description" content={excerpt} />
        {/* Facebook Tags */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content={"Desvo Filmz — " + title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={"https://desvofilmz.com" + cover_image}
        />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={"Desvo Filmz — " + title} />
        <meta property="twitter:description" content={excerpt} />
        <meta
          property="twitter:image"
          content={"https://desvofilmz.com" + cover_image}
        />
      </Head>
      <Link href="/" passHref>
        <p className="bg-white text-black px-12 py-8 mt-2 mb-4 mr-2 hover:bg-[#ffffff40] transition-all border-solid border-2 w-max cursor-pointer">
          Back
        </p>
      </Link>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mb-4 mt-2 text-neutral-500">{date}</p>
      {/* <img src={cover_image} alt="Project Image" /> */}
      <div
        className="leading-8 mt-4 project-content w-full"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </section>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
