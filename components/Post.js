import Link from "next/link";

export default function Post({ post }) {
  return (
    <Link href={`/projects/${post.slug}`} passHref>
      <p tabIndex="0">
        <div>
          <img
            src={post.frontmatter.cover_image}
            alt=""
            className="aspect-square hover:opacity-50"
          />
        </div>
      </p>
    </Link>
  );
}
