'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[#0a0a0a] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white dark:bg-[#111111] rounded-3xl shadow-xl p-8 md:p-12"
      >
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100"
          >
            Let&apos;s Talk Shop
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-mono"
          >
            Got a project in mind? Let&apos;s create something extraordinary together. 
            Drop me a line and let&apos;s start the conversation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="mailto:vedantdeore1008@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              SEND EMAIL
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              BACK TO HOME
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

