import styles from "./Info.module.css";
import HeadSBElem from "../headSBElem/HeadSBElem";
import programming from "/programming.png";
import DataSBElem from "../dataSBElem/DataSBElem";
import ButtonJoin from "../buttonJoin/ButtonJoin";

const Info = () => {
  const title: string = "r/programming";

  return (
    <div className={styles.container}>
      <div className={styles.name}></div>
      <HeadSBElem title={title} icon={programming} />
      <div className={styles.title}>
        <p>Computer programming</p>
        <p>Created Feb 28, 2006</p>
      </div>
      <div className={styles.line}></div>
      <DataSBElem />
      <div className={styles.line}></div>
      <ButtonJoin />
      <div className={styles.line}></div>
      <div className={styles.text}>
        <p>COMMUNITY OPTIONS</p>
        <p>&#5167;</p>
      </div>
    </div>
  );
};

export default Info;
