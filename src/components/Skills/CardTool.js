import React, { useEffect, useState } from "react"
import styles from './CardTool.module.css'

function CardTool ({img,conhecimento,altImg}){

    return( 
        <div className={styles.tool}>
            <img src={img} alt={altImg}></img>
            <p>{altImg}</p>
            <div>Conhecimento:<br></br><span>{conhecimento}</span></div>
        </div>
        
    )
}

export default CardTool