"use client"

import Image from "next/image"
import FilterArrow from "@/public/projects/filter.svg"
import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

const Filters = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showFilterOptions, setShowFilterOptions] = useState(false)
  const filterRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const clickedOnElement = filterRef.current?.contains(e.target as Node)
      if (!clickedOnElement) {
        setShowFilterOptions(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  }, [searchParams])

  const filterOptions = ["Landing Page", "Site institucional", "Dashboard", "E-Commerce"]

  return (
    <div className="pt-[3.125rem] flex flex-col-reverse gap-5 md:flex-row md:items-center">
      <div ref={filterRef} className="relative rounded-2xl dark:bg-[#1b1b1b] p-[.625rem] w-[min(31.25rem,100%)] md:w-[min(11.25rem,100%)] mx-auto md:mx-0">
        <button className="w-full">
          <span
            onClick={() => setShowFilterOptions(!showFilterOptions)}
            className="text-lightGreen flex items-center justify-between"
          >
            Filtrar por
            <Image
              className={cn("", showFilterOptions ? "rotate-180" : "")}
              src={FilterArrow}
              alt="Seta para baixo"
            />
          </span>
          {showFilterOptions ? (
            <ul className="absolute p-[.625rem] dark:text-lightGray left-0 w-full bg-white dark:bg-[#1b1b1b] rounded-b-2xl text-start grid gap-1">
              {filterOptions.map((option, index) => (
                <li
                  className="hover:text-white"
                  key={index}
                  onClick={() => {
                    router.push(`?${createQueryString("category", option)}`)
                    setShowFilterOptions(false)
                  }}
                >
                  {option}
                </li>
              ))}
              <li
                className="hover:text-white"
                onClick={() => {
                  router.push(`?${createQueryString("category", "")}`)
                  setShowFilterOptions(false)
                }
                }
              >
                Limpar filtros
              </li>
            </ul>
          ) : null}
        </button>
      </div>
      <input
        type="text"
        className="w-[min(31.25rem,100%)] rounded-[100vmax] py-[.625rem] px-5 placeholder:font-medium placeholder:text-black dark:placeholder:text-white border dark:border-white mx-auto bg-no-repeat bg-[position:right_1.25rem_center] [backgroundImage:url(/projects/search-black.svg)] dark:[backgroundImage:url(/projects/search-white.svg)]"
        placeholder="Pesquisar projeto"
        onChange={(e) => router.push(`?${createQueryString('title', e.target.value)}`)}
      />
    </div>
  )
}

export default Filters