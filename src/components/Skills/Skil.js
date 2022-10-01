import styles from './Skil.module.css'
import CardTool from "./CardTool"
import logoJS from './imgs/logo-javascript.png'
import logoHTML from './imgs/logo-html.png'
import logoCSS from './imgs/logo-css.png'
import logoTS from './imgs/logo-ts.png'
import logoGitGitHub from './imgs/git-github.png'
import bancoDeDados from './imgs/banco-de-dados.png'
import logoReact from './imgs/logo-react.png'

import  {tools} from './Tool'
import { TiStarOutline,TiStar } from "react-icons/ti";
import Card from '../Projects/Card'

function Skil (){
    return(
    <div id='skills' className={styles.body}>
        <div className={styles.container}>
            <div className={styles.description}>
                <h1>Minhas habilidades</h1>
            </div>
            <div className={styles.skills}>
                {
                    tools.map((item,key)=>(
                        <CardTool key={key}
                            conhecimento={item.conhecimento}
                            altImg = {item.tool}
                            img = {item.img}
                        />
                    ))
                }
                
                
                
            </div>
        </div>
        
    </div>
        
    )
}

export default Skil