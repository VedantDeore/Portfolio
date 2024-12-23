'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CommentSection from './CommentSection'

const Footer = () => {
  const [showComments, setShowComments] = useState(false)

  return (
    <footer id="contact" className="bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-500 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Get in touch</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          <div>
            <a 
              href="mailto:vedantdeore1008@gmail.com" 
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition duration-300"
            >
              vedantdeore1008@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://github.com/vedantdeore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vedantdeore/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/vedantdeore45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2023 Vedant Deore. All rights reserved.</p>
          <button
            onClick={() => setShowComments(!showComments)}
            className="mt-4 text-sm underline cursor-pointer hover:text-gray-900 dark:hover:text-gray-200"
          >
            Secret Section
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <CommentSection />
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer

