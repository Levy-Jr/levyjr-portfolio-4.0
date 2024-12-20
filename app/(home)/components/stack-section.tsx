import { stack } from "@/data"
import Image from "next/image"
import Link from "next/link"

const StackSection = () => {
  return (
    <section className="mb-[4.375rem]">
      <h2 className="text-[2rem] font-bold mb-5">Habilidades</h2>
      <div className="dark:bg-[#1B1B1B] border border-darkGray pt-5 px-[1.875rem] pb-[1.875rem] rounded-[.625rem]">
        <h3 className="dark:text-lightGray ml-[.625rem] mb-5">Softwares e ferramentas que uso regularmente.</h3>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] md:grid-cols-3 mb-[1.875rem] gap-y-[3.75rem]">
          {stack.map((item, index) => {
            if (index + 1 <= 6) {
              return (
                <li className="flex gap-5" key={index}>
                  <div className="flex-shrink-0">
                    <Image src={item.img} alt={item.name} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-[.4375rem] leading-[1]">{item.name}</h4>
                    <p className="dark:text-lightGray leading-[1]">{item.desc}</p>
                  </div>
                </li>
              )
            }
          })}
        </ul>
        <Link className="inline-block text-center bg-lightGreen duration-200 dark:bg-darkestGreen dark:hover:bg-[#0F402B] text-white dark:hover:text-white dark:text-lightGray font-bold dark:font-medium border dark:border-[#0B4C30] w-full py-2 rounded-[.3125rem]" href={"/stack"}>Ver mais</Link>
      </div>
    </section>
  )
}

export default StackSection