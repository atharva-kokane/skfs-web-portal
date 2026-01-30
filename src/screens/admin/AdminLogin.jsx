"use client";

import { useState } from "react";
import { Lock, Mail, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { AuthError } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import { useEffect } from "react";

export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false); // Loading State

    useEffect(() => {
    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user?.email === "skfs.org@gmail.com") {
            router.push("/admin/dashboard");
        }
    };
    checkUser();
}, [router]);

    const handleLogin = async (e) => {
    e.preventDefault();
    setError("");  
    setIsLoading(true); // Start Loading 
        try {
            const { data, error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if(authError) throw authError;
            if(data.user.email === "skfs.org@gmail.com"){
                router.push("/admin/dashboard");
            }else{
                await supabase.auth.signOut();
                setError("Access Declined"); // Stop Loading on error
                setIsLoading(false);
            }
        } catch (err) {
            alert(`Error : ${err.message}`);
            setIsLoading(false); // Stop Loading on error
        }
};

return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6e9] font-sans">
        {/* Loading Overlay */}
            {isLoading && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                    <Loader2 className="w-12 h-12 text-[#EA580C] animate-spin mb-4" />
                    <p className="text-[#1a1a1a] font-medium">Authenticating Admin...</p>
                </div>
            )}
        <div className="w-full max-w-md bg-white rounded-xl border border-black/10 flex flex-col items-center gap-6 mx-4 shadow-sm">
            <div className="w-full px-6 pt-6 flex flex-col items-center">
                {/* Lock Icon */}
                <div className="w-16 h-16 bg-[#fff2ed] rounded-full flex items-center justify-center mb-6">
                    <Lock className="w-8 h-8 text-[#EA580C]" />
                </div>

                {/* Header */}
                <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2 text-center">Admin Login</h1>
                <p className="text-[#666666] text-center text-sm leading-relaxed max-w-[280px]">
                    Enter email password to access the admin dashboard
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="w-full px-6 pb-6 space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1a1a1a] block">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter admin email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-9 px-3 py-1 bg-[#f3f3f5] border border-transparent rounded-md focus:ring-3 focus:ring-orange-600/50 focus:border-orange-600 outline-none transition-all placeholder:text-gray-400 text-sm md:text-sm text-[#111827] font-normal"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1a1a1a] block">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter admin password"
                        value={password}
                        required={true}
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

                <h4 className="text-red-500 font-bold">{error}</h4>

                {/* Footer info moved inside for better gap control */}
                <p className="pt-2 text-sm text-[#999999] text-center font-normal">
                    Demo email: <span className="text-[#666666]">skfs.org@gmail.com</span>
                    <br />
                    Demo password: <span className="text-[#666666]">admin123</span>
                </p>
            </form>
        </div>
    </div>
);
}
