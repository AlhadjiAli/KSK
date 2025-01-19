'use client'

import { useState } from 'react'
import styles from './Admin.module.css'
import content from '../data/content.json'

const Admin = () => {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeSection, setActiveSection] = useState('team')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'admin123') {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  const handleCreate = (section: string) => {
    // Implement create functionality
    console.log(`Create new ${section} item`)
  }

  const handleUpdate = (section: string, id: number) => {
    // Implement update functionality
    console.log(`Update ${section} item with id ${id}`)
  }

  const handleDelete = (section: string, id: number) => {
    // Implement delete functionality
    console.log(`Delete ${section} item with id ${id}`)
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <h2>Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Login</button>
        </form>
      </div>
    )
  }

  return (
    <div className={styles.adminContainer}>
      <h1>Admin Dashboard</h1>
      <div className={styles.navigation}>
        <button onClick={() => setActiveSection('team')} className={styles.navButton}>Team</button>
        <button onClick={() => setActiveSection('jobs')} className={styles.navButton}>Jobs</button>
        <button onClick={() => setActiveSection('services')} className={styles.navButton}>Services</button>
        <button onClick={() => setActiveSection('testimonials')} className={styles.navButton}>Testimonials</button>
      </div>
      <div className={styles.content}>
        {activeSection === 'team' && (
          <div>
            <h2>Manage Team</h2>
            <button onClick={() => handleCreate('team')} className={styles.crudButton}>Add Team Member</button>
            {content.team.map((member) => (
              <div key={member.id} className={styles.item}>
                <span>{member.name}</span>
                <div>
                  <button onClick={() => handleUpdate('team', member.id)} className={styles.crudButton}>Edit</button>
                  <button onClick={() => handleDelete('team', member.id)} className={styles.crudButton}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeSection === 'jobs' && (
          <div>
            <h2>Manage Jobs</h2>
            <button onClick={() => handleCreate('jobs')} className={styles.crudButton}>Add Job</button>
            {content.jobs.map((job) => (
              <div key={job.id} className={styles.item}>
                <span>{job.title}</span>
                <div>
                  <button onClick={() => handleUpdate('jobs', job.id)} className={styles.crudButton}>Edit</button>
                  <button onClick={() => handleDelete('jobs', job.id)} className={styles.crudButton}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeSection === 'services' && (
          <div>
            <h2>Manage Services</h2>
            <button onClick={() => handleCreate('services')} className={styles.crudButton}>Add Service</button>
            {content.services.map((service) => (
              <div key={service.id} className={styles.item}>
                <span>{service.title}</span>
                <div>
                  <button onClick={() => handleUpdate('services', service.id)} className={styles.crudButton}>Edit</button>
                  <button onClick={() => handleDelete('services', service.id)} className={styles.crudButton}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeSection === 'testimonials' && (
          <div>
            <h2>Manage Testimonials</h2>
            <button onClick={() => handleCreate('testimonials')} className={styles.crudButton}>Add Testimonial</button>
            {content.testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.item}>
                <span>{testimonial.name}</span>
                <div>
                  <button onClick={() => handleUpdate('testimonials', testimonial.id)} className={styles.crudButton}>Edit</button>
                  <button onClick={() => handleDelete('testimonials', testimonial.id)} className={styles.crudButton}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin

