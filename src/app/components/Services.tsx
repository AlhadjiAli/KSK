import styles from './Services.module.css'
import content from '../data/content.json'

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {content.services.map((service) => (
          <div key={service.id} className={styles.service}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

