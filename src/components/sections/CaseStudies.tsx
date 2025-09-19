'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowRight, 
  Building, 
  ShoppingCart, 
  Stethoscope 
} from 'lucide-react'

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: ShoppingCart,
      industry: 'E-commerce',
      company: 'RetailTech Solutions',
      challenge: 'Manual order processing taking 40+ hours weekly, leading to delays and customer complaints.',
      solution: 'Implemented AI-powered order automation system with intelligent inventory management.',
      results: [
        { metric: 'Time Saved', value: '85%', icon: Clock },
        { metric: 'Cost Reduction', value: '$50K/year', icon: DollarSign },
        { metric: 'Customer Satisfaction', value: '95%', icon: Users },
        { metric: 'Order Accuracy', value: '99.2%', icon: TrendingUp }
      ],
      testimonial: "The automation system transformed our operations. We now process 3x more orders with the same team size.",
      image: '/case-study-ecommerce.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Stethoscope,
      industry: 'Healthcare',
      company: 'MedFlow Clinic',
      challenge: 'Patient scheduling chaos and missed appointments resulting in 30% revenue loss.',
      solution: 'Built custom patient management system with automated reminders and smart scheduling.',
      results: [
        { metric: 'No-Show Rate', value: '-75%', icon: TrendingUp },
        { metric: 'Revenue Increase', value: '$120K/year', icon: DollarSign },
        { metric: 'Staff Efficiency', value: '+60%', icon: Clock },
        { metric: 'Patient Satisfaction', value: '98%', icon: Users }
      ],
      testimonial: "Our practice is now running like clockwork. Patient satisfaction is at an all-time high.",
      image: '/case-study-healthcare.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Building,
      industry: 'Real Estate',
      company: 'PropertyPro Group',
      challenge: 'Lead qualification taking too long, losing potential clients to competitors.',
      solution: 'Deployed AI chatbot for instant lead qualification and automated follow-up sequences.',
      results: [
        { metric: 'Lead Response Time', value: '30 seconds', icon: Clock },
        { metric: 'Conversion Rate', value: '+250%', icon: TrendingUp },
        { metric: 'Cost Per Lead', value: '-70%', icon: DollarSign },
        { metric: 'Agent Productivity', value: '+400%', icon: Users }
      ],
      testimonial: "We're now the fastest responders in our market. Our close rate has tripled since implementation.",
      image: '/case-study-realestate.jpg',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Real Results from <span className="text-primary-600">Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how I&apos;ve helped businesses across different industries achieve remarkable growth 
            through strategic technology implementation.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 order-2 lg:order-1">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${study.color}`}>
                      <study.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {study.industry}
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        {study.company}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      The Challenge
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {study.challenge}
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      The Solution
                    </h4>
                    <p className="text-gray-600">
                      {study.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.results.map((result) => (
                      <div
                        key={result.metric}
                        className="bg-white rounded-xl p-4 text-center shadow-sm"
                      >
                        <result.icon className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="bg-white rounded-xl p-6 shadow-sm mb-6">
                    <p className="text-gray-700 italic mb-4">
                      &ldquo;{study.testimonial}&rdquo;
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900">CEO</div>
                        <div className="text-sm text-gray-500">{study.company}</div>
                      </div>
                    </div>
                  </blockquote>

                  <button className="group bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2">
                    <span>View Full Case Study</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="order-1 lg:order-2 relative">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className={`w-32 h-32 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <study.icon className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
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
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Join 150+ businesses that have transformed their operations with our solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


