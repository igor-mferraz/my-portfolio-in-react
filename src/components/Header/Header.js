import React, { useEffect, useState } from "react"
import styles from './Header.module.css'
import { MenuMobile } from "./MenuMobile"
import {Link} from 'react-scroll'

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
                <div className={styles.logo} onClick={menuOpen}>
                    <Link to="/" spy={true} smooth={true} offset={0} duration={700}></Link>
                </div>
                    
                    {menu === true &&
                        <MenuMobile/>
                    }
                <ul className={styles.menu}>
                    <li>
                        <Link to="sobremim" spy={true} smooth={true} offset={0} duration={700} >Sobre mim</Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} offset={0} duration={700} >Meus Projetos</Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true} offset={0} duration={700} >Minhas Skills</Link>
                    </li>
                    <li>
                        <Link to="footer" spy={true} smooth={true} offset={0} duration={700} >Contato</Link>
                    </li>
                </ul>
            </header>
        </div>
        
    )
}

export default Header