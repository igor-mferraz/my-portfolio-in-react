import React, { useEffect, useState } from "react"
import styles from './Header.module.css'

function Header (){
    const [logo, setLogo] = useState()
    useEffect(()=>{
    
    },[])
    function menuOpen(){
        let menu = document.querySelector('.menu')
        menu.style.display = 'block'
    }

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo} onClick={menuOpen}></div>
                <ul className={styles.menu}>
                    <li><a href="#">Sobre mim</a></li>
                    <li><a href="#">Meus Projetos</a></li>
                    <li><a href="#">Minhas Skills</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </header>
        </div>
        
    )
}

export default Header