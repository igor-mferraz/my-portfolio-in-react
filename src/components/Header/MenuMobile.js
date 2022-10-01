import styles from './MenuMobile.module.css'
import { Link } from 'react-scroll'
export const MenuMobile = ({close}) =>{
    return(
        <ul className={styles.menu}>
            <li >
                <Link to="sobremim" spy={true} smooth={true} offset={0} duration={700} onClick={close}>Sobre mim</Link>
            </li>
            <li >
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={700} onClick={close} >Meus Projetos</Link>
            </li>
            <li >
                <Link to="skills" spy={true} smooth={true} offset={-100} duration={700} onClick={close}>Minhas Skills</Link>
            </li>
            <li >
                <Link to="footer" spy={true} smooth={true} offset={0} duration={700} onClick={close}>Contato</Link>
            </li>
        </ul>
    )
}