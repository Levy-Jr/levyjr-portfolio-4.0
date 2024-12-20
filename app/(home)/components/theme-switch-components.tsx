"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { ImgHTMLAttributes, useEffect, useState } from "react"
import WhiteProjectIcon from "@/public/home/arrow-white.svg"
import BlackProjectIcon from "@/public/home/arrow-black.svg"
import SunIcon from "@/public/home/sun.svg"
import MoonIcon from "@/public/home/moon.svg"
import MenuBlack from "@/public/home/menu-black.svg"
import MenuWhite from "@/public/home/menu-white.svg"
import WhiteDevIcon from "@/public/stack/development-white.svg"
import BlackDevIcon from "@/public/stack/development-black.svg"
import BlackProdIcon from "@/public/stack/productivity-black.svg"
import WhiteProdIcon from "@/public/stack/productivity-white.svg"

const useMount = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

export const ThemeSwitchIcon = () => {
  const mounted = useMount()
  const { setTheme, resolvedTheme } = useTheme()

  if (!mounted) return null

  if (resolvedTheme === "dark") return <button><Image onClick={() => setTheme("light")} src={SunIcon} alt="Tema claro" /></button>

  if (resolvedTheme === "light") return <button><Image onClick={() => setTheme("dark")} src={MoonIcon} alt="Tema escuro" /></button>
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> { }

export const ArrowIcon = ({ className }: ImageProps) => {
  const mounted = useMount()
  const { resolvedTheme } = useTheme()

  if (!mounted) return null

  if (resolvedTheme === "dark") return <Image className={className} src={WhiteProjectIcon} alt="Projetos" />
  if (resolvedTheme === "light") return <Image className={className} src={BlackProjectIcon} alt="Projetos" />
}

export const MenuIcon = ({ className }: ImageProps) => {
  const mounted = useMount()
  const { resolvedTheme } = useTheme()

  if (!mounted) return null

  if (resolvedTheme === "dark") return <Image className={className} src={MenuWhite} alt="Menu" />

  if (resolvedTheme === "light") return <Image className={className} src={MenuBlack} alt="Menu" />
}

export const DevelopmentIcon = ({ className }: ImageProps) => {
  const mounted = useMount()
  const { resolvedTheme } = useTheme()

  if (!mounted) return null

  if (resolvedTheme === "dark") return <Image className={className} src={WhiteDevIcon} alt="Ícone de Desenvolvimento" />

  if (resolvedTheme === "light") return <Image className={className} src={BlackDevIcon} alt="Ícone de Desenvolvimento" />
}

export const ProductivityIcon = ({ className }: ImageProps) => {
  const mounted = useMount()
  const { resolvedTheme } = useTheme()

  if (!mounted) return null

  if (resolvedTheme === "dark") return <Image className={className} src={WhiteProdIcon} alt="Ícone de Produtividade" />

  if (resolvedTheme === "light") return <Image className={className} src={BlackProdIcon} alt="Ícone de Produtividade" />
}