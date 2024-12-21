import Link from "next/link"
import Beto from "@/public/home/beto.webp"
import Emmanuel from "@/public/home/emmanuel.webp"
import Raphael from "@/public/home/raphael.webp"
import Image from "next/image"
import { ArrowIcon } from "../../../components/theme-switch-components"

const TestimonialSection = () => {
  const testimonials = [
    {
      image: Beto,
      name: "Beto",
      role: "",
      desc: "Levy é um profissional de alta performance, pega muito rápido o que é passado e dá agilidade aos projetos. Recomendo.",
      link: ""
    },
    {
      image: Emmanuel,
      name: "Emmanuel Augusto",
      role: "",
      desc: "Profissional com excelente criatividade, não foi necessário ajustes na idéia inicial dele! Sempre muito eficaz e disposto a entender o projeto!",
      link: ""
    },
    {
      image: Raphael,
      name: "Raphael Martinez",
      role: "",
      desc: "Excelente profissional, atencioso, educado e muito bom desenvolvedor, conseguiu executar o trabalho de desenvolver um design XD em REACT com maestria, estou extremamente satisfeito e impressionado com o resultado!",
      link: ""
    },
  ]

  return (
    <section className="mt-48">
      <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-center">O que meus clientes dizem?</h2>
      <ul className="grid gap-5 mt-16">
        {testimonials.map((testimonial, i) => (
          <li className="border-darkGray border dark:bg-[#1B1B1B] p-[1.875rem] rounded-[.625rem]" key={i}>
            <blockquote className="md:flex md:gap-4 items-center">
              <div className="flex">
                <div className="w-10 md:w-[3.3125rem] aspect-square mr-[.9375rem]">
                  <Image className="min-w-10 md:min-w-[3.3125rem] rounded-full" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="max-w-[73ch] mr-1">
                  <h3 className="font-medium text-xl md:text-2xl">{testimonial.name}</h3>
                  <p className="font-medium">"{testimonial.desc}"</p>
                </div>
              </div>
              <div className="flex-shrink-0 ml-[3.4375rem] md:ml-auto mt-5 md:mt-0">
                <Link
                  className="inline-flex items-center px-5 py-[.625rem] rounded-[100vmax] border-2 overflow-hidden gap-[.625rem] relative font-semibold text-sm md:text-xl transition-colors dark:hover:before:opacity-20 border-[#2C2C2E] dark:border-darkGray dark:text-lightGray dark:hover:text-white dark:hover:border-[#5C5C5C] dark:before:opacity-10 dark:before:absolute dark:before:inset-0 dark:before:bg-gradient-to-r dark:before:from-lightGray dark:before:to-gray"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.workana.com/freelancer/8dbf70cdf26466c02efffe2ddbb75224">Ver avaliação <ArrowIcon className="w-3 md:w-auto" /></Link>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TestimonialSection