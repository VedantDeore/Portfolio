'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

const AnimatedText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("engineer");
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (isHovered && !isAnimating) {
      setIsAnimating(true);
      const word = "engineer";
      const binary = "01100101 01101110 01100111 01101001 01101110 01100101 01100101 01110010";
      let currentIndex = 0;
      let isBinary = false;
      
      const animate = () => {
        if (!isBinary) {
          // Transform to binary
          if (currentIndex < binary.length) {
            setDisplayText(prev => 
              binary.slice(0, currentIndex + 1) + 
              word.slice(currentIndex + 1)
            );
            currentIndex++;
            setTimeout(animate, 25);
          } else {
            setTimeout(() => {
              isBinary = true;
              currentIndex = binary.length;
              animate();
            }, 1000);
          }
        } else {
          // Transform back to word
          if (currentIndex > 0) {
            setDisplayText(prev => 
              word.slice(0, word.length - currentIndex) + 
              binary.slice(binary.length - currentIndex)
            );
            currentIndex--;
            setTimeout(animate, 25);
          } else {
            setIsAnimating(false);
          }
        }
      };

      animate();
    } else if (!isHovered && !isAnimating) {
      setDisplayText("engineer");
    }
  }, [isHovered]);

  return (
    <motion.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="font-mono inline-block relative"
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 1 }}
      style={{ fontFeatureSettings: '"ss02"' }}
    >
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className={`inline-block ${char === '0' || char === '1' ? 'text-yellow-500 dark:text-purple-400' : ''}`}
          style={{ 
            fontFamily: 'monospace',
            transition: 'color 0.3s ease'
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formattedDate = currentTime.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kolkata'
  })

  const formattedTime = currentTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata'
  })

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="home" className="min-h-[80vh] flex items-center bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-6"
          >
            <motion.h1 
              variants={textVariants}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Vedant Deore
              </span>
            </motion.h1>
            
            <motion.p 
              variants={textVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400"
            >
              A passionate{' '}
              <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.05,
                  color: '#eab308',
                  textShadow: "0 0 8px rgba(234, 179, 8, 0.3)"
                }}
              >
                developer
              </motion.span>{' '}
              &{' '}
              <AnimatedText />
              {' '}creating amazing projects.
            </motion.p>

            <motion.div variants={textVariants}>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get in touch
              </Link>
            </motion.div>

            <motion.div 
              variants={textVariants}
              className="pt-12 space-y-2 text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{formattedTime} IST</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
              <div className="text-sm">
                {formattedDate}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

