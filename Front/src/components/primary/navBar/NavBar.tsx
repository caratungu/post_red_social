import styles from './NavBar.module.css'
import ButtonCreatePost from "../../secondary/buttonCreatePost/ButtonCreatePost";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div>Carlos Tunjano</div>
            <h2>Post It </h2>
            <ButtonCreatePost />
        </div>
    )
}

export default NavBar;