'use client'

import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const LoadingScreen = () => {
  const { theme } = useTheme()

  const rocketVariants = {
    initial: { y: 0, rotate: 0 },
    animate: { 
      y: -1000,
      rotate: 10,
      transition: { 
        y: { duration: 2, ease: "easeInOut" },
        rotate: { duration: 0.5, ease: "easeInOut" }
      }
    }
  }

  const smokeVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { 
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      transition: { 
        duration: 2,
        times: [0, 0.5, 1],
        repeat: Infinity
      }
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="text-center">
        <motion.div
          variants={rocketVariants}
          initial="initial"
          animate="animate"
          className="mb-4 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme === 'light' ? '#eab308' : '#9333ea'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9h12l-6 9z" />
            <path d="M6 9l6-7 6 7" />
          </svg>
          <motion.div
            variants={smokeVariants}
            initial="initial"
            animate="animate"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="20" fill={theme === 'light' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(147, 51, 234, 0.3)'} />
            </svg>
          </motion.div>
        </motion.div>
        <p className="text-gray-700 dark:text-gray-300">
          {theme === 'light' ? 'Launching into daylight...' : 'Blasting off into the night...'}
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen

