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
                    Sou programador full stack com foco no desenvolvimento web. <br/>
                    Tenho conhecimento em linguagens JavaScript, TypeScript além de frameworks populares como React, Next.<br/>
                    Além disso, estou familiarizado com backend utilizando Express e Nest, para criar APIs, utilizando junto ORMs como Prisma e Sequelize para fazer conexão com banco de dados. 
                    <br/>
                    Estou constantemente atualizando meu conhecimento para acompanhar as tecnologias e melhorias de codigo , buscando sempre conceitos e boas praticas.
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