import styles from './CallToAction.module.css'
import button from './Button.module.css'

export default function CallToAction() {
    return (
        <div className={styles.MainContainer}>
            <div className={styles.TextContainer}>
                <h3 className={styles.title}>Ready to get started</h3>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed scelerisque arcu scelerisque ultricies habitant ac semper lorem.</p>
                <button className={button.grey}>Request a call</button>
            </div>
        </div>
    )
}