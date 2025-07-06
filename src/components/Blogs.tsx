"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogs from "@/data/blogs.json";
import GradientButton from "./ui/GradientButton";

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Blogs</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {blog.description}
                </p>

                <GradientButton
                  size="sm"
                  className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                  asChild
                >
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </GradientButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
