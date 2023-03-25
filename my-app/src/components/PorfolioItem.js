import styles from './Portfolio.module.css'
import typography from'./Typography.module.css'
import button from './Button.module.css'


export default function PortfolioItem(props) {
    return (
        <div>
            <img src={props.image} className={styles.image}/>
            <h3 className={typography.title}>{props.title}</h3>
            <hr className={styles.divider}/>
            <p className={typography.description}>
                {props.description}
            </p>
            <button className={button.button}>
                {props.buttonLabel}
            </button>
        </div>
    )
}