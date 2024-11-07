import styles from './ButtonJoin.module.css'

const ButtonJoin = () => {

    const handleOnClick = () => {
        alert('Hizo click');
    }

    return(
        <div className={styles.container} onClick={handleOnClick}>Join</div>
    )
}

export default ButtonJoin;