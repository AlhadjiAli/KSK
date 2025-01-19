'use client'

import { useState, useEffect } from 'react'
import styles from './Testimonials.module.css'
import content from '../data/content.json'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.carousel}>
        {content.testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles.testimonial} ${index === activeIndex ? styles.active : ''}`}
          >
            <p className={styles.quote}>{testimonial.text}</p>
            <p className={styles.author}>{testimonial.name}, {testimonial.company}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

