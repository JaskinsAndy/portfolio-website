'use client'

import { ArrowRight, Palette, Code2, Figma, Sparkles, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AceteryBackground } from '@/components/ui/aceternity-background'

export default function Hero() {
  const stats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Years Experience', value: '2' },
    { label: 'Courses Completed', value: '5+' },
  ]

  const skills = [
    { name: 'UI/UX Design', icon: Palette },
    { name: 'Backend Dev', icon: Code2 },
    { name: 'Frontend dev', icon: Figma },
    { name: 'Creative Direction', icon: Sparkles },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <AceteryBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-4 w-4 mr-2" />
                Passionate Web Designer
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Crafting Digital
              <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Experiences
              </span>
              <span className="block text-4xl lg:text-5xl text-muted-foreground">
                That Convert
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              Hi, I&apos;m Jasur! I&apos;m a passionate web designer with 2 years of experience learning 
              and creating digital experiences. I love transforming ideas into 
              <strong className="text-foreground"> clean, functional websites</strong> and I&apos;m always eager to learn more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm"
                >
                  <skill.icon className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                      Open to Opportunities
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm text-center">
                    Excited to learn and grow
                  </p>
                </motion.div>
              </CardContent>
            </Card>
            
            <div className="absolute -z-10 top-4 right-4 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

