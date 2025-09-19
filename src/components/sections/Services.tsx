'use client'

import { motion } from 'framer-motion'
import {
  Bot,
  Globe,
  TrendingUp,
  Zap,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Cpu,
  Search
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI Automation Solutions',
      description: 'Transform your business processes with intelligent automation that works 24/7.',
      features: [
        'Custom AI chatbots and virtual assistants',
        'Workflow automation and process optimization',
        'Data analysis and predictive insights',
        'Document processing and extraction',
        'Customer service automation'
      ],
      benefits: 'Save 40+ hours/week',
      color: 'from-blue-500 to-cyan-500',
      roi: '400% ROI'
    },
    {
      icon: Globe,
      title: 'Web Development & Design',
      description: 'High-converting websites and web applications that drive business growth.',
      features: [
        'Custom website and web app development',
        'E-commerce platforms and online stores',
        'Mobile-responsive design',
        'Performance optimization and SEO',
        'Ongoing maintenance and support'
      ],
      benefits: 'Increase conversions by 200%',
      color: 'from-purple-500 to-pink-500',
      roi: '300% ROI'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      description: 'Data-driven marketing strategies that generate quality leads and sales.',
      features: [
        'Search engine optimization (SEO)',
        'Google Ads and social media marketing',
        'Content marketing and copywriting',
        'Email marketing automation',
        'Analytics and performance tracking'
      ],
      benefits: 'Generate 10x more leads',
      color: 'from-green-500 to-emerald-500',
      roi: '500% ROI'
    }
  ]

  const processSteps = [
    {
      icon: Search,
      title: 'Discovery & Analysis',
      description: 'We analyze your business processes and identify optimization opportunities.'
    },
    {
      icon: Cpu,
      title: 'Custom Solution Design',
      description: 'Create tailored solutions that fit your specific business needs and goals.'
    },
    {
      icon: Zap,
      title: 'Implementation & Testing',
      description: 'Deploy solutions with thorough testing to ensure optimal performance.'
    },
    {
      icon: TrendingUp,
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring and optimization to maximize your return on investment.'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Services That <span className="text-primary-600">Transform</span> Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I provide end-to-end solutions that help businesses reduce costs, increase efficiency, 
            and scale rapidly using cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group transition-all duration-300 hover:scale-105"
            >
              <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-4 w-fit`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{service.benefits}</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {service.roi}
                    </Badge>
                  </div>

                  <Button className="w-full group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                My Proven <span className="text-primary">4-Step Process</span>
              </h3>
              <p className="text-xl text-muted-foreground">
                From concept to implementation, I ensure every solution delivers maximum value.
              </p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}


