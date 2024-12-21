import Image from "next/image"
import { ArrowIcon } from "../../../components/theme-switch-components"
import WhatsappIcon from "@/public/home/whatsapp.svg"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="mt-40 text-center max-w-[90ch] mx-auto">
      <h1 className="font-matter text-[2rem] md:text-[4rem] leading-[1.1] font-bold">Não é só um site, é uma <span className="bg-gradient-to-r from-primaryGreen to-darkGreen bg-clip-text text-transparent">experiência para seu cliente</span></h1>
      <p className="dark:text-lightGray mt-5 mb-8 md:text-xl">Se você deseja aproveitar ao máximo as vantagens que a presença online pode oferecer, estou aqui para ajudar a transformar essa visão em realidade.</p>
      <div className="*:rounded-[100vmax] *:py-[.625rem] *:border-2 *:overflow-hidden *:inline-flex *:items-center *:relative *:gap-[.625rem] *:px-[1.875rem] font-medium md:text-xl flex items-center justify-center gap-[.625rem] md:gap-5">
        <a className="transition-colors dark:border-darkerGreen text-white dark:text-lightGray hover:text-white bg-lightGreen dark:bg-transparent dark:hover:before:opacity-20 dark:hover:border-[#138352] dark:before:opacity-10 dark:before:-z-10 dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-r dark:before:from-primaryGreen dark:before:to-darkGreen" target="_blank" rel="noopener noreferrer" href="https://wa.me/5592986001909">
          <Image src={WhatsappIcon} alt="Whatsapp" />
          Contato</a>
        <Link className="transition-colors dark:hover:before:opacity-20 border-[#2C2C2E] dark:text-lightGray dark:hover:text-white dark:hover:border-[#5C5C5C] dark:before:opacity-10 dark:before:-z-10 dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-r dark:before:from-lightGray dark:before:to-gray" href="/projects">
          <ArrowIcon />
          Projetos</Link>
      </div>
    </section>
  )
}

export default HeroSection