import React, { useEffect, useState } from "react"
import styles from './Projects.module.css'
import Card from './Card'
import img from '../../imgs/calc.png'
import { projetos } from "./ProjetosObjetos"

function Projects (){
    const [scrollX, setScrollX] = useState(0)
    const moverParaDireita = ()=>{
        let x = scrollX - 240
        let listlargura = (projetos.length -2) * 240
        let fimList = listlargura - listlargura - listlargura
        //que gambiarra kkk
            if(x < fimList){
                x = 0
            }
        setScrollX(x)
        console.log(fimList)
 
    }
    const moverParaEsquerda = ()=>{
        let x = scrollX + 240
        if(x > 0){
            x=0
        }
        setScrollX(x)
        console.log(scrollX)
    }


    return(
        <div className={styles.body}>
            <div className={styles.container}>
                <div onClick={moverParaEsquerda} className={styles.setaLeft}>...</div>

                    <div className={styles.content_Projects}>
                        
                        <div className={styles.movieRow} style={{marginLeft: scrollX}}>
                            {projetos.map((item,key)=>(
                                <Card key={key} titulo={item.titulo} link={item.link} img={item.img}/>
                            ))}
                        </div>
                    </div>
                <div onClick={moverParaDireita} 
                 className={styles.setaLeft}>...</div>
            </div>
        
        </div>
        
    )
}

export default Projects