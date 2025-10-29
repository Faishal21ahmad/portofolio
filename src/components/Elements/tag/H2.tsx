'use client';
import React from "react";

interface H2Props {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function H2(props: H2Props) {
    const {
        id = "",
        className = "text-xl font-bold mb-4",
        children,
    } = props;

    return (
        <h2 id={id} className={className}>
            {children}
        </h2>
    );
}
