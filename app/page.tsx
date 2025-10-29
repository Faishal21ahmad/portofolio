// 'use client'
import Wrap from "@/src/components/Layouts/Wrap";
import Image from 'next/image';
import { contactData } from '@/data/contactData';
import { sertifikatData } from '@/data/sertifikatData';
import { getAllProjects } from "@/lib/dataProjectsService";
import { keterampilanData as keterampilan } from "@/data/keterampilanData";
import Link from 'next/link'
import H2 from "@/src/components/Elements/tag/H2";
import H1 from "@/src/components/Elements/tag/H1";
import Section1 from "@/src/components/Fragments/Section/Section1";


export default function Home() {
  const projects = getAllProjects({ showOnly: true });
  
  return (
    <Wrap>
      <Section1 id="head" className="flex-row lg:flex w-full gap-4 mb-5 mt-10 border-b dark:border-gray-900 pb-8">
        <div className="flex w-full justify-center lg:w-1/4 mb-4 lg:mb-0 min-w-[250]">
          <Image src="/pp2.png" alt="Logo" width={300} height={300} className="rounded-md object-cover" />
        </div>
        <div>
          <H1>Faishalbahy Ahmad Fathuni | Web Developer</H1>
          <H2>Biodata dan Kontak</H2>
          <table className="min-w-full text-left ">
            <tbody>
              {contactData.map((item, index) => (
                <tr key={index}>
                  <td className="w-20">{item.label}</td>
                  <td>
                    :{' '}
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section1>
      <Section1 id="tentang-saya">
        <H2>Tentang Saya</H2>
        <p className="text-justify">lulusan S1 Sistem Informasi dengan keahlian dalam pengembangan web dan
          pembelajaran mesin. memiliki pengalaman dalam menggunakan teknologi seperti Laravel, Tailwind,
          Flask, dan Python, yang telah saya terapkan dalam berbagai proyek akademis. Dengan ketertarikan yang
          kuat untuk mempelajari teknologi baru. memiliki komitmen untuk meingkatkan dan mengembangkan
          keterampilan teknis saya serta beradaptasi dengan perkembangan industri yang terus berkembang. Saya siap
          berkontribusi dalam pengembangan solusi berbasis teknologi melalui pendekatan yang inovatif dan efisien.
        </p>
      </Section1>
      <Section1 id="pendidikan">
        <H2>Pendidikan</H2>
        <div className="flex-row md:flex md:justify-between">
          <div>
            <p><span className="font-bold">Universitas Amikom Yogyakarta</span> - Yogyakarta, Indonesia</p>
            <p>S1 - Sistem Informasi, 3.75/4.00</p>
          </div>
          <div>
            <p>Sep 2020 - Aug 2024</p>
          </div>
        </div>
      </Section1>
      <Section1 id="sertifikat">
        <H2>Sertifikat</H2>
        <ul className="list-disc ml-6">
          {sertifikatData.map((item, index) => (
            <li key={index}>{item.label} : <a target="_blank" href={item.href} className="hover:text-blue-700">{item.materi}</a></li>
          ))}
        </ul>
      </Section1>
      <Section1 id="project-list">
        <H2>Project List</H2>
        {projects.map((project, index) => (
          <div key={index} className="mb-3">
            <p><a target="_blank" href={project.demo || project.repo}
              className="font-bold">{project.title}</a> <span className="italic"> - {project.category} - {project.year}</span></p>
            <p>{project.description}</p>
            <ul className="list-disc ml-6">
              {project.scopes?.map((scope, idx) => (
                <li key={idx}>{scope}</li>
              ))}
            </ul>
          </div>
        ))}
        <Link href='/projects'><p className="p-2 mt-6 font-semi hover:bg-gray-300 hover:dark:bg-gray-900 rounded-md ">Project Lainnya ..... </p></Link>
      </Section1>
      <Section1 id="keterampilan">
        <H2>Keterampilan</H2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 list-disc ml-6">
          {keterampilan.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>
      </Section1>
      <Section1 id="hobi">
        <H2>Hobi</H2>
        <ul className="list-disc ml-6">
          <li>Mengulik Mini Computer (STB Arm)</li>
          <li>Technology Enthusiast</li>
          <li>Mengulik Elektronik</li>
          <li>Fotografi</li>
        </ul>
      </Section1>
    </Wrap>
  );
}
