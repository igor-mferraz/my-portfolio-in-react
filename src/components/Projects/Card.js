import React from 'react'
import styles from './Card.module.css'
function Card({img,title,desc,link}){
    return(
            <div className={styles.card}>

                <div className={styles.img}>
                    <img src={img}></img>
                </div>

                <div className={styles.title}>
                    <p>{title}</p>
                </div>
                
                <div className={styles.page}>
                    <a target="_blank" href={link}>Ver Projeto</a>
                </div>

            </div>
    )

}
export default Card