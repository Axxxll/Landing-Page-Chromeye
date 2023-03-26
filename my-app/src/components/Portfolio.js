import PortfolioItem from "./PorfolioItem"
import styles from './Portfolio.module.css'
import typography from'./Typography.module.css'



export default function Portfolio(props) {

    const porfolioItems = props.items.map(item => {
        return <PortfolioItem {...item} key={item.title} reversed={item.title === '3D Visuals' ? true : false}/>
    })

    return (
        <div className={styles.container}>
            <h3 className={typography.title}>Our Work</h3>
            <p className={typography.description}>{props.description}</p>
            {porfolioItems}
        </div>
    )
} 