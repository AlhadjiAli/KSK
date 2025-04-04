import Image from 'next/image';

const Logo = () => {
  return (
    <Image 
      src="../images/logo/Ksk-logo.png" // Accès direct depuis le dossier public
      alt="Logo de l'entreprise"
      width={150}
      height={50}
      priority // Optimisation pour un chargement rapide
    />
  );
};

export default Logo;
