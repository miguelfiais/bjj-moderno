import Question from "../Question"
import styles from "./styles.module.css"

const Faq = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>PERGUNTAS FREQUENTES:</h2>
        <div className={styles.containerQuestions}>
          <Question
            question="Quais são os benefícios de aprender técnicas avançadas de Jiu-Jitsu?"
            answer="Aprender técnicas avançadas de Jiu-Jitsu permite que os praticantes expandam seu repertório de movimentos e estratégias, aprimorando sua eficiência no combate e aumentando suas chances de sucesso em situações desafiadoras."
          />
          <Question
            question="Quais são as principais características do Jiu-Jitsu moderno?"
            answer="O Jiu-Jitsu moderno combina técnicas tradicionais com inovações e abordagens atualizadas. Ele enfatiza o uso eficiente da técnica, movimentos fluidos e adaptação estratégica durante o combate."
          />
          <Question
            question="Quais são os requisitos para participar do curso de Jiu-Jitsu com técnicas avançadas?"
            answer="Não há requisitos específicos. Qualquer pessoa interessada em aprender e aprimorar suas habilidades de Jiu-Jitsu é bem-vinda. Recomendamos apenas uma boa disposição para se dedicar ao treinamento e a mente aberta para absorver novos conhecimentos."
          />
          <Question
            question="Quais tipos de técnicas avançadas são abordadas no curso?"
            answer="O curso aborda uma variedade de técnicas avançadas, como estrangulamentos, finalizações, passagens de guarda avançadas, defesas contra ataques sofisticados e transições complexas entre posições. Todas as técnicas são ensinadas de forma detalhada e demonstradas em diferentes situações de combate."
          />
        </div>
      </div>
    </section>
  )
}

export default Faq
