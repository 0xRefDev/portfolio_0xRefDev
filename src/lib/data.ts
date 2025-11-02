export const links = [
  { text: "Proyectos", href: "#" },
  { text: "Experiencia", href: "#" },
  { text: "Habilidades", href: "#" },
  { text: "Contacto", href: "#" },
];

export const experience = [
  {
    company: "Instituto Venezolano de Investigaciones Científicas",
    position: "Desarrollador front-end / back-end",
    location: "Caracas, Venezuela",
    start_date: "Abril 2023",
    end_date: "Diciembre 2023",
    description: [
      {
        problem:
          "Se presentaban retrasos y congestión en la gestión de citas médicas y odontológicas debido a un sistema manual basado en papel y llamadas telefónicas. Este método generaba saturación en las líneas y, en muchos casos, impedía la reserva de nuevas citas por el alto volumen de solicitudes.",
      },
      {
        methodology:
          "Se implementó la metodología en cascada para la gestión de requerimientos de ambos sistemas, lo que permitió definir etapas bien delimitadas, facilitar la trazabilidad y mantener un control riguroso del avance en cada fase del desarrollo.",
      },
      {
        solution: [
          "Se desarrolló el back-end con PHP y MySQL, optimizando la ejecución de consultas, el manejo de sesiones y la validación de roles para garantizar la seguridad de cada usuario.",
          "Se diseñó e implementó interfaces de usuario intuitivas y responsivas con HTML, CSS y JavaScript, mejorando la usabilidad y facilitando la navegación dentro de los sistemas.",
        ],
      },
      {
        result: [
          "La implementación de los sistemas redujo en un 95% la congestión en la gestión de citas médicas y odontológicas.",
          "Se reemplazó un proceso manual ineficiente por una solución automatizada y escalable, mejorando significativamente la eficiencia operativa y la experiencia de los usuarios.",
        ],
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  // {
  //   company: "",
  //   position: "",
  //   location: "",
  //   start_date: "",
  //   end_date: "",
  //   description: [
  //     {
  //       problem: "",
  //     },
  //     {
  //       methodology: "",
  //     },
  //     {
  //       solution: ["", ""],
  //     },
  //     {
  //       result: ["", ""],
  //     },
  //   ],
  //   technologies: [""],
  // },
];

// Project typing to preserve literal `image` values and match `ProjectCard` props
export type ProjectImage =
  | "bitmates"
  | "digmaster"
  | "pmissions"
  | "p2p"
  | "tracker";

export interface Project {
  name: string;
  alias: string;
  description: string;
  version: number;
  image: ProjectImage;
  link: string;
  github: string;
  techs: string[];
}

export const projects: Project[] = [
  {
    name: "Binance P2P Calculator",
    alias: "bp2pcalc",
    description:
      "Tool to calculate estimated profits by performing P2P on the Binance platform, clean and easy-to-use interface",
    version: 1.0,
    image: "p2p",
    link: "https://p2p-profit.vercel.app/",
    github: "https://github.com/0xRefDev/binance_p2p_profit_calculator",
    techs: ["React", "Tailwind CSS"],
  },
  {
    name: "Dig Master",
    alias: "SFL",
    description:
      "Page developed to assist the Sunflower Land community with routine in-game excavations.",
    version: 1.0,
    image: "digmaster",
    link: "https://dig-master.vercel.app/",
    github: "https://github.com/0xRefDev/sfl_digger_master",
    techs: ["React", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    name: "Bitmates info",
    alias: "bitmatesinfo",
    description:
      "Wiki approved by Bitmates developers to support players looking for information about the game, it has tools for searching for players and NFTs in the game.",
    version: 1.0,
    image: "bitmates",
    link: "https://bitmates-info.vercel.app/",
    github: "private",
    techs: ["React", "CSS"],
  },
  {
    name: "Pixels Missions",
    alias: "pmissions",
    description:
      "Information page about the game's default missions to increase account reputation.",
    version: 1.0,
    image: "pmissions",
    link: "https://pixels-missions.vercel.app/",
    github: "private",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Pixels Land Tracker",
    alias: "ltracker",
    description:
      "Tracker to visualize the NFT lands of the Pixels Online game",
    version: 1.0,
    image: "tracker",
    link: "https://0xrefdev.github.io/pixels_land_tracker/",
    github: "private",
    techs: ["HTML", "CSS", "JavaScript"],
  },
];
