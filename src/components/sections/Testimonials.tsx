'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO',
      company: 'TechFlow Solutions',
      image: '/testimonial-1.jpg',
      rating: 5,
      text: "Working with them was a game-changer for our business. The AI automation system reduced our processing time by 80% and eliminated human errors completely. Our team can now focus on strategic work instead of repetitive tasks.",
      metric: '80% time saved',
      industry: 'Technology'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'GrowthCorp',
      image: '/testimonial-2.jpg',
      rating: 5,
      text: "The custom web application they built for us increased our conversion rate by 300%. The user experience is incredible, and our customers love the new interface. Best investment we've made in years.",
      metric: '300% conversion increase',
      industry: 'E-commerce'
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Manager',
      company: 'LocalBiz Pro',
      image: '/testimonial-3.jpg',
      rating: 5,
      text: "Their digital marketing strategy generated 10x more qualified leads than our previous agency. The SEO results speak for themselves - we're now ranking #1 for all our target keywords.",
      metric: '10x more leads',
      industry: 'Professional Services'
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'InnovateNow',
      image: '/testimonial-4.jpg',
      rating: 5,
      text: "They didn't just deliver a solution; they transformed our entire business model. The automation workflows they created saved us $200K annually and improved customer satisfaction by 40%.",
      metric: '$200K saved annually',
      industry: 'SaaS'
    },
    {
      name: 'Lisa Thompson',
      role: 'COO',
      company: 'FastTrack Logistics',
      image: '/testimonial-5.jpg',
      rating: 5,
      text: "Professional, reliable, and results-driven. They understood our complex requirements and delivered exactly what we needed. Our operational efficiency increased by 150% within 3 months.",
      metric: '150% efficiency boost',
      industry: 'Logistics'
    },
    {
      name: 'James Wilson',
      role: 'VP of Sales',
      company: 'ScaleUp Enterprises',
      image: '/testimonial-6.jpg',
      rating: 5,
      text: "The CRM integration and sales automation they implemented helped us close 5x more deals with the same team size. Our sales cycle shortened from 45 days to just 12 days.",
      metric: '5x more deals closed',
      industry: 'B2B Services'
    }
  ]

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '150+', label: 'Projects Completed' },
    { number: '500%', label: 'Average ROI' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            What <span className="text-primary-600">Clients Say</span> About Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about 
            the transformations we've delivered.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-primary-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {testimonial.industry}
                </span>
                <span className="text-sm font-semibold text-primary-600">
                  {testimonial.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss how we can transform your business operations and drive similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary text-lg px-8 py-3"
              >
                Get Your Free Consultation
              </a>
              <a
                href="tel:+1234567890"
                className="btn-secondary text-lg px-8 py-3"
              >
                Call Now: (123) 456-7890
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}