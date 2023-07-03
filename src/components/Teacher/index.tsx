import Image from "next/image"
import teacher from "../../assets/teacher.png"
import styles from "./styles.module.css"

const Teacher = () => {
  return (
    <section className={styles.container}>
      <div className="innerContainer">
        <article className={styles.containerLeft}>
          <h2 className={styles.title}>CONHEÇA NOSSO INSTRUTOR</h2>
          <h4>
            Guilherme Mendes - Campeão de Jiu-Jitsu e especialista em técnicas
            modernas
          </h4>
          <p className={styles.description}>
            Nossas aulas são ministradas pelo renomado instrutor Guilherme
            Mendes, um verdadeiro especialista no mundo do Jiu-Jitsu Moderno.
            Com anos de experiência como competidor de alto nível e instrutor
            dedicado, Guilherme traz um conhecimento profundo e uma paixão
            contagiante para cada aula.
          </p>
          <h3 className={styles.subtitle}>
            O Compromisso de Guilherme Mendes:
          </h3>
          <p className={styles.description}>
            Guilherme está empenhado em compartilhar sua experiência e
            conhecimento com seus alunos, ajudando-os a alcançar seus objetivos
            no Jiu-Jitsu Moderno. Sua abordagem de ensino dinâmica e motivadora
            incentiva o crescimento pessoal e o aperfeiçoamento técnico de cada
            aluno.
          </p>
          <a className={styles.link} href="https://devfiais2.netlify.app/">
            QUERO FAZER PARTE
          </a>
        </article>
        <div className={styles.containerRight}>
          <Image src={teacher} alt="professor" />
        </div>
      </div>
    </section>
  )
}

export default Teacher
