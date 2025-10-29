// 'use client' // tidak diperlukan untuk komponen async (server component)
import React from "react";
import Wrap from "@/src/components/Layouts/Wrap";
import { getAllProjects } from "@/lib/dataProjectsService";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    // Pastikan fungsi data di-await
    const projects = getAllProjects();

    return (
        <Wrap>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {projects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id}>
                        <div className="w-full md:p-2 rounded-lg overflow-hidden hover:shadow-md hover:bg-white hover:dark:bg-gray-900 transition-all duration-200">
                            <div className=" relative w-full h-64 rounded-md overflow-hidden mb-1">
                                <Image
                                    src={project.images[0]?.url || "/default.8png"}
                                    alt={project.title ?? "Project Image"}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    priority={false}
                                />
                            </div>

                            <div className="p-2">
                                <h2 className="text-lg font-semibold mb-1  transition-colors overflow-hidden text-ellipsis whitespace-nowrap">
                                    {project.title}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {project.category}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">
                                    {project.year}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Wrap>
    );
}
