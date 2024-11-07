import styles from './ButtonCreatePost.module.css'

const ButtonCreatePost = () => {

    const handleOnClick = () => {
        alert('Hizo click');
    }

    return(
        <div className={styles.container} onClick={handleOnClick}>+ Create</div>
    )
}

export default ButtonCreatePost;