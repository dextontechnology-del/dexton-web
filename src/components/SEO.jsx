import React from 'react';

// SEO Component for dynamic meta tags
export function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage,
  ogType = 'website',
  article,
  faq
}) {
  return (
    <>
      {/* Dynamic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogType && <meta property="og:type" content={ogType} />}
      
      {/* Article Schema */}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.headline,
            "description": article.description,
            "author": {
              "@type": "Organization",
              "name": "Dexton Technology"
            },
            "datePublished": article.datePublished,
            "dateModified": article.dateModified
          })}
        </script>
      )}
      
      {/* FAQ Schema */}
      {faq && faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      )}
    </>
  );
}

// Global Software Company Schema
export function SoftwareCompanySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "@id": "https://dextontechnology.com/#softwarecompany",
    "name": "Dexton Technology",
    "alternateName": "Dexton Tech",
    "description": "Premier global software development company offering custom web development, mobile apps, AI solutions, and SaaS development. We serve enterprises and startups worldwide with remote development teams.",
    "url": "https://dextontechnology.com",
    "logo": "https://dextontechnology.com/dexton-logo-png.png",
    "image": "https://dextontechnology.com/dexton-logo-png.png",
    "telephone": "+918780687178",
    "email": "dextontechnology@gmail.com",
    "areaServed": "Worldwide",
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    },
    "openingHours": "24/7",
    "priceRange": "$$$",
    "sameAs": [
      "https://www.instagram.com/dextontechnology",
      "https://www.linkedin.com/company/dextontechnology",
      "https://twitter.com/dextontechnology",
      "https://www.facebook.com/dextontechnology"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Enterprise-grade custom software solutions for global clients"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development Services",
            "description": "Modern web applications using React, Next.js, and cutting-edge technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications for iOS and Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Development Services",
            "description": "Artificial intelligence and machine learning solutions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

// Global Services Schema
export function ServicesSchema() {
  const services = [
    {
      name: "Custom Software Development",
      description: "Enterprise-grade custom software solutions for global clients. We build scalable, secure, and high-performance applications tailored to your business needs.",
      url: "https://dextontechnology.com/#services",
      areaServed: ["USA", "UK", "Europe", "Canada", "Australia", "Asia", "Worldwide"]
    },
    {
      name: "Web Development Services",
      description: "Modern web development using React, Next.js, TypeScript, and cutting-edge technologies. Build fast, scalable, and SEO-friendly web applications.",
      url: "https://dextontechnology.com/#services",
      areaServed: ["USA", "UK", "Europe", "Canada", "Australia", "Asia", "Worldwide"]
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile app development for iOS and Android using React Native and Flutter. Deliver seamless mobile experiences.",
      url: "https://dextontechnology.com/#services",
      areaServed: ["USA", "UK", "Europe", "Canada", "Australia", "Asia", "Worldwide"]
    },
    {
      name: "AI & Machine Learning Solutions",
      description: "Advanced AI development services including machine learning, natural language processing, computer vision, and intelligent automation solutions.",
      url: "https://dextontechnology.com/#services",
      areaServed: ["USA", "UK", "Europe", "Canada", "Australia", "Asia", "Worldwide"]
    },
    {
      name: "SaaS Development",
      description: "Full-cycle SaaS application development from concept to deployment. Build scalable multi-tenant SaaS platforms with modern architecture.",
      url: "https://dextontechnology.com/#services",
      areaServed: ["USA", "UK", "Europe", "Canada", "Australia", "Asia", "Worldwide"]
    },
    {
      name: "Cloud & DevOps Solutions",
      description: "Cloud-native applications, microservices architecture, CI/CD pipelines, and DevOps automation. Expert AWS, Azure, and Google Cloud deployment.",
      url: "https://dextontechnology.com/#services",
      areaServed: ["USA", "UK", "Europe", "Canada", "Australia", "Asia", "Worldwide"]
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Technology Services by Dexton Technology",
    "description": "Comprehensive technology services for businesses",
    "numberOfItems": services.length,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "url": service.url,
        "provider": {
          "@type": "Organization",
          "name": "Dexton Technology"
        },
        "areaServed": service.areaServed.map(area => ({
          "@type": "City",
          "name": area
        }))
      }
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

export default SEO;
