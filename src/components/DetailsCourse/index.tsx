import Image from "next/image"
import mockup from "../../assets/mockup.png"
import styles from "./styles.module.css"

const DetailsCourse = () => {
  return (
    <section className={styles.container}>
      <div className="innerContainer">
        <h2 className={styles.title}>DETALHES DO CURSO</h2>
        <div className={styles.mockup}>
          <Image src={mockup} alt="mockup" />
          <p className={styles.description}>
            <span>Formato do Curso: </span>
            As aulas são ministradas em formato online, permitindo que você
            aprenda no conforto da sua casa, de acordo com sua disponibilidade
            de tempo. Além disso, todas as aulas são gravadas e ficam
            disponíveis para acesso posterior, para que você possa revisar o
            conteúdo sempre que desejar.
          </p>
        </div>
        <h3 className={styles.subtitle}>MÓDULOS</h3>
        <div className={styles.containerModules}>
          <div className={styles.module}>
            <h3>MÓDULO 1</h3>
            <p>Fundamentos do Jiu-Jitsu Moderno</p>
          </div>
          <div className={styles.module}>
            <h3>MÓDULO 2</h3>
            <p>Técnicas de Defesa e Controle</p>
          </div>
          <div className={styles.module}>
            <h3>MÓDULO 3</h3>
            <p>Finalizações Avançadas</p>
          </div>
          <div className={styles.module}>
            <h3>MÓDULO 4</h3>
            <p>Estratégias de Luta em Pé e no Solo</p>
          </div>
          <div className={styles.module}>
            <h3>MÓDULO 5</h3>
            <p>Táticas de Competição e Situações de Pressão</p>
          </div>
          <div className={styles.module}>
            <h3>MÓDULO 6</h3>
            <p>Adaptação e Resposta em Tempo Real</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsCourse
