'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Comment {
  id: string
  name: string
  linkedinProfile: string
  comment: string
  timestamp: number
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [linkedinProfile, setLinkedinProfile] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    const storedComments = localStorage.getItem('comments')
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [])

  const addComment = (e: React.FormEvent) => {
    e.preventDefault()
    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      linkedinProfile,
      comment,
      timestamp: Date.now()
    }
    const updatedComments = [...comments, newComment]
    setComments(updatedComments)
    localStorage.setItem('comments', JSON.stringify(updatedComments))
    setName('')
    setLinkedinProfile('')
    setComment('')
  }

  return (
    <div className="bg-white dark:bg-[#0a0a0a] py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Secret Comment Section</h3>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={addComment} className="mb-12 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-purple-500"
            />
            <input
              type="url"
              placeholder="LinkedIn Profile URL"
              value={linkedinProfile}
              onChange={(e) => setLinkedinProfile(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              rows={4}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 dark:bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 dark:hover:bg-purple-700 transition duration-300"
            >
              Add Comment
            </button>
          </form>
          <AnimatePresence>
            {comments.map((comment) => (
              <motion.div 
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">{comment.name}</h4>
                    <a href={comment.linkedinProfile} target="_blank" rel="noopener noreferrer" className="text-yellow-600 dark:text-purple-400 hover:underline">
                      LinkedIn Profile
                    </a>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(comment.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{comment.comment}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default CommentSection

