"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Disc,
  Codepen,
  Globe,
  BookOpenText,
  Layers,
} from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/Arafat-alim", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/arafat-alim/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://x.com/SagaciousSpark", icon: Twitter, label: "Twitter" },
  { href: "mailto:arafat.aman.alim@gmail.com", icon: Mail, label: "Email" },
  {
    href: "https://medium.com/@arafat.aman.alim",
    icon: BookOpenText,
    label: "Medium",
  },
  {
    href: "https://codepen.io/dev-arafat-alim",
    icon: Codepen,
    label: "Codepen",
  },
  { href: "https://dev.to/dev-arafat-alim", icon: Globe, label: "Dev.to" },
  {
    href: "https://stackoverflow.com/users/20520620/arafat-alim",
    icon: Layers,
    label: "Stack Overflow",
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Dev. Arafat Alim
              </span>
            </a>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating exceptional digital
              experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href="mailto:arafat.aman.alim@gmail.com"
                  className="text-muted-foreground hover:text-blue-400 transition-colors duration-200"
                >
                  arafat.aman.alim@gmail.com
                </a>
              </div>
              <a
                href="https://discord.gg/jkhRbXbNw9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-purple-400 transition-colors"
              >
                <Disc className="w-4 h-4 text-purple-400" />
                <span>Join Discord</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground">
            © 2025 Arafat Alim. All rights reserved. Built with ❤️ using Next.js
            and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
