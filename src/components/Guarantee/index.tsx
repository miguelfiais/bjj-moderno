import Image from "next/image"
import guarantee from "../../assets/guarantee.png"
import styles from "./styles.module.css"

const Guarantee = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.containerLeft}>
          <h2>investimento</h2>
          <p>
            Ao adquirir nosso curso, você terá 7 dias para explorar todo o
            conteúdo, mergulhar nos módulos, assistir às aulas e se familiarizar
            com o conhecimento compartilhado.
          </p>
          <p>
            Acreditamos que essa experiência irá mostrar o quanto nosso curso
            pode agregar à sua jornada de aprendizado e crescimento pessoal.
          </p>
          <h3>
            Por apenas <span>R$ 97,00</span>
          </h3>
          <a href="https://devfiais.vercel.app/">QUERO FAZER PARTE </a>
        </div>
        <div className={styles.containerRight}>
          <Image src={guarantee} alt="selo de garantia" />
          <p>
            Oferecemos uma garantia de 7 dias para você testar o conteúdo. Se
            não ficar satisfeito, basta solicitar o reembolso e seu dinheiro
            será devolvido sem questionamentos. Aproveite essa oportunidade sem
            riscos e invista em seu desenvolvimento pessoal agora mesmo!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Guarantee
