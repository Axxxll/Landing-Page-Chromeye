import AgencyServicesItem from "./AgencyServicesItem"
import typography from'./Typography.module.css'
import styles from './AgencyServices.module.css'
import { useState } from "react"


export default function AgencyServices(props) {

    const [image, setImage] = useState(props.items[0].image)

    const agencyServicesItemArr = props.items.map(item => {
        return <AgencyServicesItem {...item} key={item.title} onClick={updateImage}/>
    })

    function updateImage(e) {
        setImage(e)
    }

    return (
        <div className="container">
            <h3 className={typography.title}>{props.title}</h3>
            <img src={image} className={styles.image}/>
            {agencyServicesItemArr}
            <hr className={styles.divider}/>
        </div>
    )
}