import React, { useEffect, useState } from "react"
import styles from './CardTool.module.css'

function CardTool ({img,conhecimento,altImg}){

    return( 
        <div className={styles.tool}>
            <img src={img} alt={altImg}></img>
            <div>Conhecimento: <span>{conhecimento}</span></div>
        </div>
        
    )
}

export default CardTool