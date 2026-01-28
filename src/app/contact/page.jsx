"use client";

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Poppins } from "next/font/google";

// Load Poppins font
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function ContactPage() {
    return (
        <section
            className={`mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 bg-white ${poppins.className}`}
        >
            {/* Page Title */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900">
                    Contact Us
                </h1>
                <p className="text-gray-600 mt-4 text-lg">
                    We’d love to hear from you. Get in touch with us today.
                </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-stretch">
                
                {/* ================= LEFT: INFO CARD ================= */}
                <div className="border-4 border-orange-500 rounded-lg">
                    <div className="bg-[#F9FAFB] shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                                Shree Krishna Furniture
                            </h2>

                            {/* Address */}
                            <p className="text-gray-600 text-lg md:text-xl font-medium">
                                Address
                            </p>
                            <div className="flex items-start gap-3">
                                <MdLocationOn className="w-6 h-6 text-orange-500 mt-1" />
                                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                    123 Furniture Street,<br />
                                    Interior Market,<br />
                                    Pune, Maharashtra
                                </p>
                            </div>

                            {/* Mobile */}
                            <p className="text-gray-600 text-lg md:text-xl font-medium">
                                Mobile
                            </p>
                            <div className="flex items-center gap-3">
                                <MdPhone className="w-6 h-6 text-orange-500" />
                                <p className="text-gray-700 text-lg md:text-xl">
                                    +91 98765 43210
                                </p>
                            </div>

                            {/* Email */}
                            <p className="text-gray-600 text-lg md:text-xl font-medium">
                                Email
                            </p>
                            <div className="flex items-center gap-3">
                                <MdEmail className="w-6 h-6 text-orange-500" />
                                <p className="text-gray-700 text-lg md:text-xl">
                                    info@skfurniture.com
                                </p>
                            </div>

                            {/* Footer text */}
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-2">
                                Visit our showroom or send us a message and our team
                                will get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT: FORM CARD ================= */}
                <div className="border-4 border-orange-500 rounded-lg">
                    <div className="bg-[#F9FAFB] shadow-lg rounded-lg p-6 flex flex-col h-full">
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mb-4">
                            Send Us a Message
                        </h2>

                        <form className="space-y-3 flex-1 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-600 font-medium text-lg md:text-xl mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-600 font-medium text-lg md:text-xl mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-600 font-medium text-lg md:text-xl mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder="Write your message here..."
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors mt-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
