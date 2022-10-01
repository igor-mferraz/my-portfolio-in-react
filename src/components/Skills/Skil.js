import styles from './Skil.module.css'
import CardTool from "./CardTool"
import  {tools} from './Tool'

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