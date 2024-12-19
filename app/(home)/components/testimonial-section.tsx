import Link from "next/link"
import Beto from "@/public/home/beto.webp"
import Emmanuel from "@/public/home/emmanuel.webp"
import Raphael from "@/public/home/raphael.webp"
import Image from "next/image"

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
      <h2 className="text-[2.375rem] font-medium text-center">O que meus clientes dizem?</h2>
      <ul className="grid gap-5 mt-16">
        {testimonials.map((testimonial, i) => (
          <li className="border-darkGray border dark:border-0 dark:bg-[#1B1B1B] p-[1.875rem] rounded-[.625rem]" key={i}>
            <blockquote className="flex">
              <div className="w-[3.3125rem] aspect-square mr-[.9375rem]">
                <Image className="min-w-[3.3125rem] rounded-full" src={testimonial.image} alt={testimonial.name} />
              </div>
              <div>
                <h3 className="font-medium text-2xl">{testimonial.name}</h3>
                <p className="font-medium">"{testimonial.desc}"</p>
              </div>
              <div>
                <Link href={testimonial.link} >Ver avaliação</Link>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TestimonialSection