"use client";

// Import React hooks
import { useState } from "react";
// Import Link from next/link
import Link from "next/link";
import Image from "next/image";

// Import icons from react-icons library (Material Design icons)
import {
    MdKingBed,        // Bed icon for Bed Room
    MdChair,          // Chair icon for Living Room
    MdRestaurant,     // Restaurant/dining icon for Dining Room
    MdWeekend,        // Sofa icon for Sofa
    MdDeck,           // Deck icon for Outdoor
    MdHistory,        // History icon for Antique Furniture
    MdHome,           // Home icon for Home Decor
    MdChevronRight,   // Right arrow for dropdown menu items
} from "react-icons/md";

// Import Game Icons for specific items
import { GiOfficeChair } from "react-icons/gi";

/**
 * ========================================
 * CATEGORIES DATA
 * ========================================
 */
const categories = [
    {
        id: 1,
        name: "BED ROOM",
        icon: MdKingBed,
        iconSrc: "/icons/bed.svg",
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
        iconSrc: "/icons/living.svg",
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
        iconSrc: "/icons/table-etiquette.svg",
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
        iconSrc: "/icons/seater-sofa.svg",
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
        iconSrc: "/icons/chairs.svg",
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
        iconSrc: "/icons/shelf.svg",
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
        iconSrc: "/icons/lamp.svg",
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

/**
 * ========================================
 * CATEGORY NAVIGATION COMPONENT
 * ========================================
 */
export function CategoryNav() {
    // State to track which category is currently being hovered
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <div className="relative">
            {/* Category navigation bar with darker walnut background */}
            <nav className="hidden lg:block bg-[#5A3A28] text-white">
                <div className="container mx-auto px-4">
                    {/* Flex container to distribute categories evenly - Scroll on Mobile, Wrap on Tablet+ */}
                    <div className="flex items-center overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth gap-4 lg:gap-x-4 xl:gap-x-8 pb-2 md:pb-0 justify-between lg:flex-nowrap">

                        {/* ========================================
                CATEGORY ITEMS LOOP
                ======================================== */}
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const isLastItem = index === categories.length - 1;

                            return (
                                <div
                                    key={category.id}
                                    className="relative"
                                    onMouseEnter={() => setActiveCategory(category.id)}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    <Link
                                        href={`/gallery?category=${encodeURIComponent(category.name)}`}
                                        className="flex flex-col items-center gap-2 py-4 px-4 hover:bg-[#4A2F20] transition-colors min-w-[100px] md:min-w-0 flex-shrink-0"
                                    >
                                        {category.iconSrc ? (
                                            <div className="w-8 h-8 relative">
                                                <Image
                                                    src={category.iconSrc}
                                                    alt={category.name}
                                                    fill
                                                    className="object-contain invert brightness-0"
                                                />
                                            </div>
                                        ) : (
                                            <Icon className="w-8 h-8" />
                                        )}
                                        <span className="text-sm font-medium whitespace-nowrap">
                                            {category.name}
                                        </span>
                                    </Link>

                                    {/* ========================================
                      DROPDOWN MENU
                      ======================================== */}
                                    {category.subcategories && activeCategory === category.id && (
                                        <div
                                            className={`hidden md:block absolute top-full mt-0 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50 ${isLastItem ? 'right-0' : 'left-0'
                                                }`}
                                        >
                                            <div className="py-2">
                                                {category.subcategories.map((subcategory, subIndex) => {
                                                    // Determine name and href based on whether subcategory is string or object
                                                    const name = typeof subcategory === 'string' ? subcategory : subcategory.name;
                                                    const href = typeof subcategory === 'string' ? '#' : subcategory.href;

                                                    return (
                                                        <Link
                                                            key={subIndex}
                                                            href={href}
                                                            className="flex items-center justify-between px-4 py-1 text-[#5A3A28] hover:bg-gray-50 transition-colors group"
                                                        >
                                                            <span className="font-medium">{name}</span>
                                                            <MdChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#5A3A28]" />
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
}
