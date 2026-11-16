/**
 * Sistema de Insignias - Ecosistema Grouvex Studios
 * Versión 7.4 - Catálogo optimizado (overflow unificado, sin ID en tarjetas, sin contador de recuento,
 * ancho de tarjetas uniforme y navegación inferior mantenida).
 */

const REGLAS_COMUNES_INSIGNIA = {
  "Transferibilidad y Revocación":
    "Insignia personal e <b>intransferible</b> (Art. 22). Sujeta a degradación de rango o revocación total e inhabilitación por quebrantamiento de integridad, prácticas fraudulentas, uso indebido del estatus o incumplimiento normativo (Art. 23.5)."
};

const INSIGNIAS_INICIALES = {
  // =========================================================================
  // ARTÍCULO 22. INSIGNIAS COMUNES DE PERFIL
  // =========================================================================
  "verified.png": {
    nombre: "Usuario Verificado",
    categoria: "Comunidad",
    campos: {
      "Descripción": "Certifica que el usuario es una persona física real registrada en la Base de Datos con estado <b>Aprobado</b>, habiendo superado la validación de identidad exigida por el Departamento Legal y garantizando que no es un perfil automatizado o bot (Art. 23.4).",
      "Cómo obtenerlo": "Registrándose en la plataforma de Grouvex Studios, aportando los datos mínimos de registro y obteniendo la aprobación de estado en la Base de Datos (solo se obtiene <b>1 vez por usuario</b>, Art. 22).",
      "Derechos": "Acceso completo a los servicios administrativos básicos, distintivo oficial en el perfil y Tarjeta de Identidad (TIGS), y ejercicio pleno de derechos comunitarios y ARCO (Art. 13.1).",
      "Obligaciones": "Mantener datos verídicos, respetar los Términos de Servicio (Anexo I), cumplir el estándar de clasificación de contenidos (CCPM) y abstenerse de suplantar identidades o manipular métricas (Art. 13.2)."
    }
  },
  "vip.png": {
    nombre: "VIP",
    categoria: "Membresía",
    campos: {
      "Descripción": "Distintivo de perfil que acredita la suscripción o titularidad activa de un plan de nivel superior dentro de los organismos del ecosistema.",
      "Cómo obtenerlo": "Disponiendo activamente del <b>Plan Estándar o superior</b> en cualquier organismo de Grouvex Studios (ej. GSRecords o GSDesigns).",
      "Derechos": "Identificación visual VIP en el perfil y acceso a las prestaciones, beneficios y servicios asociados al plan contratado en el organismo correspondiente.",
      "Obligaciones": "Mantener vigente el plan contratado, disponer del saldo de XP o fondos requeridos para trámites (Art. 30.2) y cumplir los Términos de Servicio (Anexo I)."
    }
  },

  // =========================================================================
  // ARTÍCULO 22.1. INSIGNIAS DE CAZADOR DE ERRORES
  // =========================================================================
  "verified-bughunter.gif": {
    nombre: "Cazador de Errores",
    categoria: "Seguridad y Desarrollo",
    campos: {
      "Descripción": "Reconocimiento oficial a los miembros que identifican errores de código, fallos técnicos o vulnerabilidades de seguridad en las plataformas y sistemas del Ecosistema de Grouvex Studios.",
      "Cómo obtenerlo": "Identificando errores de código o fallos reproducibles y reportándolos formalmente a través del repositorio oficial en <b>GitHub Grouvex Studios</b>.",
      "Derechos": "Reconocimiento público en el perfil y TIGS, acceso anticipado a fases de prueba (beta testing) y posibilidad de recibir bonificaciones de Puntos de Experiencia (XP) por méritos extraordinarios en detección de fallos (Art. 31.1.b).",
      "Obligaciones": "Actuar de buena fe, no explotar las vulnerabilidades detectadas ni comprometer la confidencialidad o integridad de los sistemas y datos de usuarios (Art. 13.2.a)."
    }
  },
  "bughunter-expert.png": {
    nombre: "Cazador de Errores Experto",
    categoria: "Seguridad y Desarrollo",
    campos: {
      "Descripción": "Grado avanzado otorgado a cazadores de errores con trayectoria destacada y colaboración continua en la resolución y mejora técnica del ecosistema.",
      "Cómo obtenerlo": "Cumpliendo todos los requisitos de <i>Cazador de Errores</i> (reporte de fallos de código en <b>GitHub Grouvex Studios</b>), ayudando activamente al equipo técnico y manteniendo una <b>actividad constante</b>.",
      "Derechos": "Distintivo experto en perfil y TIGS, prioridad en canales técnicos y bonificaciones de XP por contribución en seguridad y estabilidad (Art. 31.1.b).",
      "Obligaciones": "Mantener la actividad constante de reporte responsable, confidencialidad sobre vulnerabilidades no parcheadas y estricto apego al código ético."
    }
  },

  // =========================================================================
  // ARTÍCULO 22.2. INSIGNIAS DE DESARROLLADORES O PROGRAMADORES
  // =========================================================================
  "desarrollador.png": {
    nombre: "Desarrollador",
    categoria: "Desarrollo Técnico",
    campos: {
      "Descripción": "Distintivo otorgado a los programadores y colaboradores técnicos que contribuyen directamente al código fuente de la plataforma web.",
      "Cómo obtenerlo": "Modificando o creando código aprobado para mejorar la <b>página web</b> oficial de Grouvex Studios.",
      "Derechos": "Acreditación oficial como colaborador técnico en el perfil y TIGS, y elegibilidad para reconocimientos o <i>Awards</i> por excelencia técnica (Art. 33.2).",
      "Obligaciones": "Respetar los estándares de calidad, seguridad y propiedad intelectual del repositorio, sin introducir código malicioso ni vulnerabilidades."
    }
  },
  "desarrollador-experimentado.png": {
    nombre: "Desarrollador Experimentado",
    categoria: "Equipo Headquarters",
    campos: {
      "Descripción": "Reconocimiento técnico superior para desarrolladores con amplia experiencia que aportan arquitectura y software más allá del entorno web, integrados dentro del <b>Equipo Headquarters</b>.",
      "Cómo obtenerlo": "Cumpliendo los requisitos de <i>Desarrollador</i>, demostrando mayor experiencia mediante desarrollos de código fuera de la página web y superando las <b>pruebas del Equipo Headquarters de moderadores</b>.",
      "Derechos": "Membresía plena en el Equipo Headquarters, acceso a herramientas avanzadas de desarrollo e infraestructura (CID) y derechos laborales del equipo (Art. 13.4).",
      "Obligaciones": "Cumplir las responsabilidades propias del Equipo Headquarters, proteger la seguridad e integridad de los sistemas (CSPD) y mantener estricta confidencialidad."
    }
  },

  // =========================================================================
  // ARTÍCULO 22.3. INSIGNIAS DE SOCIOS (PARTNERS)
  // =========================================================================
  "socio.png": {
    nombre: "Socio",
    categoria: "Partners",
    campos: {
      "Descripción": "Distintivo que reconoce la permanencia, fidelidad y apoyo continuo de un miembro hacia Grouvex Studios, sus proyectos y su comunidad.",
      "Cómo obtenerlo": "Siendo socio de Grouvex Studios durante al menos <b>1 año</b> y demostrando apoyo activo a la organización, sus proyectos y sus miembros.",
      "Derechos": "Acreditación oficial como Partner en perfil y TIGS, y elegibilidad para beneficios futuros como <b>descuentos</b> en servicios del ecosistema.",
      "Obligaciones": "Mantener una conducta ejemplar, apoyar los valores de la comunidad y respetar los Términos de Servicio y Políticas de Privacidad."
    }
  },
  "socio-experimentado.png": {
    nombre: "Socio Experimentado",
    categoria: "Partners",
    campos: {
      "Descripción": "Reconocimiento de máxima fidelidad para socios veteranos con trayectoria prolongada de respaldo continuo a todo el ecosistema de Grouvex Studios.",
      "Cómo obtenerlo": "Contando con una antigüedad superior al mínimo de <b>1 año como Socio</b> y manteniendo un apoyo sostenido a Grouvex Studios, sus proyectos y miembros.",
      "Derechos": "Estatus de Partner veterano y acceso preferente a beneficios ampliados, incluyendo <b>descuentos mayores, regalos</b> y promociones exclusivas del ecosistema.",
      "Obligaciones": "Conservar el compromiso ético, el respeto comunitario y la integridad exigida a todos los miembros acreditados."
    }
  },

  // =========================================================================
  // ARTÍCULO 23. INSIGNIAS DEL EQUIPO HEADQUARTERS
  // =========================================================================
  "miembro-verificado.png": {
    nombre: "Miembro Verificado",
    categoria: "Equipo Headquarters",
    campos: {
      "Descripción": "Acreditación base de pertenencia aprobada al equipo institucional de Grouvex Studios dentro de la web oficial y la Tarjeta de Identidad (TIGS, Art. 26.1.5).",
      "Cómo obtenerlo": "Estando registrado en la Página Web oficial y obteniendo la aprobación expresa del equipo de Grouvex Studios como miembro acreditado.",
      "Derechos": "Identificación oficial como miembro en la TIGS, acceso a canales internos y garantías laborales y de descanso del Art. 13.4.",
      "Obligaciones": "Cumplir las directrices del Boletín Oficial, respetar la privacidad de los usuarios y mantener la veracidad en su registro."
    }
  },
  "verified-team.png": {
    nombre: "Equipo Verificado",
    categoria: "Equipo Headquarters",
    campos: {
      "Descripción": "Distintivo general que acredita a los miembros activos integrados en la estructura operativa del Equipo Headquarters de Grouvex Studios.",
      "Cómo obtenerlo": "Superando el proceso de selección formal (Art. 21) y las pruebas de acceso establecidas por el Equipo Headquarters.",
      "Derechos": "Acceso al panel de control operativo, emisión de TIGS acreditativa (Art. 24.3), 30 días naturales de vacaciones retribuidas y derecho a la desconexión digital (Art. 13.4).",
      "Obligaciones": "Desempeñar sus funciones con diligencia, mantener confidencialidad absoluta y portar la TIGS en actuaciones oficiales (Art. 25)."
    }
  },

  // =========================================================================
  // ARTÍCULO 23.1. INSIGNIAS DEL EQUIPO DE MODERACIÓN
  // =========================================================================
  "moderador-aprendiz.png": {
    nombre: "Moderador Aprendiz",
    categoria: "Equipo de Moderación",
    campos: {
      "Descripción": "Rango inicial del cuerpo de moderación encargado de asistir al equipo y brindar atención directa de soporte a los miembros de la comunidad.",
      "Cómo obtenerlo": "Aprobando el <b>test de acceso para moderador</b> y colaborando activamente en las tareas requeridas y atención de Soporte.",
      "Derechos": "Acreditación en el Equipo de Moderación, acceso a canales de soporte y formación interna a través del Centro de Formación y Mentoría (CFM).",
      "Obligaciones": "Asistir en tareas de soporte comunitario, seguir las instrucciones de moderadores y administradores, y aplicar un trato equitativo y respetuoso (Art. 13.1.c)."
    }
  },
  "moderador.png": {
    nombre: "Moderador",
    categoria: "Equipo de Moderación",
    campos: {
      "Descripción": "Agente operativo encargado de velar por la seguridad de los miembros y atender y resolver sus asuntos dentro de Grouvex Studios y sus sedes derivadas.",
      "Cómo obtenerlo": "Superando la etapa de aprendizaje y obteniendo una <b>aprobación por voto de 2/5</b> ponderada entre los miembros habilitados (50% Moderadores/Superiores, 30% rango intermedio y 20% rango base).",
      "Derechos": "Facultad de supervisión, edición, bloqueo o eliminación preventiva de contenidos contrarios al reglamento (Art. 13.3.a) y voto en procesos de promoción interna.",
      "Obligaciones": "Velar por la seguridad de la comunidad, respetar el debido proceso y el derecho de audiencia de 72 horas ante sanciones (Art. 13.3.c) y presentar su TIGS cuando se requiera."
    }
  },
  "moderador-experimentado.png": {
    nombre: "Moderador Experimentado",
    categoria: "Equipo de Moderación",
    campos: {
      "Descripción": "Rango senior de moderación con trayectoria consolidada, actividad constante y participación en tareas de apoyo administrativo.",
      "Cómo obtenerlo": "Cumpliendo todos los requisitos de <i>Moderador</i>, realizando tareas de ámbito administrativo, manteniendo una <b>actividad constante</b> y obteniendo una <b>aprobación por voto de 3/5</b>.",
      "Derechos": "Autoridad senior en moderación comunitaria, mayor peso en decisiones operativas del equipo y acceso a funciones de gestión delegada.",
      "Obligaciones": "Mantener actividad constante, mentorizar a moderadores aprendices, garantizar la imparcialidad en resoluciones y proteger la integridad del ecosistema."
    }
  },

  // =========================================================================
  // ARTÍCULO 23.2. INSIGNIAS DEL EQUIPO DE ADMINISTRADORES / JEFE
  // =========================================================================
  "administrador.png": {
    nombre: "Administrador",
    categoria: "Equipo de Administradores",
    campos: {
      "Descripción": "Cargo de gestión superior con autoridad administrativa sobre plataformas, registros, normativas y equipos operativos de Grouvex Studios.",
      "Cómo obtenerlo": "Poseyendo la insignia de <i>Moderador Experimentado</i> (o equivalente habilitante) y obteniendo una <b>aprobación por voto de 4/5</b> (ponderada al 40% y 60% según rango votante).",
      "Derechos": "Aplicación del régimen de sanciones progresivas (Art. 13.3.b), edición de vigencia documental en el Boletín (Art. 18), gestión de usuarios y acceso completo a TIGS.",
      "Obligaciones": "Garantizar el cumplimiento legal y normativo, respetar los derechos ARCO y privacidad de datos (Anexo I) y actuar bajo el principio de debido proceso."
    }
  },
  "administrador-experimentado.png": {
    nombre: "Administrador Experimentado",
    categoria: "Equipo de Administradores",
    campos: {
      "Descripción": "Rango directivo dentro del cuerpo de administración que acredita amplia trayectoria y dominio operativo en Grouvex Studios y todas sus sedes derivadas.",
      "Cómo obtenerlo": "Cumpliendo todos los requisitos de <i>Administrador</i> y acreditando sólida <b>experiencia en Grouvex Studios y sus derivadas</b> (GSRecords, GSDesigns, GSGames).",
      "Derechos": "Coordinación transversal entre sedes, supervisión de procesos administrativos complejos y participación en decisiones estratégicas del Equipo Headquarters.",
      "Obligaciones": "Velar por la cohesión normativa entre el Organismo Principal y los Organismos Secundarios (Art. 14) y supervisar el cumplimiento ético de los equipos."
    }
  },
  "sistema.png": {
    nombre: "Jefe de Equipo / Miembro del Sistema",
    categoria: "Sistema y Jefatura",
    campos: {
      "Descripción": "Identificador oficial del <b>Sistema</b> (decisión final, comunicados oficiales y estructura lógica con autoridad vinculante, Art. 3) y de los <b>Jefes de Equipo / Portavoces oficiales</b> (Art. 23.2).",
      "Cómo obtenerlo": "No obtenible por usuarios generales. Reservado para los agentes y procesos lógicos del Sistema y para los Jefes de Equipo que hayan superado todos los requisitos administrativos previos.",
      "Derechos": "Autoridad vinculante en resoluciones y comunicados oficiales, portavocía oficial de los equipos, ejecución de procesos automatizados y control parental/UAS (Art. 39).",
      "Obligaciones": "Garantizar la integridad técnica, la seguridad operacional, la privacidad por defecto (Art. 17) y el estricto cumplimiento de las disposiciones del Boletín Oficial."
    }
  },

  // =========================================================================
  // ARTÍCULO 23.3. INSIGNIAS DEL EQUIPO DE PROPIETARIOS
  // =========================================================================
  "owner.png": {
    nombre: "Propietario de Grouvex Studios",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Máxima distinción de titularidad correspondiente al Propietario del Organismo Principal <b>Grouvex Studios</b>.",
      "Cómo obtenerlo": "Titularidad ejecutiva y fundacional del Organismo Principal Grouvex Studios.",
      "Derechos": "Dirección general del Ecosistema Global, concesión y revocación de <i>Awards</i> (Arts. 33 y 35), resolución última de conflictos y supervisión de todas las sedes.",
      "Obligaciones": "Garantizar la sostenibilidad, legalidad, ética corporativa y cumplimiento del Reglamento de Documentación Corporativa (Art. 20)."
    }
  },
  "ownerRecords.png": {
    nombre: "Owner Records",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Identifica al Propietario o Jefatura Principal de la sede secundaria <b>Grouvex Studios Records (GSRecords)</b>, sello discográfico dedicado a la producción, distribución musical y gestión de talento sonoro (Art. 6.1).",
      "Cómo obtenerlo": "Asignación directa por titularidad o nombramiento ejecutivo como Propietario de Grouvex Studios Records dentro de la estructura organizativa oficial (Art. 7).",
      "Derechos": "Dirección operativa y creativa de GSRecords (Anexo II), gestión de planes de distribución musical, firma de contratos de exclusividad y propuesta de <i>Awards</i> (Art. 33).",
      "Obligaciones": "Supervisión legal y artística del sello, cumplimiento del estándar explícito <b>UAS</b> (Art. 38), respeto a los derechos morales de los artistas (Art. 13.1.d) y segregación de datos entre sedes (<i>Chinese Wall</i>)."
    }
  },
  "ownerAnimations.png": {
    nombre: "Owner Animations",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Identifica al Propietario o Jefatura Principal de la división <b>Grouvex Studios Animations</b>, dedicada a la producción audiovisual y animación.",
      "Cómo obtenerlo": "Asignación directa por titularidad o nombramiento ejecutivo como Propietario de Grouvex Studios Animations.",
      "Derechos": "Dirección creativa, técnica y operativa de la división de animación y gestión de sus equipos y producciones.",
      "Obligaciones": "Aplicar la clasificación por edades (CCPME) y cortinillas de advertencia explícita (UAS) en archivos audiovisuales (Art. 38.3.c) y proteger los derechos de autor."
    }
  },
  "ownerDesigns.png": {
    nombre: "Owner Designs",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Identifica al Propietario o Jefatura Principal de la sede secundaria <b>Grouvex Studios Designs (GSDesigns)</b>, especializada en diseño gráfico, identidad visual, UI/UX y portadas musicales o editoriales (Art. 6.2).",
      "Cómo obtenerlo": "Asignación directa por titularidad o nombramiento ejecutivo como Propietario de Grouvex Studios Designs (Art. 7).",
      "Derechos": "Dirección creativa y operativa de GSDesigns (Anexo II), gestión del equipo de diseñadores e ilustradores y propuesta de distinciones <i>Awards</i> (Art. 33).",
      "Obligaciones": "Garantizar la originalidad y propiedad intelectual de los diseños, cumplir el etiquetado CCPM/UAS en activos visuales (Art. 38.3.b) y respetar el aislamiento de datos inter-sede."
    }
  },
  "ownerGames.png": {
    nombre: "Owner Games",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Identifica al Propietario o Jefatura Principal de la sede <b>Grouvex Studios Games (GSGames)</b>, enfocada en el desarrollo y publicación de videojuegos y software interactivo (Art. 6.3).",
      "Cómo obtenerlo": "Asignación directa por titularidad o nombramiento ejecutivo como Propietario de Grouvex Studios Games (Art. 7).",
      "Derechos": "Dirección de desarrollo y operativa de GSGames, gestión de equipos técnicos y propuesta de reconocimientos dentro de su división.",
      "Obligaciones": "Implementar los estándares de clasificación PEGI/Kijkwijzer (Art. 37) y pantallas de advertencia UAS en ejecutables y software (Art. 38.3.d)."
    }
  },

  // =========================================================================
  // ARTÍCULO 23.4. NIVELES DE VERIFICACIÓN OFICIAL Y DISTINTIVOS OPERATIVOS
  // =========================================================================
  "insignia-dorada.png": {
    nombre: "Insignia Dorada",
    categoria: "Verificación de Alto Impacto",
    campos: {
      "Descripción": "Máximo nivel de verificación oficial destinado a distinguir a artistas, diseñadores o entidades de alto impacto cuya trayectoria y aportaciones resultan fundamentales para el prestigio de Grouvex Studios (Art. 23.4).",
      "Cómo obtenerlo": "Poseyendo un historial verificado de lanzamientos o proyectos con <b>métricas de éxito orgánico</b>, siendo un referente positivo en el ecosistema y acreditando <b>0 penalizaciones por crecimiento artificial o contenido falso (Art. 13.2.b y c) en los últimos 18 meses</b>.",
      "Derechos": "<b>Prioridad absoluta en soporte técnico</b>, acceso a <b>contratos de exclusividad de alto rango</b> y <b>representación oficial de la marca</b> Grouvex Studios en eventos externos.",
      "Obligaciones": "Mantener una conducta ejemplar, cumplir estrictamente la prohibición de bots/compra de métricas y respetar los contratos de exclusividad y estándares CCPM/UAS.",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a <b>Degradación de Rango</b> (retorno a verificación básica) si deja de cumplir los requisitos específicos, o revocación total por infracción grave (Art. 23.5)."
    }
  },
  "artista.gif": {
    nombre: "Artista Oficial",
    categoria: "Creadores",
    campos: {
      "Descripción": "Creador musical o visual verificado dentro del ecosistema o sello <b>Grouvex Studios Records</b> que publica obras originales aprobadas conforme a los estándares de calidad y propiedad intelectual de la organización.",
      "Cómo obtenerlo": "Publicando material original aprobado bajo GSRecords o las plataformas oficiales de Grouvex Studios, acreditando la titularidad de derechos de autor y superando la validación de identidad.",
      "Derechos": "Reconocimiento de autoría y derechos morales (Art. 13.1.d), promoción preferencial y soporte técnico/legal prioritario en caso de contrato de exclusividad vigente (Art. 13.1.e), y elegibilidad para <i>Awards</i> de GSs (Art. 33).",
      "Obligaciones": "Garantizar la autoría original de las obras, etiquetar correctamente la edad (<b>CCPME</b>) y advertencia explícita (<b>UAS</b>, Arts. 38 y 40), respetar la exclusividad pactada (Art. 13.2.d) y no recurrir a bots o compra de métricas (Art. 13.2.c)."
    }
  },
  "verified-employee.gif": {
    nombre: "Empleado Verificado",
    categoria: "Corporativo y RR.HH.",
    campos: {
      "Descripción": "Personal contratado o colaborador activo con funciones operativas, técnicas o administrativas asignadas dentro de la estructura corporativa de Grouvex Studios o sus Organismos Secundarios.",
      "Cómo obtenerlo": "Superando el proceso de selección estandarizado (Art. 21) y manteniendo una vinculación laboral, contractual o de colaboración activa con estado <b>Aprobado</b> en el Registro de Miembros.",
      "Derechos": "Acreditación oficial mediante <b>TIGS</b>, planificación equitativa de carga laboral mediante créditos <b>EWHD</b> (1 EWHD = 12 horas reales), 30 días naturales de vacaciones anuales retribuidas, derecho a la desconexión digital (Art. 13.4) y acceso a formación en el Centro de Formación y Mentoría (CFM).",
      "Obligaciones": "Portar y presentar su TIGS en interacciones y accesos internos (Art. 25), cumplir el código ético, respetar la segregación de información entre sedes (<i>Chinese Wall</i>) y proteger la confidencialidad de los datos de usuarios (Anexo I)."
    }
  },
  "GStudios_GCO.png": {
    nombre: "Grouvex Studios GCO",
    categoria: "Continuidad Operacional",
    campos: {
      "Descripción": "Distintivo operativo vinculado al <b>Sistema de Gestión de Continuidad Operacional (GCO)</b>, potestad ejecutiva delegada en el Equipo de Gestión para garantizar la estabilidad y sostenibilidad del Organismo Principal y sus Sedes ante eventos extraordinarios (Art. 41).",
      "Cómo obtenerlo": "Asignación corporativa al personal y agentes del Equipo de Gestión habilitados para operar protocolos de contingencia bajo los <b>Niveles de Alerta I (Amarillo), II (Naranja) y III (Rojo)</b> (Art. 43).",
      "Derechos": "Potestades extraordinarias durante activaciones GCO (Art. 42): reasignar recursos humanos y técnicos entre sedes, modificar plazos (SLA) y tiempos de respuesta (TAT), suspender temporalmente servicios o normativa interna (Nivel III) y desplegar sistemas automáticos de contingencia (Art. 45).",
      "Obligaciones": "Notificar de inmediato a miembros y comunidad toda activación y desactivación del GCO, garantizar el retorno automático a la normalidad al cesar la causa y registrar todas las decisiones para auditoría interna (Art. 46)."
    }
  }
};

(function () {
  const CONFIG = {
    BASE_URL: "https://raw.githubusercontent.com/ecosistema-de-grouvex-studios/esistema.grouvex.github.io/refs/heads/main/imagen/sede/",
    BASE_PATH: "/ecosistema-de-grouvex-studios/esistema.grouvex.github.io/refs/heads/main/imagen/sede/",
    IMAGE_HOST: "raw.githubusercontent.com",
    ALLOWED_DOMAINS: ["grouvex.com", "ecosistema-de-grouvex-studios.github.io"],
    EXCLUDED_KEYWORDS: ["banner", "logo"],
    ANIMATION_MS: 220
  };

  // 0. Guardián de dominio configurable
  const hostActual = (window.location.hostname || "").toLowerCase();
  const esDominioAutorizado = CONFIG.ALLOWED_DOMAINS.some(
    (dominio) => hostActual === dominio || hostActual.endsWith(`.${dominio}`)
  );
  if (esDominioAutorizado) return;

  if (window.__GS_BADGE_SYSTEM_INIT__) return;
  window.__GS_BADGE_SYSTEM_INIT__ = true;

  let ultimoElementoEnfocado = null;
  let desdeCatalogo = false;
  let listaCatalogoActual = [];
  let indiceCatalogoActual = -1;
  let filtroTextoCatalogo = "";
  let filtroCategoriaCatalogo = "Todas";
  let rafPendiente = false;
  const colaNodosPendientes = new Set();
  const shadowRootsObservados = new WeakSet();
  const dbIndexada = new Map();
  const urlsPrecargadas = new Set();
  const urlsRotas = new Set();

  function renderizarHTMLCampo(contenedor, htmlCrudo) {
    if (htmlCrudo instanceof Node) {
      contenedor.appendChild(htmlCrudo);
      return;
    }
    contenedor.innerHTML = String(htmlCrudo ?? "");
    contenedor.querySelectorAll('a[target="_blank"]').forEach((enlace) => {
      if (!enlace.hasAttribute("rel")) {
        enlace.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  function extraerTextoPlano(html) {
    return String(html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function generarEscudo403SVG() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="gs403bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3f3f46" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#18181b" stop-opacity="0.95"/>
        </linearGradient>
      </defs>
      <path d="M32 6L52 14V30C52 43.5 43.4 55.1 32 59C20.6 55.1 12 43.5 12 30V14L32 6Z"
            fill="url(#gs403bg)" stroke="#a1a1aa" stroke-width="2.8" stroke-linejoin="round"/>
      <circle cx="32" cy="31" r="10.5" fill="none" stroke="#e4e4e7" stroke-width="2.6"/>
      <line x1="24.8" y1="23.8" x2="39.2" y2="38.2" stroke="#e4e4e7" stroke-width="2.6" stroke-linecap="round"/>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  const ESCUDO_403_URI = generarEscudo403SVG();

  function formatearNombreArchivo(nombreArchivo) {
    const sinExtension = nombreArchivo.replace(/\.[^/.]+$/, "");
    const limpio = sinExtension
      .replace(/[-_]+/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\s+/g, " ")
      .trim();

    if (!limpio) return "Insignia Oficial";
    return limpio
      .split(" ")
      .map((palabra) =>
        palabra === palabra.toUpperCase() && palabra.length > 1
          ? palabra
          : palabra.charAt(0).toUpperCase() + palabra.slice(1)
      )
      .join(" ");
  }

  function indexarBaseDeDatos() {
    dbIndexada.clear();
    const db = window.DB_INSIGNIAS || {};
    for (const [archivo, datos] of Object.entries(db)) {
      dbIndexada.set(archivo.toLowerCase(), { archivo, registrada: true, ...datos });
    }
  }

  const baseDatosTarget = { ...INSIGNIAS_INICIALES, ...(window.DB_INSIGNIAS || {}) };
  window.DB_INSIGNIAS = new Proxy(baseDatosTarget, {
    set(target, prop, value) {
      target[prop] = value;
      indexarBaseDeDatos();
      if (document.body) {
        document.querySelectorAll("img[data-gs-badge-procesada]").forEach((img) => {
          delete img.dataset.gsBadgeProcesada;
        });
        procesarImagenes(document);
      }
      return true;
    },
    deleteProperty(target, prop) {
      delete target[prop];
      indexarBaseDeDatos();
      return true;
    }
  });

  function obtenerDatosInsignia(src) {
    if (!src || src.startsWith("data:")) return null;
    try {
      const url = new URL(src, window.location.href);
      const pathnameLower = url.pathname.toLowerCase();
      const baseLower = CONFIG.BASE_PATH.toLowerCase();

      if (url.hostname === CONFIG.IMAGE_HOST && pathnameLower.startsWith(baseLower)) {
        const archivoOriginal = decodeURIComponent(url.pathname.slice(CONFIG.BASE_PATH.length));
        if (!archivoOriginal || archivoOriginal.includes("/")) return null;

        const archivoLower = archivoOriginal.toLowerCase();
        if (CONFIG.EXCLUDED_KEYWORDS.some((kw) => archivoLower.includes(kw))) return null;

        const encontrada = dbIndexada.get(archivoLower);
        if (encontrada) return encontrada;

        return {
          archivo: archivoOriginal,
          nombre: formatearNombreArchivo(archivoOriginal),
          categoria: null,
          campos: null,
          registrada: false
        };
      }
    } catch (_) {
      return null;
    }
    return null;
  }

  function inyectarEstilos() {
    if (document.getElementById("gs-insignia-styles")) return;
    const style = document.createElement("style");
    style.id = "gs-insignia-styles";
    style.textContent = `
      .gs-badge-clickable {
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        will-change: transform, filter;
        transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease;
      }
      .gs-badge-clickable:hover,
      .gs-badge-clickable:focus-visible {
        transform: scale(1.16) translateY(-1px);
        filter: drop-shadow(0 2px 6px rgba(255, 255, 255, 0.35));
        outline: 1.5px solid rgba(255, 255, 255, 0.55);
        outline-offset: 2px;
      }
      .gs-badge-clickable:active {
        transform: scale(0.94);
      }

      #gs-badge-modal-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(6, 6, 9, 0.82);
        backdrop-filter: blur(10px) saturate(120%);
        -webkit-backdrop-filter: blur(10px) saturate(120%);
        z-index: 99999;
        justify-content: center;
        align-items: center;
        padding: 16px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        opacity: 0;
        transition: opacity ${CONFIG.ANIMATION_MS}ms ease;
      }
      #gs-badge-modal-overlay.active {
        display: flex;
        opacity: 1;
      }
      #gs-badge-modal-overlay.closing {
        opacity: 0;
      }

      .gs-badge-modal-box {
        background: linear-gradient(180deg, #1b1b20 0%, #111114 100%);
        color: #f4f4f5;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 20px;
        width: 100%;
        max-width: 460px;
        max-height: 88vh;
        overflow-y: auto;
        position: relative;
        box-shadow:
          0 32px 64px -16px rgba(0, 0, 0, 0.9),
          0 0 0 1px rgba(255, 255, 255, 0.04) inset;
        transform: scale(0.95) translateY(10px);
        transition:
          max-width 0.25s cubic-bezier(0.16, 1, 0.3, 1),
          transform ${CONFIG.ANIMATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1);
      }
      .gs-badge-modal-box.is-catalog {
        max-width: 720px;
      }
      #gs-badge-modal-overlay.active .gs-badge-modal-box {
        transform: scale(1) translateY(0);
      }
      #gs-badge-modal-overlay.closing .gs-badge-modal-box {
        transform: scale(0.96) translateY(14px);
      }

      .gs-badge-modal-box::-webkit-scrollbar,
      .gs-catalog-view::-webkit-scrollbar,
      .gs-catalog-chips::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      .gs-badge-modal-box::-webkit-scrollbar-track,
      .gs-catalog-view::-webkit-scrollbar-track,
      .gs-catalog-chips::-webkit-scrollbar-track {
        background: transparent;
      }
      .gs-badge-modal-box::-webkit-scrollbar-thumb,
      .gs-catalog-view::-webkit-scrollbar-thumb,
      .gs-catalog-chips::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.16);
        border-radius: 99px;
      }

      .gs-badge-hero {
        position: relative;
        padding: 46px 24px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background:
          radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 72%),
          radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
        background-size: 100% 100%, 14px 14px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      }
      .gs-badge-modal-box.is-catalog .gs-badge-hero {
        padding: 46px 24px 18px;
      }

      .gs-badge-drag-pill {
        display: none;
        width: 36px;
        height: 4px;
        border-radius: 99px;
        background: rgba(255, 255, 255, 0.22);
        margin: -30px auto 18px;
      }
      @media (pointer: coarse) {
        .gs-badge-drag-pill { display: block; }
      }

      .gs-badge-close {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 32px;
        height: 32px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: #a1a1aa;
        font-size: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.16s ease;
      }
      .gs-badge-close:hover,
      .gs-badge-close:focus-visible {
        background: rgba(255, 255, 255, 0.14);
        color: #ffffff;
        outline: none;
      }

      .gs-badge-catalog-btn {
        position: absolute;
        top: 14px;
        left: 14px;
        height: 32px;
        padding: 0 11px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #e4e4e7;
        font-size: 0.76rem;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        transition: all 0.16s ease;
      }
      .gs-badge-catalog-btn:hover,
      .gs-badge-catalog-btn:focus-visible {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.22);
        color: #ffffff;
        outline: none;
      }

      .gs-badge-pedestal {
        width: 84px;
        height: 84px;
        border-radius: 22px;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.015) 100%);
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow:
          0 12px 28px -8px rgba(0, 0, 0, 0.65),
          0 1px 0 rgba(255, 255, 255, 0.12) inset;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 14px;
      }
      .gs-badge-pedestal img {
        width: 54px;
        height: 54px;
        object-fit: contain;
        filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45));
      }

      .gs-badge-category {
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #d4d4d8;
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 3px 11px;
        border-radius: 99px;
        margin-bottom: 8px;
      }

      .gs-badge-hero h3 {
        margin: 0;
        font-size: 1.32rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #fafafa;
        line-height: 1.25;
      }

      .gs-badge-hero-subtitle {
        margin: 6px 0 0;
        font-size: 0.82rem;
        color: #a1a1aa;
        max-width: 480px;
        line-height: 1.4;
      }

      .gs-badge-status-note {
        margin-top: 8px;
        font-size: 0.78rem;
        color: #a1a1aa;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.07);
        padding: 4px 10px;
        border-radius: 8px;
      }

      .gs-badge-body {
        padding: 18px 22px 6px;
      }

      /* =====================================================================
         ESTRUCTURA DEL CATÁLOGO OFICIAL
         ===================================================================== */
      .gs-catalog-view {
        padding: 16px 22px 10px;
        overflow-y: auto;
      }
      .gs-catalog-toolbar {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 16px;
      }
      .gs-catalog-search-row {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .gs-catalog-search {
        flex: 1;
        min-width: 0;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 11px;
        padding: 10px 13px;
        color: #f4f4f5;
        font-size: 0.86rem;
        outline: none;
        transition: border-color 0.15s ease, background 0.15s ease;
      }
      .gs-catalog-search::placeholder {
        color: #71717a;
      }
      .gs-catalog-search:focus {
        border-color: rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.08);
      }
      .gs-catalog-chips {
        display: flex;
        gap: 6px;
        overflow-x: auto;
        padding-bottom: 4px;
        scrollbar-width: auto;
      }

      .gs-catalog-chip {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.09);
        color: #a1a1aa;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 6px 12px;
        border-radius: 99px;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.15s ease;
      }
      .gs-catalog-chip:hover,
      .gs-catalog-chip:focus-visible {
        background: rgba(255, 255, 255, 0.1);
        color: #f4f4f5;
        outline: none;
      }
      .gs-catalog-chip.active {
        background: #f4f4f5;
        border-color: #f4f4f5;
        color: #111114;
      }

      .gs-catalog-section {
        margin-bottom: 18px;
      }
      .gs-catalog-section:last-child {
        margin-bottom: 4px;
      }
      .gs-catalog-section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 9px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      }
      .gs-catalog-section-title {
        font-size: 0.74rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #d4d4d8;
      }
      .gs-catalog-section-badge {
        font-size: 0.7rem;
        color: #71717a;
        font-weight: 600;
      }

      .gs-catalog-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }
      @media (max-width: 520px) {
        .gs-catalog-grid { grid-template-columns: 1fr; }
      }
      .gs-catalog-card {
        background: rgba(0, 0, 0, 0.80);
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 14px;
        padding: 12px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        text-align: left;
        color: #f4f4f5;
        cursor: pointer;
        width: 100%;
        box-sizing: border-box;
        transition: all 0.16s ease;
      }
      .gs-catalog-card:hover,
      .gs-catalog-card:focus-visible {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.24);
        transform: translateY(-1px);
        outline: none;
      }
      .gs-catalog-card-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: 1px;
      }
      .gs-catalog-card-icon img {
        width: 28px;
        height: 28px;
        object-fit: contain;
      }
      .gs-catalog-card-info {
        min-width: 0;
        flex: 1;
      }
      .gs-catalog-card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        margin-bottom: 3px;
      }
      .gs-catalog-card-name {
        font-size: 0.86rem;
        font-weight: 700;
        color: #fafafa;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .gs-catalog-card-desc {
        font-size: 0.76rem;
        line-height: 1.4;
        color: #a1a1aa;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 6px;
      }
      .gs-catalog-card-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        font-size: 0.68rem;
        color: #71717a;
      }
      .gs-catalog-empty {
        text-align: center;
        padding: 28px 12px;
        font-size: 0.86rem;
        color: #71717a;
        background: rgba(255, 255, 255, 0.02);
        border: 1px dashed rgba(255, 255, 255, 0.1);
        border-radius: 14px;
      }

      /* =====================================================================
         BARRA INFERIOR DE NAVEGACIÓN (SOLO DESDE CATÁLOGO)
         ===================================================================== */
      .gs-catalog-pager {
        margin: 8px 22px 4px;
        padding: 8px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .gs-catalog-pager-btn {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #e4e4e7;
        font-size: 0.78rem;
        font-weight: 600;
        padding: 7px 12px;
        border-radius: 9px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: all 0.15s ease;
      }
      .gs-catalog-pager-btn:hover,
      .gs-catalog-pager-btn:focus-visible {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.24);
        color: #ffffff;
        outline: none;
      }
      .gs-catalog-pager-info {
        font-size: 0.76rem;
        font-weight: 600;
        color: #a1a1aa;
        font-variant-numeric: tabular-nums;
      }

      /* Acordeones */
      .gs-badge-accordion {
        background: rgba(255, 255, 255, 0.025);
        border: 1px solid rgba(255, 255, 255, 0.075);
        border-radius: 12px;
        margin-bottom: 10px;
        overflow: hidden;
        transition: border-color 0.2s ease, background 0.2s ease;
      }
      .gs-badge-accordion:hover {
        border-color: rgba(255, 255, 255, 0.16);
      }
      .gs-badge-accordion[open] {
        border-color: rgba(255, 255, 255, 0.18);
        background: rgba(255, 255, 255, 0.045);
      }
      .gs-badge-accordion summary {
        padding: 13px 15px;
        font-weight: 600;
        font-size: 0.9rem;
        color: #e4e4e7;
        cursor: pointer;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
        transition: color 0.15s ease;
      }
      .gs-badge-accordion summary::-webkit-details-marker {
        display: none;
      }
      .gs-badge-accordion summary::after {
        content: "+";
        font-size: 1.1rem;
        font-weight: 500;
        color: #a1a1aa;
        width: 22px;
        height: 22px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.05);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
      }
      .gs-badge-accordion[open] summary::after {
        transform: rotate(45deg);
        color: #ffffff;
        background: rgba(255, 255, 255, 0.14);
      }
      .gs-badge-accordion[open] summary {
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        color: #ffffff;
      }
      .gs-badge-accordion-content {
        padding: 13px 15px;
        font-size: 0.89rem;
        line-height: 1.58;
        color: #d4d4d8;
        word-break: break-word;
        animation: gsSlideDown 0.18s ease-out;
      }
      .gs-badge-accordion-content a:not([style*="color"]) {
        color: #ffffff;
      }
      .gs-badge-accordion-content a {
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      @keyframes gsSlideDown {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .gs-badge-footer {
        padding: 14px 22px 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        font-size: 0.74rem;
        color: #71717a;
      }
      .gs-badge-brand {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-weight: 500;
      }
      .gs-badge-brand-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #a1a1aa;
      }
      .gs-badge-copy-id {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.09);
        color: #a1a1aa;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.72rem;
        padding: 5px 10px;
        border-radius: 7px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .gs-badge-copy-id:hover,
      .gs-badge-copy-id:focus-visible {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.18);
        color: #f4f4f5;
        outline: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .gs-badge-clickable,
        #gs-badge-modal-overlay,
        .gs-badge-modal-box,
        .gs-badge-close,
        .gs-badge-catalog-btn,
        .gs-catalog-card,
        .gs-catalog-pager-btn,
        .gs-badge-accordion summary::after,
        .gs-badge-accordion-content {
          transition: none !important;
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function navegarCatalogo(direccion) {
    if (!desdeCatalogo || listaCatalogoActual.length <= 1) return;
    indiceCatalogoActual = (indiceCatalogoActual + direccion + listaCatalogoActual.length) % listaCatalogoActual.length;
    const item = listaCatalogoActual[indiceCatalogoActual];
    if (item) {
      abrirModal(`${CONFIG.BASE_URL}${item.archivo}`, item, document.activeElement);
    }
  }

  function crearModal() {
    if (document.getElementById("gs-badge-modal-overlay")) return;
    const overlay = document.createElement("div");
    overlay.id = "gs-badge-modal-overlay";
    overlay.innerHTML = `
      <div id="gs-badge-modal-box" class="gs-badge-modal-box" role="dialog" aria-modal="true" aria-labelledby="gs-modal-title">
        <div class="gs-badge-hero">
          <div class="gs-badge-drag-pill" aria-hidden="true"></div>
          <button type="button" id="gs-modal-catalog-btn" class="gs-badge-catalog-btn" title="Ver Catálogo Oficial de Insignias">Catálogo Oficial</button>
          <button type="button" class="gs-badge-close" aria-label="Cerrar ventana" title="Cerrar (Esc)">&times;</button>
          <div id="gs-modal-pedestal" class="gs-badge-pedestal">
            <img id="gs-modal-img" src="" alt="" draggable="false">
          </div>
          <span id="gs-modal-category" class="gs-badge-category"></span>
          <h3 id="gs-modal-title"></h3>
          <p id="gs-modal-subtitle" class="gs-badge-hero-subtitle" style="display:none;"></p>
          <div id="gs-modal-status" class="gs-badge-status-note" style="display:none;"></div>
        </div>
        <div id="gs-modal-fields" class="gs-badge-body"></div>
        <div id="gs-modal-catalog" class="gs-catalog-view" style="display:none;"></div>
        <div id="gs-modal-catalog-pager" class="gs-catalog-pager" style="display:none;">
          <button type="button" id="gs-catalog-prev-btn" class="gs-catalog-pager-btn" aria-label="Insignia anterior del catálogo">&#8592; Anterior</button>
          <span id="gs-catalog-pager-info" class="gs-catalog-pager-info"></span>
          <button type="button" id="gs-catalog-next-btn" class="gs-catalog-pager-btn" aria-label="Siguiente insignia del catálogo">Siguiente &#8594;</button>
        </div>
        <div class="gs-badge-footer">
          <span class="gs-badge-brand"><span class="gs-badge-brand-dot"></span>Grouvex Studios</span>
          <button type="button" id="gs-modal-copy-id" class="gs-badge-copy-id" title="Copiar identificador de archivo"></button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const box = overlay.querySelector("#gs-badge-modal-box");
    const btnClose = overlay.querySelector(".gs-badge-close");
    const btnCatalog = overlay.querySelector("#gs-modal-catalog-btn");
    const btnCopy = overlay.querySelector("#gs-modal-copy-id");
    const btnPrev = overlay.querySelector("#gs-catalog-prev-btn");
    const btnNext = overlay.querySelector("#gs-catalog-next-btn");

    btnClose.addEventListener("click", cerrarModal);
    btnCatalog.addEventListener("click", () => abrirCatalogo());
    btnPrev.addEventListener("click", () => navegarCatalogo(-1));
    btnNext.addEventListener("click", () => navegarCatalogo(1));

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) cerrarModal();
    });

    btnCopy.addEventListener("click", async () => {
      const idActual = btnCopy.dataset.badgeId;
      if (!idActual) return;
      try {
        await navigator.clipboard.writeText(idActual);
        btnCopy.textContent = "Copiado ✓";
        setTimeout(() => { btnCopy.textContent = idActual; }, 1500);
      } catch (_) {}
    });

    // Swipe-to-Close en móvil
    let touchStartY = 0;
    let touchDeltaY = 0;

    box.addEventListener("touchstart", (e) => {
      if (box.scrollTop <= 0) {
        touchStartY = e.touches[0].clientY;
        touchDeltaY = 0;
      }
    }, { passive: true });

    box.addEventListener("touchmove", (e) => {
      if (!touchStartY) return;
      touchDeltaY = e.touches[0].clientY - touchStartY;
      if (touchDeltaY > 0 && box.scrollTop <= 0) {
        box.style.transition = "none";
        box.style.transform = `translateY(${Math.min(touchDeltaY * 0.65, 140)}px)`;
      }
    }, { passive: true });

    box.addEventListener("touchend", () => {
      if (!touchStartY) return;
      box.style.transition = "";
      box.style.transform = "";
      if (touchDeltaY > 95 && box.scrollTop <= 0) cerrarModal();
      touchStartY = 0;
      touchDeltaY = 0;
    });

    // Teclado: Esc, flechas izquierda/derecha (solo cuando se navega desde catálogo) y Focus Trap
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("active")) return;

      if (e.key === "Escape") {
        cerrarModal();
        return;
      }
      if (desdeCatalogo && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "SUMMARY") {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          navegarCatalogo(-1);
          return;
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          navegarCatalogo(1);
          return;
        }
      }
      if (e.key === "Tab") {
        const focusables = box.querySelectorAll('a[href], button:not([disabled]), input, summary, [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const primero = focusables[0];
        const ultimo = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === primero) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primero.focus();
        }
      }
    });
  }

  function cerrarModal() {
    const overlay = document.getElementById("gs-badge-modal-overlay");
    if (!overlay || !overlay.classList.contains("active")) return;

    overlay.classList.add("closing");
    document.body.style.overflow = "";
    desdeCatalogo = false;
    listaCatalogoActual = [];
    indiceCatalogoActual = -1;

    setTimeout(() => {
      overlay.classList.remove("active", "closing");
      if (ultimoElementoEnfocado && typeof ultimoElementoEnfocado.focus === "function") {
        ultimoElementoEnfocado.focus();
      }
    }, CONFIG.ANIMATION_MS);
  }

  function crearTarjetaCatalogo(item, listaVisible, indiceEnLista) {
    const src = `${CONFIG.BASE_URL}${item.archivo}`;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "gs-catalog-card";

    const iconWrap = document.createElement("div");
    iconWrap.className = "gs-catalog-card-icon";
    const img = document.createElement("img");
    img.alt = item.nombre;
    img.loading = "lazy";
    if (urlsRotas.has(src)) {
      img.src = ESCUDO_403_URI;
    } else {
      img.src = src;
      img.onerror = () => {
        urlsRotas.add(src);
        img.onerror = null;
        img.src = ESCUDO_403_URI;
      };
    }
    iconWrap.appendChild(img);

    const info = document.createElement("div");
    info.className = "gs-catalog-card-info";

    const top = document.createElement("div");
    top.className = "gs-catalog-card-top";
    const nameEl = document.createElement("div");
    nameEl.className = "gs-catalog-card-name";
    nameEl.textContent = item.nombre;
    top.appendChild(nameEl);

    const descEl = document.createElement("div");
    descEl.className = "gs-catalog-card-desc";
    const descBruta = item.campos?.["Descripción"] || "";
    descEl.textContent = extraerTextoPlano(descBruta) || "Distintivo oficial del Ecosistema Grouvex Studios.";

    const meta = document.createElement("div");
    meta.className = "gs-catalog-card-meta";
    const catSpan = document.createElement("span");
    catSpan.textContent = item.categoria || "General";
    meta.appendChild(catSpan);

    info.appendChild(top);
    info.appendChild(descEl);
    info.appendChild(meta);

    card.appendChild(iconWrap);
    card.appendChild(info);

    card.addEventListener("click", () => {
      desdeCatalogo = true;
      listaCatalogoActual = listaVisible;
      indiceCatalogoActual = indiceEnLista;
      abrirModal(src, item, card);
    });

    return card;
  }

  function abrirCatalogo(elementoOrigen, mantenerFiltros = false) {
    const overlay = document.getElementById("gs-badge-modal-overlay");
    const box = document.getElementById("gs-badge-modal-box");
    const pedestal = document.getElementById("gs-modal-pedestal");
    const catEl = document.getElementById("gs-modal-category");
    const titleEl = document.getElementById("gs-modal-title");
    const subtitleEl = document.getElementById("gs-modal-subtitle");
    const statusEl = document.getElementById("gs-modal-status");
    const fieldsContainer = document.getElementById("gs-modal-fields");
    const catalogContainer = document.getElementById("gs-modal-catalog");
    const pagerContainer = document.getElementById("gs-modal-catalog-pager");
    const btnCatalog = document.getElementById("gs-modal-catalog-btn");
    const btnCopy = document.getElementById("gs-modal-copy-id");

    if (!overlay.classList.contains("active")) {
      ultimoElementoEnfocado = elementoOrigen || document.activeElement;
    }

    if (!mantenerFiltros) {
      filtroTextoCatalogo = "";
      filtroCategoriaCatalogo = "Todas";
    }

    desdeCatalogo = false;
    box.classList.add("is-catalog");
    box.scrollTop = 0;

    pedestal.style.display = "none";
    statusEl.style.display = "none";
    fieldsContainer.style.display = "none";
    pagerContainer.style.display = "none";
    btnCatalog.style.display = "none";
    btnCopy.style.display = "none";

    catEl.textContent = "Registro Normativo · Arts. 22 – 23.5";
    catEl.style.display = "inline-block";
    titleEl.textContent = "Catálogo Oficial de Insignias";
    subtitleEl.textContent = "Explora los distintivos vigentes del Ecosistema Grouvex Studios, sus requisitos de obtención, derechos y obligaciones.";
    subtitleEl.style.display = "block";

    const todas = Array.from(dbIndexada.values());
    const categoriasUnicas = ["Todas", ...new Set(todas.map((i) => i.categoria).filter(Boolean))];

    catalogContainer.innerHTML = `
      <div class="gs-catalog-toolbar">
        <div class="gs-catalog-search-row">
          <input type="search" id="gs-catalog-search-input" class="gs-catalog-search" placeholder="Buscar por nombre, rango o requisito..." autocomplete="off">
        </div>
        <div id="gs-catalog-chips" class="gs-catalog-chips" role="tablist" aria-label="Filtrar por categoría"></div>
      </div>
      <div id="gs-catalog-results"></div>
    `;
    catalogContainer.style.display = "block";

    const inputBusqueda = catalogContainer.querySelector("#gs-catalog-search-input");
    const chipsContainer = catalogContainer.querySelector("#gs-catalog-chips");
    const resultsContainer = catalogContainer.querySelector("#gs-catalog-results");

    inputBusqueda.value = filtroTextoCatalogo;

    function renderizarChips() {
      chipsContainer.innerHTML = "";
      categoriasUnicas.forEach((cat) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = `gs-catalog-chip${filtroCategoriaCatalogo === cat ? " active" : ""}`;
        chip.textContent = cat;
        chip.addEventListener("click", () => {
          filtroCategoriaCatalogo = cat;
          renderizarChips();
          renderizarResultados();
        });
        chipsContainer.appendChild(chip);
      });
    }

    function renderizarResultados() {
      const q = filtroTextoCatalogo.trim().toLowerCase();

      const filtradas = todas.filter((item) => {
        const coincideCat = filtroCategoriaCatalogo === "Todas" || item.categoria === filtroCategoriaCatalogo;
        if (!coincideCat) return false;
        if (!q) return true;

        const textoCampos = item.campos ? Object.values(item.campos).join(" ") : "";
        return (
          item.nombre.toLowerCase().includes(q) ||
          (item.categoria || "").toLowerCase().includes(q) ||
          item.archivo.toLowerCase().includes(q) ||
          extraerTextoPlano(textoCampos).toLowerCase().includes(q)
        );
      });

      resultsContainer.innerHTML = "";

      if (filtradas.length === 0) {
        resultsContainer.innerHTML = `<div class="gs-catalog-empty">No se encontraron insignias que coincidan con tu búsqueda.</div>`;
        return;
      }

      // Si estamos en "Todas" sin texto de búsqueda, agrupar por categoría
      if (filtroCategoriaCatalogo === "Todas" && !q) {
        const grupos = new Map();
        filtradas.forEach((item) => {
          const cat = item.categoria || "Otras";
          if (!grupos.has(cat)) grupos.set(cat, []);
          grupos.get(cat).push(item);
        });

        let indiceGlobal = 0;
        grupos.forEach((itemsGrupo, nombreGrupo) => {
          const section = document.createElement("section");
          section.className = "gs-catalog-section";

          const header = document.createElement("div");
          header.className = "gs-catalog-section-header";
          header.innerHTML = `
            <span class="gs-catalog-section-title">${nombreGrupo}</span>
            <span class="gs-catalog-section-badge">${itemsGrupo.length} ${itemsGrupo.length === 1 ? "insignia" : "insignias"}</span>
          `;

          const grid = document.createElement("div");
          grid.className = "gs-catalog-grid";
          itemsGrupo.forEach((item) => {
            grid.appendChild(crearTarjetaCatalogo(item, filtradas, indiceGlobal));
            indiceGlobal++;
          });

          section.appendChild(header);
          section.appendChild(grid);
          resultsContainer.appendChild(section);
        });
      } else {
        const grid = document.createElement("div");
        grid.className = "gs-catalog-grid";
        filtradas.forEach((item, idx) => {
          grid.appendChild(crearTarjetaCatalogo(item, filtradas, idx));
        });
        resultsContainer.appendChild(grid);
      }
    }

    renderizarChips();
    renderizarResultados();

    inputBusqueda.addEventListener("input", (e) => {
      filtroTextoCatalogo = e.target.value;
      renderizarResultados();
    });

    document.body.style.overflow = "hidden";
    overlay.classList.add("active");

    requestAnimationFrame(() => {
      inputBusqueda.focus();
    });
  }

  function abrirModal(srcOriginal, datos, elementoOrigen) {
    const overlay = document.getElementById("gs-badge-modal-overlay");
    const box = document.getElementById("gs-badge-modal-box");
    const pedestal = document.getElementById("gs-modal-pedestal");
    const imgEl = document.getElementById("gs-modal-img");
    const catEl = document.getElementById("gs-modal-category");
    const titleEl = document.getElementById("gs-modal-title");
    const subtitleEl = document.getElementById("gs-modal-subtitle");
    const statusEl = document.getElementById("gs-modal-status");
    const fieldsContainer = document.getElementById("gs-modal-fields");
    const catalogContainer = document.getElementById("gs-modal-catalog");
    const pagerContainer = document.getElementById("gs-modal-catalog-pager");
    const pagerInfo = document.getElementById("gs-catalog-pager-info");
    const btnCatalog = document.getElementById("gs-modal-catalog-btn");
    const btnCopy = document.getElementById("gs-modal-copy-id");

    if (!overlay.classList.contains("active")) {
      ultimoElementoEnfocado = elementoOrigen || document.activeElement;
    }

    box.classList.remove("is-catalog");
    box.scrollTop = 0;

    catalogContainer.style.display = "none";
    subtitleEl.style.display = "none";
    pedestal.style.display = "flex";
    btnCatalog.style.display = "inline-flex";
    btnCopy.style.display = "inline-block";

    if (desdeCatalogo) {
      btnCatalog.textContent = "← Catálogo Oficial";
      btnCatalog.onclick = () => abrirCatalogo(null, true);
      if (listaCatalogoActual.length > 1) {
        pagerContainer.style.display = "flex";
        pagerInfo.textContent = `${indiceCatalogoActual + 1} / ${listaCatalogoActual.length}`;
      } else {
        pagerContainer.style.display = "none";
      }
    } else {
      btnCatalog.textContent = "Catálogo Oficial";
      btnCatalog.onclick = () => abrirCatalogo();
      pagerContainer.style.display = "none";
    }

    const yaFallo = Boolean(elementoOrigen?.dataset?.gsImageBroken) || urlsRotas.has(srcOriginal);

    imgEl.onerror = null;
    if (yaFallo) {
      imgEl.src = ESCUDO_403_URI;
      imgEl.alt = `Insignia no disponible: ${datos.nombre}`;
      statusEl.textContent = "Recurso visual no disponible (403 / 404)";
      statusEl.style.display = "inline-block";
    } else {
      imgEl.src = srcOriginal;
      imgEl.alt = `Insignia oficial: ${datos.nombre}`;
      statusEl.style.display = "none";
      imgEl.onerror = () => {
        urlsRotas.add(srcOriginal);
        imgEl.onerror = null;
        imgEl.src = ESCUDO_403_URI;
        imgEl.alt = `Insignia no disponible: ${datos.nombre}`;
        statusEl.textContent = "Recurso visual no disponible (403 / 404)";
        statusEl.style.display = "inline-block";
      };
    }

    titleEl.textContent = datos.nombre;

    if (datos.categoria) {
      catEl.textContent = datos.categoria;
      catEl.style.display = "inline-block";
    } else {
      catEl.textContent = "";
      catEl.style.display = "none";
    }

    btnCopy.dataset.badgeId = datos.archivo;
    btnCopy.textContent = datos.archivo;

    fieldsContainer.innerHTML = "";

    const camposCombinados = datos.campos && typeof datos.campos === "object"
      ? {
          ...datos.campos,
          ...REGLAS_COMUNES_INSIGNIA,
          ...(datos.campos["Transferibilidad y Revocación"]
            ? { "Transferibilidad y Revocación": datos.campos["Transferibilidad y Revocación"] }
            : {})
        }
      : null;

    const entradasCampos = camposCombinados ? Object.entries(camposCombinados) : [];

    if (entradasCampos.length > 0) {
      fieldsContainer.style.display = "block";
      entradasCampos.forEach(([tituloCampo, contenidoCampo], index) => {
        const details = document.createElement("details");
        details.className = "gs-badge-accordion";
        if (index === 0) details.open = true;

        details.addEventListener("toggle", () => {
          if (details.open) {
            fieldsContainer.querySelectorAll("details").forEach((otro) => {
              if (otro !== details) otro.open = false;
            });
          }
        });

        const summary = document.createElement("summary");
        summary.textContent = tituloCampo;

        const content = document.createElement("div");
        content.className = "gs-badge-accordion-content";
        renderizarHTMLCampo(content, contenidoCampo);

        details.appendChild(summary);
        details.appendChild(content);
        fieldsContainer.appendChild(details);
      });
    } else {
      fieldsContainer.style.display = "none";
    }

    document.body.style.overflow = "hidden";
    overlay.classList.add("active");

    requestAnimationFrame(() => {
      if (!desdeCatalogo) {
        overlay.querySelector(".gs-badge-close")?.focus();
      }
    });
  }

  function aplicarFallbackNoDisponible(img, datos, srcOriginal) {
    if (srcOriginal) urlsRotas.add(srcOriginal);
    if (img.dataset.gsImageBroken === "true") return;
    img.dataset.gsImageBroken = "true";
    if (!img.dataset.gsOriginalSrc && !img.src.startsWith("data:")) {
      img.dataset.gsOriginalSrc = img.getAttribute("src") || img.src;
    }
    img.setAttribute("alt", `Insignia no disponible: ${datos.nombre}`);
    img.src = ESCUDO_403_URI;
  }

  function enriquecerAtributosImagen(img, datos, srcOriginal) {
    const etiquetaCompleta = datos.categoria
      ? `${datos.nombre} (${datos.categoria})`
      : datos.nombre;

    if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {
      img.setAttribute("alt", `Insignia: ${datos.nombre}`);
    }
    if (!img.hasAttribute("aria-label")) {
      img.setAttribute("aria-label", `Insignia ${etiquetaCompleta}. Pulsa para ver detalles.`);
    }
    if (!img.hasAttribute("aria-haspopup")) img.setAttribute("aria-haspopup", "dialog");
    if (!img.hasAttribute("role")) img.setAttribute("role", "button");
    if (!img.hasAttribute("tabindex")) img.setAttribute("tabindex", "0");
    if (!img.hasAttribute("title") || img.getAttribute("title").trim() === "") {
      img.setAttribute("title", etiquetaCompleta);
    }

    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    if (!img.hasAttribute("draggable")) img.setAttribute("draggable", "false");
    if (!img.hasAttribute("referrerpolicy")) img.setAttribute("referrerpolicy", "no-referrer");

    img.dataset.gsBadgeName = datos.nombre;
    if (datos.categoria) {
      img.dataset.gsBadgeCategory = datos.categoria;
    } else {
      delete img.dataset.gsBadgeCategory;
    }

    if (urlsRotas.has(srcOriginal) || (img.complete && img.naturalWidth === 0 && !img.src.startsWith("data:"))) {
      aplicarFallbackNoDisponible(img, datos, srcOriginal);
      return;
    }

    if (!img.dataset.gsErrorHandled) {
      img.dataset.gsErrorHandled = "true";
      img.addEventListener(
        "error",
        () => aplicarFallbackNoDisponible(img, datos, srcOriginal),
        { once: true }
      );
    }
  }

  function limpiarAtributosImagen(img) {
    delete img.dataset.gsBadgeProcesada;
    delete img.dataset.gsBadgeName;
    delete img.dataset.gsBadgeCategory;
    delete img.dataset.gsImageBroken;
    img.classList.remove("gs-badge-clickable");
    img.removeAttribute("role");
    img.removeAttribute("tabindex");
    img.removeAttribute("aria-haspopup");
  }

  function marcarImagen(img) {
    if (!(img instanceof HTMLImageElement)) return;

    if (img.hasAttribute("data-no-badge")) {
      if (img.dataset.gsBadgeProcesada) limpiarAtributosImagen(img);
      return;
    }

    const srcEvaluar = img.dataset.gsOriginalSrc || img.getAttribute("src") || img.src;
    const datos = obtenerDatosInsignia(srcEvaluar);

    if (!datos) {
      if (img.dataset.gsBadgeProcesada) limpiarAtributosImagen(img);
      return;
    }

    const estadoMarca = `${datos.archivo}:${datos.registrada ? "1" : "0"}`;
    if (img.dataset.gsBadgeProcesada === estadoMarca) return;

    img.dataset.gsBadgeProcesada = estadoMarca;
    img.classList.add("gs-badge-clickable");
    enriquecerAtributosImagen(img, datos, srcEvaluar);
  }

  function procesarImagenes(raiz = document) {
    if (raiz instanceof HTMLImageElement) {
      marcarImagen(raiz);
      return;
    }
    if (!raiz.querySelectorAll) return;

    raiz.querySelectorAll("img").forEach(marcarImagen);
    raiz.querySelectorAll("*").forEach((el) => {
      if (el.shadowRoot) {
        observarRaiz(el.shadowRoot);
        procesarImagenes(el.shadowRoot);
      }
    });
  }

  function encolarProcesamiento(nodo) {
    colaNodosPendientes.add(nodo);
    if (rafPendiente) return;

    rafPendiente = true;
    requestAnimationFrame(() => {
      colaNodosPendientes.forEach((n) => {
        if (n.isConnected || n instanceof ShadowRoot) procesarImagenes(n);
      });
      colaNodosPendientes.clear();
      rafPendiente = false;
    });
  }

  function observarRaiz(raiz) {
    if (!raiz || shadowRootsObservados.has(raiz)) return;
    shadowRootsObservados.add(raiz);

    const observer = new MutationObserver((mutaciones) => {
      for (const mutacion of mutaciones) {
        if (mutacion.type === "attributes") {
          const img = mutacion.target;
          if (mutacion.attributeName === "src" && !img.src.startsWith("data:")) {
            delete img.dataset.gsOriginalSrc;
            delete img.dataset.gsImageBroken;
          }
          encolarProcesamiento(img);
        } else if (mutacion.type === "childList") {
          for (const nodo of mutacion.addedNodes) {
            if (nodo.nodeType === Node.ELEMENT_NODE) {
              encolarProcesamiento(nodo);
            }
          }
        }
      }
    });

    observer.observe(raiz, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "data-no-badge"]
    });
  }

  function registrarDelegacionEventos() {
    const buscarInsigniaEnEvento = (e) => {
      const ruta = e.composedPath ? e.composedPath() : [e.target];
      return ruta.find((el) => el instanceof HTMLImageElement && el.classList.contains("gs-badge-clickable")) || null;
    };

    const activarDesdeEvento = (e) => {
      const img = buscarInsigniaEnEvento(e);
      if (!img) return;

      const srcOriginal = img.dataset.gsOriginalSrc || img.getAttribute("src") || img.src;
      const datos = obtenerDatosInsignia(srcOriginal);
      if (!datos) return;

      e.preventDefault();
      e.stopPropagation();
      desdeCatalogo = false;
      listaCatalogoActual = [];
      indiceCatalogoActual = -1;
      abrirModal(srcOriginal, datos, img);
    };

    document.addEventListener("click", activarDesdeEvento, true);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const img = buscarInsigniaEnEvento(e);
        if (img) activarDesdeEvento(e);
      }
    }, true);

    document.addEventListener("pointerenter", (e) => {
      const img = buscarInsigniaEnEvento(e);
      if (!img || img.dataset.gsImageBroken === "true") return;
      const src = img.dataset.gsOriginalSrc || img.src;
      if (src && !src.startsWith("data:") && !urlsPrecargadas.has(src) && !urlsRotas.has(src)) {
        urlsPrecargadas.add(src);
        const preloader = new Image();
        preloader.src = src;
      }
    }, true);
  }

  function comprobarDeepLink() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("catalogo") === "1" || window.location.hash === "#catalogo") {
      abrirCatalogo();
      return;
    }

    let archivo = params.get("insignia");
    if (!archivo && window.location.hash.startsWith("#insignia=")) {
      archivo = decodeURIComponent(window.location.hash.slice("#insignia=".length));
    }
    if (archivo) {
      window.GSInsignias.abrir(archivo);
    }
  }

  function iniciar() {
    indexarBaseDeDatos();
    inyectarEstilos();
    crearModal();
    registrarDelegacionEventos();
    procesarImagenes(document);
    observarRaiz(document.body);
    comprobarDeepLink();
  }

  window.GSInsignias = {
    abrir: (nombreArchivo) => {
      desdeCatalogo = false;
      listaCatalogoActual = [];
      indiceCatalogoActual = -1;
      const src = `${CONFIG.BASE_URL}${nombreArchivo}`;
      const datos = obtenerDatosInsignia(src);
      if (datos) abrirModal(src, datos, document.activeElement);
    },
    abrirCatalogo: () => abrirCatalogo(document.activeElement),
    cerrar: cerrarModal,
    refrescar: () => {
      indexarBaseDeDatos();
      procesarImagenes(document);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
