'use client'

import { motion } from 'framer-motion'
import {
  Figma,
  Palette,
  Code2,
  Smartphone,
  Globe,
  Zap,
  Star,
  Trophy,
  Search,
  Rocket,
  Sparkles
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', icon: Figma, level: 95, color: 'from-purple-500 to-pink-500' },
        { name: 'Adobe XD', icon: Zap, level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'Sketch', icon: Star, level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Photoshop', icon: Trophy, level: 88, color: 'from-green-500 to-emerald-500' },
      ]
    },
    {
      title: 'Development',
      icon: Code2,
      skills: [
        { name: 'HTML/CSS', icon: Globe, level: 92, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript', icon: Zap, level: 88, color: 'from-yellow-500 to-amber-500' },
        { name: 'React', icon: Code2, level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', icon: Code2, level: 82, color: 'from-blue-600 to-blue-400' },
      ]
    },
    {
      title: 'Specializations',
      icon: Smartphone,
      skills: [
        { name: 'UI/UX Design', icon: Palette, level: 96, color: 'from-purple-500 to-violet-500' },
        { name: 'Responsive Design', icon: Smartphone, level: 94, color: 'from-green-500 to-teal-500' },
        { name: 'User Research', icon: Star, level: 89, color: 'from-pink-500 to-rose-500' },
        { name: 'Prototyping', icon: Zap, level: 91, color: 'from-indigo-500 to-purple-500' },
      ]
    }
  ]

  const processSteps = [
    {
      title: 'Discovery & Strategy',
      description: 'I clarify your goals, audience, and success metrics before any pixels are designed.',
      icon: Search
    },
    {
      title: 'Experience Design',
      description: 'I map user journeys, craft wireframes, and define the visual identity that fits your brand.',
      icon: Palette
    },
    {
      title: 'Build & Refine',
      description: 'Design systems and performant frontends come together with fast feedback loops.',
      icon: Code2
    },
    {
      title: 'Launch & Optimization',
      description: 'I release with confidence, monitor results, and iterate to keep the product performing.',
      icon: Rocket
    }
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm mb-4">
            <Palette className="h-4 w-4 mr-2" />
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mastering the Art of
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Digital Design
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With 2+ years of experience, I&apos;ve honed my skills across design and development, 
            creating seamless digital experiences that users love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full backdrop-blur-sm bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-sm bg-card/30 border-border/50">
            <CardHeader>
              <CardTitle className="text-center text-2xl flex flex-col items-center gap-2">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  My Process
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-gradient-to-b from-primary/5 to-primary/10 border border-primary/20 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}









