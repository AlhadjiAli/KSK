import Image from 'next/image'
import styles from './Partners.module.css'
import content from '../data/content.json'

const Partners = () => {
  return (
    <section className={styles.partners}>
      <h2>Our Partners</h2>
      <div className={styles.grid}>
        {content.partners.map((partner) => (
          <div key={partner.id} className={styles.partner}>
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={150}
              height={75}
              objectFit="contain"
            />
            <h6 align="center">{partner.title}</h6>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners

