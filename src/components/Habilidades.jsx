import { Box } from "lucide-react";
import {
  FaJenkins,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
  FaReact,
  FaJava,
  FaBitbucket,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiSpring,
  SiAnsible,
  SiPostgresql,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

// Clases reutilizables
const ICON_CLASS =
  "size-12 text-yellow-300 dark:text-yellow-200 transition-transform duration-300 group-hover:scale-110";
const CARD_CLASS =
  "group bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-center border border-gray-100 dark:border-gray-800";

// Datos de habilidades
const SKILLS_DATA = [
  // Frontend
  {
    id: "javascript",
    name: "JavaScript",
    icon: IoLogoJavascript,
    category: "Frontend",
  },
  { id: "react", name: "React", icon: FaReact, category: "Frontend" },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    category: "Frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
  },

  // Backend
  { id: "java", name: "Java", icon: FaJava, category: "Backend" },
  { id: "nodejs", name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { id: "spring", name: "Spring Boot", icon: SiSpring, category: "Backend" },

  // Database
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
  },

  // DevOps
  { id: "ansible", name: "Ansible", icon: SiAnsible, category: "DevOps" },
  { id: "docker", name: "Docker", icon: FaDocker, category: "DevOps" },
  { id: "jenkins", name: "Jenkins", icon: FaJenkins, category: "DevOps" },

  // Tools
  { id: "bitbucket", name: "Bitbucket", icon: FaBitbucket, category: "Tools" },
  { id: "git", name: "Git", icon: FaGitAlt, category: "Tools" },
];

// Tarjeta individual
const SkillCard = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <div className={CARD_CLASS} role="listitem">
      <div className="mb-3 flex items-center justify-center">
        <IconComponent
          className={ICON_CLASS}
          aria-hidden="true"
          focusable="false"
          title={skill.name}
        />
      </div>
      <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-300 transition-colors duration-300">
        {skill.name}
      </h3>
    </div>
  );
};

// Componente principal
const Skills = () => {
  return (
    <section
      id="habilidades"
      className="w-full mx-auto container lg:max-w-4xl md:max-w-2xl scroll-m-20 pb-20 px-4"
      aria-labelledby="skills-heading"
    >
      {/* Encabezado */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Box
            className="size-8 text-yellow-600 dark:text-yellow-200"
            aria-hidden="true"
          />
          <h2
            id="skills-heading"
            className="text-3xl font-bold text-black/90 dark:text-white"
          >
            Habilidades
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          Tecnologías y herramientas con las que trabajo habitualmente.
        </p>
      </header>

      {/* Lista */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        role="list"
        aria-label="Lista de habilidades técnicas"
      >
        {SKILLS_DATA.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
