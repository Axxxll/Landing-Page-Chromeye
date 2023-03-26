import facebookLogo from '../icons/chromeye_assignment_facebookicon_v1.svg'
import linkedInLogo from '../icons/chromeye_assignment_linkedinicon_v1.svg'
import twitterLogo from '../icons/chromeye_assignment_twittericon_v1.svg'
import styles from './Footer.module.css'
import button from './Button.module.css'


export default function Footer(props) {

    const companyDataArr = props.footer_menu.map(item => {
        return <a href={item.url} key={item.order} className={styles.links}>{item.name}</a>
    })

    const half = Math.ceil(companyDataArr.length / 2);
    const firstHalf = companyDataArr.slice(0, half)
    const secondHalf = companyDataArr.slice(half)

    return (
        <div className={styles.container}>
            <img src={props.logo} className={styles.logo} />
            <button className={button.grey}>Request a call</button>
            {firstHalf}
            <p className={styles.description}>{props.intro}</p>
            <hr className={styles.divider} />
            {secondHalf}
            <hr className={styles.divider} />
            <p className={styles.links}>Follow us:</p>
            <div className={styles.mediaLinks}>
                <a href={props.social_media.facebook}>
                    <img src={facebookLogo} />
                </a>
                <a href={props.social_media.linkedin}>
                    <img src={linkedInLogo} />
                </a>
                <a href={props.social_media.twitter}>
                    <img src={twitterLogo} />
                </a>
            </div>
            <hr className={styles.divider} />
            <p className={styles.links}>Contact</p>
            <div className={styles.descriptionContainer}>
                <p className={styles.descriptionFooter}>{props.address}</p>
                <p className={styles.descriptionFooter}>Phone: {props.phone}</p>
                <p className={styles.descriptionFooter}>Web: {props.email}</p>
            </div>
        </div>
    )
}