// Header.tsx

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import content
  from '../data/content.json'; // Importation correcte du fichier JSON
import styles from './Header.module.css';

const Header = () => {
  const logoSrc = content.logo?.imagesrc || '/images/default-logo.png'; // Valeur par défaut en cas d'absence

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src={logoSrc}
                alt="KSK Ltd Logo"
                width={150}
                height={50}
                className={styles.logoImage}
              />
            </Link>

          </div>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/team">Team</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
