import React from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Full-Stack Developer & Instructor',
      company: 'Virtual Mentors (Programación y Desarrollo Web)',
      period: 'Enero 2020 - Actual',
      description: 'Desarrollo de aplicaciones web full-stack y creación de contenido educativo para plataformas de aprendizaje en línea.',
      achievements: [
        'Desarrollé sistema POS y facturación para Facturamerica.com con React, Spring Boot y MySQL',
        'Creé sistema de licitaciones para la Iglesia de Jesucristo con Spring Boot y JasperReports',
        'Desarrollé plataforma e-commerce para YouTubers "Deschavetados" con Spring y Thymeleaf',
        'Creé e impartí curso en Udemy: "Domina JavaScript: Crea una aplicación Fullstack de ajedrez"',
        'Desarrollé sitio web responsive para E.M.A Auto Repair en Virginia'
      ]
    },
    {
      type: 'work',
      title: 'Customer Service Representative',
      company: 'Varios Call Centers (Teleperformance, FUSION BPO)',
      period: 'Noviembre 2014 - Octubre 2020',
      description: 'Servicio al cliente y soporte técnico de alta calidad para cuentas importantes.',
      achievements: [
        'Cricket (Teleperformance) - Soporte técnico y atención al cliente',
        'AT&T Internet, Cable & Phone (FUSION BPO) - Soporte técnico especializado',
        'Choice Hotels (Teleperformance) - Atención al cliente y reservaciones',
        '6 años de experiencia desarrollando habilidades de comunicación efectiva'
      ]
    },
    {
      type: 'work',
      title: 'Programador Java',
      company: 'Aeroman (Consultor para Contactos y Oportunidades)',
      period: 'Enero - Noviembre 2009',
      description: 'Desarrollo de aplicaciones empresariales en el departamento de TI de Aeroman.',
      achievements: [
        'Desarrollo con Java Struts Framework',
        'Uso de JDeveloper y Oracle SQL Developer',
        'Control de versiones con TortoiseSVN',
        'Trabajo on-site en proyectos empresariales'
      ]
    }
  ]

  const education = [
    {
      type: 'education',
      title: 'Java Developer - J2EE Technologies',
      institution: 'Centre of Excellence for Information Technology India-El Salvador (ITCA)',
      period: 'Octubre 2008',
      description: 'Especialización en desarrollo de aplicaciones empresariales usando tecnologías J2EE. Examen final y proyecto completados exitosamente.'
    },
    {
      type: 'education',
      title: 'Licenciatura en Computación',
      institution: 'Universidad Doctor Andrés Bello',
      period: 'Noviembre 2005',
      description: 'Cuarto año de licenciatura en computación. Área general de estudio: Computación.'
    },
    {
      type: 'education',
      title: 'Formación Continua - Udemy',
      institution: 'Udemy (2009-2025)',
      period: '2009 - 2025',
      description: 'Múltiples certificaciones en tecnologías modernas: Spring Framework 6, Spring Boot 3, React, Angular, JavaFX, y más. Más de 80 horas de formación especializada.'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Experiencia & <span className="text-gradient">Educación</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="text-primary-400" />
              Experiencia
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                  <p className="text-primary-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-3">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary-400" />
              Educación
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-primary-500">
                  <h4 className="text-xl font-semibold mb-2">{edu.title}</h4>
                  <p className="text-primary-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
