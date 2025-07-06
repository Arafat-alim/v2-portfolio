"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import achievements from "@/data/achievements.json";

const CAROUSEL_ITEMS = [...achievements, ...achievements]; // Duplicate for seamless loop effect

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length
    );
  };

  // Effect for auto-scrolling
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 4000); // Change slide every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, currentIndex]);

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

        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            // FIX: Animate based on the percentage width of a single item (33.333% for 3 items)
            animate={{ x: `-${currentIndex * (100 / 3)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {CAROUSEL_ITEMS.map((achievement, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              >
                <a
                  href={achievement.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="bg-card border border-border rounded-2xl overflow-hidden h-full group"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 12px 24px hsla(var(--primary)/0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-blue-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <h4 className="text-muted-foreground font-medium mb-3">
                        {achievement.issuer}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                </a>
              </div>
            ))}
          </motion.div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 md:left-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full z-20 transition-colors"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 md:right-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full z-20 transition-colors"
          >
            <ChevronRight />
          </button>
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
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "10+", label: "Happy Clients" },
            { number: "5+", label: "Certifications" },
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
