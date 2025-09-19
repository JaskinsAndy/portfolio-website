'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Dribbble,
  Sparkles
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

export default function Contact() {
  const defaultFormState = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  }

  const [formData, setFormData] = useState(defaultFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        const message =
          (data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
            ? data.error
            : null) ?? 'Failed to send your message. Please try again later.'

        throw new Error(message)
      }

      setFormData({ ...defaultFormState })
      setSubmitted(true)
    } catch (err) {
      console.error('Contact form submission failed', err)
      const message =
        err instanceof Error
          ? err.message
          : 'Failed to send your message. Please try again later.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jasurwebdev@gmail.com',
      href: 'mailto:jasurwebdev@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+43 670 607 6667',
      href: 'tel:+436706076667'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available Remote',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/jasurrashidov19',
      color: 'from-pink-500 to-purple-500'
    }
  ]

  const projectTypes = [
    'Website Design',
    'Mobile App Design',
    'Brand Identity',
    'UI/UX Consultation',
    'Design System',
    'E-commerce Design',
    'Other'
  ]

  const budgetRanges = [
    'Negotiable',
    '€500 - €750',
    '€750 - €1000',
    '€1000 - €2000'
  ]

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="backdrop-blur-sm bg-card/50 border-green-500/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Message Received!
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Thank you for reaching out! I'll get back to you within 24 hours to discuss 
                  your project and how we can bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="mailto:jasurwebdev@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Email Directly
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Let's Work Together
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Create Something
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Let's discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="backdrop-blur-sm bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">
                          {item.title}
                        </div>
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="sm"
                        asChild
                        className="justify-start"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="h-4 w-4 mr-2" />
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Available for Work</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      I'm eager to take on new projects and collaborations. As a beginner, 
                      I offer competitive rates and lots of enthusiasm!
                    </p>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      Open to Learn & Work
                    </Badge>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="backdrop-blur-sm bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Start Your Project</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company/Organization
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="3+ months">3+ months</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="resize-none"
                      placeholder="Tell me about your project goals, target audience, style preferences, and any specific requirements you have in mind..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full" 
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>

                  {error && (
                    <p className="text-sm text-red-500 text-center mt-4" role="alert">
                      {error}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground text-center">
                    I'll get back to you within 24 hours to discuss your project and next steps.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
