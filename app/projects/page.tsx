"use client"

import { projects } from "@/data"
import Image from "next/image"
import Filters from "./components/filters"
import Link from "next/link"

const Projects = () => {
  return (
    <main className="w-xl-container mx-auto mb-[8.75rem]">
      <Filters />
      <ul className="grid sm:grid-cols-[repeat(auto-fit,minmax(21.875rem,1fr))] gap-4">
        {projects.map((project, i) => (
          <li className="rounded-[.625rem] flex flex-col overflow-hidden dark:bg-[#1B1B1B] border border-darkGray" key={i}>
            <div className="max-h-[16.25rem] overflow-hidden">
              <Image
                className="w-full"
                src={project.img}
                alt={project.title}
              />
            </div>
            <div className="flex-1 grid place-content-between p-5 border-t border-darkGray px-5">
              <div>
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="mt-[.625rem]">{project.desc}</p>
              </div>
              <button className="mt-5 inline-block text-center bg-lightGreen transition-colors duration-200 font-bold dark:font-medium dark:bg-darkestGreen dark:hover:bg-[#0F402B]  text-white dark:hover:text-white dark:text-lightGray border dark:border-[#0B4C30] w-full py-2 rounded-[.3125rem]">Ver projeto</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Projects