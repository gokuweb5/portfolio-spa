import React from 'react'
import { Code2, Database, Cloud, Shield } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Backend Spring Boot',
      description: 'Spring Boot 3.2, Spring Data JPA, MyBatis y APIs RESTful'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Frontend Angular',
      description: 'Angular 18, TypeScript, RxJS y TailwindCSS para UIs modernas'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'AWS (RDS, ElastiCache, S3, SES, CloudWatch), Docker y Liquibase'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Seguridad y Calidad',
      description: 'Spring Security, JWT, OpenAPI/Swagger, Clean Code y SOLID'
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
              Full-Stack Developer con experiencia sólida diseñando, desarrollando e implementando aplicaciones
              web end-to-end. Especializado en servicios backend robustos y seguros con Java y Spring Boot, e
              interfaces dinámicas y responsivas con Angular y TypeScript.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              He arquitectado y desplegado el sistema contable y de facturación inteligente
              <span className="text-primary-400"> Facturamerica.com</span> usando Spring Boot 3.2 y Angular 18,
              además de sistemas internos de licitaciones para La Iglesia de Jesucristo de los Santos de los
              Últimos Días, plataformas e-commerce y contenido educativo para miles de estudiantes.
            </p>
            <p className="text-lg text-gray-300">
              Combino conocimiento técnico profundo con más de 6 años de trato directo con clientes, lo que me
              permite traducir requerimientos de negocio en soluciones limpias y escalables desplegadas en AWS con
              Docker, Liquibase, JWT y OpenAPI/Swagger.
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
