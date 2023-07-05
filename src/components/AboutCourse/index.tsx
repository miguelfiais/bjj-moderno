import Image from "next/image"
import check from "../../assets/check.svg"
import demonstration from "../../assets/mendes.png"
import styles from "./styles.module.css"

const AboutCourse = () => {
  return (
    <main className={styles.container}>
      <div className="innerContainer">
        <div className={styles.left}>
          <Image
            className={styles.imgDemo}
            src={demonstration}
            alt="demonstration"
          />
        </div>

        <div className={styles.right}>
          <div>
            <h2 className={styles.title}>SOBRE O CURSO</h2>
            <h4 className={styles.subtitleTop}>
              Dominando o Jiu-Jitsu Moderno Técnicas Inovadoras para o Sucesso
            </h4>
            <p className={styles.description}>
              Descubra o poder do Jiu-Jitsu Moderno neste curso abrangente
              projetado para elevar suas habilidades de luta a um novo patamar.
              Aprenda técnicas inovadoras, estratégias eficientes e desenvolva a
              confiança para enfrentar qualquer desafio.
            </p>
          </div>
          <div className={styles.containerBenefits}>
            <h3 className={styles.subtitle}>Benefícios do Curso</h3>
            <div className={styles.benefit}>
              <Image src={check} alt="check" width={24} height={24} />
              <p>
                Aprenda técnicas de Jiu-Jitsu Moderno que se adaptam a qualquer
                situação de combate.
              </p>
            </div>
            <div className={styles.benefit}>
              <Image src={check} alt="check" width={24} height={24} />
              <p>
                Desenvolva força, agilidade e resistência física para melhorar
                seu desempenho.
              </p>
            </div>
            <div className={styles.benefit}>
              <Image src={check} alt="check" width={24} height={24} />
              <p>
                Domine técnicas avançadas de finalização e controle do oponente.
              </p>
            </div>
            <div className={styles.benefit}>
              <Image src={check} alt="check" width={24} height={24} />
              <p>
                Aprimore suas habilidades de defesa pessoal e aumente sua
                confiança.
              </p>
            </div>
            <div className={styles.benefit}>
              <Image src={check} alt="check" width={24} height={24} />
              <p>
                Participe de treinos práticos que simulam cenários reais de
                luta.
              </p>
            </div>
          </div>
          <a className={styles.link} href="https://devfiais2.netlify.app/">
            QUERO FAZER PARTE
          </a>
        </div>
      </div>
    </main>
  )
}

export default AboutCourse
