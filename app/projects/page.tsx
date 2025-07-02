import { getAllProjects } from "@/lib/data"
import { PortfolioHeader } from "@/components/portfolio-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { ProjectLivePreview } from "@/components/project-live-preview"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Back Button */}
        <AnimatedSection animation="fade-in">
          <Link
            href="/"
            className="inline-flex items-center text-xs sm:text-sm text-zinc-400 hover:text-white mb-4 sm:mb-6 transition-colors"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Back to Portfolio
          </Link>
        </AnimatedSection>

        {/* Page Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-4">
              Live Project Previews
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Explore my projects with live previews and direct access to the applications I've built.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} animation="fade-up" delay={100 * (index + 1)}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-cyan-400 mb-1">{project.category}</div>
                      <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm">{project.shortDescription}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Live Preview Section */}
                  {project.liveUrl ? (
                    <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                      <h3 className="text-sm font-medium mb-3">Live Preview Available</h3>
                      <div className="flex flex-wrap gap-2">
                        <ProjectLivePreview title={project.title} liveUrl={project.liveUrl}>
                          <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                            View in Modal
                          </Button>
                        </ProjectLivePreview>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                          className="border-zinc-600 hover:bg-zinc-800"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Open Live Site
                        </Button>
                        
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(`/projects/${project.slug}`, '_blank', 'noopener,noreferrer')}
                          className="hover:bg-zinc-800"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-zinc-800/30 rounded-lg p-4 border border-zinc-700/50">
                      <p className="text-zinc-500 text-sm">No live preview available for this project</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2"
                        onClick={() => window.open(`/projects/${project.slug}`, '_blank', 'noopener,noreferrer')}
                      >
                        View Project Details
                      </Button>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-zinc-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-zinc-800 text-xs rounded border border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 text-xs text-zinc-500">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Timeline & Role */}
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>{project.timeline}</span>
                    <span>{project.role}</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
        >
          <p>© {new Date().getFullYear()} Oyindamola Heritage Ajala. All rights reserved.</p>
        </AnimatedSection>
      </div>
    </main>
  )
}
