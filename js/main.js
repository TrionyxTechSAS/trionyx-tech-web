/* =====================================================
   DATOS DE LA EMPRESA
===================================================== */


/*
    SERVICIOS

    Para agregar un nuevo servicio solamente
    agrega otro objeto a este arreglo.
*/

const services = [

    {
        number: "01",
        icon: "◈",
        title: "Datos & Analytics",
        description:
            "Diseño de soluciones para integrar, transformar y analizar información para convertir datos en decisiones.",
    },

    {
        number: "02",
        icon: "◉",
        title: "Business Intelligence",
        description:
            "Dashboards, indicadores y modelos analíticos que permiten visualizar el desempeño del negocio.",
    },

    {
        number: "03",
        icon: "↗",
        title: "Automatización",
        description:
            "Automatización de procesos repetitivos para reducir tiempos, errores y tareas operativas.",
    },

    {
        number: "04",
        icon: "</>",
        title: "Desarrollo",
        description:
            "Desarrollo de aplicaciones, herramientas internas, APIs y soluciones web adaptadas a cada necesidad.",
    },

    {
        number: "05",
        icon: "⌘",
        title: "Gobierno de Datos",
        description:
            "Estrategias para organizar, administrar, proteger y aprovechar los datos de manera estructurada.",
    },

    {
        number: "06",
        icon: "☁",
        title: "Cloud & Tecnología",
        description:
            "Diseño y adopción de soluciones cloud para construir arquitecturas modernas, escalables y eficientes.",
    },

    {
        number: "07",
        icon: "△",
        title: "Data Engineering",
        description:
            "Construcción de procesos ETL, pipelines y arquitecturas para preparar información confiable.",
    },

    {
        number: "08",
        icon: "✦",
        title: "Consultoría Tecnológica y de Datos",
        description:
            "Acompañamiento para identificar oportunidades de mejora y convertir necesidades de negocio en soluciones.",
    }

];



/* =====================================================
   PROYECTOS
===================================================== */


/*
    PROYECTOS

    Para agregar un proyecto nuevo solamente
    agrega otro objeto aquí.

    No necesitas modificar el HTML.

    IMPORTANTE:
    - scope es una lista.
    - results es una lista.
    - technologies es una lista de tecnologías.
*/

const projects = [

    {
        title:
            "Control y Automatización de Cartera en Mora",

        category:
            "Data Engineering · Business Intelligence",

        image:
            "./assets/images/proyecto_control_moras.jpeg",

        description:
            "Transformamos múltiples fuentes de información de cartera en un flujo automatizado que valida, consolida y entrega información lista para análisis y seguimiento de mora.",

        objective:
            "Centralizar y controlar la información de clientes en mora, reduciendo reprocesos y errores antes de generar los archivos finales para MIS.",

        scope: [
            "Integración de diferentes fuentes de cartera",
            "Validación y control de calidad de la información",
            "Identificación de registros con inconsistencias",
            "Generación automática de archivos de salida",
            "Preparación de información para MIS"
        ],

        results: [
            "Mayor visibilidad sobre la información de cartera",
            "Reducción de tareas manuales y reprocesos",
            "Mayor control sobre la calidad de los datos",
            "Información estructurada y lista para consumo en MIS y BI"
        ],

        technologies: [
            "Python",
            "Pandas",
            "Power BI",
            "SQL",
            "ETL",
            "Data Modeling"
        ],

        linkedin:
            "#"
    },


    {
        title:
            "Unificación Inteligente de Fuentes",

        category:
            "Data Engineering · Automation",

        image:
            "assets/images/proyecto_unificacion_fuentes.jpg",

        description:
            "Convertimos múltiples archivos y estructuras de información en un único flujo de procesamiento, combinando la flexibilidad de Excel con la capacidad de automatización de Python.",

        objective:
            "Optimizar la consolidación de múltiples fuentes de información y eliminar tareas repetitivas de procesamiento manual.",

        scope: [
            "Recepción y procesamiento de múltiples fuentes",
            "Estandarización de estructuras de información",
            "Validación de datos de entrada",
            "Consolidación automática de fuentes",
            "Generación de archivos mensuales",
            "Preparación de información para procesos posteriores"
        ],

        results: [
            "Reducción de tareas manuales",
            "Procesos más rápidos y consistentes",
            "Estructuras de datos estandarizadas",
            "Flujo reutilizable para diferentes períodos",
            "Menor riesgo de errores durante la consolidación"
        ],

        technologies: [
            "Excel VBA",
            "Python",
            "Pandas",
            "ETL",
            "Data Processing"
        ],

        linkedin:
            "#"
    },


    {
        title:
            "Forecast de Cartera con SQL Server",

        category:
            "Data Analytics · Predictive Analytics",

        image:
            "assets/images/proyecto_forecast_sql.jpg",

        description:
            "Construimos un entorno de análisis sobre una cartera crediticia simulada para estudiar su comportamiento histórico y proyectar escenarios futuros.",

        objective:
            "Analizar la evolución de una cartera y generar proyecciones que permitan anticipar posibles comportamientos futuros.",

        scope: [
            "Generación y estructuración de una cartera crediticia",
            "Modelamiento de información histórica",
            "Análisis del comportamiento de la cartera",
            "Construcción de variables para forecasting",
            "Proyección de escenarios futuros",
            "Consulta y procesamiento mediante SQL Server"
        ],

        results: [
            "Modelo estructurado para análisis de cartera",
            "Proyecciones reproducibles",
            "Identificación de tendencias y patrones",
            "Base preparada para modelos predictivos",
            "Información orientada a la toma de decisiones"
        ],

        technologies: [
            "SQL Server",
            "SQL",
            "Python",
            "Pandas",
            "Forecasting",
            "Data Analytics"
        ],

        linkedin:
            "#"
    },


    {
        title:
            "Detección Inteligente de Outliers",

        category:
            "Data Analytics · Data Quality",

        image:
            "assets/images/proyecto_outliers.jpg",

        description:
            "Identificamos comportamientos atípicos dentro de los datos para detectar posibles errores, anomalías o casos que requieren atención.",

        objective:
            "Detectar automáticamente valores y comportamientos que se encuentran fuera de los patrones esperados.",

        scope: [
            "Análisis exploratorio de datos",
            "Identificación de patrones de comportamiento",
            "Detección de valores atípicos",
            "Clasificación de casos relevantes",
            "Análisis estadístico de anomalías",
            "Visualización de resultados"
        ],

        results: [
            "Detección automatizada de comportamientos atípicos",
            "Mayor visibilidad sobre posibles anomalías",
            "Soporte para procesos de control y calidad",
            "Reducción del análisis manual de grandes volúmenes de datos",
            "Información accionable para análisis posteriores"
        ],

        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Statistics",
            "Anomaly Detection",
            "Power BI"
        ],

        linkedin:
            "#"
    },


    {
        title:
            "Motor de Comparación para Avalúos de Vehículos",

        category:
            "Data Analytics · Data Integration",

        image:
            "assets/images/proyecto_avaluos_vehiculos.jpg",

        description:
            "Integramos información de diferentes fuentes del mercado para construir referencias de valor y facilitar el análisis comparativo de vehículos.",

        objective:
            "Automatizar la recopilación y comparación de precios para generar una referencia de mercado más eficiente.",

        scope: [
            "Integración de diferentes fuentes de información",
            "Extracción y estructuración de datos",
            "Normalización de características de vehículos",
            "Identificación de vehículos comparables",
            "Comparación de precios de mercado",
            "Construcción de indicadores de referencia"
        ],

        results: [
            "Información de mercado centralizada",
            "Comparaciones más rápidas entre vehículos",
            "Reducción del análisis manual",
            "Datos estructurados para procesos de avalúo",
            "Base preparada para futuras automatizaciones y modelos analíticos"
        ],

        technologies: [
            "Python",
            "APIs",
            "Web Data",
            "Pandas",
            "Data Integration",
            "Data Analytics"
        ],

        linkedin:
            "#"
    }

];



/* =====================================================
   CONTACTO
===================================================== */


/*
    Reemplaza estos valores por los datos reales
    de Trionyx Tech.
*/

const contact = [

    {
        icon: "☎",
        label: "Celular",
        value: "+57 3506793107",
        link: "tel:+573506793107"
    },

    {
        icon: "✉",
        label: "Correo",
        value: "trionyxtechsas@gmail.com",
        link: "mailto:trionyxtechsas@gmail.com"
    },

    {
        icon: "⌖",
        label: "Ubicación",
        value: "Bogotá, Colombia",
        link: "#"
    },

    {
        icon: "in",
        label: "LinkedIn",
        value: "Trionyx Tech",
        link: "www.linkedin.com/in/yesid-augusto-silva-moreno-1a3308191"
    }

];



/* =====================================================
   HEADER
===================================================== */

const header =
    document.getElementById("header");

const inicio =
    document.getElementById("inicio");


const observer =
    new IntersectionObserver(

        (entries) => {

            const entry =
                entries[0];


            if (entry.isIntersecting) {

                header.classList.remove(
                    "scrolled"
                );

            }

            else {

                header.classList.add(
                    "scrolled"
                );

            }

        },

        {
            threshold: 0.1
        }

    );


observer.observe(inicio);



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const mobileNav =
    document.getElementById(
        "mobileNav"
    );


menuButton.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "active"
        );


        const isOpen =
            mobileNav.classList.contains(
                "active"
            );


        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


/*
    Cerrar menú después
    de seleccionar una opción
*/

document
    .querySelectorAll(".mobile-nav a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "active"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });



/* =====================================================
   GENERAR SERVICIOS
===================================================== */

const servicesGrid =
    document.getElementById(
        "servicesGrid"
    );


services.forEach(
    (service) => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "service-card";


        card.innerHTML = `

            <div>

                <div class="service-number">
                    ${service.number}
                </div>

                <div class="service-icon">
                    ${service.icon}
                </div>

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

            </div>

            <div class="service-arrow">
                →
            </div>

        `;


        servicesGrid.appendChild(
            card
        );

    }
);



/* =====================================================
   GENERAR PROYECTOS
===================================================== */

const projectsGrid =
    document.getElementById(
        "projectsGrid"
    );


projects.forEach(
    (project, index) => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "project-card";


        card.innerHTML = `

            <div class="project-image">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >

            </div>


            <div class="project-body">

                <span class="project-category">
                    ${project.category}
                </span>

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>


                <button
                    class="project-button"
                    data-project="${index}"
                >

                    Ver proyecto

                    <span>
                        →
                    </span>

                </button>

            </div>

        `;


        projectsGrid.appendChild(
            card
        );

    }
);



/* =====================================================
   MODAL DE PROYECTOS
===================================================== */

const modal =
    document.getElementById(
        "projectModal"
    );

const modalBody =
    document.getElementById(
        "modalBody"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalOverlay =
    document.querySelector(
        ".modal-overlay"
    );



/*
    Abrir proyecto
*/

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".project-button"
            );


        if (!button) {
            return;
        }


        const index =
            Number(
                button.dataset.project
            );


        const project =
            projects[index];


        openProject(
            project
        );

    }
);



/*
    Generar lista HTML
    para Scope y Results
*/

function generateList(items) {

    return `
        <ul class="project-list">
            ${items
                .map(
                    item => `
                        <li>
                            ${item}
                        </li>
                    `
                )
                .join("")
            }
        </ul>
    `;

}



function openProject(project) {


    modalBody.innerHTML = `

        <span class="project-category">
            ${project.category}
        </span>


        <h2>
            ${project.title}
        </h2>


        <p>
            ${project.description}
        </p>


        <h3>
            Objetivo
        </h3>

        <p>
            ${project.objective}
        </p>


        <h3>
            Alcance
        </h3>

        ${generateList(project.scope)}


        <h3>
            Resultados
        </h3>

        ${generateList(project.results)}


        <div class="modal-tags">

            ${project.technologies
                .map(
                    tech => `
                        <span class="modal-tag">
                            ${tech}
                        </span>
                    `
                )
                .join("")
            }

        </div>


        ${
            project.linkedin !== "#"
            ?
            `
                <a
                    href="${project.linkedin}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button button-dark"
                >
                    Ver en LinkedIn →
                </a>
            `
            :
            ""
        }

    `;


    modal.classList.add(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}



/*
    Cerrar modal
*/

function closeModal() {

    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);


/*
    Cerrar con ESC
*/

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);



/* =====================================================
   GENERAR CONTACTO
===================================================== */

const contactItems =
    document.getElementById(
        "contactItems"
    );


contact.forEach(
    (item) => {

        const element =
            document.createElement(
                "a"
            );


        element.className =
            "contact-item";


        element.href =
            item.link;


        element.innerHTML = `

            <div class="contact-icon">
                ${item.icon}
            </div>


            <div>

                <span class="contact-item-label">
                    ${item.label}
                </span>

                <span class="contact-item-value">
                    ${item.value}
                </span>

            </div>

        `;


        contactItems.appendChild(
            element
        );

    }
);
