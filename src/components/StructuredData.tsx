export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://v2.dev-arafat-alim.org/#about",
    name: "Arafat Aman Alim",
    alternateName: "Arafat Alim",
    nationality: "Indian",
    gender: "Male",
    birthPlace: {
      "@type": "Place",
      name: "Kolkata, India",
    },
    image: {
      "@type": "ImageObject",
      contentUrl:
        "https://res.cloudinary.com/cocoder/image/upload/v1751711178/my_portfolio/Arafat_Alim_j0acjj.jpg",
      caption: "Arafat Aman Alim - Full Stack Developer",
      license: "https://creativecommons.org/licenses/by/4.0/",
    },
    jobTitle: "Full Stack Developer",
    description:
      "Professional Full Stack MERN Developer specializing in React, Node.js, MongoDB, and modern web technologies.",
    url: "https://v2.dev-arafat-alim.org",
    sameAs: [
      "https://github.com/Arafat-alim",
      "https://www.linkedin.com/in/arafat-alim/",
      "https://x.com/SagaciousSpark",
      "https://www.instagram.com/arfat.alim/",
      "https://medium.com/@arafat.aman.alim",
      "https://codepen.io/dev-arafat-alim",
      "https://dev.to/dev-arafat-alim",
      "https://stackoverflow.com/users/20520620/arafat-alim",
    ],
    knowsAbout: [
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
      "Web Development",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Full Stack MERN Certification",
        credentialCategory: "Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "Newton's School",
        },
      },
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Newton's School",
    },
    worksFor: {
      "@type": "Organization",
      name: "Betalectic Pvt Ltd.",
      url: "https://betalectic.com",
      employee: {
        "@type": "Person",
        name: "Arafat Aman Alim",
        jobTitle: "Full Stack Developer",
      },
    },
    email: "arafat.aman.alim@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
