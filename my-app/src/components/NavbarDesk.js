import icon from '../icons/chromeye_logo_v1.svg'
import styles from './Navbar.module.css'
import button from './Button.module.css'


export default function NavbarDesk(props) {

    console.log(props)

    const menuArr = props.menu.map(item => {
        if (item.order < 6) {
        return <a href={item.url} key={item.order} className={styles.links}>{item.name}</a>}
    })

    const buttonElement = props.menu.find(e => e.order === 6)

    return (
        <nav className={styles.navbar}>
            <img src={icon}
            alt='chromeye_logo'
            className={styles.navbarLogo}
            />
            <div className={styles.navbarMenu}>
                {menuArr}
                <button className={button.grey}>{buttonElement.name}</button>
            </div>
        </nav>
    )
}