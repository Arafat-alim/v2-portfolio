'use client';

import { motion } from 'framer-motion';
import { Award, AlignCenterVertical as Certificate, Trophy, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Full Stack MERN Certification',
    issuer: "Newton's School",
    date: '2022',
    description: 'Completed comprehensive full-stack development program covering React, Node.js, MongoDB, and Express.js',
    color: 'blue'
  },
  {
    icon: Certificate,
    title: 'JavaScript Algorithms Certification',
    issuer: 'FreeCodeCamp',
    date: '2021',
    description: 'Mastered advanced JavaScript concepts, data structures, and algorithmic problem solving',
    color: 'purple'
  },
  {
    icon: Award,
    title: 'React Development Expert',
    issuer: 'Udemy',
    date: '2021',
    description: 'Advanced React development including hooks, context API, and modern patterns',
    color: 'indigo'
  },
  {
    icon: Medal,
    title: 'Node.js Backend Specialist',
    issuer: 'Coursera',
    date: '2022',
    description: 'Specialized in building scalable backend applications with Node.js and Express',
    color: 'green'
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span> & Certifications
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Recognitions and certifications that showcase my expertise
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-${achievement.color}-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`w-8 h-8 text-${achievement.color}-400`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <span className={`text-sm font-medium text-${achievement.color}-400 bg-${achievement.color}-500/10 px-3 py-1 rounded-full`}>
                      {achievement.date}
                    </span>
                  </div>
                  
                  <h4 className="text-muted-foreground font-medium mb-3">
                    {achievement.issuer}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Happy Clients' },
            { number: '5+', label: 'Certifications' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}