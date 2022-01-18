import Link from "next/link";

export default function Services() {
  return (
    <section className="services-section">
      <h2>SERVICES</h2>
      <div className="services-container">
        <div className="services-card">
          <h4>PHOTOGRAPHY</h4>
          <Link href="">
            <p className="underline">EXPLORE →</p>
          </Link>
          <img />
        </div>
        <div className="services-card">
          <h4>GRAPHIC DESIGN</h4>
          <Link href="">
            <p className="underline">EXPLORE →</p>
          </Link>
          <img />
        </div>
        <div className="services-card">
          <h4>PHOTOGRAPHY</h4>
          <Link href="">
            <p className="underline">EXPLORE →</p>
          </Link>
          <img />
        </div>
      </div>
    </section>
  );
}
