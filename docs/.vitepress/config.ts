export default {
  head: metadata(),
  title: "C ++ 42 Projects",
  titleTemplate: ":title - C++ 42 Projects",
  appearance: "dark",
  description: "Guías independientes.",
  cleanUrls: true,
  base: '/cpp42projects/',
  lang: "es-ES",
  markdown: {
    math: true
  },
  themeConfig: {
    siteTitle: "CPP 42 Projects",
    darkModeSwitchLabel: "Apariencia",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Ir arriba",
    outlineTitle: "Tabla de contenido",
    logo: {
      src: "/logo.png",
      alt: "Logo",
    },
    docFooter: {
      prev: "Página anterior",
      next: "Pagína siguiente",
    },
    outline: [2, 5],
    editLink: {
      pattern: "https://github.com/nach131/cpp42projects/edit/main/docs/:path",
      text: "Editar esta página en GitHub",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Buscar",
                buttonAriaLabel: "Buscar documentos",
              },
              modal: {
                noResultsText: "No se han encontrado resultados",
                resetButtonTitle: "Borrar criterios de búsqueda",
                footer: {
                  selectText: "Seleccione",
                  navigateText: "Ir a",
                  closeText: "Cerrar",
                },
              },
            },
          },
        },
      },
    },
    notFound: {
      title: "Oops !!! página no encontrada",
      quote:
        "Asegúrate este bien escrita o reportarlo si es un error",
      linkLabel: "Regresar",
      linkText: "Regresar",
      code: "404",
    },
    socialLinks: socials(),
    nav: nav(),
    sidebar: siderbar(),
  },
};

function metadata() {
  return [
    ["meta", { property: "theme-color", content: "#4583df" }],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/nach131/cpp42projects/main/docs/public/logo.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["link", { rel: "icon", href: "/C++_Logo.svg" }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GFZ7EFNBGK' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GFZ7EFNBGK');`
    ]
  ];
}

function socials() {
  return [

    { icon: "github", link: "https://github.com/nach131" },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>',
      },
      link: "https://enunpimpam.com/",
    },
  ];
}

function nav() {
  return [
    { text: "Guías", link: "/guias/", activeMatch: "/guias/" },
    {
      text: "Colaboración",
      activeMatch: "/contribucion|/creditos",
      items: [
        {
          text: "Contribuir",
          link: "/contribucion",
        },
        {
          text: "Creditos",
          link: "/creditos",
        },
      ],
    },
    {
      text: "Historial de cambios",
      link: "https://github.com/nach131/cpp42projects/blob/main/CHANGELOG.md",
    },
  ];
}

function siderbar() {
  return [
    {
      text: "",
      items: [{ text: "Introducción", link: "/guias/" }],
    },
    {
      // text: "Categorías",
      items: [
        {
          text: "Básico",
          link: "/guias/basico/",
          collapsed: true,
          items: [
            {
              text: "Conceptos",
              link: "/guias/basico/conceptos"
            },
            {
              text: "Variables",
              link: "/guias/basico/variables"
            },
            {
              text: "Referencias y punteros",
              link: "/guias/basico/referencias"
            },
            {
              text: "Operadores de ámbito",
              link: "/guias/basico/ambito"
            },
            {
              text: "Overloading",
              link: "/guias/basico/overloading"
            },
            {
              text: "Array class",
              link: "/guias/basico/array_class"
            },
            {
              text: "Ternarios",
              link: "/guias/basico/ternarios"
            },
            {
              text: "Argumentos default",
              link: "/guias/basico/default"
            },
          ]
        },
        {
          text: "CPP C4",
          link: "/guias/cpp_c4/",
          collapsed: true,
          items: [
            {
              text: "Module 00",
              link: "/guias/cpp_c4/module00/",
              collapsed: true,
              items: [
                {
                  text: "Namespaces",
                  link: "/guias/cpp_c4/module00/namespaces",
                },
                {
                  text: "Class",
                  link: "/guias/cpp_c4/module00/class/",
                  collapsed: true,
                  items: [
                    {
                      text: "Funciones miembro",
                      link: "/guias/cpp_c4/module00/class/funciones",

                    },
                    {
                      text: "Modificadores de acceso",
                      link: "/guias/cpp_c4/module00/class/modificadores",

                    },
                    {
                      text: "Constructor",
                      link: "/guias/cpp_c4/module00/class/constructor",

                    },
                    {
                      text: "Destructor",
                      link: "/guias/cpp_c4/module00/class/destructor",

                    },
                    {
                      text: "Sobrecarga",
                      link: "/guias/cpp_c4/module00/class/sobrecarga",
                      items: [
                        {
                          text: "Tipos",
                          link: "/guias/cpp_c4/module00/class/tipos",
                        }
                      ]

                    },
                  ]
                },
                {
                  text: "Exe01",
                  link: "/guias/cpp_c4/module00/exe01/",
                },
                {
                  text: "Exe02",
                  link: "/guias/cpp_c4/module00/exe02/",
                },
              ]
            },
            {
              text: "Module 01",
              link: "/guias/cpp_c4/module01/",
              collapsed: true,
              items: [
                {
                  text: "Heap o Stack",
                  link: "/guias/cpp_c4/module01/heap_stack",
                },
                {
                  text: "New y Destroy",
                  link: "/guias/cpp_c4/module01/new&destroy",
                },
                {
                  text: "Punteros y referencias",
                  link: "/guias/cpp_c4/module01/punteros",
                },
                {
                  text: "Class String",
                  link: "/guias/cpp_c4/module01/string/",
                  items: [
                    {
                      text: "Iteradores",
                      link: "/guias/cpp_c4/module01/string/iterador",
                    }
                  ]
                },
                {
                  text: "ifstream",
                  link: "/guias/cpp_c4/module01/ifstream",
                },
                {
                  text: "ofstream",
                  link: "/guias/cpp_c4/module01/ofstream",
                }
              ]
            },
            {
              text: "Module 02",
              link: "/guias/cpp_c4/module02/",
              collapsed: true,
              items: [
                {
                  text: "inline",
                  link: "/guias/cpp_c4/module02/inline",
                },
                {
                  text: "Números de punto fijo",
                  link: "/guias/cpp_c4/module02/fixed",
                },
                {
                  text: "Clase canónica",
                  link: "/guias/cpp_c4/module02/canonica",
                },
                {
                  text: "Operaciones",
                  items: [
                    {
                      text: "Comparación",
                      link: "/guias/cpp_c4/module02/operadores/comparacion",
                    },
                    {
                      text: "Asignción",
                      link: "/guias/cpp_c4/module02/operadores/asignacion",
                    },
                    {
                      text: "Aritméticos",
                      link: "/guias/cpp_c4/module02/operadores/aritmeticos",
                    },
                    {
                      text: "Incremento/Decremento",
                      link: "/guias/cpp_c4/module02/operadores/incremento_decremento",
                    },

                  ]
                },
              ]
            },
            // {
            //   text: "Module 02",
            //   link: "/guias/cpp_c4/module02/",
            //   collapsed: true,
            // },
          ]
        },
        // {
        //   text: "Errores",
        //   link: "/guias/errores/",
        //   collapsed: true,
        // },
        {
          text: "Ejemplos",
          link: "/guias/ejemplo/",
          collapsed: true,
        }
      ],
    },
    {
      text: "",
      items: [
        { text: "Contribución", link: "/contribucion" },
        { text: "Creditos", link: "/creditos" },
      ],
    },
  ];
}
