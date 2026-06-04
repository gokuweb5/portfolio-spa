import React, { useState } from 'react'
import { Github, ExternalLink, X, Play, Star } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeVideo, setActiveVideo] = useState(0)

  const openProject = (project) => {
    setActiveVideo(0)
    setSelectedProject(project)
  }

  const getVideos = (project) => {
    if (project?.videos && project.videos.length) return project.videos
    if (project?.video) return [{ label: 'Demo', src: project.video }]
    return []
  }
  
  // Helper para rutas correctas en producción
  const getAssetPath = (path) => {
    return import.meta.env.BASE_URL + path
  }
  const projects = [
    {
      title: 'Facturamerica.com — Sistema Contable y de Facturación Inteligente',
      description: 'Plataforma multi-empresa de contabilidad y facturación desacoplada para el mercado salvadoreño. Backend en Spring Boot 3.2 con Spring Security + JWT, Spring Data JPA, MyBatis, PostgreSQL y Redis. Frontend en Angular 18 + TypeScript + TailwindCSS. Desplegada en AWS (RDS, ElastiCache, S3, SES, CloudWatch) con Docker, migraciones Liquibase y OpenAPI/Swagger.',
      technologies: ['Angular 18', 'TypeScript', 'TailwindCSS', 'Spring Boot 3.2', 'Spring Security', 'JWT', 'JPA', 'MyBatis', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      github: null,
      demo: 'https://facturamerica.com',
      image: 'images/projects/facturamerica/facturamerica1.png',
      videos: [
        { label: 'Visión general', src: 'images/projects/facturamerica/facturamerica1.mp4' },
        { label: 'Recorrido', src: 'images/projects/facturamerica/facturamerica1-1.mp4' }
      ],
      featured: true
    },
    {
      title: 'Sistema de Licitaciones - Iglesia de Jesucristo',
      description: 'Sistema integral de licitaciones desarrollado con Spring Boot 3.2.3 y MySQL. Incluye soporte para PostgreSQL como base de datos secundaria y capacidades de reportería con JasperReports 6.20.6.',
      technologies: ['Spring Boot', 'MySQL', 'PostgreSQL', 'JasperReports', 'Spring Data JPA'],
      github: 'https://github.com/gokuweb5/LicitacionesOH_EN',
      demo: null,
      image: 'images/projects/bidding-system/bidding1.png',
      video: 'images/projects/bidding-system/project-bidding-system.mp4',
      featured: true
    },
    {
      title: 'Sitio Web E.M.A Auto Repair',
      description: 'Sitio web completamente responsive desarrollado para E.M.A Auto Repair en Winchester, Virginia. Construido con HTML, CSS, JavaScript y PHP.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: null,
      demo: 'https://www.ematires.com/',
      image: 'images/projects/ematires/ematires1.png',
      video: 'images/projects/ematires/project ematires.mp4',
      featured: true
    },
    {
      title: 'Curso Udemy: Domina JavaScript - Aplicación Fullstack de Ajedrez',
      description: 'Curso completo en Udemy donde enseño a crear una aplicación fullstack de ajedrez. Cubre HTML5 moderno, CSS con Flexbox/CSS Grid, JavaScript avanzado, backend con Node.js/Express.js y base de datos PostgreSQL.',
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'HTML5', 'CSS3'],
      github: 'https://github.com/gokuweb5/chess1',
      demo: 'https://www.udemy.com/course/domina-javascript-crea-una-aplicacion-fullstack-de-ajedrez/learn/lecture/49426537#overview',
      image: 'images/projects/curso-javascript/curso1.png',
      featured: true
    },
    {
      title: 'Sistema de Ajedrez - Proyecto Educativo',
      description: 'Implementación completa del juego de ajedrez con arquitectura fullstack. Incluye backend con Spring Boot, frontend con React y aplicación de patrones de diseño.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Design Patterns'],
      github: 'https://github.com/gokuweb5/chess1',
      demo: null,
      image: 'images/projects/chess/chess1.png',
      video: 'images/projects/chess/project-chess.mp4'
    },
    {
      title: 'Sistema de Licitaciones Legacy - 2012',
      description: 'Sistema de gestión de licitaciones desarrollado en 2012 con Java 7, utilizando JasperReports para reportería y Microsoft Access como base de datos. Proyecto legacy que demuestra evolución en tecnologías empresariales.',
      technologies: ['Java 7', 'JasperReports', 'Microsoft Access', 'Swing'],
      github: null,
      demo: null,
      image: 'images/projects/licitaciones/licitaciones.png',
      video: 'images/projects/licitaciones/project-licitaciones.mp4'
    }
  ]

  return (
    <>
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
        
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">Una selección de proyectos full-stack con Spring Boot, Angular y despliegues en la nube.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const hasVideo = (project.videos && project.videos.length) || project.video
            return (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
            >
              {project.featured && (
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 bg-primary-600/90 backdrop-blur text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  <Star size={12} className="fill-current" /> Destacado
                </span>
              )}
              <div 
                className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center overflow-hidden relative cursor-pointer"
                onClick={() => hasVideo && openProject(project)}
              >
                {project.image ? (
                  <>
                    <img 
                      src={getAssetPath(project.image)} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {hasVideo && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary-600 rounded-full p-4 shadow-lg">
                          <Play className="w-8 h-8 text-white fill-current" />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-6xl font-bold text-white/20">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-primary-400 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm">Código</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>

    {/* Modal de Video */}
    {selectedProject && getVideos(selectedProject).length > 0 && (
      <div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute -top-10 right-0 text-white hover:text-primary-400 transition-colors z-10"
          >
            <X size={32} />
          </button>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col min-h-0">
            {getVideos(selectedProject).length > 1 && (
              <div className="flex flex-wrap gap-2 p-3 bg-gray-950 border-b border-gray-800 sticky top-0 z-10">
                {getVideos(selectedProject).map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVideo(i)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-colors ${activeVideo === i ? 'bg-primary-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            )}
            <div className="overflow-y-auto min-h-0">
            <video
              key={getVideos(selectedProject)[activeVideo].src}
              controls
              autoPlay
              className="w-full max-h-[60vh] bg-black"
            >
              <source src={getAssetPath(getVideos(selectedProject)[activeVideo].src)} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-400 mb-4">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-primary-400 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Projects
