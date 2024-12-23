"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Logo from "@/public/home/logo.svg"
import { cn } from "@/lib/utils"
import { MenuIcon, ThemeSwitchIcon } from "@/components/theme-switch-components"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

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
    <header className="py-[.875rem] border-b border-b-[#1E1E1E] sticky bg-white/75 dark:bg-dark/50 backdrop-blur-sm w-full top-0 left-0 z-30">
      <div className="w-xl-container mx-auto flex justify-between items-center">
        <div>
          <Image
            src={Logo}
            alt="Logo"
          />
        </div>
        <nav>
          <ul className={cn("md:flex gap-9 font-semibold", isOpen ? "fixed min-h-screen inset-0 text-white dark:text-black bg-black/75 grid gap-4 place-content-center backdrop-blur-xl" : "hidden")}>
            {navLinks.map((route, index) => (
              <li
                key={index}
              >
                <Link
                  className={cn("", route.active ? "text-lightGreen dark:text-primaryGreen" : "hover:text-lightGreen dark:hover:text-primaryGreen")}
                  href={route.href}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ThemeSwitchIcon />
          <button onClick={toggleMenu} className={cn("md:hidden ml-5", isOpen ? "relative z-50" : "")}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header