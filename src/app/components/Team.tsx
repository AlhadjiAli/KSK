// Team.tsx

'use client'

import {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';

import content from '../data/content.json';
import styles from './Team.module.css';

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.team.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.team}>
      <div className="container">
        <h2>Our Team</h2>
        <div className={styles.memberList}>
          {content.team.map((member, index) => (
            <div
              key={member.id}
              className={styles.member}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={170}
                height={175}
                objectFit="cover"
                className={styles.memberImage}
              />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

