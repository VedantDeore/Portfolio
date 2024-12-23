const educationData = [
  {
    degree: 'Secondary Education (10th Grade)',
    school: 'Fravashi Academy School',
    year: '2008 - 2020',
    description: 'Completed with a strong foundation in core subjects, excelling in Mathematics and Science.',
  },
  {
    degree: 'Senior Secondary Education (12th Grade)',
    school: 'Fravashi Academy Junior College',
    year: '2020 - 2022',
    description: 'Specialized in the Science stream with a focus on subjects such as Physics, Chemistry, and Mathematics.',
  },
  {
    degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    school: 'Vishwakarma Institute of Technology',
    year: '2022 - 2026',
    description: 'Graduating with a strong focus on Artificial Intelligence, Machine Learning, and Data Science, gaining expertise in data-driven algorithms, predictive modeling, and AI technologies.',
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.school} | {edu.year}</p>
              <p className="text-gray-700 dark:text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

