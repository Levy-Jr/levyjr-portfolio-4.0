"use client"

import Image from "next/image";
import WhatsappIcon from "@/public/home/whatsapp.svg"
import WhiteProjectIcon from "@/public/home/arrow-white.svg"
import BlackProjectIcon from "@/public/home/arrow-black.svg"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const HeroButtonGroup = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="*:rounded-[100vmax] *:py-[.625rem] *:border-2 *:overflow-hidden *:inline-flex *:items-center *:relative *:gap-[.625rem] *:px-[1.875rem] font-medium text-xl flex items-center justify-center gap-5">
      <a className="transition-colors dark:border-darkerGreen text-white dark:text-lightGray hover:text-white bg-lightGreen dark:bg-transparent dark:hover:before:opacity-20 dark:hover:border-[#138352] dark:before:opacity-10 dark:before:-z-10 dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-r dark:before:from-primaryGreen dark:before:to-darkGreen" target="_blank" rel="noopener noreferrer" href="https://wa.me/5592986001909">
        <Image src={WhatsappIcon} alt="Whatsapp" />
        Contato</a>
      <Link className="transition-colors dark:hover:before:opacity-20 border-[#2C2C2E] dark:text-lightGray dark:hover:text-white dark:hover:border-[#5C5C5C] dark:before:opacity-10 dark:before:-z-10 dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-r dark:before:from-lightGray dark:before:to-gray" href="/projects">
        {resolvedTheme == "dark" ? <Image src={WhiteProjectIcon} alt="Projetos" /> : <Image src={BlackProjectIcon} alt="Projetos" />}
        Projetos</Link>
    </div>
  )
}

export default HeroButtonGroup