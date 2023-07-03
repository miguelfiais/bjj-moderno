import styles from "./styles.module.css"

const Header = () => {
  return (
    <header className={styles.container}>
      <div className="innerContainer">
        <h1>Descubra o poder do Jiu-Jitsu Moderno</h1>
        <p>
          Domine o Jiu-Jitsu Moderno: Aprenda técnicas avançadas que
          revolucionarão sua abordagem na Arte Marcial
        </p>
        <a href="https://devfiais2.netlify.app/">QUERO FAZER PARTE</a>
      </div>
    </header>
  )
}

export default Header
