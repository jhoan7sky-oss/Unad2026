// ==================================== TRADUCCIONES
const translationsDB = {
  es: {
    Header: {
      Titulo: "Suiza",
      Subtitulo: "Explore",
      Idioma: "Idioma",
      Mapa: "Mapa",
      Nav: {
        Lugares: "Lugares",
        Actividades: "Actividades",
        Planifica: "Planifica tu viaje",
        Eventos: "Eventos",
        Blog: "Blog",
        Contacto: "Contacto",
        Index: "Inicio"
      }
    },

    Modal: {
      Titulo: "Selecciona tu idioma",
      Cerrar: "Cerrar modal",
      Idiomas: {
        Es: "Español",
        En: "Inglés"
      }
    },
    Accesibilidad: {
      Titulo: "Opciones de accesibilidad"
    },

    Acces: {
      Titulo: "Panel de accesibilidad",
      Cerrar: "Cerrar panel",

      Texto: {
        Tamano: "Tamaño del texto (Paso a paso)",
        Visual: "Ajustes visuales",
        Lectura: "Lectura y navegación"
      },

      Botones: {
        Aumentar: "Aumentar",
        Reducir: "Reducir",
        Contraste: "Alto contraste",
        Enlaces: "Resaltar enlaces",
        Fuente: "Fuente legible",
        Cursor: "Cursor grande",
        Animaciones: "Detener animaciones",
        Reset: "Restablecer todo"
      }
    },
    Slider: {
      Pausa: "Pausar slider",

      Slide1: {
        Titulo: "Bienvenido a Suiza",
        Descripcion: "Descubre paisajes únicos y experiencias inolvidables",
        Boton1: "Explorar",
        Boton2: "Planificar"
      },

      Slide2: {
        Titulo: "Vive los Alpes",
        Descripcion: "Aventura, naturaleza y aire puro",
        Boton1: "Actividades",
        Boton2: "Descubrir"
      },

      Slide3: {
        Titulo: "Ciudades con historia",
        Descripcion: "Cultura, arquitectura y tradición",
        Boton1: "Destinos",
        Boton2: "Ver más"
      },

      Slide4: {
        Titulo: "Planifica tu viaje",
        Descripcion: "Todo lo que necesitas en un solo lugar",
        Boton1: "Guía",
        Boton2: "Contactar"
      }
    },
    Main: {
      Lugares: {
        Subtitulo: "LO MÁS TOP",
        Titulo: "Lugares reconocidos",
        Descripcion: "Descubre los destinos más emblemáticos de Suiza, donde la belleza natural se encuentra con la rica cultura e historia.",
        Boton: "Explorar",

        Lucerna: {
          Titulo: "Lago de Lucerna",
          Descripcion: "Un lugar mágico rodeado de montañas y aguas cristalinas.",
          Alt: "Lago de Lucerna rodeado de montañas",
          Aria: "Explorar el Lago de Lucerna"
        },

        Zermatt: {
          Titulo: "Montañas de Zermatt",
          Descripcion: "Paisajes alpinos impresionantes y aventuras al aire libre.",
          Alt: "Montañas de Zermatt con paisajes alpinos",
          Aria: "Explorar las Montañas de Zermatt"
        },

        Chillon: {
          Titulo: "Castillo de Chillon",
          Descripcion: "Historia y belleza junto al Lago de Ginebra.",
          Alt: "Castillo de Chillon junto al lago",
          Aria: "Explorar el Castillo de Chillon"
        },

        Ginebra: {
          Titulo: "Ciudad de Ginebra",
          Descripcion: "Cultura, arquitectura y vida urbana al estilo suizo.",
          Alt: "Vista urbana de la ciudad de Ginebra",
          Aria: "Explorar la Ciudad de Ginebra"
        }
      }, Descubrir: {
        Subtitulo: "SITIOS SORPRENDENTES",
        Titulo: "Lugares por descubrir",
        Descripcion: "Aventúrate más allá de lo convencional y descubre los tesoros escondidos que hacen de Suiza un destino único.",
        Boton: "Descubrir más",

        Oeschinen: {
          Titulo: "Lago Oeschinen",
          Descripcion: "Un lago alpino turquesa rodeado de montañas imponentes.",
          Ubicacion: "Bernese Oberland",
          Alt: "Lago Oeschinen rodeado de montañas",
          Aria: "Descubrir más sobre el Lago Oeschinen"
        },

        Aareschlucht: {
          Titulo: "Aareschlucht",
          Descripcion: "Un desfiladero espectacular con pasarelas suspendidas.",
          Ubicacion: "Meiringen",
          Alt: "Desfiladero de Aareschlucht",
          Aria: "Descubrir más sobre Aareschlucht"
        },

        ValBregaglia: {
          Titulo: "Val Bregaglia",
          Descripcion: "Un valle auténtico lleno de cultura y naturaleza virgen.",
          Ubicacion: "Graubünden",
          Alt: "Valle de Val Bregaglia",
          Aria: "Descubrir más sobre Val Bregaglia"
        },

        Creux: {
          Titulo: "Creux du Van",
          Descripcion: "Un anfiteatro natural con vistas panorámicas únicas.",
          Ubicacion: "Neuchâtel",
          Alt: "Creux du Van",
          Aria: "Descubrir más sobre Creux du Van"
        },

        Lauterbrunnen: {
          Titulo: "Lauterbrunnental",
          Descripcion: "Un valle mágico con más de 70 cascadas escondidas.",
          Ubicacion: "Bern",
          Alt: "Valle de Lauterbrunnen",
          Aria: "Descubrir más sobre Lauterbrunnental"
        },

        Tarasp: {
          Titulo: "Castillo de Tarasp",
          Descripcion: "Un castillo medieval con vistas panorámicas alpinas.",
          Ubicacion: "Engadina",
          Alt: "Castillo de Tarasp",
          Aria: "Descubrir más sobre el Castillo de Tarasp"
        }
      },
      Actividades: {
        Subtitulo: "EXPERIENCIAS",
        Titulo: "Actividades por realizar",
        Descripcion: "Desde deportes de aventura hasta experiencias culturales, Suiza ofrece actividades para todos los gustos y niveles.",

        Tabs: {
          Aria: "Categorías de actividades",
          Temporadas: "Temporadas",
          Naturaleza: "Naturaleza y senderismo",
          Aventura: "Deportes de aventura",
          Cultura: "Cultura y turismo",
          Otros: "Otros"
        },

        Temporadas: {
          Primavera: {
            Titulo: "Primavera Alpina",
            Descripcion: "Los Alpes florecen con paisajes verdes y rutas ideales.",
            Alt: "Primavera en los Alpes suizos"
          },
          Verano: {
            Titulo: "Verano en los Lagos",
            Descripcion: "Actividades acuáticas con vistas montañosas.",
            Alt: "Lagos suizos en verano"
          },
          Otono: {
            Titulo: "Otoño en Valais",
            Descripcion: "Paisajes dorados y senderos tranquilos.",
            Alt: "Otoño en Valais"
          },
          Invierno: {
            Titulo: "Invierno en Zermatt",
            Descripcion: "Esquí y deportes de nieve.",
            Alt: "Invierno en Zermatt"
          },
          Navidad: {
            Titulo: "Mercados navideños",
            Descripcion: "Tradición, luces y ambiente festivo.",
            Alt: "Mercados navideños en Suiza"
          },
          Festival: {
            Titulo: "Festivales de verano",
            Descripcion: "Música, cultura y eventos al aire libre.",
            Alt: "Festival de verano en Suiza"
          }
        },

        Naturaleza: {
          Jungfrau: {
            Titulo: "Región Jungfrau",
            Descripcion: "Montañas, glaciares y rutas alpinas.",
            Alt: "Montañas de Jungfrau"
          },
          Appenzell: {
            Titulo: "Appenzell",
            Descripcion: "Paisajes verdes y tradiciones suizas.",
            Alt: "Paisaje de Appenzell"
          },
          Lucerna: {
            Titulo: "Lago de Lucerna",
            Descripcion: "Senderismo con vistas al lago.",
            Alt: "Lago de Lucerna"
          },
          Parque: {
            Titulo: "Parque Nacional Suizo",
            Descripcion: "Naturaleza protegida y fauna salvaje.",
            Alt: "Parque Nacional Suizo"
          },
          Rin: {
            Titulo: "Cataratas del Rin",
            Descripcion: "Las cascadas más grandes de Europa.",
            Alt: "Cataratas del Rin"
          },
          Bregaglia: {
            Titulo: "Val Bregaglia",
            Descripcion: "Valle alpino lleno de historia.",
            Alt: "Valle de Bregaglia"
          }
        },

        Aventura: {
          Parapente: {
            Titulo: "Parapente en Interlaken",
            Descripcion: "Vuela sobre lagos y montañas.",
            Alt: "Parapente en Interlaken"
          },
          Esqui: {
            Titulo: "Esquí en St. Moritz",
            Descripcion: "Pistas de nivel mundial.",
            Alt: "Esquí en los Alpes"
          },
          Bike: {
            Titulo: "Ciclismo de montaña",
            Descripcion: "Rutas extremas alpinas.",
            Alt: "Ciclismo de montaña"
          },
          Escalada: {
            Titulo: "Escalada en roca",
            Descripcion: "Desafíos verticales.",
            Alt: "Escalada en roca"
          },
          Rafting: {
            Titulo: "Rafting en el Rin",
            Descripcion: "Aventura en aguas rápidas.",
            Alt: "Rafting en el río Rin"
          },
          Buceo: {
            Titulo: "Buceo en lagos alpinos",
            Descripcion: "Aguas cristalinas.",
            Alt: "Buceo en lago alpino"
          }
        },

        Cultura: {
          Zurich: {
            Titulo: "Zúrich histórico",
            Descripcion: "Arquitectura medieval y moderna.",
            Alt: "Ciudad de Zúrich"
          },
          Ginebra: {
            Titulo: "Ginebra internacional",
            Descripcion: "Centro cultural y diplomático.",
            Alt: "Ciudad de Ginebra"
          },
          Lucerna: {
            Titulo: "Lucerna medieval",
            Descripcion: "Puentes históricos y encanto.",
            Alt: "Lucerna histórica"
          },
          Reloj: {
            Titulo: "Museo del reloj",
            Descripcion: "Historia de la relojería suiza.",
            Alt: "Museo de relojes"
          },
          Chillon: {
            Titulo: "Castillo de Chillon",
            Descripcion: "Fortaleza medieval junto al lago.",
            Alt: "Castillo de Chillon"
          },
          Basilea: {
            Titulo: "Basilea cultural",
            Descripcion: "Arte y arquitectura contemporánea.",
            Alt: "Ciudad de Basilea"
          }
        },

        Otros: {
          Chocolate: {
            Titulo: "Ruta del chocolate",
            Descripcion: "Degusta el mejor chocolate suizo.",
            Alt: "Chocolate suizo"
          },
          Queso: {
            Titulo: "Experiencia del queso",
            Descripcion: "Tradición gastronómica suiza.",
            Alt: "Queso suizo"
          },
          Tren: {
            Titulo: "Glacier Express",
            Descripcion: "Tren panorámico alpino.",
            Alt: "Tren Glacier Express"
          },
          Spa: {
            Titulo: "Spas alpinos",
            Descripcion: "Relajación en la naturaleza.",
            Alt: "Spa alpino"
          },
          Fondue: {
            Titulo: "Fondue tradicional",
            Descripcion: "Plato típico suizo.",
            Alt: "Fondue suizo"
          },
          Rutas: {
            Titulo: "Rutas panorámicas",
            Descripcion: "Viajes escénicos en tren.",
            Alt: "Ruta panorámica suiza"
          }
        }
      },
      Planifica: {
        Subtitulo: "QUIERO CONOCER",
        Titulo: "Planifica tu viaje",
        Descripcion: "Escoge a tu medida para mayor comodidad",

        Fechas: {
          Titulo: "Selecciona Fechas",
          Desc: "Elige las mejores fechas para tu viaje."
        },
        Destinos: {
          Titulo: "Destinos",
          Desc: "Crea tu ruta personalizada."
        },
        Alojamiento: {
          Titulo: "Alojamiento",
          Desc: "Opciones según tu presupuesto."
        },
        Transporte: {
          Titulo: "Transporte",
          Desc: "Organiza traslados y trenes."
        },
        Vuelos: {
          Titulo: "Vuelos",
          Desc: "Encuentra las mejores tarifas."
        },
        Info: {
          Titulo: "Información útil",
          Desc: "Consejos y guías prácticas."
        },

        FormTitulo: "Escoge a tu medida para mayor comodidad",

        Form: {
          Llegada: "Fecha de llegada*",
          Salida: "Fecha de salida*",
          Viajeros: "Número de viajeros*",
          Select: "Selecciona una opción",
          Plan: "¿Qué vas a incluir en tu plan?",
          Aventura: "Aventura",
          Cultura: "Cultura",
          Naturaleza: "Naturaleza",
          Hotel: "Hotel",
          Boton: "Enviar solicitud de viaje"
        },

        Modal: {
          Titulo: "¡Solicitud enviada!",
          Desc: "Tu plan de viaje fue enviado correctamente."
        }
      },
      Momentos: {
        Subtitulo: "Experiencias",
        Titulo: "Momentos compartidos",
        Descripcion: "Descubre las experiencias de viajeros que ya visitaron Suiza.",

        Carrusel: "Galería de fotos de Instagram",
        Anterior: "Foto anterior",
        Siguiente: "Siguiente foto",
        Dots: "Seleccionar diapositiva",
        Cerrar: "Cerrar imagen ampliada",

        ModalTitulo: "Imagen ampliada",
        ModalAlt: "Vista ampliada de la publicación seleccionada",

        Img1: "Viajero disfrutando la vista en los Alpes",
        Img2: "Tren panorámico cruzando un viaducto",
        Img3: "Cena tradicional de fondue en un chalet",
        Img4: "Atardecer en el lago Lemán",
        Img5: "Calles históricas de Zúrich de noche",
        Img6: "Senderista frente al monte Matterhorn",
        Img7: "Mercado navideño iluminado en Basilea",
        Img8: "Vaca suiza en los prados de Grindelwald"
      },
      Eventos: {
        Subtitulo: "EXPERIENCIAS",
        Titulo: "Eventos destacados",
        Descripcion: "Descubre los festivales y competencias más emblemáticos de Suiza, donde la tradición y la modernidad se encuentran.",
        Boton: "Explorar...",

        Montreux: {
          Titulo: "Festival de Jazz de Montreux",
          Desc: "Festival internacional junto al lago Lemán con artistas de talla mundial.",
          Alt: "Festival de Jazz de Montreux",
          Aria: "Explorar el Festival de Jazz de Montreux"
        },

        Basilea: {
          Titulo: "Carnaval de Basilea",
          Desc: "El carnaval más grande de Suiza con desfiles tradicionales.",
          Alt: "Carnaval de Basilea",
          Aria: "Explorar el Carnaval de Basilea"
        },

        Tenis: {
          Titulo: "Swiss Indoors Basel",
          Desc: "Torneo ATP con figuras internacionales.",
          Alt: "Torneo de tenis en Basilea",
          Aria: "Explorar el Swiss Indoors Basel"
        },

        Locarno: {
          Titulo: "Festival de Cine de Locarno",
          Desc: "Festival europeo con proyecciones al aire libre.",
          Alt: "Festival de Locarno",
          Aria: "Explorar el Festival de Locarno"
        },

        Lauberhorn: {
          Titulo: "Lauberhorn Rennen",
          Desc: "Carrera histórica de esquí alpino en Wengen.",
          Alt: "Carrera de esquí Lauberhorn",
          Aria: "Explorar Lauberhorn Rennen"
        },

        Gruyeres: {
          Titulo: "Fiesta del Queso de Gruyères",
          Desc: "Celebración del tradicional queso suizo.",
          Alt: "Fiesta del queso Gruyères",
          Aria: "Explorar la Fiesta del Queso"
        }
      },
      Opiniones: {
        Subtitulo: "EXPERIENCIAS",
        Titulo: "¿Qué dicen los viajeros?",
        Descripcion: "Lee las opiniones de quienes ya vivieron la experiencia Suiza.",

        Rating4: "Calificación: 4 de 5 estrellas",
        Rating3: "Calificación: 3 de 5 estrellas",
        Rating2: "Calificación: 2 de 5 estrellas",

        Op1: {
          Titulo: "Excelente experiencia",
          Desc: "Servicio impecable y atención personalizada.",
          Fecha: "15 Febrero 2026",
          AutorAlt: "Fotografía de María Gómez"
        },

        Op2: {
          Titulo: "Muy bueno",
          Desc: "Buena organización y excelente trato.",
          Fecha: "10 Febrero 2026",
          AutorAlt: "Fotografía de Carlos Ruiz"
        },

        Op3: {
          Titulo: "Bueno",
          Desc: "La explicación fue clara y fácil de entender.",
          Fecha: "8 Febrero 2026",
          AutorAlt: "Fotografía de Laura Méndez"
        },

        Op4: {
          Titulo: "Recomendado",
          Desc: "Una experiencia que repetiría sin duda.",
          Fecha: "5 Febrero 2026",
          AutorAlt: "Fotografía de Andrés Silva"
        },
        Rating1: "Calificación: 1 de 5 estrellas",

        Op5: {
          Titulo: "Me siento feliz",
          Desc: "El material estuvo bien estructurado y actualizado.",
          Fecha: "2 Febrero 2026",
          AutorAlt: "Fotografía de Sofía Torres"
        },

        Op6: {
          Titulo: "Excelente atención",
          Desc: "Todo el equipo fue muy profesional.",
          Fecha: "30 Enero 2026",
          AutorAlt: "Fotografía de Daniel Castro"
        },

        Op7: {
          Titulo: "Muy bien",
          Desc: "Me gustó la experiencia en general.",
          Fecha: "25 Enero 2026",
          AutorAlt: "Fotografía de Paula Ríos"
        },

        Op8: {
          Titulo: "Excelente organización",
          Desc: "Las actividades facilitaron el aprendizaje progresivo.",
          Fecha: "20 Enero 2026",
          AutorAlt: "Fotografía de Camilo Vargas"
        }
      },
      Mapa: {
        Subtitulo: "EXPLORAR",
        Titulo: "Mapa interactivo",
        Descripcion: "Explora todos los destinos, actividades y servicios turísticos disponibles.",
        Iframe: "Mapa interactivo con puntos de interés turístico en Suiza"
      },
      Noticias: {
        Subtitulo: "ACTUALIDAD",
        Titulo: "Noticias recientes",
        Descripcion: "Conoce las actualidades, novedades y acontecimientos más destacados de Suiza.",

        Carrusel: "Noticias actuales de Suiza",
        Anterior: "Noticia anterior",
        Siguiente: "Siguiente noticia",
        Dots: "Seleccionar diapositiva de noticia",
        Boton: "Descubrir más",

        N1: {
          Titulo: "Los Alpes Suizos, el paraíso natural que debes conocer",
          Desc: "Montañas imponentes, senderismo panorámico y paisajes de postal.",
          Alt: "Montañas nevadas de los Alpes Suizos",
          Aria: "Descubrir más sobre los Alpes Suizos"
        },

        N2: {
          Titulo: "Zermatt y el icónico Matterhorn",
          Desc: "Destino alpino con esquí y vistas espectaculares del Cervino.",
          Alt: "Vista del pueblo de Zermatt y el monte Matterhorn",
          Aria: "Descubrir más sobre Zermatt y el Matterhorn"
        },

        N3: {
          Titulo: "El Glacier Express: el tren panorámico más famoso",
          Desc: "Recorrido entre montañas y valles con vistas únicas.",
          Alt: "Tren Glacier Express en los Alpes",
          Aria: "Descubrir más sobre el Glacier Express"
        },

        N4: {
          Titulo: "Lagos cristalinos ideales para el verano",
          Desc: "El lago de Ginebra y el lago de Lucerna ofrecen experiencias acuáticas.",
          Alt: "Lago de Lucerna con barco",
          Aria: "Descubrir más sobre los lagos suizos"
        },

        N5: {
          Titulo: "Ciudades medievales de cuento",
          Desc: "Berna y Lucerna combinan historia y arquitectura encantadora.",
          Alt: "Arquitectura medieval en Berna",
          Aria: "Descubrir más sobre ciudades medievales"
        },

        N6: {
          Titulo: "Rutas de chocolate y queso suizo",
          Desc: "Experiencias gastronómicas únicas llenas de tradición.",
          Alt: "Fondue y chocolate suizo",
          Aria: "Descubrir más sobre gastronomía suiza"
        },

        N7: {
          Titulo: "Suiza, uno de los destinos más seguros",
          Desc: "Infraestructura moderna y alta calidad de vida.",
          Alt: "Transporte moderno en Suiza",
          Aria: "Leer más sobre seguridad en Suiza"
        },

        N8: {
          Titulo: "Festivales culturales y musicales",
          Desc: "Eventos internacionales y celebraciones tradicionales.",
          Alt: "Festival cultural en Suiza",
          Aria: "Explorar festivales en Suiza"
        }
      },
      Patrocinadores: {
        Subtitulo: "APOYO",
        Titulo: "Empresas patrocinadoras",
        Carrusel: "Carrusel de logotipos de patrocinadores",

        Logo1: "Socio comercial 1",
        Logo2: "Socio comercial 2",
        Logo3: "Socio comercial 3",
        Logo4: "Socio comercial 4",
        Logo5: "Socio comercial 5",
        Logo6: "Socio comercial 6"
      },
      Contacto: {
        Subtitulo: "CONTACTO",
        Titulo: "¿Necesitas ayuda?",
        Descripcion: "Nuestro equipo está listo para ayudarte a planificar tu viaje perfecto a Suiza.",

        Imagen: "Paisaje del Lago Lucerna con montañas",

        Form: {
          Nombre: "Nombre",
          NombrePH: "Andrés",
          Apellido: "Apellido",
          ApellidoPH: "Pérez",
          Correo: "Correo",
          CorreoPH: "correo@ejemplo.com",
          Mensaje: "Mensaje",
          MensajePH: "Me gustaría recibir información...",
          Boton: "Enviar"
        },

        Modal: {
          Titulo: "Mensaje enviado",
          Desc: "Gracias por contactarnos. Te responderemos pronto.",
          Cerrar: "Cerrar ventana emergente"
        }
      }
    },
    Footer: {
      Logo: "Logo de Visit Suiza",

      Sitio: {
        Titulo: "Sobre el sitio",
        Lugares: "Lugares destacados",
        Actividades: "Actividades",
        Planifica: "Planifica tu viaje",
        Eventos: "Eventos",
        Mapa: "Mapa interactivo"
      },

      Contacto: {
        Titulo: "Atención al viajero",
        Email: "info@visitsuiza.com",
        EmailAria: "Enviar correo a info@visitsuiza.com",
        Telefono: "+41 00 000 0000",
        TelefonoAria: "Llamar al +41 00 000 0000",
        Horario: "Lunes a viernes 7:00am - 6:00pm"
      },

      Redes: {
        Facebook: "Visitar nuestro Facebook",
        Instagram: "Visitar nuestro Instagram",
        Youtube: "Visitar nuestro canal de YouTube"
      },

      Info: {
        Titulo: "Información y aliados",
        Terminos: "Términos y condiciones",
        Cookies: "Uso de cookies",
        Accesibilidad: "Accesibilidad"
      },

      Copy: "© 2026 Visit Suiza. Todos los derechos reservados."
    },

    Blog: {
      Titulo: "Últimas noticias",
      Subtitulo: "Siempre al día",
      Hoy: {
        Titulo: "Un día como hoy",
        TituloCard: "Primavera Alpina",
        Desc: "Los Alpes florecen con paisajes verdes, clima templado y rutas perfectas para explorar.",
        Boton: "Leer completo",
        Alt: "Paisaje de primavera en los Alpes suizos"
      },

      Relacionados: {
        Titulo: "Relacionado",
        Aria: "Artículos relacionados",
        Boton: "Ver más",

        R1: {
          Titulo: "Festival de Invierno",
          Desc: "Celebraciones tradicionales en los Alpes.",
          Alt: "Invierno en Zermatt"
        },
        R2: {
          Titulo: "Lagos Suizos",
          Desc: "Destinos ideales para relajarse.",
          Alt: "Lago Lucerna"
        },
        R3: {
          Titulo: "Montañas Nevadas",
          Desc: "Aventura y deportes extremos.",
          Alt: "Spas alpinos"
        },
        R4: {
          Titulo: "Rutas Escénicas",
          Desc: "Caminos panorámicos inolvidables.",
          Alt: "Glacier Express"
        }
      },

      Modal: {
        Titulo: "Primavera Alpina",
        Parrafo1: "La primavera en los Alpes transforma completamente el paisaje.",
        Parrafo2: "Es una de las mejores temporadas para visitar Suiza.",
        Cerrar: "Cerrar artículo"
      },
      Recientes: {
        Titulo: "Noticias recientes",
        Boton: "Descubrir más",

        N1: {
          Titulo: "Los Alpes Suizos, el paraíso natural que debes conocer",
          Desc: "Montañas imponentes y paisajes inolvidables.",
          Alt: "Alpes Suizos",
          Aria: "Descubrir más sobre los Alpes Suizos"
        },

        N2: {
          Titulo: "Zermatt y el Matterhorn",
          Desc: "Destino alpino con vistas espectaculares.",
          Alt: "Zermatt",
          Aria: "Descubrir más sobre Zermatt"
        },

        N3: {
          Titulo: "El Glacier Express",
          Desc: "El tren panorámico más famoso de Suiza.",
          Alt: "Glacier Express",
          Aria: "Descubrir más sobre el Glacier Express"
        },

        N4: {
          Titulo: "Lagos cristalinos",
          Desc: "Destinos ideales para el verano.",
          Alt: "Lagos suizos",
          Aria: "Descubrir más sobre los lagos"
        },

        N5: {
          Titulo: "Ciudades medievales",
          Desc: "Historia y arquitectura encantadora.",
          Alt: "Ciudades medievales",
          Aria: "Descubrir más sobre ciudades"
        },

        N6: {
          Titulo: "Gastronomía suiza",
          Desc: "Chocolate y queso tradicionales.",
          Alt: "Gastronomía suiza",
          Aria: "Descubrir más sobre gastronomía"
        }
      }
    },

    ContactoPage: {
      FAQ: {
        Titulo: "Preguntas frecuentes",

        Q1: "1. ¿Cuál es la mejor época para visitar Suiza?",
        R1: "El verano es ideal para senderismo y lagos, mientras que el invierno es perfecto para los Alpes y deportes de nieve.",

        Q2: "2. ¿Necesito visa para viajar a Suiza?",
        R2: "Suiza pertenece al espacio Schengen. Muchos países pueden ingresar hasta 90 días sin visa.",

        Q3: "3. ¿Es caro viajar a Suiza?",
        R3: "Es un destino costoso, pero con planificación puedes optimizar tu presupuesto.",

        Q4: "4. ¿Qué documentos necesito para ingresar?",
        R4: "Pasaporte vigente, seguro médico y comprobante de alojamiento.",

        Q5: "5. ¿Qué moneda se utiliza en Suiza?",
        R5: "El franco suizo (CHF). Se recomienda pagar en moneda local."
      },
      Titulo: "¿Necesitas ayuda?",
      Descripcion: "Nuestro equipo está listo para ayudarte a planificar tu viaje perfecto a Suiza.",

      Info: {
        Email: "info@visitsuiza.com",
        EmailAria: "Enviar correo a info@visitsuiza.com",
        Telefono: "+41 00 000 0000",
        TelefonoAria: "Llamar al +41 00 000 0000",
        Horario: "Lunes a viernes 7:00am - 6:00pm"
      },

      Redes: {
        Facebook: "Visitar Facebook",
        Instagram: "Visitar Instagram",
        Youtube: "Visitar YouTube"
      },

      Form: {
        Nombre: "Nombre",
        NombrePH: "Andrés",
        Apellido: "Apellido",
        ApellidoPH: "Pérez",
        Correo: "Correo",
        CorreoPH: "correo@ejemplo.com",
        Tipo: "Tipo de consulta",
        Mensaje: "Mensaje",
        MensajePH: "Me gustaría...",
        Boton: "Enviar",

        Opciones: {
          Soporte: "Soporte",
          Info: "Información general",
          Plan: "Planificación de viaje",
          Alianzas: "Alianzas",
          Eventos: "Eventos"
        }
      },

      Modal: {
        Titulo: "Mensaje enviado",
        Desc: "Gracias por contactarnos. Te responderemos pronto.",
        Cerrar: "Cerrar ventana"
      },
      Atencion: {
        Titulo: "Atención personalizada",
        Descripcion: "¿Necesitas ayuda para planear tu viaje?",
        Chat: "💬 Live Chat",
        ChatAria: "Abrir chat en vivo",
        Whatsapp: "📱 WhatsApp",
        WhatsappAria: "Contactar por WhatsApp"
      },

      Descarga: {
        Titulo: "Descarga de información",
        Guia: "📄 Guía turística en PDF",
        GuiaAria: "Descargar guía turística",
        Mapa: "🗺️ Mapa del país descargable",
        MapaAria: "Descargar mapa del país"
      },

      Mapa: {
        Titulo: "Nuestras oficinas en Google Maps",
        Descripcion: "Explora todos los destinos, actividades y servicios turísticos disponibles.",
        Aria: "Mapa de Suiza en Google Maps"
      }
    },
    Skip: {
      BtnSkip: "Saltar Contenido"
    },
    Bienvenida: {
      BuenosDias: "¡Buenos días!",
      BuenasTardes: "¡Buenas tardes!",
      BuenasNoches: "¡Buenas noches!",
      Mensaje: "¡Bienvenido!"
    }

  },
  en: {
    Header: {
      Titulo: "Switzerland",
      Subtitulo: "Explore",
      Idioma: "Language",
      Mapa: "Map",
      Nav: {
        Lugares: "Places",
        Actividades: "Activities",
        Planifica: "Plan your trip",
        Eventos: "Events",
        Blog: "Blog",
        Contacto: "Contact",
        Index: "Home"
      }
    },

    Modal: {
      Titulo: "Select your language",
      Cerrar: "Close modal",
      Idiomas: {
        Es: "Spanish",
        En: "English"
      }
    },
    Accesibilidad: {
      Titulo: "Accessibility options"
    },

    Acces: {
      Titulo: "Accessibility panel",
      Cerrar: "Close panel",

      Texto: {
        Tamano: "Text size (step by step)",
        Visual: "Visual settings",
        Lectura: "Reading and navigation"
      },

      Botones: {
        Aumentar: "Increase",
        Reducir: "Decrease",
        Contraste: "High contrast",
        Enlaces: "Highlight links",
        Fuente: "Readable font",
        Cursor: "Large cursor",
        Animaciones: "Stop animations",
        Reset: "Reset all"
      }
    },
    Slider: {
      Pausa: "Pause slider",

      Slide1: {
        Titulo: "Welcome to Switzerland",
        Descripcion: "Discover unique landscapes and unforgettable experiences",
        Boton1: "Explore",
        Boton2: "Plan"
      },

      Slide2: {
        Titulo: "Experience the Alps",
        Descripcion: "Adventure, nature and fresh air",
        Boton1: "Activities",
        Boton2: "Discover"
      },

      Slide3: {
        Titulo: "Cities with history",
        Descripcion: "Culture, architecture and tradition",
        Boton1: "Destinations",
        Boton2: "See more"
      },

      Slide4: {
        Titulo: "Plan your trip",
        Descripcion: "Everything you need in one place",
        Boton1: "Guide",
        Boton2: "Contact"
      }
    },
    Main: {
      Lugares: {
        Subtitulo: "TOP DESTINATIONS",
        Titulo: "Famous places",
        Descripcion: "Discover Switzerland's most iconic destinations where natural beauty meets rich culture and history.",
        Boton: "Explore",

        Lucerna: {
          Titulo: "Lake Lucerne",
          Descripcion: "A magical place surrounded by mountains and crystal-clear waters.",
          Alt: "Lake Lucerne surrounded by mountains",
          Aria: "Explore Lake Lucerne"
        },

        Zermatt: {
          Titulo: "Zermatt Mountains",
          Descripcion: "Stunning alpine landscapes and outdoor adventures.",
          Alt: "Zermatt mountains with alpine scenery",
          Aria: "Explore the Zermatt Mountains"
        },

        Chillon: {
          Titulo: "Chillon Castle",
          Descripcion: "History and beauty by Lake Geneva.",
          Alt: "Chillon Castle by the lake",
          Aria: "Explore Chillon Castle"
        },

        Ginebra: {
          Titulo: "Geneva City",
          Descripcion: "Culture, architecture and urban life Swiss style.",
          Alt: "City view of Geneva",
          Aria: "Explore Geneva City"
        }
      },
      Descubrir: {
        Subtitulo: "AMAZING PLACES",
        Titulo: "Places to discover",
        Descripcion: "Go beyond the usual and discover hidden gems that make Switzerland a unique destination.",
        Boton: "Discover more",

        Oeschinen: {
          Titulo: "Oeschinen Lake",
          Descripcion: "A turquoise alpine lake surrounded by impressive mountains.",
          Ubicacion: "Bernese Oberland",
          Alt: "Oeschinen Lake surrounded by mountains",
          Aria: "Discover more about Oeschinen Lake"
        },

        Aareschlucht: {
          Titulo: "Aareschlucht",
          Descripcion: "A spectacular gorge with suspended walkways.",
          Ubicacion: "Meiringen",
          Alt: "Aareschlucht gorge with wooden walkways",
          Aria: "Discover more about Aareschlucht"
        },

        ValBregaglia: {
          Titulo: "Val Bregaglia",
          Descripcion: "An authentic valley full of culture and untouched nature.",
          Ubicacion: "Graubünden",
          Alt: "Green valley of Val Bregaglia",
          Aria: "Discover more about Val Bregaglia"
        },

        Creux: {
          Titulo: "Creux du Van",
          Descripcion: "A natural amphitheater with unique panoramic views.",
          Ubicacion: "Neuchâtel",
          Alt: "Natural amphitheater Creux du Van",
          Aria: "Discover more about Creux du Van"
        },

        Lauterbrunnen: {
          Titulo: "Lauterbrunnen Valley",
          Descripcion: "A magical valley with more than 70 hidden waterfalls.",
          Ubicacion: "Bern",
          Alt: "Waterfalls in Lauterbrunnen Valley",
          Aria: "Discover more about Lauterbrunnen Valley"
        },

        Tarasp: {
          Titulo: "Tarasp Castle",
          Descripcion: "A medieval castle with panoramic alpine views.",
          Ubicacion: "Engadin",
          Alt: "Tarasp Castle on top of a hill",
          Aria: "Discover more about Tarasp Castle"
        }
      },
      Actividades: {
        Subtitulo: "EXPERIENCES",
        Titulo: "Things to do",
        Descripcion: "From adventure sports to cultural experiences, Switzerland offers activities for all tastes and levels.",

        Tabs: {
          Aria: "Activity categories",
          Temporadas: "Seasons",
          Naturaleza: "Nature & Hiking",
          Aventura: "Adventure Sports",
          Cultura: "Culture & Tourism",
          Otros: "Others"
        },

        Temporadas: {
          Primavera: {
            Titulo: "Alpine Spring",
            Descripcion: "The Alps flourish with green landscapes, a mild climate, and perfect routes for exploring.",
            Alt: "Spring in the Swiss Alps"
          },
          Verano: {
            Titulo: "Summer at the Lakes",
            Descripcion: "Water activities on Lake Geneva and Lake Lucerne with mountain views.",
            Alt: "Swiss lakes in summer"
          },
          Otono: {
            Titulo: "Autumn in Valais",
            Descripcion: "Golden vineyards and peaceful paths beneath a landscape of intense colors.",
            Alt: "Autumn in Valais"
          },
          Invierno: {
            Titulo: "Winter in Zermatt",
            Descripcion: "Skiing in front of the majestic Matterhorn and world-class snow sports",
            Alt: "Winter in Zermatt"
          },
          Navidad: {
            Titulo: "Christmas Markets",
            Descripcion: "Cities like Basel and Zurich shine with festive lights and traditions.",
            Alt: "Swiss Christmas markets"
          },
          Festival: {
            Titulo: "Summer Festivals",
            Descripcion: "Music, culture and gastronomy at outdoor events across the country.",
            Alt: "Summer festivals in Switzerland"
          }
        },

        Naturaleza: {
          Jungfrau: {
            Titulo: "Jungfrau Region",
            Descripcion: "Alpine trails with panoramic views and breathtaking glaciers.",
            Alt: "Jungfrau mountains"
          },
          Appenzell: {
            Titulo: "Appenzell",
            Descripcion: "Green hills and traditional footpaths winding through typical Swiss houses.",
            Alt: "Appenzell landscape"
          },
          Lucerna: {
            Titulo: "Lake Lucerne",
            Descripcion: "Lakeside walks combined with mountain scenery and fresh air.",
            Alt: "Lake Lucerne"
          },
          Parque: {
            Titulo: "Swiss National Park",
            Descripcion: "Protected wildlife and pristine nature.",
            Alt: "Swiss National Park"
          },
          Rin: {
            Titulo: "Rhine Falls",
            Descripcion: "The most powerful waterfalls in Central Europe.",
            Alt: "Rhine Falls"
          },
          Bregaglia: {
            Titulo: "Val Bregaglia",
            Descripcion: "Hiking among rugged mountains and historic alpine villages.",
            Alt: "Bregaglia valley"
          }
        },

        Aventura: {
          Parapente: {
            Titulo: "Paragliding in Interlaken",
            Descripcion: "Fly over turquoise lakes and snow-capped mountains.",
            Alt: "Paragliding over Interlaken"
          },
          Esqui: {
            Titulo: "Skiing in St. Moritz",
            Descripcion: "World-class slopes in the Swiss Alps.",
            Alt: "Skiing in St. Moritz Alps"
          },
          Bike: {
            Titulo: "Alpine Mountain Biking",
            Descripcion: "Extreme trails through stunning natural landscapes.",
            Alt: "Alpine mountain biking trails"
          },
          Escalada: {
            Titulo: "Rock Climbing",
            Descripcion: "Vertical challenges in alpine areas and canyons.",
            Alt: "Rock climbing in alpine zones"
          },
          Rafting: {
            Titulo: "Rafting in the Rhine",
            Descripcion: "Ride fast-moving waters surrounded by natural scenery.",
            Alt: "Rafting on the Rhine river"
          },
          Buceo: {
            Titulo: "Alpine Lake Diving",
            Descripcion: "Explore crystal-clear waters in unique environments.",
            Alt: "Diving in alpine lakes"
          }
        },

        Cultura: {
          Zurich: {
            Titulo: "Historic Zurich",
            Descripcion: "Medieval architecture, modern art, and vibrant urban life.",
            Alt: "Zurich historic city"
          },
          Ginebra: {
            Titulo: "International Geneva",
            Descripcion: "Home to international organizations and cosmopolitan culture.",
            Alt: "Geneva international city"
          },
          Lucerna: {
            Titulo: "Medieval Lucerne",
            Descripcion: "Historic bridges and views of Lake Lucerne.",
            Alt: "Lucerne bridges and lake"
          },
          Reloj: {
            Titulo: "Watch Museum",
            Descripcion: "Discover the Swiss watchmaking tradition.",
            Alt: "Swiss watch museum"
          },
          Chillon: {
            Titulo: "Chillon Castle",
            Descripcion: "Medieval fortress on the shores of Lake Geneva.",
            Alt: "Chillon Castle Lake Geneva"
          },
          Basilea: {
            Titulo: "Cultural Basel",
            Descripcion: "Museums, contemporary art, and historic architecture.",
            Alt: "Basel cultural city"
          }
        },

        Otros: {
          Chocolate: {
            Titulo: "Chocolate Route",
            Descripcion: "Visit traditional factories and taste the finest chocolate in the world.",
            Alt: "Swiss chocolate route"
          },
          Queso: {
            Titulo: "Cheese Experience",
            Descripcion: "Learn about traditional artisanal production in the Alps.",
            Alt: "Swiss cheese production Alps"
          },
          Tren: {
            Titulo: "Glacier Express",
            Descripcion: "One of the most famous panoramic trains in the world.",
            Alt: "Glacier Express panoramic train"
          },
          Spa: {
            Titulo: "Alpine Spas",
            Descripcion: "Relax in thermal waters surrounded by mountains.",
            Alt: "Alpine thermal spa"
          },
          Fondue: {
            Titulo: "Traditional Fondue",
            Descripcion: "Enjoy Switzerland’s most iconic dish.",
            Alt: "Swiss traditional fondue"
          },
          Rutas: {
            Titulo: "Scenic Routes",
            Descripcion: "Train journeys with spectacular views through the Alps.",
            Alt: "Scenic alpine train routes"
          }
        }

      },
      Planifica: {
        Subtitulo: "I WANT TO EXPLORE",
        Titulo: "Plan your trip",
        Descripcion: "Customize your trip for maximum comfort",

        Fechas: {
          Titulo: "Select Dates",
          Desc: "Choose the best dates for your trip."
        },
        Destinos: {
          Titulo: "Destinations",
          Desc: "Create your personalized route."
        },
        Alojamiento: {
          Titulo: "Accommodation",
          Desc: "Options for every budget."
        },
        Transporte: {
          Titulo: "Transport",
          Desc: "Organize transfers and trains."
        },
        Vuelos: {
          Titulo: "Flights",
          Desc: "Find the best deals."
        },
        Info: {
          Titulo: "Useful Info",
          Desc: "Guides and travel tips."
        },

        FormTitulo: "Customize your trip for maximum comfort",

        Form: {
          Llegada: "Arrival date*",
          Salida: "Departure date*",
          Viajeros: "Number of travelers*",
          Select: "Select an option",
          Plan: "What will you include?",
          Aventura: "Adventure",
          Cultura: "Culture",
          Naturaleza: "Nature",
          Hotel: "Hotel",
          Boton: "Send travel request"
        },

        Modal: {
          Titulo: "Request sent!",
          Desc: "Your travel plan was successfully submitted."
        }
      },
      Momentos: {
        Subtitulo: "Experiences",
        Titulo: "Shared moments",
        Descripcion: "Discover experiences from travelers who have already visited Switzerland.",

        Carrusel: "Instagram photo gallery",
        Anterior: "Previous photo",
        Siguiente: "Next photo",
        Dots: "Select slide",
        Cerrar: "Close enlarged image",

        ModalTitulo: "Expanded image",
        ModalAlt: "Expanded view of the selected post",

        Img1: "Traveler enjoying the Alpine view",
        Img2: "Panoramic train crossing a viaduct",
        Img3: "Traditional fondue dinner in a chalet",
        Img4: "Sunset over Lake Geneva",
        Img5: "Historic streets of Zurich at night",
        Img6: "Hiker facing the Matterhorn",
        Img7: "Christmas market in Basel",
        Img8: "Swiss cow in Grindelwald fields"
      },

      Eventos: {
        Subtitulo: "EXPERIENCES",
        Titulo: "Featured events",
        Descripcion: "Discover Switzerland’s most iconic festivals and competitions where tradition meets modernity.",
        Boton: "Explore...",

        Montreux: {
          Titulo: "Montreux Jazz Festival",
          Desc: "International music festival on the shores of Lake Geneva, featuring world-class artists.",
          Alt: "Montreux Jazz Festival by Lake Geneva",
          Aria: "Explore Montreux Jazz Festival"
        },

        Basilea: {
          Titulo: "Basel Carnival",
          Desc: "Switzerland’s largest carnival, known for its colorful parades and traditional masks.",
          Alt: "Basel Carnival parade",
          Aria: "Explore Basel Carnival"
        },

        Tenis: {
          Titulo: "Swiss Indoors Basel",
          Desc: "ATP tennis tournament bringing together international top players in Basel.",
          Alt: "Swiss Indoors Basel tennis court",
          Aria: "Explore Swiss Indoors Basel"
        },

        Locarno: {
          Titulo: "Locarno Film Festival",
          Desc: "Major European film festival featuring open-air screenings in Piazza Grande.",
          Alt: "Locarno Film Festival outdoor screening",
          Aria: "Explore Locarno Film Festival"
        },

        Lauberhorn: {
          Titulo: "Lauberhorn Rennen",
          Desc: "Historic Alpine World Cup ski race held in Wengen.",
          Alt: "Lauberhorn ski race Wengen",
          Aria: "Explore Lauberhorn Rennen"
        },

        Gruyeres: {
          Titulo: "Gruyères Cheese Festival",
          Desc: "Traditional celebration dedicated to the famous Gruyère cheese.",
          Alt: "Gruyeres cheese festival stalls",
          Aria: "Explore Gruyères Cheese Festival"
        }
      },
      Opiniones: {
        Subtitulo: "EXPERIENCES",
        Titulo: "What do travelers say?",
        Descripcion: "Read reviews from people who have already experienced Switzerland.",

        Rating4: "Rating: 4 out of 5 stars",
        Rating3: "Rating: 3 out of 5 stars",
        Rating2: "Rating: 2 out of 5 stars",

        Op1: {
          Titulo: "Excellent experience",
          Desc: "Impeccable service and personalized attention.",
          Fecha: "February 15, 2026",
          AutorAlt: "Photo of María Gómez"
        },

        Op2: {
          Titulo: "Very good",
          Desc: "Well organized and excellent service.",
          Fecha: "February 10, 2026",
          AutorAlt: "Photo of Carlos Ruiz"
        },

        Op3: {
          Titulo: "Good",
          Desc: "Clear explanation and easy to understand.",
          Fecha: "February 8, 2026",
          AutorAlt: "Photo of Laura Méndez"
        },

        Op4: {
          Titulo: "Recommended",
          Desc: "An experience I would definitely repeat.",
          Fecha: "February 5, 2026",
          AutorAlt: "Photo of Andrés Silva"
        },
        Rating1: "Rating: 1 out of 5 stars",

        Op5: {
          Titulo: "I feel happy",
          Desc: "The material was well structured and up to date.",
          Fecha: "February 2, 2026",
          AutorAlt: "Photo of Sofía Torres"
        },

        Op6: {
          Titulo: "Excellent service",
          Desc: "The whole team was very professional.",
          Fecha: "January 30, 2026",
          AutorAlt: "Photo of Daniel Castro"
        },

        Op7: {
          Titulo: "Very good",
          Desc: "I liked the experience overall.",
          Fecha: "January 25, 2026",
          AutorAlt: "Photo of Paula Ríos"
        },

        Op8: {
          Titulo: "Great organization",
          Desc: "The activities allowed progressive learning.",
          Fecha: "January 20, 2026",
          AutorAlt: "Photo of Camilo Vargas"
        }

      },
      Mapa: {
        Subtitulo: "EXPLORE",
        Titulo: "Interactive map",
        Descripcion: "Explore all destinations, activities and tourist services available.",
        Iframe: "Interactive map with tourist points of interest in Switzerland"
      },
      Noticias: {
        Subtitulo: "LATEST",
        Titulo: "Latest news",
        Descripcion: "Discover the latest updates and highlights from Switzerland.",

        Carrusel: "Current Switzerland news",
        Anterior: "Previous news",
        Siguiente: "Next news",
        Dots: "Select news slide",
        Boton: "Discover more",

        N1: {
          Titulo: "Swiss Alps: a natural paradise",
          Desc: "Stunning mountains, panoramic hiking and postcard views.",
          Alt: "Snowy Swiss Alps",
          Aria: "Discover more about the Swiss Alps"
        },

        N2: {
          Titulo: "Zermatt and the iconic Matterhorn",
          Desc: "Alpine destination with skiing and breathtaking views.",
          Alt: "Zermatt village and Matterhorn mountain",
          Aria: "Discover more about Zermatt and the Matterhorn"
        },

        N3: {
          Titulo: "The Glacier Express: the most famous scenic train",
          Desc: "A journey through mountains and valleys with unique views.",
          Alt: "Glacier Express train in the Alps",
          Aria: "Discover more about the Glacier Express"
        },

        N4: {
          Titulo: "Crystal-clear lakes perfect for summer",
          Desc: "Lake Geneva and Lake Lucerne offer water activities.",
          Alt: "Boat on Lake Lucerne",
          Aria: "Discover more about Swiss lakes"
        },

        N5: {
          Titulo: "Fairytale medieval cities",
          Desc: "Bern and Lucerne blend history and charm.",
          Alt: "Medieval architecture in Bern",
          Aria: "Discover more about medieval cities"
        },

        N6: {
          Titulo: "Swiss chocolate and cheese routes",
          Desc: "Authentic culinary experiences full of tradition.",
          Alt: "Swiss fondue and chocolate",
          Aria: "Discover more about Swiss gastronomy"
        },

        N7: {
          Titulo: "Switzerland, one of the safest destinations",
          Desc: "Modern infrastructure and high quality of life.",
          Alt: "Modern Swiss transport system",
          Aria: "Read more about safety in Switzerland"
        },

        N8: {
          Titulo: "Cultural and music festivals",
          Desc: "International events and traditional celebrations.",
          Alt: "Cultural festival in Switzerland",
          Aria: "Explore festivals in Switzerland"
        }
      },
      Patrocinadores: {
        Subtitulo: "SUPPORT",
        Titulo: "Sponsor companies",
        Carrusel: "Sponsor logos carousel",

        Logo1: "Business partner 1",
        Logo2: "Business partner 2",
        Logo3: "Business partner 3",
        Logo4: "Business partner 4",
        Logo5: "Business partner 5",
        Logo6: "Business partner 6"
      },
      Contacto: {
        Subtitulo: "CONTACT",
        Titulo: "Need help?",
        Descripcion: "Our team is ready to help you plan your perfect trip to Switzerland.",

        Imagen: "Lake Lucerne landscape with mountains",

        Form: {
          Nombre: "First name",
          NombrePH: "Andrew",
          Apellido: "Last name",
          ApellidoPH: "Perez",
          Correo: "Email",
          CorreoPH: "example@email.com",
          Mensaje: "Message",
          MensajePH: "I would like more information...",
          Boton: "Send"
        },

        Modal: {
          Titulo: "Message sent",
          Desc: "Thank you for contacting us. We will reply soon.",
          Cerrar: "Close dialog"
        }
      }

    },
    Footer: {
      Logo: "Visit Switzerland logo",

      Sitio: {
        Titulo: "About the site",
        Lugares: "Top destinations",
        Actividades: "Activities",
        Planifica: "Plan your trip",
        Eventos: "Events",
        Mapa: "Interactive map"
      },

      Contacto: {
        Titulo: "Traveler support",
        Email: "info@visitsuiza.com",
        EmailAria: "Send email to info@visitsuiza.com",
        Telefono: "+41 00 000 0000",
        TelefonoAria: "Call +41 00 000 0000",
        Horario: "Monday to Friday 7:00am - 6:00pm"
      },

      Redes: {
        Facebook: "Visit our Facebook",
        Instagram: "Visit our Instagram",
        Youtube: "Visit our YouTube channel"
      },

      Info: {
        Titulo: "Information & partners",
        Terminos: "Terms and conditions",
        Cookies: "Cookie policy",
        Accesibilidad: "Accessibility"
      },

      Copy: "© 2026 Visit Switzerland. All rights reserved."
    },
    Blog: {
      Titulo: "Latest news",
      Subtitulo: "Stay up to date",
      Hoy: {
        Titulo: "On this day",
        TituloCard: "Alpine Spring",
        Desc: "The Alps bloom with green landscapes, mild weather and perfect routes to explore.",
        Boton: "Read more",
        Alt: "Spring landscape in the Swiss Alps"
      },

      Relacionados: {
        Titulo: "Related",
        Aria: "Related articles",
        Boton: "See more",

        R1: {
          Titulo: "Winter Festival",
          Desc: "Traditional celebrations in the Alps.",
          Alt: "Winter in Zermatt"
        },
        R2: {
          Titulo: "Swiss Lakes",
          Desc: "Perfect destinations to relax.",
          Alt: "Lake Lucerne"
        },
        R3: {
          Titulo: "Snowy Mountains",
          Desc: "Adventure and extreme sports.",
          Alt: "Alpine spas"
        },
        R4: {
          Titulo: "Scenic Routes",
          Desc: "Unforgettable panoramic paths.",
          Alt: "Glacier Express"
        }
      },

      Modal: {
        Titulo: "Alpine Spring",
        Parrafo1: "Spring completely transforms the Alps landscape.",
        Parrafo2: "It is one of the best seasons to visit Switzerland.",
        Cerrar: "Close article"
      },
      Recientes: {
        Titulo: "Latest news",
        Boton: "Discover more",

        N1: {
          Titulo: "The Swiss Alps: a natural paradise you must experience",
          Desc: "Towering mountains, scenic hiking trails, and postcard-worthy landscapes make the Alps an unforgettable experience.",
          Alt: "Swiss Alps landscape",
          Aria: "Discover more about the Swiss Alps"
        },

        N2: {
          Titulo: "Zermatt and the Matterhorn",
          Desc: "Zermatt and the iconic Matterhorn attract travelers year-round with skiing, scenic routes, and spectacular views of the peak.",
          Alt: "Zermatt and Matterhorn mountain",
          Aria: "Discover more about Zermatt and the Matterhorn"
        },

        N3: {
          Titulo: "The Glacier Express",
          Desc: "The most famous panoramic train in Switzerland, offering a journey through mountains, valleys, and bridges from a unique perspective.",
          Alt: "Glacier Express panoramic train",
          Aria: "Discover more about the Glacier Express"
        },

        N4: {
          Titulo: "Swiss Lakes",
          Desc: "Crystal-clear lakes perfect for summer, with Lake Geneva and Lake Lucerne offering water activities and relaxing landscapes for families.",
          Alt: "Swiss lakes summer scenery",
          Aria: "Discover more about Swiss lakes"
        },

        N5: {
          Titulo: "Swiss Medieval Cities",
          Desc: "Fairy-tale-like cities such as Bern and Lucerne combine history, charming architecture, and unique cultural experiences.",
          Alt: "Medieval Swiss cities",
          Aria: "Discover more about Swiss medieval cities"
        },

        N6: {
          Titulo: "Swiss Gastronomy",
          Desc: "Chocolate and cheese routes offer authentic culinary experiences to discover the traditional flavors of Switzerland.",
          Alt: "Swiss food chocolate and cheese",
          Aria: "Discover more about Swiss gastronomy"
        }
      }

    },
    ContactoPage: {
      FAQ: {
        Titulo: "Frequently asked questions",

        Q1: "1. What is the best time to visit Switzerland?",
        R1: "Summer is ideal for hiking and lakes, while winter is perfect for the Alps and snow sports.",

        Q2: "2. Do I need a visa to travel to Switzerland?",
        R2: "Switzerland is part of the Schengen area. Many countries can enter for up to 90 days without a visa.",

        Q3: "3. Is Switzerland expensive?",
        R3: "It is an expensive destination, but with planning you can optimize your budget.",

        Q4: "4. What documents do I need?",
        R4: "Valid passport, health insurance and accommodation proof.",

        Q5: "5. What currency is used in Switzerland?",
        R5: "The Swiss franc (CHF). It is recommended to pay in local currency."
      },

      Titulo: "Need help?",
      Descripcion: "Our team is ready to help you plan your perfect trip to Switzerland.",

      Info: {
        Email: "info@visitsuiza.com",
        EmailAria: "Send email to info@visitsuiza.com",
        Telefono: "+41 00 000 0000",
        TelefonoAria: "Call +41 00 000 0000",
        Horario: "Monday to Friday 7:00am - 6:00pm"
      },

      Redes: {
        Facebook: "Visit Facebook",
        Instagram: "Visit Instagram",
        Youtube: "Visit YouTube"
      },

      Form: {
        Nombre: "First name",
        NombrePH: "Andrew",
        Apellido: "Last name",
        ApellidoPH: "Perez",
        Correo: "Email",
        CorreoPH: "example@email.com",
        Tipo: "Inquiry type",
        Mensaje: "Message",
        MensajePH: "I would like...",
        Boton: "Send",

        Opciones: {
          Soporte: "Support",
          Info: "General information",
          Plan: "Trip planning",
          Alianzas: "Partnerships",
          Eventos: "Events"
        }
      },

      Modal: {
        Titulo: "Message sent",
        Desc: "Thank you for contacting us. We will reply soon.",
        Cerrar: "Close dialog"
      },

      Atencion: {
        Titulo: "Personalized assistance",
        Descripcion: "Do you need help planning your trip?",
        Chat: "💬 Live Chat",
        ChatAria: "Open live chat",
        Whatsapp: "📱 WhatsApp",
        WhatsappAria: "Contact via WhatsApp"
      },

      Descarga: {
        Titulo: "Download information",
        Guia: "📄 Tourist guide PDF",
        GuiaAria: "Download tourist guide",
        Mapa: "🗺️ Downloadable country map",
        MapaAria: "Download country map"
      },

      Mapa: {
        Titulo: "Our offices on Google Maps",
        Descripcion: "Explore destinations, activities and tourist services available.",
        Aria: "Map of Switzerland on Google Maps"
      }
    },
    Skip: {
      BtnSkip: "Skip Content"
    },
    Bienvenida: {
      BuenosDias: "Good morning!",
      BuenasTardes: "Good afternoon!",
      BuenasNoches: "Good evening!",
      Mensaje: "Welcome!"
    }

  }

};