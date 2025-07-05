'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Figma', image: 'https://cdn.sanity.io/images/gci1ca0d/production/6551e520e801ab656029527c09265981c06dce33-480x480.png' },
  { name: 'Bootstrap', image: 'https://cdn.sanity.io/images/gci1ca0d/production/1bbed647da42a36c0c433d2bfd28a558c76d67ee-2500x1992.svg' },
  { name: 'TypeScript', image: 'https://cdn.sanity.io/images/gci1ca0d/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png' },
  { name: 'MongoDB', image: 'https://cdn.sanity.io/images/gci1ca0d/production/c39d7332a3cbe1bc30e16c3bdcfea3ecc96ab993-1024x1024.png' },
  { name: 'Redux', image: 'https://cdn.sanity.io/images/gci1ca0d/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png' },
  { name: 'REST API', image: 'https://cdn.sanity.io/images/gci1ca0d/production/4fe2a405f87c20361b6231f2ff542dfa79aea801-64x64.png' },
  { name: 'React JS', image: 'https://cdn.sanity.io/images/gci1ca0d/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png' },
  { name: 'HTML', image: 'https://cdn.sanity.io/images/gci1ca0d/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png' },
  { name: 'NeonDB', image: 'https://cdn.sanity.io/images/gci1ca0d/production/629a618babc4c5de6e6baafa3a588aed6fac3485-400x400.jpg' },
  { name: 'JavaScript', image: 'https://cdn.sanity.io/images/gci1ca0d/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png' },
  { name: 'Next JS', image: 'https://cdn.sanity.io/images/gci1ca0d/production/ba60e94d442b9f776c5273568b5faae5b8c70321-500x500.png' },
  { name: 'PostgreSQL', image: 'https://cdn.sanity.io/images/gci1ca0d/production/08fc41a58fc3ce433b7b61e95589baa39078707c-500x500.png' },
];

const experiences = [
  {
    period: '2023-2024',
    title: 'Full Stack Developer',
    company: 'Betalectic Pvt Ltd.',
    description: 'Developed and maintained the Finezzy Mobile App, ensuring smooth performance by resolving bugs and supporting live customers during their loan journeys. Built a data visualization tool for Support and Product teams to analyze user and loan details, and automated daily report generation.',
    color: 'blue'
  },
  {
    period: '2022-2023',
    title: 'Dot Net Web Developer',
    company: 'Genpact India Pvt Ltd.',
    description: 'I had the opportunity to work as a full time frontend developer in Genpact India for a period of 6 months. This was an amazing experience that allowed me to learn a lot and work with some of the most talented people in the industry.',
    color: 'purple'
  },
  {
    period: '2021-2022',
    title: 'Full Stack MERN Developer',
    company: "Newton's School",
    description: 'I interned as a Full Stack MERN Web Developer at Newton School. I worked on a wide variety of projects, including front-end development, back-end development, database design, and server administration.',
    color: 'indigo'
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span> & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-card border border-border rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 mb-3 relative">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background hidden md:block z-10" />

                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className={`text-${exp.color}-400 font-medium mb-2`}>
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {exp.title}
                  </h3>
                  <h4 className="text-muted-foreground font-medium mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}