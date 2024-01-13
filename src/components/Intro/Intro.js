import React, { useEffect, useState } from "react"
import styles from './Intro.module.css'
import { Link } from 'react-scroll'
import TypeWriter from "../TypeWriter/TypeWriter"

function Intro() {
    return (
        <div className={styles.bodyIntro}>
            <div className={styles.container}>
                <div className={styles.typewriter}>
                    <div className={styles.typewriterText}>
                        <TypeWriter texto={"Olá, seja bem vindo! Meu nome é Igor sou Desenvolvedor Full Stack!"}/>
                    </div>
                </div>
                <div className={styles.mais}>
                    <div>
                        <button>
                            <Link to="sobremim" spy={true} smooth={true} offset={0} duration={700}> Saiba Mais</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Intro