'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Github } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  title: string
  technologies: string[]
  description: string
  youtubeId?: string
  videoUrl?: string
  imageUrl?: string
  demoLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    title: "MedAssist",
    technologies: [
      "Flask",
      "Chatbot",
      "MongoDB",
      "Tawilwind CSS",
      "Scikit Learn",
      "Open AI",
      "LLM",
    ],
    description:
      "MedAssist is a real-time map app designed to help medical patients and doctors diagnose diseases and take appointments with ease by providing up-to-date information on the appointments and diagnosis with chatbot and reducing pressure on the local appointment scheduling, and providing a seamless user experience.",
    youtubeId: "xC2ccYpjPHE",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/VedantDeore/EmotionalHealthChatbot",
  },
  {
    title: "Vanguard Ai",
    technologies: [
      "Tensorflow",
      "OpenCV",
      "Arduino",
      "Flask",
      "ESP32 Wifi",
    ],
    description:
      "Vanguard AI  autonomous robotic vehicle that uses machine learning to navingate in war-zones. The vehicle is guided by the survellence drones and can handle a wide range of distances.",
    imageUrl: "https://github.com/VedantDeore/VanguardAi/raw/main/VanguardAI.webp",
    demoLink: "https://ai-chatbot-demo.example.com",
    githubLink: "https://github.com/example/ai-chatbot",
  },
  {
    title: "LandMarkt",
    technologies: [
      "Java",
      "MySQL",
      "Swing",
      "GUI",
      "Sockets",
    ],
    description:
      "LandMarkt is an innovative real estate platform that allows users to search for and post properties online. Whether you're looking to buy, sell, or rent, LandMarkt offers a user-friendly interface and powerful tools to help you navigate the real estate market.",
    imageUrl: "https://github.com/VedantDeore/LandMarkt/raw/master/Screenshots/357071940-59fdffbc-fe64-4f83-8ee7-c8c86839e2f1.png",
    demoLink: "https://github.com/VedantDeore/LandMarkt",
    githubLink: "https://github.com/VedantDeore/LandMarkt",
  },
  {
    title: "Secure Face Recognition and Alert System",
    technologies: [
      "OpenCV",
      "Arduino",
      "Telegram API",
      "ESP32",
      "MongoDB",
    ],
    description:
      "An advanced facial recognition and alert system, used to secure the door locks and remotely operate them. Here whenever a person comes to door owner is alerted and can enable or restrict access",
    imageUrl: "https://github.com/VedantDeore/SecureFaceRecognitionandAlertSystem/raw/main/SFRAS2.webp",
    demoLink: "https://vr-classroom-demo.example.com",
    githubLink: "https://github.com/example/vr-classroom",
  },
   {
    title: "RoyalPalate",
    technologies: [
      "Django",
      "MySQL",
      "Pythonanywhere",
      "HTML / CSS",
      "JS",
    ],
    description:
      "An online food orderning website where users can order food online with ease",
    imageUrl: "https://github.com/VedantDeore/RoyalPalate/raw/main/RoyalPalate.jpg",
    demoLink: "https://vr-classroom-demo.example.com",
    githubLink: "https://github.com/VedantDeore/RoyalPalate",
  },
  
]

const ProjectMedia = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="aspect-video rounded-lg overflow-hidden bg-gray-900 relative group"
    >
      {project.youtubeId ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={`${project.title} Demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : project.videoUrl ? (
        <video
          src={project.videoUrl}
          controls
          className="w-full h-full object-cover"
        />
      ) : project.imageUrl ? (
        <div className="relative w-full h-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white text-xl font-bold"
            >
              View Project
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          No media available
        </div>
      )}
    </motion.div>
  )
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid lg:grid-cols-2 gap-8 mb-16 last:mb-0"
    >
      <div className="space-y-6">
        <motion.h3 
          className="text-4xl font-bold text-gray-900 dark:text-white"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="text-sm text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
              {" / "}
            </motion.span>
          ))}
        </div>
        <motion.p 
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {project.description}
        </motion.p>
        <div className="flex gap-4">
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
            asChild
          >
            <motion.a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.a>
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600"
            asChild
          >
            <motion.a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </motion.a>
          </Button>
        </div>
      </div>
      <ProjectMedia project={project} />
    </motion.div>
  )
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, 2)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Projects</h2>
        <div>
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="bg-yellow-500 hover:bg-yellow-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less Projects' : 'Show More Projects'}
            </motion.span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects

