import styles from './Footer.module.css'
import { TiSocialLinkedin,TiSocialInstagram, TiSocialGithub, TiMail} from 'react-icons/ti'
export const Footer = () =>{
    return(
        <div id='footer' className={styles.container}>
            <div className={styles.social}>
                <a href='https://www.instagram.com/igor_mferraz/' target='_blank'><TiSocialInstagram/></a>
                <a href='https://www.linkedin.com/in/igor-ferraz-9939a7179/' target='_blank'><TiSocialLinkedin/></a>
                <a href='https://github.com/igor-mferraz' target='_blank'><TiSocialGithub/></a>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLCDkHfVxZDBhdrqPkFswmlzTXwPSzzgvpLMRVFVwTHqkJDzxfZMbhFbXwGXlSfDpTWJGX' target='_blank'><TiMail/></a>
                
                
            </div>
            
        </div>
    )
}