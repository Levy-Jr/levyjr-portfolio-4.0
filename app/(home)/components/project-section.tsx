import Link from "next/link"

const ProjectSection = () => {
  return (
    <section className="mt-16 mb-[4.375rem]">
      <h2 className="mb-5 text-[2rem] font-bold">Projetos</h2>
      <ul className="grid grid-cols-2 gap-4">
        <li></li>
        <li></li>
      </ul>
      <Link className="inline-block text-center bg-lightGreen transition-colors duration-200 font-bold dark:font-medium dark:bg-darkestGreen dark:hover:bg-[#0F402B]  text-white dark:hover:text-white dark:text-lightGray border dark:border-[#0B4C30] w-full py-2 rounded-[.3125rem]" href={"/projects"}>Ver mais</Link>
    </section>
  )
}

export default ProjectSection