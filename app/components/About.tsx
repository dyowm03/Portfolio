import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ProfileImage from './ProfileImage'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full max-w-md mx-auto">
              <ProfileImage />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Hi! I'm a passionate Android developer specializing in Kotlin development. I create elegant and performant mobile applications using modern Android development practices and Kotlin-first approach. My expertise lies in building user-friendly, robust Android applications that deliver great user experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 