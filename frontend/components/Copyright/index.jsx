import styles from "./Copyright.module.css";

const Copyright = () => {
  return ( 
    <section className={styles.container}>
      <p className={styles.attribution}>Created by <a href="https://github.com/sodiqsanusi">Sodiq Sanusi</a></p>
      <div className={styles.designAttribution}>Designs provided by devChallenges.io</div>
    </section>
  );
}
 
export default Copyright;