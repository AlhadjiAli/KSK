import './globals.css';

import { Inter } from 'next/font/google';

import Footer from './components/Footer';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KSK Ltd',
  description: 'Transforming Businesses with Innovative Digital Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
