import Info from '../../secondary/info/Info';
import Rules from '../../secondary/rules/Rules';
import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <div className={styles.container}>
            <Info />
            <Rules />
        </div>
    )
}

export default SideBar;