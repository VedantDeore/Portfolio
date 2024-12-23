const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a full-stack developer with a passion for creating beautiful and functional web applications. 
            With over 5 years of experience in the industry, I've worked on a wide range of projects from 
            small business websites to large-scale enterprise applications.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            My expertise includes JavaScript, React, Node.js, and Python. I'm always eager to learn new 
            technologies and stay up-to-date with the latest trends in web development.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or 
            experimenting with new recipes in the kitchen.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

