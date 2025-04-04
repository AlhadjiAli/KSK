// Hero.tsx

'use client'

import {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';

import content from '../data/content.json';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        (prevSlide + 1) % content.hero.slides.length
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.slideshow}>
        {content.hero.slides.map((slide, index) => (
          <Image
            key={index}
            src={slide || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          />
        ))}
      </div>
      <div className={styles.content}>
        <h1>{content.hero.title}</h1>
        <p>{content.hero.subtitle}</p>
        <button className={styles.cta} >
            Learn More
        </button>
      </div>
    </section>
  )
}

export default Hero

