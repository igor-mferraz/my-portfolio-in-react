import React from "react"
import styles from './Sobremim.module.css'
import img_sobre_mim from '../../imgs/programador.png'
import img_arrow_bottom from '../../imgs/arrow_bottom.png'
function Sobremim (){
    return(
        <div id="sobremim" className={styles.container}>
            <div className={styles.content}>
                <section className={styles.sobre_mim}>
                    <p>
                    Entusiasta por tecnologia, estudo programação front-end, meu papel como desenvolvedor é planejar, desenvolver e fazer manuntenção em interfaces gráfica,tanto no quesito estetico quanto funcional!  
                    Aqui no meu portifolio mostro alguns projetos que criei!
                    </p>
                    <div className={styles.mais}>
                        <img src={img_arrow_bottom}></img>
                    </div>
                </section>
                <section className={styles.sobre_mim_img}>
                    <img src={img_sobre_mim}></img>
                </section>
            </div>
        </div>
        
    )
}
export default Sobremim