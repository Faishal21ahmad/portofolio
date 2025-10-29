'use client';
import React from "react";
import Link from 'next/link'

interface LinkcsProps {
    title: string;
    to: string;
    className?: string;
}

export default function Linkcs(props: LinkcsProps) {
    const {
        title = "Link",
        to = "#",
        className = "p-2 hover:bg-gray-800 rounded-md",
    } = props;

    return (
        <>
            <Link href={to} className={className}>{title}</Link>
        </>
    );
}