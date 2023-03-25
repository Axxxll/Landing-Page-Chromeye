import icon from '../icons/chromeye_logo_v1.svg'
import buttonIcon from '../icons/Union.png'
import styles from './Navbar.module.css'

export default function Navbar(props) {


    return (
        <nav className={styles.navbar}>
            <img 
            src={icon}
            alt='chromeye_logo'
            className={styles.navbarLogo}
            />
            <button className={styles.navbarButton}>
                <img src={buttonIcon} alt='chromeye'/>
            </button>
        </nav>
    )
}