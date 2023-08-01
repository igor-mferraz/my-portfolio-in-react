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
                    Sou programador com foco no desenvolvimento web. Tenho conhecimento em linguagens JavaScript, TypeScript além de frameworks populares como React, Next.<br/> Minha principal habilidade é criar interfaces responsivas e intuitivas, garantindo uma ótima experiência do usuário. Além disso, estou familiarizado com conceitos de design web, como usabilidade e acessibilidade. Trabalho em conjunto com equipes de design e backend para criar sites e aplicativos web de alta qualidade, sempre buscando soluções eficientes e escaláveis. Estou constantemente atualizando meu conhecimento para acompanhar as tendências e tecnologias emergentes no campo do desenvolvimento web.
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