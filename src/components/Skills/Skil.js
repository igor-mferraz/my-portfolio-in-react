import styles from './Skil.module.css'
import CardTool from "./CardTool"
import logoJS from './imgs/logo-javascript.png'
import logoHTML from './imgs/logo-html.png'
import logoCSS from './imgs/logo-css.png'
import logoTS from './imgs/logo-ts.png'
import logoGitGitHub from './imgs/git-github.png'
import bancoDeDados from './imgs/banco-de-dados.png'

import logoReact from './imgs/logo-react.png'

import { TiStarOutline,TiStar } from "react-icons/ti";
function Skil (){
    return(
    <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>Minhas habilidades</h1>
            </div>
            <div className={styles.skills}>
                <CardTool
                    img={logoHTML} altImg="HTML" 
                    conhecimento={<><TiStar/> <TiStar/> <TiStar/> <TiStar/> <TiStar/></>}

                />
                <CardTool
                    img={logoCSS} altImg="CSS" 
                    conhecimento={<><TiStar/> <TiStar/> <TiStar/> <TiStar/> <TiStar/></> }
                />
                <CardTool
                    img={logoJS} altImg="JavaScript" 
                    conhecimento={<><TiStar/> <TiStar/> <TiStar/> <TiStarOutline/> <TiStarOutline/> </>}
                />
                <CardTool
                    img={logoTS} altImg="TypeScript" 
                    conhecimento={<><TiStar/> <TiStar/> <TiStarOutline/> <TiStarOutline/> <TiStarOutline/> </>}
                />
                <CardTool
                    img={logoGitGitHub} altImg="Git/GitHub" 
                    conhecimento={<><TiStar/> <TiStar/> <TiStar/> <TiStarOutline/> <TiStarOutline/> </>}
                />
                <CardTool
                    img={logoReact} altImg="React" 
                    conhecimento={<><TiStar/> <TiStar/> <TiStar/> <TiStarOutline/> <TiStarOutline/> </>}
                />
                <CardTool
                    img={bancoDeDados} altImg="Banco de Dados" 
                    conhecimento={<><TiStar/> <TiStar/> <TiStar/> <TiStarOutline/> <TiStarOutline/> </>}
                />
                
                
                
            </div>
        </div>
        
    </div>
        
    )
}

export default Skil