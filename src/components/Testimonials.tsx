import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'S. Madhav',
    position: 'Technical Lead',
    company: "Newton's School",
    image: 'https://cdn.sanity.io/images/gci1ca0d/production/685884cc63b5c4c9b896d6e52ffb4faa9eb0526e-509x339.jpg?rect=191,9,264,258',
    content: 'Arafat is a great web developer who has a lot of experience. He has helped me with my website and he is always willing to help me with anything I need. He is always available to help me and he always does a great job. I would recommend Arafat to anyone who needs a web developer.',
    rating: 5
  },
]

const companies = [
  { name: 'Finezzy', image: 'https://cdn.sanity.io/images/gci1ca0d/production/f1f8f0bcd8c18b368d2bfb54744e003c2e8ba2f9-1000x340.png' },
  { name: 'Wiredup', image: 'https://cdn.sanity.io/images/gci1ca0d/production/e8bf00efce2cb2eed05fbc00896d625e5bd8df92-4096x2160.png' },
  { name: 'Auction Bazaar', image: 'https://cdn.sanity.io/images/gci1ca0d/production/a01df9235edcbff13feac2960a1814efaaf982e8-736x216.png' },
  { name: 'Betalectic', image: 'https://cdn.sanity.io/images/gci1ca0d/production/ff006eb6485abd1d99d74d7b49473e17ca76c0d3-300x88.png' },
  { name: 'Freelancer', image: 'https://cdn.sanity.io/images/gci1ca0d/production/b86635b7f7a80cb982405b38deb167d2bcf0a4ae-4200x1417.png' },
  { name: 'Genpact India', image: 'https://cdn.sanity.io/images/gci1ca0d/production/dd94d4e5f1b18bdf7e7cac2a94a175f7e3fc3997-244x110.png' },
  { name: "Newton's School", image: 'https://cdn.sanity.io/images/gci1ca0d/production/1f25f6e626e55c39b33bafae9c03aaba9efb88c9-263x50.png' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What People <span className="gradient-text">Say About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-400/30" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonial.position} at {testimonial.company}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Trusted by companies and organizations
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {companies.map((company, index) => (
              <motion.img
                key={company.name}
                src={company.image}
                alt={company.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}