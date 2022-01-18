import Link from "next/link";

export default function Services() {
  return (
    <section className="services-section">
      <h2>WORK</h2>
      <div className="services-container">
        <div className="services-card">
          <h4>PHOTOGRAPHY</h4>
          <Link href="/work/photography">
            <p className="button explore-button">EXPLORE</p>
          </Link>
        </div>
        <div className="services-card">
          <h4>GRAPHIC DESIGN</h4>
          <Link href="/work/graphic-design">
            <p className="button explore-button">EXPLORE</p>
          </Link>
        </div>
        <div className="services-card">
          <h4>SOCIAL MEDIA MANAGEMENT</h4>
          <Link href="/work/social-media">
            <p className="button explore-button">EXPLORE</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
