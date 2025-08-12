const Experience = () => {
  const experiences = [
    {
      title: "Ingeniero DevOps",
      company: "FLCode Company",
      period: "Enero 2024 - Julio 2024",
      description:
        "Encargado de la integración y entrega continua mediante Jenkins, automatización de despliegues con Ansible, y análisis de calidad de código con SonarQube. Gestión de artefactos en Nexus, control de versiones con Bitbucket y administración de servidores con Weblogic.",
      link: "https://twitch.tv/midudev",
    },
    {
      title: "Desarrollador Backend",
      company: "FLCode",
      period: "Enero 2025 - Agosto 2025",
      description:
        "Desarrollé APIs RESTful usando Spring Boot y WebFlux dentro de una arquitectura hexagonal, aplicando principios de diseño limpio y despliegue basado en microservicios.",
    },
  ];

  return (
    <section
      id="experiencia"
      data-section="experiencia"
      className="scroll-m-20 pb-30 w-full mx-auto container px-4 md:px-0 lg:max-w-4xl md:max-w-2xl"
    >
      {/* Encabezado con mejor espaciado */}
      <div className="mb-16">
        <h2 className="flex items-center mb-3 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white/90">
          <svg
            className="size-8 text-yellow-200 dark:text-yellow-200"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
            <path d="M12 12l0 .01" />
            <path d="M3 13a20 20 0 0 0 18 0" />
          </svg>
          Experiencia laboral
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r  rounded-full"></div>
      </div>

      {/* Línea de tiempo mejorada */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-200 via-yellow-300 to-transparent dark:from-yellow-600 dark:via-yellow-500"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Punto del timeline mejorado */}
              <div className="absolute left-3 top-6 w-6 h-6 bg-white dark:bg-gray-900 rounded-full border-3 border-yellow-200 shadow-lg z-10 transition-transform group-hover:scale-110">
                <div className="absolute inset-1 bg-yellow-200 rounded-full"></div>
              </div>

              {/* Tarjeta de experiencia */}
              <div className="ml-16 p-6 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/30 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-yellow-300/50 dark:group-hover:border-yellow-500/30">
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-bold text-yellow-200 dark:text-yellow-200 group-hover:text-yellow-700 dark:group-hover:text-yellow-100 transition-colors">
                      {exp.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {exp.company}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  {exp.link && (
                    <div className="pt-2">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-yellow-200  dark:text-yellow-100 text-sm font-medium hover:text-yellow-200 dark:hover:text-yellow-300 transition-colors group/link"
                      >
                        Ver más
                        <svgs
                          className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svgs>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
