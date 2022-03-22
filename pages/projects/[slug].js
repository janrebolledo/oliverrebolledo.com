import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";

export default function ProjectPage({
  frontmatter: { title, date, cover_image },
  slug,
  excerpt,
  content,
}) {
  return (
    <section className="p-12 md:w-3/4 md:h-screen overflow-y-auto">
      <Head>
        <title>Oliver Rebolledo — {title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <Link href="/" passHref>
        <p className="mb-4 cursor-pointer text-white transition-all hover:text-gray-300">
          ← Back
        </p>
      </Link>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mb-4 mt-2 text-neutral-500">{date}</p>
      <img src={cover_image} alt="Project Image" />
      <div
        className="leading-8 mt-4"
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
