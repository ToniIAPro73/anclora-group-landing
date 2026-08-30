# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Audiencia mixta: visitantes evaluando el ecosistema Anclora Group tanto desde una lógica de portfolio técnico como desde una lógica de negocio real — potenciales clientes, partners y colaboradores de cualquiera de las cinco líneas de producto, además de cualquiera que quiera entender qué es Anclora Group y cómo se organiza.

## Product Purpose

Landing pública que actúa como puerta de entrada corporativa del ecosistema Anclora Group. Explica la marca en menos de 5 segundos y transmite que se trata de una organización tecnológica coherente — no una colección dispersa de proyectos — dirigida por su fundador, Antonio Ballesteros. No vende un producto concreto: vende la credibilidad y coherencia del grupo, y desde ahí conduce al visitante hacia las soluciones especializadas (landings propias de cada producto).

Éxito significa:
- Comunicar el ángulo estratégico ("construimos sistemas digitales claros para operar mejor") sin caer en discurso genérico de "hacemos IA".
- Presentar el ecosistema con jerarquía clara (líneas estratégicas → productos Nivel 1 con protagonismo comercial → Nivel 2 de infraestructura interna).
- Generar confianza mostrando el estado real de cada producto (MVP, piloto, activo, en desarrollo) sin inventar disponibilidad, métricas ni clientes.
- Legitimar el carácter founder-led sin parecer CV personal ni proyecto amateur: autoridad técnica, criterio, ejecución — no personalismo.
- Convertir dirigiendo al visitante hacia el CTA principal (Explorar el ecosistema) y el CTA secundario (Contactar con Antonio → antonio@anclora.com), y servir de nodo central de navegación hacia las landings específicas de cada producto/línea.

## Positioning

Anclora Group es una boutique tecnológica founder-led que diseña, valida y opera productos digitales propios para fiscalidad, automatización, inteligencia inmobiliaria, eficiencia energética, contenido y operaciones empresariales. El mecanismo diferencial: sistemas digitales claros y propios que reducen fricción operativa real, no una consultora de "transformación digital con IA" genérica.

## Operating Context

- Ecosistema de 9 productos organizados en 5 líneas estratégicas (Fiscal & Compliance, Operational Automation, Energy & Efficiency, Real Estate Intelligence, Publishing & Digital Knowledge), cada una con jerarquía de visibilidad (Nivel 1 comercial, Nivel 2 infraestructura, Nivel 3 oculto deliberadamente).
- Sistema multilingüe: ES (por defecto), CAT, EN, DE, FR, IT — el tono se localiza, no se traduce literalmente.
- Dominio objetivo de despliegue: `anclora.com`.
- La landing es un nodo de navegación hacia las landings propias de cada producto/línea; no reemplaza su contenido.

## Capabilities and Constraints

- React 19 + Vite + TypeScript, con i18n propio (6 idiomas) y tests con Vitest + Testing Library.
- Secciones confirmadas: Header, Hero, Ecosistema, Productos, Infraestructura, Método, Founder, Principios, Contacto, Footer.
- Los productos Nivel 3 no deben mostrarse bajo ninguna circunstancia (protege foco y madurez percibida).
- El estado de cada producto (MVP / piloto / activo / en desarrollo) debe mostrarse con precisión, nunca inflado.
- No inventar disponibilidad, métricas de uso ni clientes: no existe evidencia real de ese tipo (ver Evidence on Hand).
- Repositorio público reducido: no debe exponer lógica operativa, secretos ni datos reales internos.

## Brand Commitments

- Nombre de marca matriz: **Anclora Group**. Fundador: **Antonio Ballesteros**, consultor senior en sistemas Oracle, arquitectura técnica, automatización e IA aplicada, con base en Mallorca.
- Tagline oficial (ES): "Tecnología aplicada para operar con más claridad, control e inteligencia."
- Arquetipos de voz: El Arquitecto Operativo (principal) y El Navegante (secundario). Tono: claro, estratégico, sobrio, preciso, premium, humano, orientado a ejecución.
- Evitar explícitamente: humo IA, promesas exageradas, lenguaje grandilocuente, apariencia de consultora genérica o portfolio disperso; no debe parecer CV personal.
- Identidad visual y sistema de marca ("Premium Naval Tech") ya cerrados en `brand/anclora-group-brand-book-v2.md` — logo, paleta, tipografía y tokens definidos y disponibles en `src/assets/`.
- Método Anclora (4 pasos): Observe → Design → Anchor → Scale.
- Los cinco principios de marca (sección 13 del brand book) son copy canónico brand-locked, ya implementado en `src/data/principles.ts`.

## Evidence on Hand

- Copy base, jerarquía de productos y descripciones: brand-locked en `brand/anclora-group-brand-book-v2.md` y reflejados en `src/data/products.ts`, `src/data/ecosystem.ts`, `src/data/principles.ts`.
- Assets de marca reales disponibles: logo (medalla, lockups, monocromos), favicons — en `src/assets/` y `public/`.
- **Ausencia confirmada:** no existen testimonios, casos de cliente, cifras de uso ni métricas reales. Trabajo futuro no debe fabricar ninguno de estos elementos — el estado de cada producto se comunica tal cual (MVP / piloto / activo / en desarrollo), sin prueba social inventada.

## Product Principles

1. Claridad antes que complejidad — la tecnología debe ordenar, no añadir ruido.
2. IA aplicada, no decorativa — solo cuenta cuando mejora una decisión, tarea o proceso concreto.
3. Producto antes que promesa — cada iniciativa resuelve una fricción real; la landing no promete lo que el producto no demuestra.
4. Control por diseño — privacidad, trazabilidad y gobernanza son parte del producto, no añadidos de marketing.
5. Ejecución antes que narrativa — se muestra jerarquía y estado real de madurez, nunca disponibilidad inflada.

## Accessibility & Inclusion

Contraste WCAG verificado en el sistema de color oficial (ver sección 5.3 del brand book): todas las combinaciones de texto documentadas cumplen o superan los ratios mínimos. Ningún requisito de accesibilidad adicional específico del producto fue establecido más allá de este estándar de contraste.
