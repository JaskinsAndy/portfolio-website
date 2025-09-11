'use client'

import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Code2,
  Palette,
  Smartphone,
  Globe,
  Play
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Projects() {
  const projects = [
    {
      title: 'Architecture Website',
      description: 'Modern and elegant website for an architecture firm showcasing their portfolio and services.',
      image: '/Archi.mp4',
      category: 'Client Work',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://youtu.be/v3EhceIqQIU',
      featured: false,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Milton Private School',
      description: 'Professional website for Milton Private School featuring admissions information, curriculum details, and school resources.',
      image: '/dlya_igorya.mp4',
      category: 'Client Work',
      technologies: ['React', 'Next.js', 'CSS', 'Content Management'],
      liveUrl: 'https://youtu.be/L087xPtT2_0',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Central Asian Community Website',
      description: 'Community website for Central Asian students and professionals, created for a client from Edinburgh University.',
      image: '/CentralAsianUniversity.mp4',
      category: 'Client Work',
      technologies: ['React', 'Node.js', 'MongoDB', 'Community Features'],
      liveUrl: 'https://youtu.be/5DbTY2yz0Sg',
      featured: false,
      color: 'from-teal-500 to-green-500'
    },
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="px-4 py-2 text-sm mb-4">
            <Code2 className="h-4 w-4 mr-2" />
            Featured Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects That Make
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              An Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've built while learning web design and development. 
            Each project taught me something new and helped me grow as a designer.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Card className="group overflow-hidden backdrop-blur-sm bg-card/30 border-border/50">
                  <div className="relative overflow-hidden">
                    {project.image.endsWith('.mp4') ? (
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative">
                        <video
                          className="absolute inset-0 w-full h-full object-cover opacity-100"
                          muted
                          loop
                          playsInline
                          onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        >
                          <source src={project.image} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                        <Play className="h-16 w-16 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <Badge variant="outline" className="mb-4">
                  {project.category}
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <Button asChild className="group">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden backdrop-blur-sm bg-card/30 border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    {project.image.endsWith('.mp4') ? (
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative">
                        <video
                          className="absolute inset-0 w-full h-full object-cover opacity-100"
                          muted
                          loop
                          playsInline
                          onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        >
                          <source src={project.image} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {project.category}
                    </Badge>
                    <h4 className="font-semibold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}