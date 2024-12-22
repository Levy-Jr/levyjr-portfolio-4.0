import Image from "next/image"
import ProfilePhoto from "@/public/about/profile-picture.webp"
import Link from "next/link"

const About = () => {
  return (
    <main>
      <div className="py-10 border-b border-[#1E1E1E]">
        <div className="w-xl-container mx-auto flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex gap-5 items-center">
            <div className="relative before:absolute before:w-5 before:aspect-square before:rounded-full before:bg-lightGreen before:border-white dark:before:border-dark before:[border-width:.1875rem;]">
              <Image src={ProfilePhoto} alt="Foto de Perfil" />
            </div>
            <div>
              <h1 className="text-[2rem] font-bold">Levy Gomes</h1>
              <p className="text-xl dark:text-lightGray">Desenvolvedor Web</p>
            </div>
          </div>
          <Link className="self-start ml-[7.5rem] md:self-auto md:ml-0 py-[.625rem] px-5 inline-block rounded-[100vmax] dark:text-lightGreen border dark:border-lightGreen font-medium" target="_blank" rel="noopener noreferrer" href="https://wa.me/5592986001909">Ver disponibilidade</Link>
        </div>
      </div>
      <div className="border-b border-[#1E1E1E]">
        <div className="*:pt-[1.875rem] mx-auto w-xl-container flex flex-col md:flex-row">
          <div className="md:pr-[4.375rem] md:pb-20">
            <h2 className="text-[2rem] font-medium">Estatísticas</h2>
            <ul className="mt-5">
              <li className="dark:text-lightGray w-max"><span className="block dark:text-white mb-[.625rem] font-bold text-xl">+2</span> anos de experiência profissional</li>
              <li className="dark:text-lightGray mt-5"><span className="block dark:text-white mb-[.625rem] font-bold text-xl">+40</span> projetos feitos</li>
            </ul>
          </div>
          <div className="md:pl-[1.875rem] md:border-l pb-[4.375rem] md:pb-0 md:border-[#1E1E1E]">
            <h2 className="text-[2rem] mb-5 font-medium">Sobre</h2>
            <p>Sempre tive interesse em TI e em mexer em computadores, então quando descobri a programação fiquei encantado logo de cara. Adoro trabalhar em projetos de alta performance e iniciativas tecnológicas inovadoras.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About