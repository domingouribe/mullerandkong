import { v4 as uuidv4 } from "uuid";

const siteInfo = {
  name: "Muller And Kong Travel",
  description: "Tour en la Región de Coquimbo",
  logoUrl: "/src/assets/logo.png",
  contact: {
    email: "hola@mullerandkong.com",
    telephone: "+56 9 7389 7560",
    social: {
      twitter: "https://twitter.com/mullerandkong",
      facebook: "https://facebook.com/mullerandkong",
      instagram: "https://instagram.com/mullerandkong",
    },
  },
};

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
    title: "Blog",
    url: "/blog",
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
};

export default config;
