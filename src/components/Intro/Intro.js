import React, { useEffect, useState} from "react"
import styles from './Intro.module.css'
import {Link} from 'react-scroll'

function Intro (){

    useEffect(()=>{
        let h1 = document.querySelector('#titulo')
        function typewriter(elemento){
            let textArr = elemento.innerHTML.split('')
            elemento.innerHTML = '' 
            textArr.forEach((l,i)=>{   
                setTimeout(()=>{
                    elemento.innerHTML += l
                },70 * i ) 
        })  
        }
        typewriter(h1)
        let computer = document.querySelector('.mais div')
        
    },[])

    return(
        <div className={styles.body}>
            <div className={styles.container}>
            <div className={styles.typewriter}>
               <h1 id="titulo">Seja bem vindo!
               Meu nome é Igor, sou desenvolvedor Front-End!
            
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