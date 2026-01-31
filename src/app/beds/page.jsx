"use client";

import Link from "next/link";
import { beds } from "./data/beds";

export default function BedsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Choose your Perfect Bed
                </h1>
                <h2 className="text-xl text-gray-600">
                    Find the ideal bed size for your space and comfort needs
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {beds.map((bed) => (
                    <div
                        key={bed.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={bed.image}
                                alt={bed.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="text-2xl font-bold text-gray-900 mb-2">
                                {bed.title}
                            </div>
                            <p className="text-gray-600 mb-4 flex-grow">{bed.description}</p>

                            <div className="space-y-2 mb-6 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Size:</span>
                                    <span>{bed.size}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Capacity:</span>
                                    <span>{bed.capacity}</span>
                                </div>
                            </div>

                            <Link
                                href={`/beds/${bed.id}`}
                                className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-center block"
                            >
                                Select Bed
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
