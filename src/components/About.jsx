import React from 'react'
import { Code2, Database, Server, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Desarrollo Backend',
      description: 'Experiencia en Java, Spring Boot y arquitecturas RESTful'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Bases de Datos',
      description: 'MySQL, PostgreSQL, MongoDB y optimización de consultas'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Microservicios',
      description: 'Diseño e implementación de arquitecturas distribuidas'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Mejores Prácticas',
      description: 'Clean Code, SOLID, patrones de diseño y testing'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Sobre <span className="text-gradient">Mí</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-300 mb-4">
              Full-Stack Developer con experiencia sólida en diseñar, desarrollar e implementar aplicaciones web completas.
              Especializado en crear servicios backend robustos y seguros con Java y Spring Boot, y en construir interfaces
              de usuario dinámicas y responsivas con React y JavaScript.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Mi experiencia incluye el desarrollo de sistemas de punto de venta, plataformas de e-commerce, sistemas de
              licitaciones y aplicaciones empresariales. He trabajado con tecnologías como Spring Framework, MySQL, PostgreSQL,
              React, y herramientas modernas de desarrollo.
            </p>
            <p className="text-lg text-gray-300">
              Con más de 6 años de experiencia en servicio al cliente y una sólida formación técnica, combino habilidades
              técnicas con una comprensión profunda de las necesidades del usuario final para crear soluciones eficientes
              y escalables que superen las expectativas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="text-primary-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
