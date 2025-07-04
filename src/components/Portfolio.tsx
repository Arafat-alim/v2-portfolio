import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from './ui/button'

const filters = ['all', 'featured', 'web', 'game', 'ui', 'react']

const projects = [
  {
    id: 1,
    title: 'Daily Quiz App (Unlimited)',
    description: 'Quiz Battle on the way! 💣 Get the Question on Current Events.',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/6678eef56f9e31e7194baa87c034b8d45e3b98ec-1920x1280.webp',
    category: ['featured', 'game'],
    liveUrl: 'https://daily-quiz.netlify.app/',
    githubUrl: 'https://github.com/Arafat-alim/react-quiz',
    tags: ['React', 'API', 'Quiz'],
  },
  {
    id: 2,
    title: 'GitHub Profile Search',
    description: 'You Can search any GitHub Profile 💙 on this App.',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/da42127b02780be2a0fb2ef9d0be5e207d5ef591-736x552.jpg',
    category: ['web'],
    liveUrl: 'https://arafat-alim.github.io/github-profile-search/',
    githubUrl: 'https://github.com/Arafat-alim/github-profile-search',
    tags: ['JavaScript', 'GitHub API', 'Search'],
  },
  {
    id: 3,
    title: 'Crypto Currency Tracker',
    description: 'The World Of Crypto-currency Tracker',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/91796bb49c7b193ba72625218a9bb1d355b91fb8-2000x1818.webp',
    category: ['web', 'featured'],
    liveUrl: 'https://arafat-crypto-app.netlify.app/',
    githubUrl: 'https://github.com/Arafat-alim/crypto-app',
    tags: ['React', 'Crypto API', 'Charts'],
  },
  {
    id: 4,
    title: 'Cloud Hosting UI',
    description: 'A Frontend Application, the clone of Cloud Hosting Site named MOSHIFY.',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/1e96b11e33d034d47e32e656588c72b53ea0f6a2-1600x1200.png',
    category: ['ui'],
    liveUrl: 'https://youthful-davinci-9cf1c9.netlify.app/',
    githubUrl: 'https://github.com/Arafat-alim/Moshify',
    tags: ['HTML', 'CSS', 'UI/UX'],
  },
  {
    id: 5,
    title: 'Ultimate Authentication System',
    description: 'It is designed to be highly secure and scalable',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/dea9a9fbb2c1625183326618f703794d68f9b7b5-2000x2000.webp',
    category: ['web', 'react'],
    liveUrl: 'https://mern-auth-client-alpha.vercel.app/',
    githubUrl: 'https://github.com/Arafat-alim/ultimate-authentication-system',
    tags: ['MERN', 'Auth', 'Security'],
  },
  {
    id: 6,
    title: 'Kordz - The Music Player',
    description: 'The user can play their favorite listed songs on their favorite platform.',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/680d7feb518b1c80d1203d522393767c6338fefd-800x600.webp',
    category: ['web'],
    liveUrl: 'https://melody-node.netlify.app/',
    githubUrl: 'https://github.com/Arafat-alim/music-player',
    tags: ['JavaScript', 'Audio API', 'Music'],
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilter = (filter: string) => {
    setActiveFilter(filter)
    
    if (filter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category.includes(filter)
      ))
    }
  }

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Creative Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'border-border hover:border-blue-400 hover:text-blue-400'
              }`}
              onClick={() => handleFilter(filter)}
            >
              {filter.toUpperCase()}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}