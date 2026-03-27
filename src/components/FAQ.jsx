import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What software development services does Dexton Technology offer globally?",
    answer: "Dexton Technology offers comprehensive software development services worldwide including custom software development, web development (React.js, Next.js), mobile app development, AI solutions, SaaS development, and cloud solutions. We serve enterprises and startups globally with remote development teams across multiple timezones."
  },
  {
    question: "How much does custom software development cost for international clients?",
    answer: "Custom software development costs vary based on project complexity and scope. Enterprise solutions typically range from $5,000-50,000+, while startup MVPs range from $2,000-15,000+. We provide transparent pricing with detailed proposals tailored to your specific requirements. Contact us for a free consultation and custom quote."
  },
  {
    question: "Do you provide remote development services for international clients?",
    answer: "Yes, Dexton Technology specializes in remote development services for clients worldwide. Our team works across multiple timezones (USA, UK, Europe, Asia) providing seamless collaboration. We've delivered solutions for businesses across North America, Europe, Australia, and Asia with excellent communication and project management."
  },
  {
    question: "What is the typical timeline for custom software development?",
    answer: "Development timelines depend on project complexity. MVPs typically take 4-8 weeks, while full enterprise solutions may take 3-6 months. We follow agile methodology with regular updates, sprint reviews, and transparent progress tracking. Detailed project timelines are provided during the proposal stage."
  },
  {
    question: "Do you offer ongoing support and maintenance for international clients?",
    answer: "Yes, we provide comprehensive 24/7 support and maintenance services including regular updates, security patches, performance optimization, bug fixes, and technical support. Our global support team ensures minimal downtime and quick response times regardless of your location."
  },
  {
    question: "Can you help with SEO optimization for global websites?",
    answer: "Absolutely! We offer comprehensive SEO optimization services including technical SEO audits, Core Web Vitals optimization, international SEO strategies, structured data implementation, and content optimization. Our clients see significant improvements in global search rankings and organic traffic."
  },
  {
    question: "What technologies and frameworks do you specialize in?",
    answer: "We specialize in cutting-edge technologies: Frontend (React.js, Next.js, TypeScript, Vue.js, Tailwind CSS), Backend (Node.js, Python, Go, Java), Mobile (React Native, Flutter, Swift, Kotlin), Cloud (AWS, Azure, Google Cloud, Docker), AI/ML (TensorFlow, PyTorch, OpenAI), and Databases (PostgreSQL, MongoDB, Redis)."
  },
  {
    question: "How do I start a project with Dexton Technology from anywhere in the world?",
    answer: "Getting started is simple! Contact us via email (dextontechnology@gmail.com), phone (+91 878 068 7178), or WhatsApp. We'll schedule a free video consultation to discuss your requirements, provide expert recommendations, and deliver a detailed proposal. Our remote-first approach ensures seamless collaboration regardless of your location."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our global software development services and remote collaboration
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-neutral-200/50 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary-600" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="#footer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* FAQ Schema - Injected into DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
