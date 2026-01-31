"use client";

import Link from "next/link";
import { beds } from "../data/beds";

export default function KingBedPage() {
    const bed = beds.find((b) => b.id === "king");

    if (!bed) return <div className="text-center py-20">Bed not found</div>;

    return (
        <div className="container mx-auto px-4 py-2">
            <Link
                href="/beds"
                className="mb-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md transition-colors inline-flex items-center gap-2 w-fit"
            >
                ← Back to Beds
            </Link>

            <h1 className="text-3xl md:text-3xl font-medium text-center mb-6 text-gray-900">
                {bed.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bed.variants.map((variant, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={variant.image}
                                alt={`${bed.title} variant`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="text-2xl font-bold text-gray-900 mb-4">
                                ₹ {variant.price.toLocaleString("en-IN")}
                            </div>

                            <ul className="mb-6 space-y-2">
                                {variant.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <span className="mr-2 text-green-500">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact-us" className="block w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-center">
                                Get Quote
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
