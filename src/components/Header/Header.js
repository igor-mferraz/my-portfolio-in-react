import React, { useEffect, useState } from "react"
import styles from './Header.module.css'
import { MenuMobile } from "./MenuMobile"

function Header (){
    const [menu, setMenu] = useState(false)
    function menuOpen(){
        if(window.innerWidth < 1000){
            setMenu(!menu)
        }
        
    }

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo} onClick={menuOpen}></div>
                {menu === true &&
                    <MenuMobile/>
                    }
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