import { ExternalLink, Github, Code2 } from "lucide-react";
import image1 from "../image/proyecto1.png";
import image2 from "../image/proyecto2.png";

const proyectos = [
  {
    id: 1,
    title: "Ecommer - Carrito de compras",
    description:
      "Aplicación en React que consume productos desde una API pública usando Axios. Diseñada para practicar consumo de APIs REST y mostrar productos dinámicamente con estilos personalizados.",
    image: image1,
    technologies: ["React", "Tailwind CSS", "Axios"],
    github: "https://github.com/FrankValdezQuedo/consumo-de-apis-con-react",
    demo: "https://consumo-de-apis-con-react-two.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "API REST - Para gestión de Usuarios",
    description:
      "API REST para gestión de usuarios en Java con Spring Boot y WebFlux, usando arquitectura hexagonal. Ofrece operaciones CRUD reactivas, separando lógica de negocio, controladores y repositorios para mayor escalabilidad y mantenibilidad.",
    image: image2,
    technologies: ["Spring Boot", "Postgres", "WebFlux", "JPA"],
    github: "https://github.com/FrankValdezQuedo/api-user-springbot-webflux",
    demo: "#",
    featured: false,
  },
];

const buttonBase =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors";

const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl px-4 md:px-0 pb-30"
    >
      {/* Encabezado */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-3">
          <Code2 className="size-8 text-yellow-600 dark:text-yellow-200" />
          <h2 className="text-3xl font-semibold text-black/80 dark:text-white/90">
            Proyectos
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
          Una selección de proyectos personales y profesionales que destacan por
          su rendimiento, escalabilidad y buenas prácticas.
        </p>
      </header>

      {/* Lista de proyectos */}
      <div className="space-y-12">
        {proyectos.map((proyecto) => (
          <article
            key={proyecto.id}
            className="group rounded-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-yellow-300/50 dark:hover:border-yellow-500/30 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Imagen */}
              <div className="lg:w-2/5 relative p-6">
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 shadow-lg">
                  {/* Cabecera tipo navegador */}
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  </div>
                  <img
                    src={proyecto.image}
                    alt={`Vista previa del proyecto ${proyecto.title}`}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Información */}
              <div className="lg:w-3/5 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-yellow-200 mb-3 group-hover:text-yellow-300 transition-colors">
                  {proyecto.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {proyecto.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-200 border border-yellow-300 dark:border-yellow-600/50 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${proyecto.title}`}
                    className={`${buttonBase} border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demo de ${proyecto.title}`}
                    className={`${buttonBase} bg-yellow-200 hover:bg-yellow-500 text-gray-700 shadow-sm`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Preview
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
