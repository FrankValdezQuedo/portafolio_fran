import { User } from "lucide-react";
import profileImage from "../image/fotoperfil.jpg";

// Clases comunes
const HIGHLIGHT_CLASS = "text-yellow-200 font-semibold";
const IMG_CLASS =
  "w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px] rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-300";

const SobreMi = () => {
  return (
    <section
      id="sobre-mi"
      className="w-full mx-auto container lg:max-w-4xl md:max-w-2xl scroll-m-20 pb-30 px-4"
      aria-labelledby="sobre-mi-heading"
    >
      {/* Encabezado */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <User
            className="size-8 text-yellow-600 dark:text-yellow-200"
            aria-hidden="true"
          />
          <h2
            id="sobre-mi-heading"
            className="text-3xl font-bold text-black/90 dark:text-white"
          >
            Sobre mí
          </h2>
        </div>
      </header>

      {/* Contenido */}
      <article className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Texto */}
        <div className="flex-1 text-gray-700 dark:text-gray-300 leading-relaxed text-base space-y-4">
          <p>
            Soy <strong className={HIGHLIGHT_CLASS}>Fran</strong>, un apasionado
            del desarrollo de software y la tecnología. Mi viaje en la
            programación comenzó desde joven, impulsado por la curiosidad y el
            deseo de crear soluciones que realmente aporten valor. Actualmente{" "}
            <strong className={HIGHLIGHT_CLASS}>
              lidero proyectos y equipos de desarrollo
            </strong>{" "}
            en entornos profesionales, combinando habilidades técnicas con
            visión estratégica.
          </p>
          <p>
            A lo largo de mi carrera he trabajado en{" "}
            <strong className={HIGHLIGHT_CLASS}>
              aplicaciones web, integraciones complejas y optimización de
              procesos
            </strong>
            , siempre buscando un equilibrio entre eficiencia, escalabilidad y
            experiencia de usuario.
          </p>
          <p>
            Además, comparto mi conocimiento y experiencia con la comunidad,
            impulsando{" "}
            <strong className={HIGHLIGHT_CLASS}>
              el aprendizaje colaborativo y el desarrollo profesional
            </strong>
            . Mi objetivo es inspirar, enseñar y contribuir al crecimiento del
            ecosistema tecnológico hispano.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Retrato de Fran, desarrollador de software"
            className={IMG_CLASS}
            loading="lazy"
          />
        </div>
      </article>
    </section>
  );
};

export default SobreMi;
