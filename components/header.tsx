"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Logo from "@/public/home/logo.svg"
import ThemeSwitch from "./theme-switch"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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
    <header className="py-[.875rem]">
      <div className="w-xl-container mx-auto flex justify-between items-center">
        <div>
          <Image
            src={Logo}
            alt="Logo"
          />
        </div>
        <nav>
          <ul className="flex gap-9 font-semibold">
            {navLinks.map((item, index) => (
              <li
                key={index}
              >
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header