import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/projects/${post.slug}`} passHref>
      <div
        tabIndex="0"
        className="post border-t-2 last:border-b-2 border-solid py-6 px-10%"
      >
        <img
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          className="md:hover:opacity-50 transition-all"
        />
        <div className="uppercase grid grid-cols-12 items-center hover:cursor-pointer">
          <p className="col-span-12 md:col-span-6 text-4xl">
            {post.frontmatter.title}
          </p>
          <p className="col-span-6 md:col-span-5">
            {post.frontmatter.project_scope}
          </p>
          <p className="col-span-6 md:col-span-1">{post.frontmatter.date}</p>
        </div>
      </div>
    </Link>
  );
}
