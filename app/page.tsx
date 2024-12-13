import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="">
      <section>
        <h1>Não é só um site, <span>é uma experiência para seu cliente</span></h1>
        <p>Se você deseja aproveitar ao máximo as vantagens que a presença online pode oferecer, estou aqui para ajudar a transformar essa visão em realidade.</p>
        <div>
          <Link href={""}>Contato</Link>
          <Link href={""}>Projetos</Link>
        </div>
      </section>
      <section>
        <h2>O que meus clientes dizem?</h2>
        <ul>
          <li>
            <blockquote>
              <div>
                {/* <Image /> */}
              </div>
              <div>
                <h3>Beto</h3>
                <p>"Levy é um profissional de alta performance, pega muito rápido o que é passado e dá agilidade aos projetos. Recomendo."</p>
              </div>
              <div>
                <Link href={""} >Ver avaliação</Link>
              </div>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <div>
                {/* <Image /> */}
              </div>
              <div>
                <h3>Emmanuel Augusto</h3>
                <p>"Profissional com excelente criatividade, não foi necessário ajustes na idéia inicial dele! Sempre muito eficaz e disposto a entender o projeto!"</p>
              </div>
              <div>
                <Link href={""} >Ver avaliação</Link>
              </div>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <div>
                {/* <Image /> */}
              </div>
              <div>
                <h3>Raphael Martinez</h3>
                <p>"Excelente profissional, atencioso, educado e muito bom desenvolvedor, conseguiu executar o trabalho de desenvolver um design XD em REACT com maestria, estou extremamente satisfeito e impressionado com o resultado!"</p>
              </div>
              <div>
                <Link href={""} >Ver avaliação</Link>
              </div>
            </blockquote>
          </li>
        </ul>
      </section>
      <section>
        <h2>Projetos</h2>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </section>
    </main>
  );
}
