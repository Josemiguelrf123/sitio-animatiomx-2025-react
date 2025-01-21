const icon = "/images/icons/close-1-1.png";
const logo4 = "/images/logo-2.png";
const logo3 = "/images/logo-3.png";
const logo2 = "/images/logo-dark.png";
const logo1 = "/images/logo.png";
const logo6 = "/images/update-01-10-2021/logo-6-dark.png";
const logo7 = "/images/update-01-10-2021/logo-7-dark.png";
const logo8 = "/images/update-01-10-2021/logo-8-light.png";
const logo5 = "/images/update-09-06-2021/logo-5.png";
const logo10 = "/images/update-09-06-2021/logo-6.png";
const logo9 = "/images/update-26-02-2021/logo-horizontal-portfolio.png";

const home = {
  id: 1,
  name: "Inicio",
  href: "/",
};

const navItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 7,
    name: "Blog",
    href: "#blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "#contact",
  },
];

const navItems = [
  home,
  {
    id: 2,
    name: "Nosotros",
    href: "/about",
    // subNavItems: [
    //   { id: 1, name: "About Two", href: "/about-2" },
    //   { id: 2, name: "About Me", href: "/about-me" },
    //   { id: 3, name: "Our Mission", href: "/mission" },
    //   { id: 4, name: "Our History", href: "/history" },
    //   {
    //     id: 5,
    //     name: "Our Team",
    //     href: "/team",
    //     subItems: [
    //       { id: 1, name: "Team 01", href: "/team" },
    //       { id: 2, name: "Team 02", href: "/team-2" },
    //       { id: 3, name: "Team 03", href: "/team-3", isNew: true },
    //     ],
    //     isNew: true,
    //   },
    //   { id: 6, name: "Our Process", href: "/process", isNew: true },
    //   { id: 7, name: "Our Partner", href: "/partners", isNew: true },
    // ],
  },

  {
    id: 3,
    name: "Servicios",
    href: "#",
    subNavItems: [
      {
        id: 1,
        name: "Animación Digital",
        href: "#",
        subItems: [
          { id: 1, name: "Animación 2D", href: "/animacion-digital-2d" },
          { id: 2, name: "Animación 3D", href: "/animacion-digital-3d" },
          { id: 3, name: "Recorridos Virtuales 3D", href: "/recorridos-virtuales-3d" },
          { id: 4, name: "Realidad Aumentada", href: "/realidad-aumentada" }
        ]
      },
      {
        id: 2,
        name: "Marketing Digital",
        href: "#",
        subItems: [
          { id: 1, name: "Diseño Corporativo", href: "/diseno-corporativo" },
          { id: 2, name: "Seo & Content Writing", href: "/seo-para-empresas" },
          { id: 3, name: "Camapañas ADS", href: "/campanas-ads" }
        ]
      },
      {
        id: 3,
        name: "Software a medida",
        href: "#",
        subItems: [
          { id: 1, name: "Diseño Web", href: "/diseno-web" },
          { id: 2, name: "Aplicaciones móviles", href: "/aplicaciones-moviles" },
          { id: 3, name: "Sistemas Web", href: "/sistemas-web" },
          { id: 4, name: "Plataformas Web", href: "/plataformas-web" }
        ]
      },
    ],
  },
  {
    id: 4,
    name: "Portafolio",
    href: "/portfolio",
    // subNavItems: [
    //   { id: 1, name: "Portfolio", href: "/portfolio" },
    //   { id: 2, name: "Portfolio Single 01", href: "/portfolio-single" },
    //   { id: 3, name: "Portfolio Single 02", href: "/portfolio-single-2" },
    //   { id: 4, name: "Portfolio Single 03", href: "/portfolio-single-3" },
    // ],
  },

  {
    id: 7,
    name: "Blog",
    href: "/blog-grid",
    // subNavItems: [
    //   { id: 1, name: "Blog Sidebar", href: "/blog" },
    //   { id: 2, name: "Blog Grid View", href: "/blog-grid" },
    //   { id: 3, name: "Blog Single", href: "/blog-single" },
    // ],
  },
  {
    id: 8,
    name: "Contáctanos",
    href: "/contact-2",
    // subNavItems: [
    //   { id: 1, name: "Contact 01", href: "/contact" },
    //   { id: 2, name: "Contact 02", href: "/contact-2", isNew: true },
    // ],
  },
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
];

const headerData = {
  title: "Linoor - DIgital Agency NextJS Template",
  title2: "Welcome to Creative Buinsess Agency.",
  title3: "Welcome to Amazing Consulting Agency.",
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  navItems,
  navItemsTwo,
  address: "Suite 20 Golden Street USA",
  phone: "666 888 0000",
  phone2: "+ 92 666 888 0000",
  email: "needhelp@linoor.com",
  icon,
  socials,
  text: "Linoor is a premium Template for Digital Agencies, Start Ups, Small Business and a wide range of other agencies.",
};

export default headerData;
