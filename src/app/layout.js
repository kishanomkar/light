import './../styles/globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import EasterEggModal from '../components/EasterEggModal';
import { ThemeProvider } from '../hooks/useTheme';
import AOSInitializer from '../components/AOSInitializer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kishan Omkar - Full Stack Web Developer | Portfolio',
  description: 'Kishan Omkar - Expert AI & Web Developer specializing in React, Python, and Machine Learning.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <EasterEggModal />
          <AOSInitializer />
        </ThemeProvider>

        {/* Optional: Load script via CDN if not installed via npm */}
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
