// Projects.tsx

'use client'

import { useState } from 'react';

import Image from 'next/image';

import content from '../data/content.json';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const handleProjectClick = (index: number) => {
    setActiveProject(index)
    setShowVideo(false)
  }

  return (
    <section className={styles.projects}>
      <div className="container">
        <h2>Our Projects</h2>
        <div className={styles.projectsContainer}>
          <div className={styles.projectList}>
            {content.projects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.projectItem} ${index === activeProject ? styles.active : ''}`}
                onClick={() => handleProjectClick(index)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.projectPreview}>
            {!showVideo ? (
              <>
                <Image
                  src={content.projects[activeProject].image || "/placeholder.svg"}
                  alt={content.projects[activeProject].title}
                  width={600}
                  height={400}
                  objectFit="cover"
                />
                <button className={styles.watchDemo} onClick={() => setShowVideo(true)}>
                  Watch Demo
                </button>
              </>
            ) : (
              <div className={styles.videoContainer}>
                <video width="100%" height="auto" controls autoPlay>
                  <source src="/videos/1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button className={styles.closeVideo} onClick={() => setShowVideo(false)}>
                  Close Video
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

