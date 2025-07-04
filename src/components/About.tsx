import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'MERN Stack Development',
    description: 'I have experience building web applications from scratch and have a strong understanding of React, Redux, Node.js, and MongoDB. I am also proficient in HTML, CSS, and JavaScript.',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/51de1c9ce74d7fe0c90a42f167fb9fbc1007867a-848x477.png'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'I am currently a junior backend developer. I am good at JavaScript and Node.js. I am always looking to improve my skills and learn new technologies.',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/df69b5350582ccfb0e5535b67bf92853c40951e2-736x414.jpg'
  },
  {
    icon: Globe,
    title: 'Frontend Development',
    description: 'I worked closely with web designers to create a website that looks and feels great to the user.',
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/ade9f5eda0b50be3c1aa8c3321e9bf24df9d45ab-540x360.jpg'
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            I Know That <span className="gradient-text">Good Application</span> Means{' '}
            <span className="gradient-text">Good Business</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}