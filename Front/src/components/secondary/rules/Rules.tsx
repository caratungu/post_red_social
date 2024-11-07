import { useState } from "react";
import styles from "./Rules.module.css";

const Rules = () => {
  const [language, setLanguage] = useState("ENG");

  const handleOnClick = () => {
    if (language === "ENG") {
      setLanguage("ESP");
    } else {
      setLanguage("ENG");
    }
  };

  return (
    <div className={styles.container}>
      {language === "ENG" ? (
        <>
          <div className={styles.name}>
            r/programming Rules
            <span onClick={handleOnClick}>ENG</span>
          </div>
          <ol className={styles.list}>
            <li>
              Keep submissions on topic and of high quality
              <div className={styles.line}></div>
            </li>
            <li>
              No surveys<div className={styles.line}></div>
            </li>
            <li>
              No resumes/job listings<div className={styles.line}></div>
            </li>
            <li>
              /r/programming is not a support forum
              <div className={styles.line}></div>
            </li>
            <li>Spam</li>
          </ol>
        </>
      ) : (
        <>
          <div className={styles.name}>
            r/programming Reglas
            <span onClick={handleOnClick}>ESP</span>
          </div>
          <ol className={styles.list}>
            <li>
              Mantenga los aportes en el tema y de buena calidad
              <div className={styles.line}></div>
            </li>
            <li>
              Sin encuestas<div className={styles.line}></div>
            </li>
            <li>
              Sin currículos/listas de trabajo<div className={styles.line}></div>
            </li>
            <li>
              /r/programming no es un foro de soporte
              <div className={styles.line}></div>
            </li>
            <li>Spam</li>
          </ol>
        </>
      )}
    </div>
  );
};

export default Rules;
