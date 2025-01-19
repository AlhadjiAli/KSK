import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>KSK Digital Agency</h3>
          <p>Transforming Businesses with Innovative Digital Solutions</p>
        </div>
        <div className={styles.section}>
          <h3>Contact Us</h3>
          <p>Email: info@kskdigital.com</p>
          <p>Phone: +1 234 567 8900</p>
        </div>
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} KSK Digital Agency. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

