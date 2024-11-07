import styles from './HeadSBElem.module.css';

const HeadSBElem = ({ title, icon }: { title: string, icon: any}) => {
    return(
            <div className={styles.head}>
                <img className={styles.figure} src={icon} />
                <p>{title}</p>
            </div>
    )
}

export default HeadSBElem;