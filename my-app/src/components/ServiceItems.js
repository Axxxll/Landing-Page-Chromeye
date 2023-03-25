import styles from './Services.module.css'
import minusIcon from '../icons/chromeye_assignment_minus_v1.svg'
import plusIcon from '../icons/chromeye_assignment_plus_v1.svg'
import { useState } from 'react'


export default function ServiceItems(props) {
    const [clicked, setClicked] = useState(false)

    function showDescription() {
        setClicked(prevClicked => !prevClicked)
    }


    const description = <p className={styles.itemDescription}>{props.description}</p>
    return (
        <div className={styles.itemContainer}>
            <img src={props.icon} className={styles.icon} alt='check'/>
            <h3 className={styles.itemTitle}>
                {props.title}
            </h3>
            <img src={clicked ? minusIcon : plusIcon} className={styles.symbol} onClick={showDescription} alt='sybol'/>
            {clicked ? description : null}
        </div>
    )
}