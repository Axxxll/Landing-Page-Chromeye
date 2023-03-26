import arrowDown from '../icons/chromeye_assignment_arrowdown_v1.svg'
import arrowUp from '../icons/chromeye_assignment_arrowup_v1.svg'
import styles from './AgencyServices.module.css'

export default function AgencyServicesItem(props) {
    const description = <p  className={styles.description}>{props.description}</p>

    function handleClick() {
        props.onClick(props.id)
    }

    return (
        <div
            onClick={handleClick}
            className={props.expanded ? styles.containerExpanded : styles.container}
        >
            <hr className={styles.divider}/>
            <span className={styles.item}>
                <p className={styles.title}>
                    {props.title}
                </p>
                < img src={props.expanded ? arrowUp : arrowDown} className={styles.arrow}/>
            </span>
            {props.expanded ? description : null}

        </div>
    )
}