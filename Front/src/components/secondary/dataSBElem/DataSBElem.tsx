import styles from "./DataSBElem.module.css";

const DataSBElem = () => {
  return (
    <div className={styles.data}>
      <div>
        <p className={styles.header}>5.7m</p>
        <p className={styles.detail}>Members</p>
      </div>
      <div>
        <p className={styles.header}>3.4k</p>
        <p className={styles.detail}>Online</p>
      </div>
      <div>
        <p className={styles.header}>Top 1%</p>
        <p className={styles.detail}>Ranked by size</p>
      </div>
    </div>
  );
};

export default DataSBElem;
