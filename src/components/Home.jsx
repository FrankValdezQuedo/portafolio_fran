import { MailIcon } from "lucide-react";
import Perfil from "../image/fotoperfil.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const buttonBaseClasses =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-md transition w-full sm:w-auto font-medium";

  return (
    <section
      id="inicio"
      className="py-16 md:py-36 px-4 w-full max-w-4xl mx-auto"
    >
      <div className="flex flex-col gap-6 items-start text-white">
        {/* Imagen y estado */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full">
          <img
            src={Perfil}
            alt="Foto de perfil de Fran"
            className="size-20 md:size-16 rounded-full object-cover"
            loading="lazy"
          />
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
              bg-white text-gray-700 border border-gray-200 
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          >
            Disponible para trabajar
          </span>
        </div>

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Hey, soy Fran
        </h1>

        {/* Descripción */}
        <p className="text-xl text-gray-300 max-w-2xl">
          Soy un{" "}
          <span className="text-yellow-200 font-semibold">
            desarrollador backend enfocado en construir sistemas robustos,
          </span>{" "}
          escalables y bien estructurados. Me especializo en el diseño de APIs,
          el manejo eficiente de datos y la automatización de procesos que
          mejoran el rendimiento y la calidad del software.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <a
            href="https://www.linkedin.com/in/franvaldezquedo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de LinkedIn"
            className={`${buttonBaseClasses} border border-white text-white hover:bg-white hover:text-black group`}
          >
            <FaLinkedin className="w-5 h-5 transition-colors group-hover:text-black" />
            LinkedIn
          </a>

          <a
            href="https://github.com/FrankValdezQuedo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de GitHub"
            className={`${buttonBaseClasses} border border-white text-white hover:bg-white hover:text-black group`}
          >
            <FaGithub className="w-5 h-5 transition-colors group-hover:text-black" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
