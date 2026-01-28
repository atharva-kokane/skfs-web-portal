import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a111f] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-wrap justify-start gap-16 mb-10">
          {/* Brand Section */}
          <div className="flex-1 min-w-[250px] space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#10b981] p-2 rounded-lg">
                <i className="ri-sofa-line text-white text-2xl"></i>
              </div>
              <span className="text-[#10b981] font-semibold text-xl">
                Shree Krishna Furniture
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Crafting custom furniture for your dream home. Quality materials,
              affordable pricing, and expert craftsmanship.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="min-w-[150px]">
            <h3 className="text-[#10b981] font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:underline transition">
                  Our Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline transition">
                  Testimonial
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin/login"
                  className="inline-block px-4 py-1.5 border border-gray-500 rounded text-xs hover:bg-white hover:text-black transition"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products Section */}
          <div className="min-w-[180px]">
            <h3 className="text-[#10b981] font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/gallery?category=Bedroom" className="hover:underline transition">
                  Bed Room
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=Living Room" className="hover:underline transition">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=Dining" className="hover:underline transition">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=Living Room" className="hover:underline transition">
                  Accent Furniture
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=Living Room" className="hover:underline transition">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=All" className="hover:underline transition">
                  Outdoor
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=All" className="hover:underline transition">
                  Antique Furniture
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=All" className="hover:underline transition">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=All" className="hover:underline transition">
                  Chandeliers
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Us Section */}
          <div className="flex-1 min-w-[300px] space-y-4">
            <h3 className="text-[#10b981] font-semibold mb-6">Reach Us</h3>

            {/* Google Maps Embed Box */}
            <div className="w-full h-40 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5647!2d73.9015!3d18.5437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMyJzM3LjMiTiA3M8KwNTQnMDUuNCJF!5e0!3m2!1sen!2sin!4v1706260000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details & Socials */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-phone-fill text-[#10b981]"></i>
                <span>+91 98349 72706</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-mail-fill text-[#10b981]"></i>
                <span>info@shreekrishnafurniture.com</span>
              </div>
              <div className="flex gap-4 pt-2 text-xl text-gray-400">
                <i className="ri-facebook-circle-fill cursor-pointer hover:text-[#10b981] transition"></i>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line cursor-pointer hover:text-[#10b981] transition"></i>
                </a>
                <i className="ri-twitter-x-fill cursor-pointer hover:text-[#10b981] transition"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          © 2026 Shree Krishna Furniture Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
