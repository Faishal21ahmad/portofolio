'use client';
import React from "react";
import { getProjectById } from "@/lib/dataProjectsService";
import { techStack } from "@/data/techStackData";
import Wrap from "@/src/components/Layouts/Wrap";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/src/components/Elements/Gallery";
import { useParams } from 'next/navigation';



export default function Page() {
    // const { id } = await params;
    const params = useParams();
    const id = params.id; // <- ambil id dari URL

    console.log("Project ID:", id)
    const project = getProjectById(Number(id))

    if (!project) {
        return (
            <Wrap>
                <div className="text-center py-10 text-gray-600 dark:text-gray-300">
                    <h1 className="text-2xl font-semibold">Project tidak ditemukan</h1>
                    <p>Pastikan URL project valid.</p>
                </div>
            </Wrap>
        );
    }

    return (
        <Wrap>
            <div className="mx-auto py-5 max-w-8xl">
                {/* Banner / Gambar Utama */}
                <div className="relative w-full h-52 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={project.images[0].url ?? "/default.png"}
                        alt={project.title ?? "Project image"}
                        fill
                        sizes="100vw"
                        loading="eager"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Info Utama */}
                <div className="mt-8 space-y-2">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tombol Aksi */}
                <div className="flex flex-wrap gap-4 mt-6">
                    {project.demo && (
                        <Link href={project.demo} target="_blank" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"> 🔗 Lihat Demo </Link>
                    )}
                    {project.repo && (
                        <Link href={project.repo} target="_blank" className="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition">💻 Source Code</Link>
                    )}
                </div>

                {/* Teknologi */}
                {project.techIds.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-3">
                            Teknologi yang digunakan
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {project.techIds.map((techId) => {
                                const tech = techStack.find((t) => t.id === techId);
                                if (!tech) return null; // kalau id tidak ditemukan di techStack

                                return (
                                    <span key={tech.id} className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 rounded-full">
                                        {tech.label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Project Scope */}
                {project.scopes.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-3">Project Scope</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                            {project.scopes.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/*  Fitur */}
                {project.fiturs.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-3">Fitur</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                            {project.fiturs.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Galeri Gambar */}
                {project.images?.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold mb-3">Galeri</h2>
                        <Gallery images={project.images} title={project.title} />
                    </div>
                )}
            </div>
        </Wrap>
    );
}
