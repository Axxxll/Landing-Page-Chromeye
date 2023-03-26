import styles from './Hero.module.css'
import button from './Button.module.css'

export default function Hero(props) {
    return (
        <main className={styles.hero}>
            <div className={styles.heroText}>
                <h1 
                className={styles.title}
                >
                    {props.title}
                </h1>
                <p
                className={styles.description}
                >
                    {props.description}
                </p>
                <button className={button.blue}>
                    {props.buttonLabel}
                </button>
            </div>
            <div className={styles.imageContainer}>
                <img 
                src={props.image} 
                alt='chromeye'
                className={styles.image}
                />
            </div>
        </main>
    )
}