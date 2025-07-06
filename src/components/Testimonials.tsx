"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "S. Madhav",
    position: "Technical Lead",
    company: "Newton's School",
    image:
      "https://cdn.sanity.io/images/gci1ca0d/production/685884cc63b5c4c9b896d6e52ffb4faa9eb0526e-509x339.jpg?rect=191,9,264,258",
    content:
      "Arafat is a great web developer who has a lot of experience. He has helped me with my website and he is always willing to help me with anything I need. He is always available to help me and he always does a great job. I would recommend Arafat to anyone who needs a web developer.",
    rating: 5,
  },
  {
    name: "Jane Doe",
    position: "Project Manager",
    company: "Tech Solutions",
    image: "https://i.pravatar.cc/150?u=jane-doe",
    content:
      "Arafat delivered an outstanding project ahead of schedule. His attention to detail and problem-solving skills are exceptional. Highly recommend!",
    rating: 5,
  },
  {
    name: "John Smith",
    position: "CEO",
    company: "Innovate Corp",
    image: "https://i.pravatar.cc/150?u=john-smith",
    content:
      "Working with Arafat was a pleasure. He understood our needs perfectly and translated them into a robust and user-friendly application.",
    rating: 4,
  },
  {
    name: "Emily White",
    position: "Marketing Lead",
    company: "Global Brands",
    image: "https://i.pravatar.cc/150?u=emily-white",
    content:
      "Arafat's technical expertise combined with his creative approach made our website truly stand out. A true professional!",
    rating: 5,
  },
];

const companies = [
  {
    name: "Finezzy",
    image:
      "https://cdn.sanity.io/images/gci1ca0d/production/f1f8f0bcd8c18b368d2bfb54744e003c2e8ba2f9-1000x340.png",
  },
  {
    name: "Wiredup",
    image:
      "https://cdn.sanity.io/images/gci1ca0d/production/e8bf00efce2cb2eed05fbc00896d625e5bd8df92-4096x2160.png",
  },
  {
    name: "Auction Bazaar",
    image:
      "https://cdn.sanity.io/images/gci1ca0d/production/a01df9235edcbff13feac2960a1814efaaf982e8-736x216.png",
  },
  {
    name: "Betalectic",
    image:
      "https://cdn.sanity.io/images/gci1ca0d/production/ff006eb6485abd1d99d74d7b49473e17ca76c0d3-300x88.png",
  },
  {
    name: "Freelancer",
    image:
      "https://cdn.sanity.io/images/gci1ca0d/production/b86635b7f7a80cb982405b38deb167d2bcf0a4ae-4200x1417.png",
  },
  {
    name: "Genpact India",
    image:
      "https://cdn.sanity.io/images/gci1ca0d/production/dd94d4e5f1b18bdf7e7cac2a94a175f7e3fc3997-244x110.png",
  },
  {
    name: "Newton's School",
    image:
      "https://cdn.sanity.io/images/gci1ca0d/production/1f25f6e626e55c39b33bafae9c03aaba9efb88c9-263x50.png",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-20 px-4">
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

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial, index) => (
                <div className="embla__slide p-4" key={index}>
                  <div className="bg-card border border-border rounded-2xl p-8 h-full relative flex flex-col justify-between">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-400/30" />
                    <div>
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
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg italic mb-6">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="flex items-center mt-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 bg-card/50 hover:bg-card text-foreground rounded-full p-2 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 bg-card/50 hover:bg-card text-foreground rounded-full p-2 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Trusted by companies and organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {companies.map((company) => (
              <motion.div
                key={company.name}
                className="p-2"
                initial={{
                  opacity: 0.5,
                  y: 20,
                  filter: "invert(1) grayscale(100%)",
                }}
                whileInView={{
                  opacity: 0.7,
                  y: 0,
                  filter: "invert(1) grayscale(100%)",
                }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  opacity: 1,
                  zIndex: 10,
                  boxShadow: "0 0 25px rgba(255, 240, 240, 240)",
                  borderRadius: "0.5rem",
                }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="h-10 lg:h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
