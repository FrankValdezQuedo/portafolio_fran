import { Award } from "lucide-react";
import ingles from "../image/Ingles.png";
import java from "../image/certificado-ruta-backend-java.png";
import docker from "../image/Docker.png";
import scrum from "../image/Scrum2.png";
import springboot from "../image/Springboot.png";

// Datos de certificaciones
const CERTIFICACIONES_DATA = [
  { title: "Docker Basics", image: docker },
  { title: "Java Avanzado", image: java },
  { title: "Scrum Fundamentals", image: scrum },
  { title: "Inglés", image: ingles },
  { title: "Spring Boot", image: springboot },
];

// Clases comunes
const CARD_IMG_CLASS =
  "w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300";
const TITLE_CLASS =
  "flex items-center justify-center gap-2 text-lg font-semibold text-yellow-200 dark:text-yellow-200 mb-4";

const Certificaciones = () => {
  return (
    <section
      id="certificaciones"
      className="w-full mx-auto container lg:max-w-4xl md:max-w-2xl scroll-m-20 mb-30"
      aria-labelledby="certificaciones-heading"
    >
      {/* Encabezado */}
      <header className="flex items-center gap-3 mb-6">
        <Award
          className="size-8 text-yellow-600 dark:text-yellow-200"
          aria-hidden="true"
        />
        <h2
          id="certificaciones-heading"
          className="text-3xl font-bold text-black/80 dark:text-white/90"
        >
          Certificaciones
        </h2>
      </header>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-10"
        role="list"
        aria-label="Lista de certificaciones"
      >
        {CERTIFICACIONES_DATA.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-col items-center text-center"
            role="listitem"
          >
            <h3 className={TITLE_CLASS}>{cert.title}</h3>
            <img
              src={cert.image}
              alt={`Certificado de ${cert.title}`}
              className={CARD_IMG_CLASS}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificaciones;
