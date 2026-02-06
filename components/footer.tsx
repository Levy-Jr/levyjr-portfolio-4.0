"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Workana from "@/public/footer/workana.svg"
import Fiver from "@/public/footer/fiver.svg"
import Instagram from "@/public/footer/instagram-white.svg"
import Whatsapp from "@/public/home/whatsapp.svg"

const Footer = () => {
  const pathname = usePathname()

  const navLinks = [
    {
      href: "/",
      label: "Início",
      active: pathname === "/"
    },
    {
      href: "/projects",
      label: "Projetos",
      active: pathname === "/projects"
    },
    {
      href: "/stack",
      label: "Habilidades",
      active: pathname === "/stack"
    },
    {
      href: "/about",
      label: "Sobre",
      active: pathname === "/about"
    },
  ]

  return (
    <footer className="pt-[3.125rem] md:pt-[4.375rem] pb-5 border-t border-t-[#1E1E1E]">
      <div className="w-xl-container mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
          <nav>
            <ul className="flex items-center gap-4 md:gap-14">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul>
            <li className="flex gap-2 md:gap-5 items-center">
              <a className="bg-black dark:bg-transparent p-2 rounded-xl" target="_blank" rel="noopener noreferrer" href="https://www.workana.com/freelancer/8dbf70cdf26466c02efffe2ddbb75224">
                <Image className="w-6" src={Workana} alt="Workana" />
              </a>
              <a className="bg-black dark:bg-transparent p-2 rounded-xl" target="_blank" rel="noopener noreferrer" href="https://br.fiverr.com/levy_gomes?up_rollout=true">
                <Image className="w-6" src={Fiver} alt="Fiver" />
              </a>
              <a className="bg-black dark:bg-transparent p-2 rounded-xl" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/levygdev/">
                <Image className="w-6" src={Instagram} alt="Instagram" />
              </a>
              <a className="bg-black dark:bg-transparent p-2 rounded-xl" target="_blank" rel="noopener noreferrer" href="https://wa.me/5592986001909">
                <Image className="w-6" src={Whatsapp} alt="Whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <p className="dark:text-lightGray text-center mt-[2.5rem] md:mt-[6.25rem]">© {new Date().getFullYear()} Levy Gomes. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer