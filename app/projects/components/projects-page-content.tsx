"use client"

import { projects } from "@/data"
import Image from "next/image"
import Filters from "./filters"
import { useMemo, useState } from "react"
import ProjectModal from "./project-modal"
import { useSearchParams } from "next/navigation"

const ProjectsPageContent = () => {
  const searchParams = useSearchParams()

  const queryCategory = searchParams.get('category') ?? ""
  const queryTitle = searchParams.get('title') ?? ""

  const [projectIndex, setProjectIndex] = useState<undefined | number>(undefined)

  const filteredProjects = useMemo(() => (
    projects.filter(project => project.title.toLowerCase().includes(queryTitle.toLowerCase()) && project.category.toLowerCase().includes(queryCategory.toLowerCase()))
  ), [queryTitle, queryCategory])

  return (
    <div className="relative">
      <main className="w-xl-container mx-auto mb-[8.75rem]">
        {projectIndex !== undefined ? (
          <ProjectModal
            index={projectIndex}
            setProjectIndex={setProjectIndex}
          />
        ) : null}
        <Filters />
        {queryCategory !== "" ? (
          <p className="mt-3">Filtrando pela categoria: {queryCategory}</p>
        ) : null}
        <ul className="grid mt-10 place-content-center sm:grid-cols-[repeat(auto-fit,minmax(21.875rem,25.9375rem))] gap-4">
          {filteredProjects.map((project, i) => (
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
                <button
                  onClick={() => setProjectIndex(i)}
                  className="mt-5 inline-block text-center bg-lightGreen transition-colors duration-200 font-bold dark:font-medium dark:bg-darkestGreen dark:hover:bg-[#0F402B]  text-white dark:hover:text-white dark:text-lightGray border dark:border-[#0B4C30] w-full py-2 rounded-[.3125rem]"
                >Ver projeto</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default ProjectsPageContent