'use client';
import React from "react";

interface Section {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section1( props: Section) {
    const {
        id = "",
        className = "border-b dark:border-gray-900 pb-8 mb-5",
        children
    } = props;
    
    return (
        <section id={id} className={className}>
            {children}
        </section>
    );
}
