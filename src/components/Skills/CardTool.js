import styles from './CardTool.module.css';

function CardTool ({img ,altImg}){
    return( 
        <div className={styles.tool}>
            <img src={img} alt={altImg}></img>
            <p>{altImg}</p>
        </div>
        
    )
}

export default CardTool