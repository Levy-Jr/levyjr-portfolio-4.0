"use client"

import { projects } from "@/data"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

const ProjectModal = ({ index, setProjectIndex }: { index: number, setProjectIndex: React.Dispatch<React.SetStateAction<number | undefined>> }) => {
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const clickedOnElement = menuRef.current?.contains(e.target as Node)
      if (!clickedOnElement) {
        setProjectIndex(undefined)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const project = projects[index]

  return (
    <div className="fixed pt-[6.25rem] z-50 inset-0 bg-black/30 backdrop-blur-md">
      <div ref={menuRef} className="absolute right-1/2 translate-x-1/2 w-[min(62.5rem,100%)] rounded-[.625rem] flex flex-col overflow-hidden bg-white dark:bg-[#1B1B1B] border border-darkGray">
        <div className="max-h-[28.125rem]">
          <Image
            className="w-full object-cover object-top max-h-[28.125rem]"
            src={project.img}
            alt={project.title}
          />
        </div>
        <div className="flex-1 p-5 border-t border-darkGray px-5">
          <div>
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="mt-[.625rem]">{project.desc}</p>
            <div className="mt-5 font-semibold">Stack:
              <ul className="flex mt-[.625rem] text-white gap-2">
                {project.stack.map((stack, index) => (
                  <li
                    className={cn("font-bold leading-[1] p-[.625rem] bg-black bg-gradient-to-r rounded-[.4375rem]",
                      stack == "HTML" ? "from-[#F96512] to-[#E4542D]" : "",
                      stack == "CSS" ? "from-[#0978FA] to-[#2D53E5]" : "",
                      stack == "Javascript" ? "bg-[#CAB616]" : "",
                    )}
                    key={index}
                  >{stack}</li>
                )
                )}
              </ul>
            </div>
          </div>
          <Link
            className="mt-5 inline-block text-center bg-lightGreen transition-colors duration-200 font-bold dark:font-medium dark:bg-darkestGreen dark:hover:bg-[#0F402B]  text-white dark:hover:text-white dark:text-lightGray border dark:border-[#0B4C30] w-full py-2 rounded-[.3125rem]"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >Ver projeto</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal