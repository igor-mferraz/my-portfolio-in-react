import styles from './MenuMobile.module.css'
export const MenuMobile = () =>{
    return(
        <ul className={styles.menu}>
            <li><a href="#">Sobre mim</a></li>
            <li><a href="#">Meus Projetos</a></li>
            <li><a href="#">Minhas Skills</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    )
}