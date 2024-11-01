import { useTheme } from '../theme/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="h-full bg-primary-main dark:bg-dark-primary-main"
          style={{
            scaleX: 0,
            transformOrigin: '0%',
          }}
          animate={{
            scaleX: typeof window !== 'undefined'
              ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
              : 0
          }}
        />
      </div>
    </div>
  );
};

export default Layout;