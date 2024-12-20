import { projects } from "@/data"
import Image from "next/image"
import Link from "next/link"

const ProjectSection = () => {
  return (
    <section className="mt-16 mb-[4.375rem]">
      <h2 className="mb-5 text-[2rem] font-bold">Projetos</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          if (index + 1 <= 2) {
            return (
              <li className="rounded-[.625rem] overflow-hidden dark:bg-[#1B1B1B] border border-darkGray" key={index}>
                <div className="max-h-[16.25rem] overflow-hidden">
                  <Image
                    className="w-full"
                    src={project.img}
                    alt={project.title}
                  />
                </div>
                <div className="py-[1.875rem] border-t border-darkGray px-5">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="mt-[.625rem]">{project.desc}</p>
                </div>
              </li>
            )
          }
        })}
      </ul>
      <Link className="mt-5 inline-block text-center bg-lightGreen transition-colors duration-200 font-bold dark:font-medium dark:bg-darkestGreen dark:hover:bg-[#0F402B]  text-white dark:hover:text-white dark:text-lightGray border dark:border-[#0B4C30] w-full py-2 rounded-[.3125rem]" href={"/projects"}>Ver mais</Link>
    </section>
  )
}

export default ProjectSection