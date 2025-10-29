'use client';
import React from "react";

interface H1Props {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function H2(props: H1Props) {
    const {
        id = "",
        className = "text-4xl font-semibold",
        children,
    } = props;

    return (
        <h1 id={id} className={className}>
            {children}
        </h1>
    );
}
