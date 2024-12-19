import HeroButtonGroup from "./hero-btn-group"

const HeroSection = () => {
  return (
    <section className="mt-40 text-center max-w-[90ch] mx-auto">
      <h1 className="font-matter text-[4rem] leading-[1.1] font-bold">Não é só um site, é uma <span className="bg-gradient-to-r from-primaryGreen to-darkGreen bg-clip-text text-transparent">experiência para seu cliente</span></h1>
      <p className="dark:text-lightGray mt-5 mb-8 text-xl">Se você deseja aproveitar ao máximo as vantagens que a presença online pode oferecer, estou aqui para ajudar a transformar essa visão em realidade.</p>
      <HeroButtonGroup />
    </section>
  )
}

export default HeroSection