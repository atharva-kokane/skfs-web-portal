"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Bed,
    Armchair,
    ChefHat,
    DoorOpen,
    Award,
    CheckCircle,
    Hammer,
    Clock,
    DollarSign,
    Phone,
    Star
} from "lucide-react";

/* ---------------- HERO SLIDER ---------------- */

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const slides = [
        { image: "/images/hero1.jpeg", title: "Luxury Interior Design", subtitle: "Transform Your Space with Elegance" },
        { image: "/images/hero2.jpg", title: "Modern Modular Kitchens", subtitle: "Designed for Comfort" },
        { image: "/images/hero3.jpeg", title: "Living Room Sets", subtitle: "Premium Comfort" },
        { image: "/images/hero4.jpg", title: "Custom Wardrobes", subtitle: "Smart Storage Solutions" }
    ];

    useEffect(() => {
        const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4000);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative h-[60vh] md:h-[520px] overflow-hidden">
            {/* hero section image height */}
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img src={s.image} className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-3">{s.title}</h1>
                        <p className="mb-6">{s.subtitle}</p>

                        <div className="flex gap-4">
                            <Link href="/contact-us" className="bg-orange-500 px-6 py-2 rounded-[14px] inline-block">
                                Get Free Quote
                            </Link>
                            <Link href="/services" className="border px-6 py-2 rounded-[14px] inline-block">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

/* ---------------- MAIN APP ---------------- */

export default function App() {
    return (
        <div className="font-sans">

            <HeroSlider />

            {/* Welcome */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-16 md:py-24 px-6">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Welcome to Our Studio</h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        With years of experience in custom furniture design and manufacturing,
                        Shree Krishna Furniture Studio has been transforming houses into homes
                        with beautiful, functional furniture.
                        <br /><br />
                        We specialize in creating personalized furniture solutions that
                        perfectly match your style, space, and budget.
                    </p>

                    <Link href="/contact-us" className="bg-black text-white px-6 py-3 rounded-[14px] inline-block">
                        Contact Us
                    </Link>
                </div>

                <img src="/images/welcome.jpg" className="rounded-2xl shadow" />
            </section>

            {/* Stats */}
            <section className="bg-[#8B6E4E] py-16 md:py-24">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white px-6">
                    <Stat num="500+" label="Projects Completed" />
                    <Stat num="250+" label="Happy Clients" />
                    <Stat num="15+" label="Years Experience" />
                    <Stat num="98%" label="Satisfaction Rate" />
                </div>
            </section>

            {/* Services */}
            <section className="bg-gray-50 py-24">
                <h2 className="text-center text-3xl font-bold mb-12">Our Services</h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
                    <Service icon={Bed} title="Beds" />
                    <Service icon={DoorOpen} title="Wardrobes" />
                    <Service icon={Armchair} title="Sofas" />
                    <Service icon={ChefHat} title="Modular Kitchen" />
                </div>
            </section>

            {/* Why Choose */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                <h2 className="text-center text-3xl font-bold mb-12">Why Choose Us?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Feature
                        icon={Award}
                        title="Custom Design"
                        description="Tailored specifically to your style and space requirements."
                    />
                    <Feature
                        icon={CheckCircle}
                        title="Premium Quality"
                        description="We use only the finest materials for long-lasting durability."
                    />
                    <Feature
                        icon={Hammer}
                        title="Expert Craft"
                        description="Skilled artisans with years of experience in furniture making."
                    />
                    <Feature
                        icon={Clock}
                        title="On Time"
                        description="We value your time and ensure timely delivery of all projects."
                    />
                    <Feature
                        icon={DollarSign}
                        title="Affordable"
                        description="High-quality furniture at competitive, budget-friendly prices."
                    />
                    <Feature
                        icon={Phone}
                        title="Support"
                        description="Dedicated customer support to assist you even after delivery."
                    />
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We take pride in delivering exceptional furniture and service. Here's what our clients have to say about their experience with SKFS.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                    <Review
                        name="Rajesh Sharma"
                        rating={5}
                        text="Excellent craftsmanship! Our modular kitchen looks amazing and was delivered on time."
                    />

                    <Review
                        name="Pooja Patil"
                        rating={4}
                        text="Beautiful wardrobes and very professional team. Highly recommended."
                    />

                    <Review
                        name="Amit Pawar"
                        rating={5}
                        text="Great quality sofas and finishing. Totally satisfied with their service."
                    />
                </div>
            </section>

        </div>
    );
}

/* ---------------- HELPERS ---------------- */
// the count effect starts here
const Stat = ({ num, label }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef(null); // Use React.useRef to avoid "useRef is not defined" if not imported

    // Parse the number and suffix (e.g., "500+" -> 500 and "+")
    const targetNumber = parseInt(num.replace(/\D/g, ""), 10);
    const suffix = num.replace(/[0-9]/g, "");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2500; // 2.5 seconds
        const incrementTime = 20; // Update every 20ms
        const steps = duration / incrementTime;
        const increment = targetNumber / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
                setCount(targetNumber);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isVisible, targetNumber]);

    return (
        <div ref={ref}>
            <h2 className="text-4xl font-bold mb-2">
                {count}{suffix}
            </h2>
            <p className="text-orange-100">{label}</p>
        </div>
    );
};

// the count effect ends here

const Service = ({ icon: Icon, title }) => (
    <div className="bg-white p-8 rounded-2xl text-center transition-all duration-300 ease-out hover:-translate-y-2 shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] cursor-pointer">
        <Icon className="mx-auto mb-3 text-orange-500 w-8 h-8" />
        <h4 className="font-semibold">{title}</h4>
    </div>
);

const Feature = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-2xl flex gap-3 items-start transition-all duration-300 ease-out hover:-translate-y-2 shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] cursor-pointer">
        <Icon className="text-orange-500 mt-1 shrink-0" />
        <div>
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const Review = ({ name, text, rating }) => (
    <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative group">
        {/* Decorative Quote Icon */}
        <div className="absolute top-6 right-6 text-orange-100 group-hover:text-orange-200 transition-colors">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
            </svg>
        </div>

        <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={18}
                    fill={i < rating ? "#F59E0B" : "none"} // Yellow-500 fill
                    className={i < rating ? "text-[#F59E0B]" : "text-gray-300"}
                />
            ))}
        </div>

        <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10">
            "{text}"
        </p>

        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                {name.charAt(0)}
            </div>
            <div>
                <strong className="block text-gray-900 font-semibold">{name}</strong>
                <span className="text-xs text-green-600 font-medium">Verified Customer</span>
            </div>
        </div>
    </div>
);
