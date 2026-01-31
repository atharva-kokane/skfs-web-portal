import Link from "next/link";
import {
  RiPhoneFill,
  RiMailFill,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiSofaLine
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-gray-300 py-8 md:py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Brand Section */}
          <div className="flex-1 min-w-[250px] space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#10b981] p-2 rounded-lg">
                <RiSofaLine className="text-white text-2xl" />
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

          {/* Links Wrapper - Side by side on mobile */}
          <div className="flex flex-row gap-4 justify-between w-full md:w-auto">
            {/* Quick Links Section */}
            <div className="flex-1">
              <h3 className="text-[#10b981] font-semibold mb-4 md:mb-6">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3 text-sm">
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
            <div className="flex-1">
              <h3 className="text-[#10b981] font-semibold mb-4 md:mb-6">Our Products</h3>
              <ul className="space-y-2 md:space-y-3 text-sm">
                <li>
                  <Link href="/gallery?category=Bedroom" className="hover:underline transition">
                    Bed Room
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=Living%20Room" className="hover:underline transition">
                    Living Room
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=Dining" className="hover:underline transition">
                    Dining Room
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=Living%20Room" className="hover:underline transition">
                    Accent Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=Sofa" className="hover:underline transition">
                    Sofa
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=Outdoor" className="hover:underline transition">
                    Outdoor
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=Antique%20Furniture" className="hover:underline transition">
                    Antique Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=Home%20Decor" className="hover:underline transition">
                    Home Decor
                  </Link>
                </li>
                <li>
                  <Link href="/gallery?category=Chandeliers" className="hover:underline transition">
                    Chandeliers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Reach Us Section */}
          <div className="flex-1 w-full md:w-auto md:min-w-[300px] space-y-4">
            <h3 className="text-[#10b981] font-semibold mb-6">Reach Us</h3>

            {/* Google Maps Embed Box */}
            <div className="w-full h-40 rounded-lg overflow-hidden relative">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5647!2d73.9015!3d18.5437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMyJzM3LjMiTiA3M8KwNTQnMDUuNCJF!5e0!3m2!1sen!2sin!4v1706260000000"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 border border-gray-700 rounded-lg pointer-events-none"></div>
            </div>

            {/* Contact Details & Socials */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <RiPhoneFill className="text-[#10b981]" />
                <span>+91 98349 72706</span>
              </div>
              <div className="flex items-center gap-2">
                <RiMailFill className="text-[#10b981]" />
                <span>info@shreekrishnafurniture.com</span>
              </div>
              <div className="flex gap-4 pt-2 text-xl text-gray-400">
                <RiFacebookCircleFill className="cursor-pointer hover:text-[#10b981] transition" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <RiInstagramLine className="cursor-pointer hover:text-[#10b981] transition" />
                </a>
                <RiTwitterXFill className="cursor-pointer hover:text-[#10b981] transition" />
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
