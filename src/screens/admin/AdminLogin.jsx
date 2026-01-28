"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === "admin123") {
            router.push("/admin/dashboard");
        } else {
            alert("Invalid password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fdf6e9] font-sans">
            <div className="w-full max-w-md bg-white rounded-xl border border-black/10 flex flex-col items-center gap-6 mx-4 shadow-sm">
                <div className="w-full px-6 pt-6 flex flex-col items-center">
                    {/* Lock Icon */}
                    <div className="w-16 h-16 bg-[#fff2ed] rounded-full flex items-center justify-center mb-6">
                        <Lock className="w-8 h-8 text-[#EA580C]" />
                    </div>

                    {/* Header */}
                    <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2 text-center">Admin Login</h1>
                    <p className="text-[#666666] text-center text-sm leading-relaxed max-w-[280px]">
                        Enter your password to access the admin dashboard
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="w-full px-6 pb-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#1a1a1a] block">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter admin password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-9 px-3 py-1 bg-[#f3f3f5] border border-transparent rounded-md focus:ring-3 focus:ring-orange-600/50 focus:border-orange-600 outline-none transition-all placeholder:text-gray-400 text-sm md:text-sm text-[#111827] font-normal"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-9 bg-[#EA580C] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-[#C2410C] transition-all shadow-sm flex items-center justify-center"
                    >
                        Login
                    </button>

                    {/* Footer info moved inside for better gap control */}
                    <p className="pt-2 text-sm text-[#999999] text-center font-normal">
                        Demo password: <span className="text-[#666666]">admin123</span>
                    </p>
                </form>
            </div>
        </div>
    );
}
