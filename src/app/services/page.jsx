"use client";

import Link from "next/link";

export default function ServicesPage() {
  const data = [
    {
      title: "Beds",
      description:
        "Custom-designed beds with storage options, headboards, and platform designs",
      features: [
        "King & Queen Size",
        "Storage Beds",
        "Custom Headboards",
        "Upholstered Options",
      ],
      price: "₹15,000 - ₹80,000",
      image:
        "https://casagold.in/cdn/shop/articles/Scandinavian_Wavy_Rattan_Bed_1.webp?v=1736146037&width=2048",
    },
    {
      title: "Wardrobes",
      description:
        "Space-efficient wardrobes with smart storage solutions and modern designs",
      features: [
        "Sliding Doors",
        "Walk-in Closets",
        "Mirror Finish",
        "Soft-Close Drawers",
      ],
      price: "₹25,000 - ₹1,50,000",
      image:
        "https://ik.imagekit.io/2xkwa8s1i/img/wardrobes/r1/WWRB4DMH1GINGHAMCWR1/1.jpg?tr=w-1200",
    },
    {
      title: "Sofas & Seating",
      description:
        "Comfortable and stylish sofas, sectionals, and living room seating",
      features: [
        "L-Shaped Sofas",
        "Recliners",
        "Fabric & Leather",
        "Modular Designs",
      ],
      price: "₹20,000 - ₹1,20,000",
      image:
        "https://images.unsplash.com/photo-1759722668253-1767030ad9b2?fm=jpg&w=1080",
    },
    {
      title: "Modular Kitchen",
      description:
        "Modern modular kitchens designed for efficiency, style, and durability",
      features: [
        "Custom Layouts",
        "Soft-Close Cabinets",
        "Premium Hardware",
        "Easy Maintenance",
      ],
      price: "₹1,20,000 - ₹5,00,000",
      image:
        "https://images.unsplash.com/photo-1544614940-686234a602e9?fm=jpg&w=1080",
    },
    {
      title: "TV Units",
      description:
        "Stylish TV units that enhance your living room aesthetics",
      features: [
        "Wall-Mounted Units",
        "Storage Drawers",
        "Custom Finishes",
        "LED Panels",
      ],
      price: "₹18,000 - ₹90,000",
      image:
        "https://framerusercontent.com/images/osEW4PNZOf6lmRPT3yeYPuie65I.png?width=1600&height=900",
    },
    {
      title: "Study Tables",
      description:
        "Ergonomic study tables designed for productivity and comfort",
      features: [
        "Compact Designs",
        "Cable Management",
        "Built-in Storage",
        "Custom Sizes",
      ],
      price: "₹8,000 - ₹45,000",
      image:
        "https://ikiru.in/cdn/shop/products/buy-study-table-wooden-side-study-table-with-drawer-or-work-desk-for-living-room-by-the-home-dekor-on-ikiru-online-store-1.jpg?v=1739197530",
    },
    {
      title: "Dining Sets",
      description:
        "Elegant dining sets perfect for family meals and gatherings",
      features: [
        "4 & 6 Seater Options",
        "Solid Wood",
        "Modern Designs",
        "Easy Maintenance",
      ],
      price: "₹25,000 - ₹1,80,000",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?fm=jpg&w=1080",
    },
  ];

  return (
    <div className="services-page-wrapper font-sans">
      {/* Poppins Google Font */}


      <style>{`
        .services-page-wrapper {
          margin: 0;
          margin: 0;
          background: #f7f7f7;
        }

        .service-hero-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 15px;
          padding-top: 40px;
        }

        .service-hero-header h2 {
          font-size: 38px;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
        }

        .service-hero-header p {
          font-size: 20px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .services-container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .service-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 35px rgba(0,0,0,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.15);
        }

        .service-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .service-card:hover img {
          transform: scale(1.05);
        }

        .service-content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .service-logo {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: #ff4d00;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }

        .service-content h3 {
          margin: 0;
          color: #ff4d00;
          font-weight: 600;
          font-size: 1.17em;
        }

        .service-desc {
          font-size: 14px;
          color: #666;
          margin-bottom: 14px;
        }

        .service-content strong {
          font-size: 14px;
          margin-bottom: 6px;
          display: block; 
        }

        .service-content ul {
          padding-left: 18px;
          margin: 8px 0 20px;
        }

        .service-content li {
          font-size: 13.5px;
          margin-bottom: 6px;
          color: #333;
        }

        .service-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .service-price {
          color: #ff4d00;
          font-weight: 600;
          font-size: 14px;
        }

        .service-cta-box {
          background-color:#ef6c00;
          color: black;
          padding: 20px 170px;
          text-align: center;
          border-radius: 12px;
          max-width: 700px;
          margin: 50px auto;
        }

        .service-cta-box h2 {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .service-cta-box p {
          font-size: 18px;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .service-white-btn {
          background-color: white;
          color: orange;
          border: none;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          cursor: pointer;
        }

        .service-white-btn:hover {
          background-color: black;
          color: white;
        }

        .service-action-btn {
          padding: 9px 18px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #fff;
          cursor: pointer;
          cursor: pointer;
          transition: all 0.25s ease;
          font-size: 0.9rem;
        }

        .service-action-btn:hover {
          background: #ff4d00;
          color: #fff;
          border-color: #ff4d00;
        }
        
        @media (max-width: 768px) {
           .service-cta-box {
              padding: 20px;
              margin: 20px;
           }
           .service-hero-header h2 {
              font-size: 28px;
           }
           .service-card img {
              height: 200px;
              /* Ensure image is not cut off weirdly */
              object-position: center;
           }
        }
      `}</style>

      <div className="service-hero-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive furniture solutions tailored to your needs. From single
          pieces to complete home interiors, we bring your vision to life with
          quality craftsmanship.
        </p>
      </div>

      <div className="services-container">
        {data.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="service-content">
              <div className="service-title-row">
                <div className="service-logo">★</div>
                <h3>{item.title}</h3>
              </div>

              <p className="service-desc">{item.description}</p>

              <strong>Key Features</strong>
              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="service-footer">
                <span className="service-price">{item.price}</span>

                <Link href="/contact-us" className="service-action-btn inline-block no-underline">Get Quote</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="service-cta-box">
        <h2>Ready to Get Started?</h2>

        <p>
          Get a personalized quote with our AI-powered assistant and see
          estimated prices instantly!
        </p>

        <Link href="/contact-us" className="service-white-btn inline-block no-underline">
          Request Free Quote
        </Link>
      </div>
    </div>
  );
}
