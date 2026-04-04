import styles from './Section1.module.scss'

function Section1() {

  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.title}>Откройте мир с TravelWorld</h1>
        <p className={styles.subTitle}>Путешествия которые вы никогда не забудете</p>
        <button className={styles.button}>Выбрать тур</button>
      </div>

    </section>
  )
}

export default Section1
