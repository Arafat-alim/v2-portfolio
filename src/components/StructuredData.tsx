import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arafat Alim",
    "jobTitle": "Full Stack Developer",
    "description": "Professional Full Stack MERN Developer specializing in React, Node.js, MongoDB, and modern web technologies.",
    "url": "https://v2.dev-arafat-alim.org",
    "sameAs": [
      "https://github.com/Arafat-alim",
      "https://www.linkedin.com/in/arafat-alim/",
      "https://twitter.com/CoderAlim"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Full Stack Development",
      "MERN Stack",
      "Web Development"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Full Stack MERN Certification",
        "credentialCategory": "Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Newton's School"
        }
      }
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Betalectic Pvt Ltd.",
        "description": "Full Stack Developer"
      }
    ],
    "email": "arafat.aman.alim@gmail.com",
    "telephone": "+918282985207",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}