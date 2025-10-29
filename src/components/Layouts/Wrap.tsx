'use client';
import React from "react";
import Navbar from "./Navbar"; 

export default function Wrap({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen bg-gray-200 font-sans dark:bg-gray-950">
            <Navbar />
            <main className="px-4 md:px-24 lg:px-32 mt-4">
                {children}
            </main>
        </div>
    );
}
