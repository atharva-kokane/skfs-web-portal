"use client";

// Import useState and useEffect from react
import { useState, useEffect } from "react";
// Import search icon from react-icons (Material Design icons library)
import { MdSearch, MdMenu, MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// Import home icon from react-icons
import { MdHome } from "react-icons/md";
// Import Link from next/link for client-side navigation
import Link from "next/link";
import {
    MdKingBed, MdChair, MdRestaurant, MdWeekend, MdDeck, MdHistory
} from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";

/**
 * ========================================
 * HEADER COMPONENT
 * ========================================
 */
export function Header() {
    const [currentTermIndex, setCurrentTermIndex] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    const searchTerms = ["furniture", "sofa", "bed", "lamps", "dining table", "wardrobe"];

    const categories = [
        {
            id: 1,
            name: "BED ROOM",
            icon: MdKingBed,
            subcategories: [
                { name: "Single Beds", href: "/beds/single" },
                { name: "Double Beds", href: "/beds/double" },
                { name: "Queen Beds", href: "/beds/queen" },
                { name: "King Beds", href: "/beds/king" },
                "Bunk Beds",
                "Daybeds",
                "Platform Beds",
                "Sofa Beds",
            ]
        },
        {
            id: 2,
            name: "LIVING ROOM",
            icon: MdChair,
            subcategories: [
                "Sofas & Couches",
                "Sectionals",
                "Loveseats",
                "Armchairs",
                "Recliners",
                "Coffee Tables",
                "TV Stands",
                "Side Tables",
            ]
        },
        {
            id: 3,
            name: "DINING ROOM",
            icon: MdRestaurant,
            subcategories: [
                "Twelve Seater Dining Tables",
                "Ten Seater Dining Tables",
                "Eight Seater Dining Tables",
                "Six Seater Dining Tables",
                "Four Seater Dining Tables",
                "Dining Chairs",
                "Side Board",
                "Crockery Unit",
                "Dining Benches",
                "Bar Units, Bar Cabinets & Trolleys",
                "Bar Stools & Chairs",
            ]
        },
        {
            id: 4,
            name: "SOFA",
            icon: MdWeekend,
            subcategories: [
                "Sofas & Couches",
                "Sectionals",
                "Loveseats",
                "Armchairs",
                "Recliners",
                "Coffee Tables",
                "TV Stands",
                "Side Tables",
            ]
        },
        {
            id: 5,
            name: "OUTDOOR",
            icon: MdDeck,
            subcategories: [
                "Outdoor Tables",
                "Outdoor Chairs",
                "Outdoor Sets",
                "Outdoor Lamps",
            ]
        },
        {
            id: 6,
            name: "ANTIQUE FURNITURE",
            icon: MdHistory,
            subcategories: [
                "Antique Tables",
                "Antique Chairs",
                "Antique Sets",
                "Antique Lamps",
            ]
        },
        {
            id: 7,
            name: "HOME DECOR",
            icon: MdHome,
            subcategories: [
                "Home Decor",
                "Hanging Lights or Ceiling Lights",
                "Wall Mounted Lights",
                "Table Lights",
                "Floor Lights",
                "Wall Decor with Lights",
                "Wall Decor",
                "Wall Mounted Mirrors",
                "Floor Mounted Mirrors",
                "Full Body Mirrors",
            ]
        },
        {
            id: 8,
            name: "CHAIRS",
            icon: GiOfficeChair,
            subcategories: [
                "Office Chairs",
                "Armchairs",
                "Bar stools",
                "Chair pads",
                "Chaise lounges",
                "Desk Chairs",
                "Dining Chairs",
            ]
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTermIndex((prevIndex) => (prevIndex + 1) % searchTerms.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <header className="bg-[#F9F5F0] border-b border-[#E5E7EB]">
            {/* Main container - uses flex and justify-between for spacing */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                {/* ========================================
            LOGO SECTION
            ======================================== */}
                {/* Left side: Logo with icon and company name */}
                <div className="flex items-center gap-2">
                    {/* Logo icon container - orange background with rounded corners */}
                    <div className="w-10 h-10 bg-[#0EA5E9] rounded-lg flex items-center justify-center">
                        {/* Home icon from react-icons */}
                        <MdHome className="w-6 h-6 text-white" />
                    </div>
                    {/* Company name */}
                    <span className="text-xl font-bold text-gray-900">Shree Krishna Furniture</span>
                </div>

                {/* ========================================
            SEARCH BAR SECTION - START
            ======================================== */}
                <div className="hidden lg:block flex-1 max-w-md mx-4 xl:mx-8">
                    <div className="relative">
                        {/* Search input field */}
                        <input
                            type="text"
                            placeholder={isFocused ? "" : `Search for ${searchTerms[currentTermIndex]}...`}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="w-full pl-4 pr-10 py-2 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
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
                <nav className="hidden lg:flex items-center gap-4 xl:gap-8">

                    {/* 🔗 HOME LINK */}
                    <Link
                        href="/"
                        className="text-lg text-gray-900 font-medium hover:text-[#0EA5E9] transition-colors"
                    >
                        Home
                    </Link>

                    {/* 🔗 SERVICES LINK */}
                    <Link
                        href="/services"
                        className="text-lg text-gray-900 font-medium hover:text-[#0EA5E9] transition-colors"
                    >
                        Services
                    </Link>

                    {/* 🔗 GALLERY LINK */}
                    <Link
                        href="/gallery"
                        className="text-lg text-gray-900 font-medium hover:text-[#0EA5E9] transition-colors"
                    >
                        Gallery
                    </Link>

                    {/* 🔗 CONTACT LINK */}
                    <Link

                        href="/contact"
                        className="text-lg text-gray-900 font-medium hover:text-[#0EA5E9] transition-colors"


                    >
                        Contact
                    </Link>

                    {/* Call-to-action button */}
                    <Link href="/contact-us">
                        <button
                            className="bg-[#0EA5E9] text-white px-6 py-2 rounded-[14px] font-medium hover:bg-[#0284C7] transition-colors"
                        >
                            Request Quote
                        </button>
                    </Link>
                </nav>
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-2xl text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>

            {/* Mobile Search Bar (Visible only on mobile) */}
            <div className="lg:hidden px-4 pb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder={`Search for ${searchTerms[currentTermIndex]}...`}
                        className="w-full pl-4 pr-10 py-2 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <MdSearch className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute top-[130px] left-0 right-0 z-50 shadow-lg">
                    <nav className="flex flex-col p-4 space-y-4">
                        <Link href="/" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

                        {/* Our Products Accordion */}
                        <div>
                            <button
                                onClick={() => setIsProductsOpen(!isProductsOpen)}
                                className="flex items-center justify-between w-full text-lg font-medium text-gray-900"
                            >
                                <span>Our Products</span>
                                {isProductsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </button>

                            {isProductsOpen && (
                                <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-orange-100">
                                    {categories.map((category) => {
                                        const isOpen = activeSubCategory === category.id;

                                        return (
                                            <div key={category.id}>
                                                <button
                                                    onClick={() => setActiveSubCategory(isOpen ? null : category.id)}
                                                    className="flex items-center justify-between w-full text-gray-900 hover:text-sky-500 py-1"
                                                >
                                                    <span className="capitalize">{category.name.toLowerCase()}</span>
                                                    {isOpen ? <MdKeyboardArrowUp className="w-4 h-4" /> : <MdKeyboardArrowDown className="w-4 h-4" />}
                                                </button>

                                                {isOpen && (
                                                    <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-gray-100">
                                                        {category.subcategories.map((sub, idx) => {
                                                            const isString = typeof sub === 'string';
                                                            const name = isString ? sub : sub.name;
                                                            const href = isString ? '#' : sub.href;

                                                            return (
                                                                <Link
                                                                    key={idx}
                                                                    href={href}
                                                                    className="text-sm text-gray-800 hover:text-sky-500"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {name}
                                                                </Link>
                                                            );
                                                        })}
                                                        <Link
                                                            href={`/gallery?category=${encodeURIComponent(category.name)}`}
                                                            className="text-sm text-gray-900 hover:text-sky-500 font-medium"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            View All
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        <Link href="/services" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                        <Link href="/gallery" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                        <Link href="/contact" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full bg-sky-500 text-white px-6 py-2 rounded-[14px] font-medium hover:bg-sky-600 transition-colors">
                                Request Quote
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
