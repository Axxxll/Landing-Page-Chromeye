import arrowDown from '../icons/chromeye_assignment_arrowdown_v1.svg'
import arrowUp from '../icons/chromeye_assignment_arrowup_v1.svg'
import styles from './AgencyServices.module.css'

import { useState } from 'react'



export default function AgencyServicesItem(props) {
    const [itemExpanded, setItemExpanded] = useState(false)

    const description = <p  className={styles.description}>{props.description}</p>

    function sendImage() {
        if (!itemExpanded) {
        props.onClick(props.image)
        }
        setItemExpanded(prevState => !prevState)
    }
    return (
        <div 
        onClick={sendImage}
        className={itemExpanded ? styles.containerExpanded : styles.container}
        >
            <hr className={styles.divider}/>
            <span className={styles.item}>
                <p className={styles.title}>
                    {props.title}
                </p>
                < img src={itemExpanded? arrowUp : arrowDown} className={styles.arrow}/>
            </span>
            {itemExpanded ? description : null}
            
        </div>
    )
}