"use client";

// Import React hooks
import { useState } from "react";
// Import Link from next/link
import Link from "next/link";

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
        subcategories: [
            "Single Beds",
            "Double Beds",
            "Queen Beds",
            "King Beds",
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
            {/* Category navigation bar with turquoise background */}
            <nav className="bg-[#00CCC0] text-white">
                <div className="container mx-auto px-4">
                    {/* Flex container to distribute categories evenly */}
                    <div className="flex items-center justify-around">

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
                                    <button className="flex flex-col items-center gap-2 py-4 px-4 hover:bg-[#00B8AD] transition-colors">
                                        <Icon className="w-6 h-6" />
                                        <span className="text-sm font-medium whitespace-nowrap">
                                            {category.name}
                                        </span>
                                    </button>

                                    {/* ========================================
                      DROPDOWN MENU
                      ======================================== */}
                                    {category.subcategories && activeCategory === category.id && (
                                        <div
                                            className={`absolute top-full mt-0 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50 ${isLastItem ? 'right-0' : 'left-0'
                                                }`}
                                        >
                                            <div className="py-2">
                                                {category.subcategories.map((subcategory, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href="#"
                                                        className="flex items-center justify-between px-4 py-1 text-[#00CCC0] hover:bg-gray-50 transition-colors group"
                                                    >
                                                        <span className="font-medium">{subcategory}</span>
                                                        <MdChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#00CCC0]" />
                                                    </Link>
                                                ))}
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
