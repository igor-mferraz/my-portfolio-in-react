import styles from './CardTool.module.css';
import { TiStarOutline,TiStar } from "react-icons/ti";

function CardTool ({img, conhecimento ,altImg}){

    const stars = () => {
        const stars = []
        for(let i = 0; i < conhecimento; i++){
            stars.push(<TiStar/>) 
        }
        for(let i = 0; i < (5 - conhecimento); i++){
            stars.push(<TiStarOutline/>) 
        }
        return stars
    }


    return( 
        <div className={styles.tool}>
            <img src={img} alt={altImg}></img>
            <p>{altImg}</p>
            <div>
                <p>Conhecimento:</p> 
                <span>
                    {stars()}
                </span>
            </div>
        </div>
        
    )
}

export default CardTool