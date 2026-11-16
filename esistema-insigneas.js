/**
 * Sistema de Insignias - Ecosistema Grouvex Studios
 * Versión 6.2 - HTML libre en campos (con soporte de estilos inline), restricción a grouvex.com (*.grouvex.com)
 */

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
      "Obligaciones": "Mantener datos verídicos, respetar los Términos de Servicio (Anexo I), cumplir el estándar de clasificación de contenidos (CCPM) y abstenerse de suplantar identidades o manipular métricas (Art. 13.2).",
      "Transferibilidad y Revocación": "Insignia personal e <b>intransferible</b> (Art. 22). Sujeta a revocación total e inhabilitación por quebrantamiento de integridad, prácticas fraudulentas, uso indebido del estatus o incumplimiento normativo (Art. 23.5)."
    }
  },
  "vip.png": {
    nombre: "VIP",
    categoria: "Membresía",
    campos: {
      "Descripción": "Distintivo de perfil que acredita la suscripción o titularidad activa de un plan de nivel superior dentro de los organismos del ecosistema.",
      "Cómo obtenerlo": "Disponiendo activamente del <b>Plan Estándar o superior</b> en cualquier organismo de Grouvex Studios (ej. GSRecords o GSDesigns).",
      "Derechos": "Identificación visual VIP en el perfil y acceso a las prestaciones, beneficios y servicios asociados al plan contratado en el organismo correspondiente.",
      "Obligaciones": "Mantener vigente el plan contratado, disponer del saldo de XP o fondos requeridos para trámites (Art. 30.2) y cumplir los Términos de Servicio (Anexo I).",
      "Transferibilidad y Revocación": "Insignia personal e <b>intransferible</b> (Art. 22). Se retira al finalizar el plan contratado o por infracción normativa según el Art. 23.5."
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
      "Obligaciones": "Actuar de buena fe, no explotar las vulnerabilidades detectadas ni comprometer la confidencialidad o integridad de los sistemas y datos de usuarios (Art. 13.2.a).",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Será revocada de forma fulminante si se emplean los conocimientos técnicos para ataques, acceso no autorizado o divulgación maliciosa (Art. 23.5)."
    }
  },
  "bughunter-expert.png": {
    nombre: "Cazador de Errores Experto",
    categoria: "Seguridad y Desarrollo",
    campos: {
      "Descripción": "Grado avanzado otorgado a cazadores de errores con trayectoria destacada y colaboración continua en la resolución y mejora técnica del ecosistema.",
      "Cómo obtenerlo": "Cumpliendo todos los requisitos de <i>Cazador de Errores</i> (reporte de fallos de código en <b>GitHub Grouvex Studios</b>), ayudando activamente al equipo técnico y manteniendo una <b>actividad constante</b>.",
      "Derechos": "Distintivo experto en perfil y TIGS, prioridad en canales técnicos y bonificaciones de XP por contribución en seguridad y estabilidad (Art. 31.1.b).",
      "Obligaciones": "Mantener la actividad constante de reporte responsable, confidencialidad sobre vulnerabilidades no parcheadas y estricto apego al código ético.",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a degradación al rango básico si cesa la actividad constante, o revocación total por infracción grave (Art. 23.5)."
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
      "Obligaciones": "Respetar los estándares de calidad, seguridad y propiedad intelectual del repositorio, sin introducir código malicioso ni vulnerabilidades.",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a revocación inmediata ante prácticas fraudulentas, sabotaje técnico o incumplimiento normativo (Art. 23.5)."
    }
  },
  "desarrollador-experimentado.png": {
    nombre: "Desarrollador Experimentado",
    categoria: "Equipo Headquarters",
    campos: {
      "Descripción": "Reconocimiento técnico superior para desarrolladores con amplia experiencia que aportan arquitectura y software más allá del entorno web, integrados dentro del <b>Equipo Headquarters</b>.",
      "Cómo obtenerlo": "Cumpliendo los requisitos de <i>Desarrollador</i>, demostrando mayor experiencia mediante desarrollos de código fuera de la página web y superando las <b>pruebas del Equipo Headquarters de moderadores</b>.",
      "Derechos": "Membresía plena en el Equipo Headquarters, acceso a herramientas avanzadas de desarrollo e infraestructura (CID) y derechos laborales del equipo (Art. 13.4).",
      "Obligaciones": "Cumplir las responsabilidades propias del Equipo Headquarters, proteger la seguridad e integridad de los sistemas (CSPD) y mantener estricta confidencialidad.",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a degradación o revocación por incumplimiento de funciones o infracciones al reglamento (Art. 23.5)."
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
      "Obligaciones": "Mantener una conducta ejemplar, apoyar los valores de la comunidad y respetar los Términos de Servicio y Políticas de Privacidad.",
      "Transferibilidad y Revocación": "Insignia personal e <b>intransferible</b>. Sujeta a revocación si el titular incurre en conductas lesivas contra la reputación de Grouvex Studios (Art. 23.5)."
    }
  },
  "socio-experimentado.png": {
    nombre: "Socio Experimentado",
    categoria: "Partners",
    campos: {
      "Descripción": "Reconocimiento de máxima fidelidad para socios veteranos con trayectoria prolongada de respaldo continuo a todo el ecosistema de Grouvex Studios.",
      "Cómo obtenerlo": "Contando con una antigüedad superior al mínimo de <b>1 año como Socio</b> y manteniendo un apoyo sostenido a Grouvex Studios, sus proyectos y miembros.",
      "Derechos": "Estatus de Partner veterano y acceso preferente a beneficios ampliados, incluyendo <b>descuentos mayores, regalos</b> y promociones exclusivas del ecosistema.",
      "Obligaciones": "Conservar el compromiso ético, el respeto comunitario y la integridad exigida a todos los miembros acreditados.",
      "Transferibilidad y Revocación": "Insignia personal e <b>intransferible</b>. Sujeta a degradación o revocación conforme al Art. 23.5."
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
      "Obligaciones": "Cumplir las directrices del Boletín Oficial, respetar la privacidad de los usuarios y mantener la veracidad en su registro.",
      "Transferibilidad y Revocación": "Insignia personal e <b>intransferible</b>. Sujeta a suspensión o retirada si el estado del registro cambia o por infracción normativa (Arts. 23.5 y 24.4)."
    }
  },
  "verified-team.png": {
    nombre: "Equipo Verificado",
    categoria: "Equipo Headquarters",
    campos: {
      "Descripción": "Distintivo general que acredita a los miembros activos integrados en la estructura operativa del Equipo Headquarters de Grouvex Studios.",
      "Cómo obtenerlo": "Superando el proceso de selección formal (Art. 21) y las pruebas de acceso establecidas por el Equipo Headquarters.",
      "Derechos": "Acceso a herramientas de gestión y soporte, emisión de TIGS acreditativa (Art. 24.3), 30 días naturales de vacaciones retribuidas y derecho a la desconexión digital (Art. 13.4).",
      "Obligaciones": "Desempeñar sus funciones con diligencia, mantener confidencialidad absoluta y portar la TIGS en actuaciones oficiales (Art. 25).",
      "Transferibilidad y Revocación": "Distintivo personal e <b>intransferible</b>. Sujeto a degradación o revocación inmediata por vulneración ética o abuso de funciones (Art. 23.5)."
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
      "Obligaciones": "Asistir en tareas de soporte comunitario, seguir las instrucciones de moderadores y administradores, y aplicar un trato equitativo y respetuoso (Art. 13.1.c).",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a retirada por bajo desempeño, incumplimiento de directrices o infracción del reglamento (Art. 23.5)."
    }
  },
  "moderador.png": {
    nombre: "Moderador",
    categoria: "Equipo de Moderación",
    campos: {
      "Descripción": "Agente operativo encargado de velar por la seguridad de los miembros y atender y resolver sus asuntos dentro de Grouvex Studios y sus sedes derivadas.",
      "Cómo obtenerlo": "Superando la etapa de aprendizaje y obteniendo una <b>aprobación por voto de 2/5</b> ponderada entre los miembros habilitados (50% Moderadores/Superiores, 30% rango intermedio y 20% rango base).",
      "Derechos": "Facultad de supervisión, edición, bloqueo o eliminación preventiva de contenidos contrarios al reglamento (Art. 13.3.a) y voto en procesos de promoción interna.",
      "Obligaciones": "Velar por la seguridad de la comunidad, respetar el debido proceso y el derecho de audiencia de 72 horas ante sanciones (Art. 13.3.c) y presentar su TIGS cuando se requiera.",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a degradación o revocación por abuso de facultades de moderación o parcialidad manifiesta (Art. 23.5)."
    }
  },
  "moderador-experimentado.png": {
    nombre: "Moderador Experimentado",
    categoria: "Equipo de Moderación",
    campos: {
      "Descripción": "Rango senior de moderación con trayectoria consolidada, actividad constante y participación en tareas de apoyo administrativo.",
      "Cómo obtenerlo": "Cumpliendo todos los requisitos de <i>Moderador</i>, realizando tareas de ámbito administrativo, manteniendo una <b>actividad constante</b> y obteniendo una <b>aprobación por voto de 3/5</b>.",
      "Derechos": "Autoridad senior en moderación comunitaria, mayor peso en decisiones operativas del equipo y acceso a funciones de gestión delegada.",
      "Obligaciones": "Mantener actividad constante, mentorizar a moderadores aprendices, garantizar la imparcialidad en resoluciones y proteger la integridad del ecosistema.",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a degradación a Moderador si cesa la actividad constante, o revocación total por infracción grave (Art. 23.5)."
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
      "Obligaciones": "Garantizar el cumplimiento legal y normativo, respetar los derechos ARCO y privacidad de datos (Anexo I) y actuar bajo el principio de debido proceso.",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a degradación o revocación por negligencia grave, abuso de poder o vulneración de confidencialidad (Art. 23.5)."
    }
  },
  "administrador-experimentado.png": {
    nombre: "Administrador Experimentado",
    categoria: "Equipo de Administradores",
    campos: {
      "Descripción": "Rango directivo dentro del cuerpo de administración que acredita amplia trayectoria y dominio operativo en Grouvex Studios y todas sus sedes derivadas.",
      "Cómo obtenerlo": "Cumpliendo todos los requisitos de <i>Administrador</i> y acreditando sólida <b>experiencia en Grouvex Studios y sus derivadas</b> (GSRecords, GSDesigns, GSGames).",
      "Derechos": "Coordinación transversal entre sedes, supervisión de procesos administrativos complejos y participación en decisiones estratégicas del Equipo Headquarters.",
      "Obligaciones": "Velar por la cohesión normativa entre el Organismo Principal y los Organismos Secundarios (Art. 14) y supervisar el cumplimiento ético de los equipos.",
      "Transferibilidad y Revocación": "Insignia <b>intransferible</b>. Sujeta a los protocolos de auditoría, degradación y revocación del Art. 23.5."
    }
  },
  "sistema.png": {
    nombre: "Jefe de Equipo / Miembro del Sistema",
    categoria: "Sistema y Jefatura",
    campos: {
      "Descripción": "Identificador oficial del <b>Sistema</b> (decisión final, comunicados oficiales y estructura lógica con autoridad vinculante, Art. 3) y de los <b>Jefes de Equipo / Portavoces oficiales</b> (Art. 23.2).",
      "Cómo obtenerlo": "No obtenible por usuarios generales. Reservado para los agentes y procesos lógicos del Sistema y para los Jefes de Equipo que hayan superado todos los requisitos administrativos previos.",
      "Derechos": "Autoridad vinculante en resoluciones y comunicados oficiales, portavocía oficial de los equipos, ejecución de procesos automatizados y control parental/UAS (Art. 39).",
      "Obligaciones": "Garantizar la integridad técnica, la seguridad operacional, la privacidad por defecto (Art. 17) y el estricto cumplimiento de las disposiciones del Boletín Oficial.",
      "Transferibilidad y Revocación": "Uso estrictamente institucional e <b>intransferible</b>, auditado por el Centro de Seguridad, Privacidad y Defensa (CSPD) y la Dirección General."
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
      "Obligaciones": "Garantizar la sostenibilidad, legalidad, ética corporativa y cumplimiento del Reglamento de Documentación Corporativa (Art. 20).",
      "Transferibilidad y Revocación": "Distintivo titular e <b>intransferible</b> vinculado a la propiedad del Organismo Principal."
    }
  },
  "ownerRecords.png": {
    nombre: "Owner Records",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Identifica al Propietario o Jefatura Principal de la sede secundaria <b>Grouvex Studios Records (GSRecords)</b>, sello discográfico dedicado a la producción, distribución musical y gestión de talento sonoro (Art. 6.1).",
      "Cómo obtenerlo": "Asignación directa por titularidad o nombramiento ejecutivo como Propietario de Grouvex Studios Records dentro de la estructura organizativa oficial (Art. 7).",
      "Derechos": "Dirección operativa y creativa de GSRecords (Anexo II), gestión de planes de distribución musical, firma de contratos de exclusividad y propuesta de <i>Awards</i> (Art. 33).",
      "Obligaciones": "Supervisión legal y artística del sello, cumplimiento del estándar explícito <b>UAS</b> (Art. 38), respeto a los derechos morales de los artistas (Art. 13.1.d) y segregación de datos entre sedes (<i>Chinese Wall</i>).",
      "Transferibilidad y Revocación": "Distintivo vinculado al cargo directivo e <b>intransferible</b>, sujeto a la gobernanza del Ecosistema Global."
    }
  },
  "ownerAnimations.png": {
    nombre: "Owner Animations",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Identifica al Propietario o Jefatura Principal de la división <b>Grouvex Studios Animations</b>, dedicada a la producción audiovisual y animación.",
      "Cómo obtenerlo": "Asignación directa por titularidad o nombramiento ejecutivo como Propietario de Grouvex Studios Animations.",
      "Derechos": "Dirección creativa, técnica y operativa de la división de animación y gestión de sus equipos y producciones.",
      "Obligaciones": "Aplicar la clasificación por edades (CCPME) y cortinillas de advertencia explícita (UAS) en archivos audiovisuales (Art. 38.3.c) y proteger los derechos de autor.",
      "Transferibilidad y Revocación": "Distintivo vinculado al cargo directivo e <b>intransferible</b>, sujeto a la gobernanza del Ecosistema Global."
    }
  },
  "ownerDesigns.png": {
    nombre: "Owner Designs",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Identifica al Propietario o Jefatura Principal de la sede secundaria <b>Grouvex Studios Designs (GSDesigns)</b>, especializada en diseño gráfico, identidad visual, UI/UX y portadas musicales o editoriales (Art. 6.2).",
      "Cómo obtenerlo": "Asignación directa por titularidad o nombramiento ejecutivo como Propietario de Grouvex Studios Designs (Art. 7).",
      "Derechos": "Dirección creativa y operativa de GSDesigns (Anexo II), gestión del equipo de diseñadores e ilustradores y propuesta de distinciones <i>Awards</i> (Art. 33).",
      "Obligaciones": "Garantizar la originalidad y propiedad intelectual de los diseños, cumplir el etiquetado CCPM/UAS en activos visuales (Art. 38.3.b) y respetar el aislamiento de datos inter-sede.",
      "Transferibilidad y Revocación": "Distintivo vinculado al cargo directivo e <b>intransferible</b>, sujeto a la gobernanza del Ecosistema Global."
    }
  },
  "ownerGames.png": {
    nombre: "Owner Games",
    categoria: "Equipo de Propietarios",
    campos: {
      "Descripción": "Identifica al Propietario o Jefatura Principal de la sede <b>Grouvex Studios Games (GSGames)</b>, enfocada en el desarrollo y publicación de videojuegos y software interactivo (Art. 6.3).",
      "Cómo obtenerlo": "Asignación directa por titularidad o nombramiento ejecutivo como Propietario de Grouvex Studios Games (Art. 7).",
      "Derechos": "Dirección de desarrollo y operativa de GSGames, gestión de equipos técnicos y propuesta de reconocimientos dentro de su división.",
      "Obligaciones": "Implementar los estándares de clasificación PEGI/Kijkwijzer (Art. 37) y pantallas de advertencia UAS en ejecutables y software (Art. 38.3.d).",
      "Transferibilidad y Revocación": "Distintivo vinculado al cargo directivo e <b>intransferible</b>, sujeto a la gobernanza del Ecosistema Global."
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
      "Obligaciones": "Garantizar la autoría original de las obras, etiquetar correctamente la edad (<b>CCPME</b>) y advertencia explícita (<b>UAS</b>, Arts. 38 y 40), respetar la exclusividad pactada (Art. 13.2.d) y no recurrir a bots o compra de métricas (Art. 13.2.c).",
      "Transferibilidad y Revocación": "Insignia personal e <b>intransferible</b>. Sujeta a degradación o revocación inmediata por plagio, crecimiento artificial de métricas, incumplimiento de exclusividad o falsificación de etiquetas de edad (Arts. 13.2, 23.5 y 40)."
    }
  },
  "verified-employee.gif": {
    nombre: "Empleado Verificado",
    categoria: "Corporativo y RR.HH.",
    campos: {
      "Descripción": "Personal contratado o colaborador activo con funciones operativas, técnicas o administrativas asignadas dentro de la estructura corporativa de Grouvex Studios o sus Organismos Secundarios.",
      "Cómo obtenerlo": "Superando el proceso de selección estandarizado (Art. 21) y manteniendo una vinculación laboral, contractual o de colaboración activa con estado <b>Aprobado</b> en el Registro de Miembros.",
      "Derechos": "Acreditación oficial mediante <b>TIGS</b>, planificación equitativa de carga laboral mediante créditos <b>EWHD</b> (1 EWHD = 12 horas reales), 30 días naturales de vacaciones anuales retribuidas, derecho a la desconexión digital (Art. 13.4) y acceso a formación en el Centro de Formación y Mentoría (CFM).",
      "Obligaciones": "Portar y presentar su TIGS en interacciones y accesos internos (Art. 25), cumplir el código ético, respetar la segregación de información entre sedes (<i>Chinese Wall</i>) y proteger la confidencialidad de los datos de usuarios (Anexo I).",
      "Transferibilidad y Revocación": "Distintivo corporativo e <b>intransferible</b>. Queda suspendido o revocado automáticamente si el estado del titular en el Registro pasa a <i>Suspendido</i>, <i>Denegada</i> o <i>Pendiente</i>, o por infracción grave (Arts. 23.5 y 24.4)."
    }
  },
  "GStudios_GCO.png": {
    nombre: "Grouvex Studios GCO",
    categoria: "Continuidad Operacional",
    campos: {
      "Descripción": "Distintivo operativo vinculado al <b>Sistema de Gestión de Continuidad Operacional (GCO)</b>, potestad ejecutiva delegada en el Equipo de Gestión para garantizar la estabilidad y sostenibilidad del Organismo Principal y sus Sedes ante eventos extraordinarios (Art. 41).",
      "Cómo obtenerlo": "Asignación corporativa al personal y agentes del Equipo de Gestión habilitados para operar protocolos de contingencia bajo los <b>Niveles de Alerta I (Amarillo), II (Naranja) y III (Rojo)</b> (Art. 43).",
      "Derechos": "Potestades extraordinarias durante activaciones GCO (Art. 42): reasignar recursos humanos y técnicos entre sedes, modificar plazos (SLA) y tiempos de respuesta (TAT), suspender temporalmente servicios o normativa interna (Nivel III) y desplegar sistemas automáticos de contingencia (Art. 45).",
      "Obligaciones": "Notificar de inmediato a miembros y comunidad toda activación y desactivación del GCO, garantizar el retorno automático a la normalidad al cesar la causa y registrar todas las decisiones para auditoría interna (Art. 46).",
      "Transferibilidad y Revocación": "Distintivo institucional e <b>intransferible</b>, sometido a auditoría interna y supervisión de la Dirección General."
    }
  }
};

(function () {
  // 0. Guardián de dominio: solo permitir grouvex.com y cualquier subdominio (*.grouvex.com)
  const hostActual = (window.location.hostname || "").toLowerCase();
  const esDominioAutorizado = hostActual === "grouvex.com" || hostActual.endsWith(".grouvex.com");
  if (esDominioAutorizado) return;

  if (window.__GS_BADGE_SYSTEM_INIT__) return;
  window.__GS_BADGE_SYSTEM_INIT__ = true;

  const CONFIG = {
    BASE_URL: "https://raw.githubusercontent.com/ecosistema-de-grouvex-studios/esistema.grouvex.github.io/refs/heads/main/imagen/sede/",
    BASE_PATH: "/ecosistema-de-grouvex-studios/esistema.grouvex.github.io/refs/heads/main/imagen/sede/",
    ALLOWED_HOST: "raw.githubusercontent.com",
    ANIMATION_MS: 220,
    DEFAULT_SIZE: 20
  };

  let ultimoElementoEnfocado = null;
  let rafPendiente = false;
  const colaNodosPendientes = new Set();
  const shadowRootsObservados = new WeakSet();
  const dbIndexada = new Map();
  const urlsPrecargadas = new Set();

  // Renderizado directo de HTML libre en campos (permite etiquetas, style="...", enlaces, botones, imágenes, etc.)
  function renderizarHTMLCampo(contenedor, htmlCrudo) {
    if (htmlCrudo instanceof Node) {
      contenedor.appendChild(htmlCrudo);
      return;
    }

    contenedor.innerHTML = String(htmlCrudo ?? "");

    // Añadir rel="noopener noreferrer" solo en enlaces externos que abran en nueva pestaña sin rel definido
    contenedor.querySelectorAll('a[target="_blank"]').forEach((enlace) => {
      if (!enlace.hasAttribute("rel")) {
        enlace.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  // Escudo SVG unificado (estilo 403 / No disponible)
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

  // Proxy reactivo
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

      if (url.hostname === CONFIG.ALLOWED_HOST && pathnameLower.startsWith(baseLower)) {
        const archivoOriginal = decodeURIComponent(url.pathname.slice(CONFIG.BASE_PATH.length));
        if (!archivoOriginal || archivoOriginal.includes("/")) return null;

        // Ignorar archivos que contengan "banner" o "logo" en su nombre
        const archivoLower = archivoOriginal.toLowerCase();
        if (archivoLower.includes("banner") || archivoLower.includes("logo")) return null;

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

  // 1. Estilos CSS Unificados + Estilos base para HTML dentro de los campos
  function inyectarEstilos() {
    if (document.getElementById("gs-insignia-styles")) return;
    const style = document.createElement("style");
    style.id = "gs-insignia-styles";
    style.textContent = `
      .gs-badge-clickable {
        cursor: pointer;
        border-radius: 5px;
        vertical-align: middle;
        object-fit: contain;
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
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        width: 100%;
        max-width: 430px;
        max-height: 86vh;
        overflow-y: auto;
        position: relative;
        box-shadow:
          0 32px 64px -16px rgba(0, 0, 0, 0.9),
          0 0 0 1px rgba(255, 255, 255, 0.04) inset;
        transform: scale(0.95) translateY(10px);
        transition: transform ${CONFIG.ANIMATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1);
      }
      #gs-badge-modal-overlay.active .gs-badge-modal-box {
        transform: scale(1) translateY(0);
      }
      #gs-badge-modal-overlay.closing .gs-badge-modal-box {
        transform: scale(0.96) translateY(14px);
      }

      .gs-badge-modal-box::-webkit-scrollbar { width: 5px; }
      .gs-badge-modal-box::-webkit-scrollbar-track { background: transparent; }
      .gs-badge-modal-box::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.16); border-radius: 99px; }

      .gs-badge-hero {
        position: relative;
        padding: 28px 24px 20px;
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

      .gs-badge-drag-pill {
        display: none;
        width: 36px;
        height: 4px;
        border-radius: 99px;
        background: rgba(255, 255, 255, 0.22);
        margin: -14px auto 16px;
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

      .gs-badge-pedestal {
        width: 84px;
        height: 84px;
        border-radius: 22px;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.015) 100%);
        border: 1px solid rgba(255, 255, 255, 0.12);
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
        border: 1px solid rgba(255, 255, 255, 0.11);
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

      .gs-badge-status-note {
        margin-top: 8px;
        font-size: 0.78rem;
        color: #a1a1aa;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.07);
        padding: 4px 10px;
        border-radius: 8px;
      }

      /* Cuerpo de acordeones */
      .gs-badge-body {
        padding: 18px 22px 6px;
      }

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
      /* Estilo por defecto para enlaces sin color inline */
      .gs-badge-accordion-content a:not([style*="color"]) {
        color: #ffffff;
      }
      .gs-badge-accordion-content a {
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: opacity 0.15s ease;
      }
      .gs-badge-accordion-content a:hover {
        opacity: 0.85;
      }
      .gs-badge-accordion-content ul,
      .gs-badge-accordion-content ol {
        margin: 6px 0;
        padding-left: 18px;
      }
      .gs-badge-accordion-content img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
      }
      .gs-badge-accordion-content code {
        background: rgba(255, 255, 255, 0.08);
        padding: 2px 6px;
        border-radius: 5px;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.82rem;
      }

      @keyframes gsSlideDown {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* Pie del modal */
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
        .gs-badge-accordion summary::after,
        .gs-badge-accordion-content {
          transition: none !important;
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // 2. Crear estructura del modal
  function crearModal() {
    if (document.getElementById("gs-badge-modal-overlay")) return;
    const overlay = document.createElement("div");
    overlay.id = "gs-badge-modal-overlay";
    overlay.innerHTML = `
      <div class="gs-badge-modal-box" role="dialog" aria-modal="true" aria-labelledby="gs-modal-title">
        <div class="gs-badge-hero">
          <div class="gs-badge-drag-pill" aria-hidden="true"></div>
          <button type="button" class="gs-badge-close" aria-label="Cerrar ventana de insignia" title="Cerrar (Esc)">&times;</button>
          <div class="gs-badge-pedestal">
            <img id="gs-modal-img" src="" alt="" draggable="false">
          </div>
          <span id="gs-modal-category" class="gs-badge-category"></span>
          <h3 id="gs-modal-title"></h3>
          <div id="gs-modal-status" class="gs-badge-status-note" style="display:none;"></div>
        </div>
        <div id="gs-modal-fields" class="gs-badge-body"></div>
        <div class="gs-badge-footer">
          <span class="gs-badge-brand"><span class="gs-badge-brand-dot"></span>Grouvex Studios</span>
          <button type="button" id="gs-modal-copy-id" class="gs-badge-copy-id" title="Copiar identificador de archivo"></button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const box = overlay.querySelector(".gs-badge-modal-box");
    const btnClose = overlay.querySelector(".gs-badge-close");
    const btnCopy = overlay.querySelector("#gs-modal-copy-id");

    btnClose.addEventListener("click", cerrarModal);
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

    // Gesto Swipe-to-Close en pantallas táctiles
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
      if (touchDeltaY > 95 && box.scrollTop <= 0) {
        cerrarModal();
      }
      touchStartY = 0;
      touchDeltaY = 0;
    });

    // Accesibilidad teclado (Esc + Focus Trap)
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("active")) return;

      if (e.key === "Escape") {
        cerrarModal();
        return;
      }

      if (e.key === "Tab") {
        const focusables = box.querySelectorAll('a[href], button, summary, input, select, textarea, [tabindex]:not([tabindex="-1"])');
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

    setTimeout(() => {
      overlay.classList.remove("active", "closing");
      if (ultimoElementoEnfocado && typeof ultimoElementoEnfocado.focus === "function") {
        ultimoElementoEnfocado.focus();
      }
    }, CONFIG.ANIMATION_MS);
  }

  // 3. Rellenar y abrir modal
  function abrirModal(srcOriginal, datos, elementoOrigen) {
    const overlay = document.getElementById("gs-badge-modal-overlay");
    const imgEl = document.getElementById("gs-modal-img");
    const catEl = document.getElementById("gs-modal-category");
    const titleEl = document.getElementById("gs-modal-title");
    const statusEl = document.getElementById("gs-modal-status");
    const fieldsContainer = document.getElementById("gs-modal-fields");
    const btnCopy = document.getElementById("gs-modal-copy-id");

    ultimoElementoEnfocado = elementoOrigen || document.activeElement;

    const yaFallo = Boolean(elementoOrigen?.dataset?.gsImageBroken);

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

    const entradasCampos =
      datos.campos && typeof datos.campos === "object" ? Object.entries(datos.campos) : [];

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
      overlay.querySelector(".gs-badge-close")?.focus();
    });
  }

  function aplicarFallbackNoDisponible(img, datos) {
    if (img.dataset.gsImageBroken === "true") return;
    img.dataset.gsImageBroken = "true";
    if (!img.dataset.gsOriginalSrc && !img.src.startsWith("data:")) {
      img.dataset.gsOriginalSrc = img.getAttribute("src") || img.src;
    }
    img.setAttribute("alt", `Insignia no disponible: ${datos.nombre}`);
    img.src = ESCUDO_403_URI;
  }

  // 4. Auto-enriquecimiento completo de <img>
  function enriquecerAtributosImagen(img, datos) {
    const etiquetaCompleta = datos.categoria
      ? `${datos.nombre} (${datos.categoria})`
      : datos.nombre;

    if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {
      img.setAttribute("alt", `Insignia: ${datos.nombre}`);
    }
    if (!img.hasAttribute("aria-label")) {
      img.setAttribute("aria-label", `Insignia ${etiquetaCompleta}. Pulsa para ver detalles.`);
    }
    if (!img.hasAttribute("aria-haspopup")) {
      img.setAttribute("aria-haspopup", "dialog");
    }
    if (!img.hasAttribute("role")) {
      img.setAttribute("role", "button");
    }
    if (!img.hasAttribute("tabindex")) {
      img.setAttribute("tabindex", "0");
    }

    if (!img.hasAttribute("title") || img.getAttribute("title").trim() === "") {
      img.setAttribute("title", etiquetaCompleta);
    }

    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    if (!img.hasAttribute("draggable")) img.setAttribute("draggable", "false");
    if (!img.hasAttribute("referrerpolicy")) img.setAttribute("referrerpolicy", "no-referrer");

    const tieneDimensionesAtributo = img.hasAttribute("width") || img.hasAttribute("height");
    const tieneDimensionesEstilo = Boolean(img.style.width || img.style.height);
    if (!tieneDimensionesAtributo && !tieneDimensionesEstilo) {
      img.setAttribute("width", String(CONFIG.DEFAULT_SIZE));
      img.setAttribute("height", String(CONFIG.DEFAULT_SIZE));
    }

    img.dataset.gsBadgeName = datos.nombre;
    if (datos.categoria) {
      img.dataset.gsBadgeCategory = datos.categoria;
    } else {
      delete img.dataset.gsBadgeCategory;
    }

    if (img.complete && img.naturalWidth === 0 && !img.src.startsWith("data:")) {
      aplicarFallbackNoDisponible(img, datos);
      return;
    }

    if (!img.dataset.gsErrorHandled) {
      img.dataset.gsErrorHandled = "true";
      img.addEventListener(
        "error",
        () => aplicarFallbackNoDisponible(img, datos),
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
    enriquecerAtributosImagen(img, datos);
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
        if (mutacion.type === "attributes" && mutacion.attributeName === "src") {
          const img = mutacion.target;
          if (!img.src.startsWith("data:")) {
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
      attributeFilter: ["src"]
    });
  }

  // 5. Delegación global de eventos + Precarga
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
      if (src && !src.startsWith("data:") && !urlsPrecargadas.has(src)) {
        urlsPrecargadas.add(src);
        const preloader = new Image();
        preloader.src = src;
      }
    }, true);
  }

  // 6. Inicialización
  function iniciar() {
    indexarBaseDeDatos();
    inyectarEstilos();
    crearModal();
    registrarDelegacionEventos();
    procesarImagenes(document);
    observarRaiz(document.body);
  }

  window.GSInsignias = {
    abrir: (nombreArchivo) => {
      const src = `${CONFIG.BASE_URL}${nombreArchivo}`;
      const datos = obtenerDatosInsignia(src);
      if (datos) abrirModal(src, datos, document.activeElement);
    },
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
