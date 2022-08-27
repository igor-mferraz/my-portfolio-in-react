import React, { useEffect, useState } from "react"
import styles from './Projects.module.css'
import Card from './Card'
import ImgCalc from '../../imgs/calc.png'

function Projects (){
    return(
        <div className={styles.container}>
            <div className={styles.content_Projects}>
                <Card 
                title="Simulador de financiamento" 
                link="https://igormferraz.github.io/Simulador-de-Financiamento/"
                img={ImgCalc}
                 />
                <Card title="projeto 2"/> 

                
                
            </div>
        </div>
        
    )
}

export default Projects