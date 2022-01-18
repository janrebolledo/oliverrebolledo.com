import Link from "next/link";

export default function Services() {
  return (
    <section className="services-section">
      <h2>WORK</h2>
      <div className="services-container">
        <div className="services-card">
          <div className="services-info">
            <h4>PHOTOGRAPHY</h4>
            <Link href="/work/photography">
              <p className="button explore-button">EXPLORE</p>
            </Link>
          </div>
        </div>
        <div className="services-card">
          <div className="services-info">
            <h4>GRAPHIC DESIGN</h4>
            <Link href="/work/graphic-design">
              <p className="button explore-button">EXPLORE</p>
            </Link>
          </div>
        </div>
        <div className="services-card">
          <div className="services-info">
            <h4>SOCIAL MEDIA MANAGEMENT</h4>
            <Link href="/work/social-media">
              <p className="button explore-button">EXPLORE</p>
            </Link>
          </div>
        </div>
        <div className="services-card">
          <div className="services-info">
            <h4>???</h4>
            <Link href="/work/">
              <p className="button explore-button">
                EXPLORE <span className="material-icons">lock</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
