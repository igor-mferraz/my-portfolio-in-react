import styles from './Skil.module.css'
import CardTool from "./CardTool"
import logoJS from './imgs/logo-javascript.png'
import logoHTML from './imgs/logo-html.png'
import logoCSS from './imgs/logo-css.png'
import logoTS from './imgs/logo-ts.png'
import logoGitGitHub from './imgs/git-github.png'
import logoReact from './imgs/logo-react.png'
function Skil (){
    return(
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>Minhas habilidades</h1>
            </div>
            <div className={styles.skills}>
                <CardTool
                    img={logoHTML} altImg="HTML" conhecimento="*****"
                />
                <CardTool
                    img={logoCSS} altImg="CSS" conhecimento="*****"
                />
                <CardTool
                    img={logoJS} altImg="JavaScript" conhecimento="*****"
                />
                <CardTool
                    img={logoTS} altImg="TypeScript" conhecimento="*****"
                />
                <CardTool
                    img={logoGitGitHub} altImg="Git/GitHub" conhecimento="*****"
                />
                <CardTool
                    img={logoReact} altImg="React" conhecimento={"&starf;&starf;&star;&star;&star;"}
                />
                
                
                
            </div>
        </div>
        
    )
}

export default Skil