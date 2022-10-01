import styles from './MenuMobile.module.css'
import { Link } from 'react-scroll'
export const MenuMobile = () =>{
    return(
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
    )
}