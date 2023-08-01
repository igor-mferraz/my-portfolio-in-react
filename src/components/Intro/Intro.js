import React, { useEffect, useState } from "react"
import styles from './Intro.module.css'
import { Link } from 'react-scroll'
import TypeWriter from "../TypeWriter/TypeWriter"

function Intro() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.typewriter}>
                    <h1 id="titulo">
                        <TypeWriter texto={"Olá, seja bem vindo! Meu nome é Igor sou Programador Jr!"}/>
                    </h1>
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