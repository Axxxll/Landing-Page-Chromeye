import styles from './Services.module.css'
import button from './Button.module.css'
import typography from'./Typography.module.css'
import ServiceItems from './ServiceItems'


export default function Services(props) {

const serviceItems = props.items.map( item => {
    return <ServiceItems {...item} key={item.title}/>
})
    return (
        <div className={styles.servicesContainer}>
            <h2 className={typography.title}>
                Our {props.title}
            </h2>
            <p className={typography.description}>
                {props.description}
            </p>
            {serviceItems}
            <button className={button.blue}>
                {props.buttonLabel}
            </button>
        </div>
    )
}