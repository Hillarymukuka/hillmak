'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import ContactModal from '@/components/ContactModal';
import Image from 'next/image';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { fadeUpVariants, staggerContainer } from '@/lib/animations';

export default function TechnologyPage() {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom enterprise applications built with modern frameworks and scalable architectures. From web platforms to mobile solutions, we engineer software that drives business growth.',
      features: [
        'Web & Mobile Applications',
        'Cloud-Native Solutions',
        'API Development & Integration',
        'Database Architecture'
      ]
    },
    {
      title: 'Enterprise Systems',
      description: 'Robust business management systems designed to streamline operations, enhance productivity, and provide actionable insights across your organization.',
      features: [
        'ERP Solutions',
        'CRM Platforms',
        'Workflow Automation',
        'Business Intelligence'
      ]
    },
    {
      title: 'AI & Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes. We deploy machine learning and AI solutions that deliver measurable ROI.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ]
    },
    {
      title: 'Procurement Platforms',
      description: 'Digital marketplaces and procurement management systems that connect suppliers with buyers, streamlining supply chains across Africa.',
      features: [
        'B2B Marketplaces',
        'Supplier Management',
        'Inventory Optimization',
        'Order Fulfillment Systems'
      ]
    },
    {
      title: 'Safety Wear & Industrial Supply',
      description: 'Complete industrial safety solutions combining quality equipment with smart inventory management and distribution systems.',
      features: [
        'PPE Supply & Distribution',
        'Safety Equipment Sourcing',
        'Compliance Management',
        'Industrial Safety Consulting'
      ]
    },
    {
      title: 'Digital Infrastructure',
      description: 'Building the backbone of Africa\'s digital economy with secure, scalable infrastructure solutions that support modern businesses.',
      features: [
        'Cloud Infrastructure',
        'DevOps & CI/CD',
        'Security & Compliance',
        'System Integration'
      ]
    }
  ];

  const heroRef = useRef<HTMLElement>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%']);

  return (
    <div className="bg-tech-bg text-tech-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]">
        {/* Parallax Background Image */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0 w-full h-[130%] -top-[15%]"
        >
          <Image
            src="/hero-section-technology.avif"
            alt="HillMak Technology"
            fill
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/40 to-[#0A1628]/85" />
        </motion.div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div 
              variants={fadeUpVariants}
              className="text-sm uppercase tracking-wider text-tech-accent mb-6"
            >
              HillMak Technology Division
            </motion.div>
            
            <motion.h1 
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight"
            >
              Building Africa's{' '}
              <span className="text-tech-accent">Digital Infrastructure</span>
            </motion.h1>

            <motion.p 
              variants={fadeUpVariants}
              className="text-base md:text-lg text-tech-gray mb-10 leading-relaxed"
            >
              Enterprise-grade software solutions, AI systems, and industrial technologies 
              engineered for scale and built to last.
            </motion.p>

            <motion.div variants={fadeUpVariants}>
              <Button href="#services" variant="primary" theme="tech">
                Explore Our Solutions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section theme="tech" id="services">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeUpVariants}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our <span className="text-tech-accent">Solutions</span>
            </h2>
            <p className="text-base text-tech-gray max-w-2xl mx-auto">
              Comprehensive technology services designed to transform your business 
              and drive sustainable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                custom={index}
              >
                <Card theme="tech" className="h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-tech-accent mb-3">
                      {service.title}
                    </h3>
                    <p className="text-tech-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="border-t border-tech-accent/20 pt-6">
                      <h4 className="text-sm uppercase tracking-wider text-tech-gray mb-4">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="text-tech-accent mr-2 mt-1">▸</span>
                            <span className="text-tech-gray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Modern Technology Section — side by side */}
      <section className="bg-gradient-to-b from-tech-bg to-[#0d1f3c] py-24 md:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[420px] md:h-[540px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/modern-tech.avif"
                alt="Modern Technology"
                fill
                className="object-cover"
              />
              {/* subtle tint so the image sits on dark bg harmoniously */}
              <div className="absolute inset-0 bg-tech-bg/20" />
            </motion.div>

            {/* Right — Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUpVariants}
                className="text-sm uppercase tracking-wider text-tech-accent mb-4"
              >
                Our Stack
              </motion.div>

              <motion.h2
                variants={fadeUpVariants}
                className="text-3xl md:text-4xl font-bold mb-5 tracking-tight"
              >
                Built with <span className="text-tech-accent">Modern Technology</span>
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                className="text-base text-tech-gray mb-10 leading-relaxed"
              >
                We leverage industry-leading technologies to build robust, scalable solutions
                that meet international standards and are engineered to grow with your business.
              </motion.p>

              <motion.div
                variants={fadeUpVariants}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  'Cloud Computing',
                  'Artificial Intelligence',
                  'IoT Systems',
                  'Big Data Analytics',
                  'DevOps',
                  'Microservices',
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border border-tech-accent/25 rounded-xl px-5 py-4 hover:bg-tech-accent/8 hover:border-tech-accent/50 transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-tech-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-tech-white font-medium text-sm">{tech}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Section theme="tech">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to <span className="text-tech-accent">Transform</span> Your Business?
          </h2>
          <p className="text-base md:text-lg text-tech-gray mb-10">
            Let's discuss how HillMak can build the technology solutions 
            your business needs to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="primary" theme="tech" onClick={() => setContactOpen(true)}>
              Start a Conversation
            </Button>
            <Button href="/" variant="secondary" theme="tech">
              Back to Home
            </Button>
          </div>
        </motion.div>
      </Section>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} theme="tech" />
    </div>
  );
}
