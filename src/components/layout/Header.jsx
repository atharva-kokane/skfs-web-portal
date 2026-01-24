"use client";

// Import search icon from react-icons (Material Design icons library)
import { MdSearch } from "react-icons/md";
// Import home icon from react-icons
import { MdHome } from "react-icons/md";
// Import Link from next/link for client-side navigation
import Link from "next/link";

/**
 * ========================================
 * HEADER COMPONENT
 * ========================================
 */
export function Header() {

    return (
        <header className="bg-white border-b border-gray-200">
            {/* Main container - uses flex and justify-between for spacing */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                {/* ========================================
            LOGO SECTION
            ======================================== */}
                {/* Left side: Logo with icon and company name */}
                <div className="flex items-center gap-2">
                    {/* Logo icon container - orange background with rounded corners */}
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        {/* Home icon from react-icons */}
                        <MdHome className="w-6 h-6 text-white" />
                    </div>
                    {/* Company name */}
                    <span className="text-xl font-bold text-gray-900">Shree Krishna Furniture</span>
                </div>

                {/* ========================================
            SEARCH BAR SECTION - START
            ======================================== */}
                <div className="flex-1 max-w-md mx-8">
                    <div className="relative">
                        {/* Search input field */}
                        <input
                            type="text"
                            placeholder="Search for furniture..."
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        // TODO: Add onChange handler for search functionality
                        // onChange={(e) => handleSearch(e.target.value)}
                        />
                        {/* Search icon button - positioned absolutely on the right side */}
                        <button
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        // TODO: Add onClick handler for search submission
                        // onClick={handleSearchSubmit}
                        >
                            <MdSearch className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                {/* ========================================
            SEARCH BAR SECTION - END
            ======================================== */}

                {/* ========================================
            NAVIGATION MENU
            ======================================== */}
                <nav className="flex items-center gap-8">

                    {/* 🔗 HOME LINK */}
                    <Link
                        href="/"
                        className="text-gray-900 font-medium hover:text-orange-500 transition-colors"
                    >
                        Home
                    </Link>

                    {/* 🔗 SERVICES LINK */}
                    <Link
                        href="/services"
                        className="text-gray-900 font-medium hover:text-orange-500 transition-colors"
                    >
                        Services
                    </Link>

                    {/* 🔗 GALLERY LINK */}
                    <Link
                        href="/gallery"
                        className="text-gray-900 font-medium hover:text-orange-500 transition-colors"
                    >
                        Gallery
                    </Link>

                    {/* 🔗 CONTACT LINK */}
                    <Link
                        href="/contact"
                        className="text-gray-900 font-medium hover:text-orange-500 transition-colors"
                    >
                        Contact
                    </Link>

                    {/* Call-to-action button */}
                    <button
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                    >
                        Request Quote
                    </button>
                </nav>
            </div>
        </header>
    );
}
