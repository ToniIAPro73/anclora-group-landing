import type { Dictionary } from './types'
import { principles } from '../data/principles'

const es: Dictionary = {
  meta: {
    title: 'Anclora Group · Tecnología aplicada para operar con claridad',
    description:
      'Anclora Group crea productos digitales propios para fiscalidad, automatización, eficiencia, inteligencia inmobiliaria, contenido y operaciones empresariales.',
  },
  nav: {
    ecosystem: 'Ecosistema',
    products: 'Productos',
    method: 'Método',
    founder: 'Fundador',
    principles: 'Principios',
    contact: 'Contacto',
    contactCta: 'Contactar',
  },
  sectionNav: {
    up: 'Subir a la sección anterior',
    down: 'Bajar a la sección siguiente',
  },
  hero: {
    eyebrow: 'Grupo tecnológico liderado por su founder',
    title: 'Anclora Group',
    tagline: 'Tecnología aplicada para operar con más claridad, control e inteligencia.',
    subtitle:
      'Convertimos procesos complejos en sistemas claros: productos digitales propios, construidos para operar.',
    ctaPrimary: 'Explorar el ecosistema',
    ctaSecondary: 'Contactar con Antonio',
    microcopy: 'Grupo tecnológico founder-led · Construido desde Mallorca · Diseñado para inteligencia práctica',
    instrumentCaption: 'Cada marca del anillo representa una línea de negocio activa del ecosistema Anclora.',
  },
  ecosystem: {
    title: 'Cinco líneas de operación. Un solo sistema de control.',
    text: 'Anclora Group combina producto, automatización, datos e inteligencia aplicada para construir herramientas prácticas en áreas donde la claridad operativa marca la diferencia.',
    lines: {
      'fiscal-compliance': { name: 'Fiscalidad y Cumplimiento', description: 'Fiscalidad, facturación y cumplimiento.' },
      'operational-automation': { name: 'Automatización Operativa', description: 'Automatización documental y operativa.' },
      'energy-efficiency': { name: 'Energía y Eficiencia', description: 'Eficiencia energética y análisis.' },
      'real-estate-intelligence': { name: 'Inteligencia Inmobiliaria', description: 'Inteligencia inmobiliaria y activos premium.' },
      'publishing-digital-knowledge': { name: 'Publicaciones y Conocimiento Digital', description: 'Contenido, conocimiento y editorial.' },
    },
  },
  evidence: {
    title: 'Evidencia operativa',
    metrics: [
      { value: '05', label: 'líneas activas', detail: 'Fiscalidad, automatización, energía, inmobiliario y conocimiento.' },
      { value: '09', label: 'productos conectados', detail: 'Un catálogo propio que comparte criterios, datos y seguridad.' },
      { value: '01', label: 'sistema de control', detail: 'Una forma común de operar, priorizar y escalar cada producto.' },
    ],
  },
  products: {
    title: 'Productos propios.',
    ctaView: 'Ver producto',
    items: {
      'anclora-fiscal': { description: 'Fiscalidad, facturación y cumplimiento para operaciones digitales.', status: 'ecosistema interno' },
      'anclora-guesthub': { description: 'Gestión de huéspedes, check-in y operación de alquiler vacacional.', status: 'ecosistema interno' },
      'anclora-energyscan': { description: 'Informes digitales para analizar ahorro y eficiencia energética.', status: 'ecosistema interno' },
      'anclora-private-estates': { description: 'Línea inmobiliaria premium centrada en Mallorca y activos selectos.', status: 'ecosistema interno' },
      'anclora-insights': { description: 'Sello editorial y productos digitales de conocimiento aplicado.', status: 'ecosistema interno' },
      'anclora-nexus': { description: 'Capa de intake, señales y orquestación del ecosistema.', status: 'ecosistema interno' },
      'anclora-command-center': { description: 'Cabina central para visualizar operaciones, productos y prioridades.', status: 'ecosistema interno' },
      'anclora-synergi': { description: 'Inteligencia comercial y automatización aplicada al entorno inmobiliario.', status: 'ecosistema interno' },
      'anclora-data-lab': { description: 'Análisis de datos e inteligencia aplicada para decisiones estratégicas.', status: 'ecosistema interno' },
    },
  },
  infrastructure: {
    text: 'Cada producto de Anclora comparte los mismos datos, la misma seguridad y la misma forma de trabajar — así que encajan entre sí desde el primer día.',
  },
  method: {
    title: 'Método Anclora',
    intro: 'Un sistema de trabajo en cuatro fases para convertir fricción real en productos claros, estructurados y escalables.',
    metadata: '4 fases · claridad · control · escalabilidad',
    steps: [
      { title: 'Observar', description: 'Detectar fricción real y contexto operativo.' },
      { title: 'Diseñar', description: 'Convertir el problema en un producto mínimo útil.' },
      { title: 'Anclar', description: 'Crear estructura, datos, flujos y control.' },
      { title: 'Escalar', description: 'Preparar el sistema para crecer sin perder claridad.' },
    ],
  },
  founder: {
    title: 'Liderado por su founder, impulsado por producto.',
    body:
      'Anclora Group está impulsado por Antonio Ballesteros, consultor senior especializado en sistemas Oracle, arquitectura técnica, automatización e inteligencia artificial aplicada. Desde Mallorca, desarrolla un ecosistema de productos digitales propios con una premisa clara: transformar procesos complejos en herramientas útiles, visuales y operativas.',
    portraitAlt: 'Retrato de Antonio Ballesteros, founder de Anclora Group',
  },
  principles: {
    title: 'Principios',
    items: principles,
  },
  contact: {
    title: 'Construyamos con claridad.',
    body: 'Colaboraciones, pilotos o conversaciones estratégicas sobre el ecosistema Anclora. Habla directamente con Antonio — sin intermediarios.',
    email: 'antonio@anclora.com',
    cta: 'Contactar con Antonio',
    subject: 'Consulta desde Anclora Group',
  },
  footer: {
    claim: 'Anclora Group · Tecnología aplicada para operar con claridad.',
    copyright: `© ${new Date().getFullYear()} Anclora Group — Todos los derechos reservados.`,
    legalLinks: {
      privacy: 'Privacidad',
      terms: 'Términos',
      legal: 'Aviso legal',
      cookies: 'Cookies',
    },
  },
  cookies: {
    bannerText:
      'Este sitio solo utiliza cookies técnicas necesarias para su funcionamiento. No usamos cookies de analítica ni de marketing.',
    understood: 'Entendido',
    moreInfo: 'Más información',
    modalTitle: 'Gestión de cookies',
    modalIntro:
      'Anclora Group solo utiliza cookies técnicas, imprescindibles para el funcionamiento del sitio. No usamos cookies de analítica ni de marketing.',
    closeLabel: 'Cerrar',
    necessaryTitle: 'Cookies necesarias',
    necessaryDescription:
      'Imprescindibles para el funcionamiento del sitio: gestión de sesión, seguridad y preferencia de idioma. No requieren consentimiento y no pueden desactivarse.',
    necessaryAlwaysOn: 'Siempre activas',
  },
  legal: {
    pendingNotice: 'Este contenido está pendiente de revisión legal definitiva. Se actualizará antes del lanzamiento público.',
    backHome: 'Volver al inicio',
    privacy: {
      title: 'Política de Privacidad',
      body: 'Este documento describirá cómo Anclora Group recopila, utiliza y protege los datos personales de las personas que visitan anclora.com. Para cualquier consulta sobre privacidad, escribe a antonio@anclora.com.',
    },
    terms: {
      title: 'Términos y Condiciones',
      body: 'Este documento describirá las condiciones de uso del sitio anclora.com y de los servicios ofrecidos por Anclora Group. Para cualquier consulta, escribe a antonio@anclora.com.',
    },
    legal: {
      title: 'Aviso Legal',
      body: 'Este documento incluirá la información legal de identificación de Anclora Group como titular de este sitio web, conforme a la normativa aplicable. Para cualquier consulta, escribe a antonio@anclora.com.',
    },
    cookiesPage: {
      title: 'Política de Cookies',
      body: 'Este documento describirá en detalle el uso de cookies en anclora.com. Actualmente el sitio solo utiliza cookies técnicas necesarias para su funcionamiento; no se usan cookies de analítica ni de marketing. Para cualquier consulta, escribe a antonio@anclora.com.',
    },
  },
}

export default es
