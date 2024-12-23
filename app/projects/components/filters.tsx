"use client"

import Image from "next/image"
import FilterArrow from "@/public/projects/filter.svg"

const Filters = () => {
  return (
    <div className="pt-[3.125rem] mb-10 flex flex-col-reverse gap-5 md:flex-row md:items-center">
      <div className="rounded-2xl bg-darkGray/10 p-[.625rem] border border-lightGreen w-[min(31.25rem,100%)] md:w-[min(11.25rem,100%)] mx-auto md:mx-0">
        <button className="text-lightGreen inline-flex justify-between w-full items-center gap-[.625rem]">
          Filtrar por
          <Image
            src={FilterArrow}
            alt="Seta para baixo"
          />
        </button>
      </div>
      <input
        type="text"
        className="w-[min(31.25rem,100%)] rounded-[100vmax] py-[.625rem] px-5 placeholder:font-medium placeholder:text-black dark:placeholder:text-white border dark:border-white mx-auto bg-no-repeat bg-[position:right_1.25rem_center] [backgroundImage:url(/projects/search-black.svg)] dark:[backgroundImage:url(/projects/search-white.svg)]"
        placeholder="Pesquisar projeto"
      />
    </div>
  )
}

export default Filters