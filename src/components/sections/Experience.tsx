'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Calendar,
  MapPin,
  Building,
  Award,
  Users,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Experience() {
  const experiences = [
    {
      company: 'Freelance',
      position: 'Junior Web Designer',
      period: '2023 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Creating simple websites and landing pages for small businesses while continuing to learn and improve my skills.',
      achievements: [
        'Delivered 20+ client projects successfully',
        'Built responsive websites using HTML, CSS, and JavaScript',
        'Learned to work with client feedback and revisions',
        'Developed basic understanding of user experience principles'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'Figma', 'WordPress'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Self-Directed Learning',
      position: 'Web Design Student',
      period: '2022 - 2023',
      location: 'Online',
      type: 'Learning',
      description: 'Dedicated time to learning web design fundamentals through online courses, tutorials, and practice projects.',
      achievements: [
        'Completed FreeCodeCamp Responsive Web Design certification',
        'Finished Coursera UI/UX Design Specialization course',
        'Delivered 20+ client and internal projects end-to-end',
        'Applied design principles, color theory, and UX research in production'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'Figma', 'Adobe XD'],
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const stats = [
    { label: 'Years Delivering Results', value: '2+', icon: Calendar },
    { label: 'Client Projects Delivered', value: '20+', icon: Briefcase },
    { label: 'Happy Clients', value: '12+', icon: Users },
    { label: 'Specialist Certifications', value: '8+', icon: Award },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm mb-4">
            <Briefcase className="h-4 w-4 mr-2" />
            Professional Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building Excellence Through
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over the past two years I have partnered with founders and teams to design, build, and launch digital products that move business metrics forward.
            Every engagement is anchored in strategy, measurable goals, and accountable delivery.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center backdrop-blur-sm bg-card/30 border-border/50">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden lg:block" />
                
                <Card className="ml-0 lg:ml-20 backdrop-blur-sm bg-card/30 border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground mb-2">
                          {experience.position}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                        <Badge variant="outline">{experience.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      {experience.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs bg-primary/10 text-primary border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

