import { stack } from "@/data"
import Image from "next/image"
import { DevelopmentIcon, ProductivityIcon } from "../(home)/components/theme-switch-components"

const Stack = () => {
  const development = stack.filter(item => item.category === "development")
  const productivity = stack.filter(item => item.category === "productivity")

  return (
    <main className="mt-[5.3125rem] mb-10 w-container mx-auto">
      <h2 className="text-[2rem] leading-[1] font-bold">Minhas Habilidades</h2>
      <p className="mt-[.625rem] dark:text-lightGray">Software e ferramentas que uso regularmente.</p>
      <div className="mt-9 dark:bg-[#1B1B1B] border border-darkGray p-[1.875rem] rounded-[.625rem]">
        <div className="flex items-center gap-[.625rem]">
          <DevelopmentIcon /> <h3 className="text-2xl font-medium">Desenvolvimento</h3>
        </div>
        <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(14.0625rem,1fr))] lg:grid-cols-3 mb-[1.875rem] gap-y-[3.75rem]">
          {development.map((item, index) => (
            <li className="flex gap-5" key={index}>
              <div className="flex-shrink-0">
                <Image src={item.img} alt={item.name} />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-[.4375rem] leading-[1]">{item.name}</h4>
                <p className="dark:text-lightGray leading-[1]">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-9 dark:bg-[#1B1B1B] border border-darkGray p-[1.875rem] rounded-[.625rem]">
        <div className="flex items-center gap-[.625rem]">
          <ProductivityIcon /> <h3 className="text-2xl font-medium">Produtividade</h3>
        </div>
        <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(14.0625rem,1fr))] md:grid-cols-3 mb-[1.875rem] gap-y-[3.75rem]">
          {productivity.map((item, index) => (
            <li className="flex gap-5" key={index}>
              <div className="flex-shrink-0">
                <Image src={item.img} alt={item.name} />
              </div>
              <div>
                <h4 className="text-xl font-medium mb-[.4375rem] leading-[1]">{item.name}</h4>
                <p className="dark:text-lightGray leading-[1]">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Stack