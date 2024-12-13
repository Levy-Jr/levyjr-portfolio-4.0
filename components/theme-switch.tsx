"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import SunIcon from "@/public/home/sun.svg"
import MoonIcon from "@/public/home/moon.svg"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (resolvedTheme === "dark") return <button><Image onClick={() => setTheme("light")} src={SunIcon} alt="Tema claro" /></button>

  if (resolvedTheme === "light") return <button><Image onClick={() => setTheme("dark")} src={MoonIcon} alt="Tema escuro" /></button>
}

export default ThemeSwitch