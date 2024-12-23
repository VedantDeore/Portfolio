'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 100 },
      { name: "Python", level: 95 },
      { name: "C/C++", level: 90 },
      { name: "Java", level: 70 },
      { name: "Dart", level: 60 },
      { name: "Haskell", level: 50 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 100 },
      { name: "Next.js", level: 90 },
      { name: "FastAPI", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Firebase", level: 100 },
      { name: "Redis", level: 90 },
      { name: "Milvus", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "Pinecone", level: 20 },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "Material UI", level: 100 },
      { name: "Tensorflow", level: 90 },
      { name: "Keras", level: 80 },
      { name: "Pandas", level: 70 },
      { name: "NumPy", level: 70 },
      { name: "Matplotlib", level: 60 },
    ],
  },
]

const SkillBar = ({ 
  skill, 
  index, 
  categoryIndex, 
  isInView 
}: { 
  skill: Skill; 
  index: number; 
  categoryIndex: number;
  isInView: boolean;
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-yellow-500 dark:bg-purple-600"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: (categoryIndex * skillCategories[categoryIndex].skills.length + index) * 0.2,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.2 
  })

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0a0a0a]" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          Throughout my career, I have gained significant experience and skills in various areas of
          this field.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    categoryIndex={categoryIndex}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

