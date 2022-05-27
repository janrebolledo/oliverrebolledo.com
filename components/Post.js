import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/projects/${post.slug}`} passHref>
      <div tabIndex="0" className="hover:cursor-pointer">
        <img
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          className="aspect-video md:hover:opacity-50 min-w-full transition-all"
        />
      </div>
    </Link>
  );
}
