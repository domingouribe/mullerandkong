import { v4 as uuidv4 } from "uuid";

const siteInfo = {
  name: "Muller And Kong Travel",
  description: "Tour en la Región de Coquimbo",
  logoUrl: "src/assets/logo.png",
  contact: {
    email: "hola@mullerandkong.com",
    telephone: '+56 9 7389 7560',
    social: {
      twitter: "https://twitter.com/mullerandkong",
      facebook: "https://facebook.com/mullerandkong",
      instagram: "https://instagram.com/mullerandkong",
    },
  },
};

const plans = [
  {
    slug: "tour-barraza-termas-socos",
    name: "Tour Barraza y Termas Socos",
    description:
      "POBLADO BARRAZA y SALALA: Tierra de changos, testigo de la historia de la conformación de Chile como país, donde su iglesia parroquial, diseñada por Joaquín Toesca, Monumento Nacional chileno, construida originalmente en el año 1681. Salala Lugar histórico, por enfrentamiento el 11 de febrero de 1817, en penúltimo combate por la Independencia de Chile, que significó inicio de la liberación de la región. 15 de febrero de 1817 las fuerzas patriotas entran triunfantes a La Serena. TERMAS DEL SOCOS: Lugar que invita a la relajación y autocuidado del bienestar y la salud, sus aguas cuentan con varios nutrientes minerales de altas propiedades curativas tales como sodio, yodo, bromo y magnesio.Disfrute de nuestra agua mineral termal, regalo de la naturaleza que brota desde lo profundo de la tierra y ha sido declarada fuente de salud.",
    content:
      "Ideal para negocios que recién comienzan. Incluye una página de inicio con información básica y un formulario de contacto.",
    featureImage: "/src/assets/tours-images/termas-socos-1.jpg",
    imageCreadits:
      'Müller And Kong Team',
    features: [
      "Tickets",
      "Snack",
      "Almuerzo",
      "Kit Protección solar",
    ],
    price: 85000,
    horarioSalida: "08:00 hrs",
    horarioRegreso: "18:00 hrs",
    tag: "Senderismo",
  },
  {
    slug: "tour-barraza-termas-socos",
    name: "Tour Barraza y Termas Socos",
    description:
      "POBLADO BARRAZA y SALALA: Tierra de changos, testigo de la historia de la conformación de Chile como país, donde su iglesia parroquial, diseñada por Joaquín Toesca, Monumento Nacional chileno, construida originalmente en el año 1681. Salala Lugar histórico, por enfrentamiento el 11 de febrero de 1817, en penúltimo combate por la Independencia de Chile, que significó inicio de la liberación de la región. 15 de febrero de 1817 las fuerzas patriotas entran triunfantes a La Serena. TERMAS DEL SOCOS: Lugar que invita a la relajación y autocuidado del bienestar y la salud, sus aguas cuentan con varios nutrientes minerales de altas propiedades curativas tales como sodio, yodo, bromo y magnesio.Disfrute de nuestra agua mineral termal, regalo de la naturaleza que brota desde lo profundo de la tierra y ha sido declarada fuente de salud.",
    content:
      "Ideal para negocios que recién comienzan. Incluye una página de inicio con información básica y un formulario de contacto.",
    featureImage: "/src/assets/tours-images/termas-socos-1.jpg",
    imageCreadits:
      'Müller And Kong Team',
    features: [
      "Tickets",
      "Snack",
      "Almuerzo",
      "Kit Protección solar",
    ],
    price: 85000,
    horarioSalida: "08:00 hrs",
    horarioRegreso: "18:00 hrs",
    tag: "Senderismo",
  },
  {
    slug: "tour-barraza-termas-socos",
    name: "Tour Barraza y Termas Socos",
    description:
      "POBLADO BARRAZA y SALALA: Tierra de changos, testigo de la historia de la conformación de Chile como país, donde su iglesia parroquial, diseñada por Joaquín Toesca, Monumento Nacional chileno, construida originalmente en el año 1681. Salala Lugar histórico, por enfrentamiento el 11 de febrero de 1817, en penúltimo combate por la Independencia de Chile, que significó inicio de la liberación de la región. 15 de febrero de 1817 las fuerzas patriotas entran triunfantes a La Serena. TERMAS DEL SOCOS: Lugar que invita a la relajación y autocuidado del bienestar y la salud, sus aguas cuentan con varios nutrientes minerales de altas propiedades curativas tales como sodio, yodo, bromo y magnesio.Disfrute de nuestra agua mineral termal, regalo de la naturaleza que brota desde lo profundo de la tierra y ha sido declarada fuente de salud.",
    content:
      "Ideal para negocios que recién comienzan. Incluye una página de inicio con información básica y un formulario de contacto.",
    featureImage: "/src/assets/tours-images/termas-socos-1.jpg",
    imageCreadits:
      'Müller And Kong Team',
    features: [
      "Tickets",
      "Snack",
      "Almuerzo",
      "Kit Protección solar",
    ],
    price: 85000,
    horarioSalida: "08:00 hrs",
    horarioRegreso: "18:00 hrs",
    tag: "Senderismo",
  },
  {
    slug: "tour-barraza-termas-socos",
    name: "Tour Barraza y Termas Socos",
    description:
      "POBLADO BARRAZA y SALALA: Tierra de changos, testigo de la historia de la conformación de Chile como país, donde su iglesia parroquial, diseñada por Joaquín Toesca, Monumento Nacional chileno, construida originalmente en el año 1681. Salala Lugar histórico, por enfrentamiento el 11 de febrero de 1817, en penúltimo combate por la Independencia de Chile, que significó inicio de la liberación de la región. 15 de febrero de 1817 las fuerzas patriotas entran triunfantes a La Serena. TERMAS DEL SOCOS: Lugar que invita a la relajación y autocuidado del bienestar y la salud, sus aguas cuentan con varios nutrientes minerales de altas propiedades curativas tales como sodio, yodo, bromo y magnesio.Disfrute de nuestra agua mineral termal, regalo de la naturaleza que brota desde lo profundo de la tierra y ha sido declarada fuente de salud.",
    content:
      "Ideal para negocios que recién comienzan. Incluye una página de inicio con información básica y un formulario de contacto.",
    featureImage: "/src/assets/tours-images/termas-socos-1.jpg",
    imageCreadits:
      'Müller And Kong Team',
    features: [
      "Tickets",
      "Snack",
      "Almuerzo",
      "Kit Protección solar",
    ],
    price: 85000,
    horarioSalida: "08:00 hrs",
    horarioRegreso: "18:00 hrs",
    tag: "Senderismo",
  },

];

const menu = [
  {
    title: "Inicio",
    url: "/",
    id: uuidv4(),
  },
  {
    title: "Tours",
    url: "/tours",
    id: uuidv4(),
  },
  {
    title: "Nosotros",
    url: "/about",
    id: uuidv4(),
  },
  {
    title: "Contacto",
    url: "/contact",
    id: uuidv4(),
  },
];

const config = {
  siteInfo,
  menu,
  plans,
};

export default config;
