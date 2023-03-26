import AgencyServicesItem from "./AgencyServicesItem"
import typography from './Typography.module.css'
import styles from './AgencyServices.module.css'
import { useMemo, useState } from "react"


export default function AgencyServices(props) {
    const [activeItem, setActiveItem] = useState(0);

    const image = useMemo(() => {
        return props.items[activeItem].image
    }, [activeItem])

    const agencyServicesItemArr = props.items.map((item, index) => {
        return <AgencyServicesItem
            {...item}
            key={item.title}
            id={index}
            onClick={handleItemClicked}
            expanded={index === activeItem}
        />
    })

    function handleItemClicked(itemIndex) {
        setActiveItem(itemIndex)
    }

    return (
        <div className="container">
            <h3 className={typography.title}>{props.title}</h3>
            <div className={styles.divContainer}>
                <img src={image} className={styles.image} />
                <div className={styles.agencyServicesItemArr}>
                    {agencyServicesItemArr}
                </div>
            </div>
            <hr className={styles.divider} />
        </div>
    )
}