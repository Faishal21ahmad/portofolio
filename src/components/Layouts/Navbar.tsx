'use client';
import React from "react";
import Link from 'next/link'
import Linkcs from "../Elements/Linkcs";
// import DarkmodeToggle from '../Elements/DarkmodeToggle';

export default function Navbar() {
    return (
        <header className="h-13 sticky top-0 w-full px-4 md:px-24 lg:px-32 z-20 bg-gray-700 dark:bg-gray-900 items-center flex shadow-md text-white">
            <nav className="w-full flex justify-between">
                <div className="items-center flex">
                    <Linkcs title="Portofolio" to="/" className=""/>
                </div>
                <div className="items-center flex">
                    <Linkcs title="Artikel" to="/artikels"/>
                    <Linkcs title="Projects" to="/projects"/>
                    {/* <DarkmodeToggle /> */}
                </div>
            </nav>
        </header>
    );
}
