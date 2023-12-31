"use client"
import Image from "next/image"
import { useState } from "react"
import arrow from "../../assets/arrow.svg"
import styles from "./styles.module.css"

interface Props {
  question: string
  answer: string
}

const Question = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className={styles.question}>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src={arrow} alt="seta" width={24} height={24} />
        </button>
        <h4>{props.question}</h4>
      </div>
      <div className={isOpen ? styles.textOpen : styles.textClose}>
        <p className={styles.answer}>{props.answer}</p>
      </div>
    </article>
  )
}

export default Question
