# Prompt Maestro End-to-End — Landing Page Anclora Group (v3)

**Estado:** Sustituye a `anclora-group-prompt-maestro-landing-v2.md`.
**Motivo de la revisión:** v2 se apoyaba en el brand book v1.0. Esta versión incorpora el **brand book v2.0 definitivo**: tabla de contrastes WCAG medida, escala tipográfica concreta, tokens de espaciado/radio/movimiento, favicons ya producidos y un piso de calidad anti-genérico con criterios de verificación acotados.
**Uso:** instrucción principal end-to-end para un agente IA de desarrollo (Claude Code, Codex o equivalente) que implementará la landing completa de Anclora Group en `anclora.com`.
**Documentos de referencia obligatoria** (adjuntar junto a este prompt):
```text
anclora-group-brand-book-v2.md        (fuente única de verdad de la identidad)
anclora-group-logo-assets.zip         (medalla, lockups, monocromos, favicons)
```

---

# PROMPT MAESTRO

Actúa como un agente senior full-stack especializado en diseño premium, frontend moderno, arquitectura de producto, branding tecnológico y experiencia de usuario multilingüe.

Tu tarea es crear la landing page completa de **Anclora Group**, asociada al dominio:

```text
anclora.com
```

La landing debe presentar la identidad de marca, el ecosistema de productos y la figura founder-led de Antonio Ballesteros con una ejecución visual premium, sobria, tecnológica, clara y escalable.

**La identidad de marca está cerrada y validada en `anclora-group-brand-book-v2.md`. No debes reinterpretarla, rediseñarla ni proponer alternativas de paleta, tipografía o logo. Tu trabajo es implementación, no diseño de marca. Ante cualquier duda entre este prompt y el brand book v2.0, gana el brand book.**

---

## 1. Contexto de marca

**Anclora Group** es una marca matriz tecnológica founder-led impulsada por **Antonio Ballesteros**.

Diseña, valida y opera productos digitales propios orientados a reducir fricción operativa, mejorar decisiones y convertir procesos complejos en sistemas claros, útiles y escalables.

La marca debe transmitir: `claridad · control · inteligencia aplicada · confianza · precisión · dirección · ejecución`.

**No debe parecer:** una agencia IA genérica, una consultora tradicional, una colección dispersa de experimentos, un portfolio freelance, una landing de lujo vacía.

**Debe parecer:** una boutique tecnológica premium, un ecosistema founder-led de productos digitales, una marca matriz con visión estratégica, una cabina de control tecnológica, un sistema bien anclado.

---

## 2. Posicionamiento

> Anclora Group es una boutique tecnológica founder-led que crea productos digitales premium para fiscalidad, automatización, inteligencia inmobiliaria, eficiencia, contenido y operaciones empresariales.

El ángulo correcto no es «hacemos IA». El ángulo correcto es:

```text
construimos sistemas digitales claros para operar mejor.
```

**Tagline principal:**
```text
Tecnología aplicada para operar con más claridad, control e inteligencia.
```

**Versión alternativa (hero):**
```text
Productos digitales para convertir procesos complejos en sistemas claros, útiles y escalables.
```

---

## 3. Dominio y contacto

```text
Dominio objetivo: anclora.com
Email de contacto principal: antonio@anclora.com
```

No usar como contacto principal otros alias de correo, aunque existan.

---

## 4. Dirección visual

```text
Premium Naval Tech
```

La landing debe sentirse como una cabina de mando: oscura, precisa, metálica, modular, ordenada y tecnológica.

Metáforas visuales: anclaje · navegación · flujo · ecosistema · control operativo · profundidad · señales · capas · sistemas conectados.

Evitar por completo la estética editorial de papel, tinta y serif propia de Anclora Insights. Anclora Group es la marca matriz tecnológica, no el sello editorial.

---

## 5. Logo — assets reales, uso obligatorio

El logo ya existe como archivo de producción. **No generar el logo, no reinterpretarlo, no crear una versión alternativa.** Usar exclusivamente los archivos entregados en `anclora-group-logo-assets.zip`:

| Archivo | Uso obligatorio en la landing |
|---|---|
| `anclora-group-medalla-1024.webp` | Sello visual en hero, app icon. Usar `.webp` en producción por peso (6× más ligero que el PNG) |
| `anclora-group-lockup-horizontal-sobre-oscuro.png` | Header de la landing (fondo navy) |
| `anclora-group-lockup-horizontal-sobre-claro.png` | Header en modo claro, si se implementa |
| `anclora-group-lockup-vertical-sobre-oscuro.png` | Secciones destacadas sobre fondo oscuro, si encaja |
| `anclora-group-lockup-vertical-sobre-claro.png` | Piezas sobre fondo claro |
| `anclora-group-monocromo-claro.png` | Marca de agua, footer, usos reducidos sobre fondo oscuro |
| `anclora-group-monocromo-oscuro.png` | Usos reducidos sobre fondo claro |
| `favicon.ico` + `anclora-group-favicon-{32,64,180,512}.png` | Favicons y app icons — **ya producidos, incluidos en el zip; no regenerarlos** |

Interpretación conceptual del símbolo (para copy o microcopy si es necesario, no para regenerar el asset): círculo = ecosistema/protección/unidad · borde metálico = solidez/calidad/estructura · fondo navy texturizado = profundidad/tecnología/estabilidad · tres ondas = flujo/navegación/movimiento controlado · plata = precisión/modernidad/confianza.

Reglas de uso:

```text
No deformar el círculo.
No recortar el anillo metálico.
No recolorear las ondas fuera de plata/blanco sobre navy.
No añadir sombras adicionales — el relieve metálico ya aporta profundidad.
No usar sobre fondos con bajo contraste.
Margen de seguridad mínimo: 20% del diámetro del círculo en todos los usos.
Tamaño mínimo legible: 24px de diámetro.
```

---

## 6. Sistema de color — oficial, resuelto

Esta paleta sustituye cualquier paleta provisional mencionada en documentos anteriores. Es la única válida.

| Token | Hex | Uso |
|---|---:|---|
| **Anchor Navy** | `#0A1F3D` | Fondo principal |
| **Deep Ocean** | `#111827` | Secciones y superficies |
| **Command Purple** | `#6C63FF` | Acento tecnológico principal |
| **Signal Blue** | `#5FA8FF` | Enlaces, acciones, estados activos |
| **Anclora Silver** | `#E5E7EB` | Líneas, brillos, logo, detalles |
| **Anclora Gold** | `#C5A059` | Énfasis premium mínimo — uso restringido |
| **Harbor Mist** | `#CBD5E1` | Texto secundario |
| **White Deck** | `#F8FAFC` | Fondos claros, texto principal sobre navy |

### Contraste medido (WCAG) — respetar exactamente

| Combinación | Ratio | Uso permitido |
|---|---:|---|
| White Deck sobre Anchor Navy | 15.7:1 | Todo texto |
| Harbor Mist sobre Anchor Navy | 11.1:1 | Todo texto (incl. secundario) |
| Harbor Mist sobre Deep Ocean | 11.9:1 | Todo texto |
| Signal Blue sobre Anchor Navy | 6.7:1 | Texto y enlaces |
| Anclora Gold sobre Anchor Navy | 6.7:1 | Acentos y texto grande |
| **Command Purple sobre Anchor Navy** | **3.8:1** | **Solo texto grande (≥24px) y elementos gráficos. Prohibido como texto de cuerpo o labels pequeños sobre navy** |
| Anchor Navy sobre White Deck | 15.7:1 | Todo texto en secciones claras |

Nota crítica: si un botón usa fondo Command Purple, su texto debe ser White Deck (15.7:1 sobre purple ≈ 4.6:1, AA válido). No poner texto Command Purple pequeño sobre fondo navy.

Reglas:

```text
El dark mode es la estética principal y obligatoria.
El texto secundario sobre navy se tiñe desde la paleta (Harbor Mist), nunca gris neutro fuera de sistema.
El oro se usa solo como acento premium selectivo: badges puntuales, líneas finas, detalles de confianza en footer.
Prohibido: botones grandes en oro, fondos dorados extensos, cualquier uso que compita con Anclora Insights.
```

---

## 7. Tipografía y escala

```text
DM Sans — titulares, navegación, texto general, botones, cards, formularios. Pesos 400/600/700/800.
JetBrains Mono — métricas, badges técnicos, etiquetas de sistema, IDs, microdatos.
```

Prohibido usar serif editorial en cualquier titular. Esa estética pertenece exclusivamente a Anclora Insights. JetBrains Mono se reserva a datos, código y señales — nunca como recurso decorativo para «parecer técnico».

Escala recomendada (del brand book v2.0):

| Nivel | Tamaño | Peso | Tracking |
|---|---|---|---|
| Display (hero) | 48–72px (máx. 6rem) | 800 | −0.02em a −0.03em |
| H2 sección | 30–40px | 700–800 | −0.02em |
| H3 / card | 20–24px | 600 | 0 |
| Cuerpo | 16–18px | 400 | 0 |
| Secundario / caption | 13–14px | 400 | 0 |
| Dato / badge (mono) | 12–13px | 500 | +0.02em |

Medida de cuerpo: 65–75 caracteres. Fuentes vía Google Fonts o auto-hospedadas si se requiere evitar llamadas externas en producción.

---

## 8. Tokens de espaciado, forma y movimiento

Implementar como tokens CSS desde el primer commit, junto a los de color:

```css
:root {
  /* Color (sección 6) */
  --anchor-navy: #0A1F3D;  --deep-ocean: #111827;
  --command-purple: #6C63FF; --signal-blue: #5FA8FF;
  --anclora-silver: #E5E7EB; --anclora-gold: #C5A059;
  --harbor-mist: #CBD5E1;  --white-deck: #F8FAFC;
  /* Espaciado (base 8) */
  --space-1: 8px;  --space-2: 16px; --space-3: 24px;
  --space-4: 32px; --space-6: 48px; --space-8: 64px; --space-12: 96px;
  /* Radio */
  --radius-control: 8px;   /* botones, inputs, badges */
  --radius-card: 14px;     /* cards y superficies (12–16px) */
  /* Movimiento */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 160ms; --dur-base: 220ms;
  /* Elevación (una sola declaración: borde O sombra, no ambas) */
  --border-subtle: 1px solid rgba(229, 231, 235, 0.12);
}
```

Ritmo vertical: más espacio encima de un encabezado que debajo; una sección densa se compensa con una tranquila. Respetar `prefers-reduced-motion`: desactivar animaciones de entrada y cualquier movimiento decorativo.

---

## 9. Idiomas

```text
ES / CAT / EN / DE / FR / IT — por defecto: ES
```

Selector visible pero discreto. No traducir literalmente — localizar el tono. Todo el contenido centralizado en un diccionario i18n para facilitar revisión posterior por hablante nativo antes de publicación comercial seria.

| Idioma | Tagline | CTA principal | CTA secundario |
|---|---|---|---|
| ES | Tecnología aplicada para operar con más claridad, control e inteligencia. | Explorar el ecosistema | Contactar con Antonio |
| CAT | Tecnologia aplicada per operar amb més claredat, control i intel·ligència. | Explorar l'ecosistema | Contactar amb l'Antonio |
| EN | Applied technology for clearer operations, greater control and smarter decisions. | Explore the ecosystem | Contact Antonio |
| DE | Angewandte Technologie für klarere Abläufe, mehr Kontrolle und intelligentere Entscheidungen. | Ökosystem entdecken | Antonio kontaktieren |
| FR | Une technologie appliquée pour des opérations plus claires, plus de contrôle et des décisions plus intelligentes. | Explorer l'écosystème | Contacter Antonio |
| IT | Tecnologia applicata per operare con più chiarezza, controllo e intelligenza. | Esplora l'ecosistema | Contattare Antonio |

---

## 10. Arquitectura de marca y productos

### Líneas estratégicas

| Línea | Función | Productos |
|---|---|---|
| Fiscal & Compliance | Fiscalidad, facturación, cumplimiento | Anclora Fiscal |
| Operational Automation | Automatización documental y operativa | Nexus, Command Center |
| Energy & Efficiency | Eficiencia energética y análisis | EnergyScan |
| Real Estate Intelligence | Inteligencia inmobiliaria y activos premium | GuestHub, Private Estates, Synergi, Data LAB |
| Publishing & Digital Knowledge | Contenido, conocimiento, editorial | Anclora Insights |

### Jerarquía pública — obligatoria, no alterar

**Nivel 1 — mayor peso visual:** Anclora Fiscal · Anclora GuestHub · Anclora EnergyScan · Anclora Private Estates · Anclora Insights

**Nivel 2 — menor peso comercial:** Anclora Nexus · Anclora Command Center · Anclora Synergi · Anclora Data LAB

**Nivel 3 — ocultos por ahora:** todos los demás productos del ecosistema. Motivo: proteger foco, madurez percibida y claridad comercial. No mostrar productos de nivel 3 bajo ninguna circunstancia, aunque el agente los detecte en el histórico del proyecto.

Descripciones de producto (usar tal cual, no reescribir):

```text
Anclora Fiscal — Fiscalidad, facturación y cumplimiento para operaciones digitales.
Anclora GuestHub — Gestión de huéspedes, check-in y operación de alquiler vacacional.
Anclora EnergyScan — Informes digitales para analizar ahorro y eficiencia energética.
Anclora Private Estates — Línea inmobiliaria premium centrada en Mallorca y activos selectos.
Anclora Insights — Sello editorial y productos digitales de conocimiento aplicado.
Anclora Nexus — Capa de intake, señales y orquestación del ecosistema.
Anclora Command Center — Cabina central para visualizar operaciones, productos y prioridades.
Anclora Synergi — Inteligencia comercial y automatización aplicada al entorno inmobiliario.
Anclora Data LAB — Análisis de datos e inteligencia aplicada para decisiones estratégicas.
```

Cada producto de Nivel 1 muestra además un estado prudente si no se conoce el exacto: `en desarrollo` / `en validación` / `en piloto` / `ecosistema interno`. No inventar estados.

---

## 11. Estructura obligatoria de la landing

### 11.1 Header

```text
Lockup horizontal (anclora-group-lockup-horizontal-sobre-oscuro.png)
Navegación: Ecosistema, Productos, Método, Founder, Contacto
Selector de idioma
CTA compacto: Contactar
```

Requisitos: sticky o semi-sticky, fondo navy translúcido con blur funcional, borde inferior sutil (`--anclora-silver` al 8–12% opacidad), responsive, menú móvil claro y accesible.

### 11.2 Hero

Objetivo: explicar la marca en menos de 5 segundos.

```text
[Medalla — anclora-group-medalla-1024.webp]
Anclora Group
Tecnología aplicada para operar con más claridad, control e inteligencia.
Creamos productos digitales propios para transformar procesos complejos en sistemas claros, útiles y escalables.

CTA: Explorar el ecosistema
CTA: Contactar con Antonio

Microcopy: Founder-led technology group · Built from Mallorca · Designed for practical intelligence
```

Visual: la medalla como artefacto principal, ondas o líneas de flujo sutiles, fondo navy con profundidad (gradientes radiales muy sutiles, máx. 8–10% de variación). **No usar ilustraciones genéricas de IA (cerebros, circuitos, robots, partículas abstractas de stock).**

### 11.3 Ecosistema

Título: **Un ecosistema de productos conectados por una misma idea: reducir fricción real.**

Texto: Anclora Group combina producto, automatización, datos e inteligencia aplicada para construir herramientas prácticas en áreas donde la claridad operativa marca la diferencia.

Las cinco líneas estratégicas (sección 10) en cards grandes — no listado plano — cada una con: nombre de línea, descripción breve, productos relacionados, indicador visual sobrio. Variar la composición para que no sean cinco tiles idénticos: jerarquía de tamaños o disposición asimétrica dentro del grid de 12 columnas.

### 11.4 Productos destacados

Cards para los cinco productos de Nivel 1, cada una con: nombre, categoría (línea estratégica), descripción de una línea (sección 10), estado, CTA contextual («Ver producto»).

### 11.5 Infraestructura del ecosistema

Título: **La capa operativa que conecta el ecosistema.**

Los cuatro productos de Nivel 2 con menor peso visual que Nivel 1 (formato más compacto: filas o cards reducidas). Texto: Bajo cada producto existe una capa común de intake, datos, señales, automatización y control operativo.

### 11.6 Método Anclora

```text
1. Observar — detectar fricción real y contexto operativo.
2. Diseñar — convertir el problema en un producto mínimo útil.
3. Anclar — crear estructura, datos, flujos y control.
4. Escalar — preparar el sistema para crecer sin perder claridad.
```

En inglés (`Observe / Design / Anchor / Scale`) para la versión EN del sitio. Formato: secuencia conectada (línea de proceso), no cuatro cards aisladas.

### 11.7 Founder

Título: **Founder-led, product-driven.**

```text
Anclora Group está impulsado por Antonio Ballesteros, consultor senior especializado en sistemas Oracle, arquitectura técnica, automatización e inteligencia artificial aplicada.

Desde Mallorca, desarrolla un ecosistema de productos digitales propios con una premisa clara: transformar procesos complejos en herramientas útiles, visuales y operativas.
```

Máximo 120–150 palabras. No convertir esta sección en un CV ni hacerla excesivamente personal. Debe transmitir autoridad técnica, criterio estratégico y ejecución real.

### 11.8 Principios

```text
Claridad antes que complejidad. — La tecnología debe ordenar, no añadir ruido.
IA aplicada, no decorativa. — La inteligencia artificial solo tiene sentido cuando mejora una decisión, una tarea o un proceso.
Producto antes que promesa. — Cada iniciativa debe resolver una fricción concreta.
Control por diseño. — Privacidad, trazabilidad y gobernanza forman parte del producto, no son añadidos posteriores.
Ejecución antes que narrativa. — Una idea solo cuenta cuando se convierte en sistema, interfaz o flujo útil.
```

### 11.9 Contacto

Título: **Construyamos con claridad.**

```text
Para colaboraciones, producto, pilotos o conversaciones estratégicas sobre el ecosistema Anclora, contacta directamente con Antonio.

Email visible: antonio@anclora.com
CTA: Contactar con Antonio
```

El CTA abre `mailto:antonio@anclora.com` con asunto sugerido: `Consulta desde Anclora Group`.

### 11.10 Footer

```text
Monocromo claro (anclora-group-monocromo-claro.png) o lockup reducido
Claim corto: Anclora Group · Tecnología aplicada para operar con claridad.
Email principal · Selector de idiomas · Copyright · Links internos si existen
Detalle de confianza en oro fino (línea o badge), el único oro visible de la página
```

---

## 12. Piso de calidad — anti-genérico (obligatorio)

La landing no debe parecer «la landing que cualquier IA genera para una tech». Prohibido salvo que el brand book lo pida explícitamente:

```text
Gradient text en titulares. El énfasis viene de peso y tamaño.
Texto con tracking superior a -0.04em; el rango correcto es -0.02 a -0.03em.
Cards idénticas de icono+título+texto como estructura de todas las secciones.
Una eyebrow en mayúsculas tracked encima de cada sección sin sistema.
Sombras de color sin offset (halos decorativos). La elevación se declara una vez: borde O sombra.
JetBrains Mono como disfraz de «técnico» en párrafos o titulares.
Glass/blur como decoración sin función.
Imágenes stock, ilustraciones genéricas de IA, mockups de dispositivos sin propósito.
Parallax agresivo, partículas, cursores personalizados, loaders artificiales.
Múltiples animaciones de entrada idénticas repetidas por sección.
```

Obligatorio:

```text
Un solo momento de movimiento cuidado (p. ej. la entrada del hero con ease-out exponencial), no efectos dispersos.
Estados reales en todo lo interactivo: hover, focus visible, active. Navegación por teclado completa.
Copy real en español en todo el viewport a todos los breakpoints — verificar que nada desborda.
```

---

## 13. Requisitos de UI/UX

```text
Diseño responsive, mobile-first. Grid 12 columnas desktop / 4 mobile.
Dark mode como estética principal y obligatoria.
Modo claro opcional, pero perfectamente legible — usar variantes «sobre claro» del logo.
Cards con fondo --deep-ocean, borde sutil (--anclora-silver al 10–12%), glow moderado en hover.
Animaciones de 160–220ms con --ease-out. Sin exceso de gradientes.
Jerarquía visual clara. Contraste alto. Carga rápida (medalla en .webp, fuentes con display=swap).
```

---

## 14. Requisitos técnicos

Arquitectura limpia. Si se usa React/Next/Vite, separar:

```text
src/
  components/
    Header.tsx, Footer.tsx, LanguageSwitcher.tsx
    ProductCard.tsx, EcosystemCard.tsx, SectionHeader.tsx
  sections/
    Hero.tsx, Ecosystem.tsx, Products.tsx, Infrastructure.tsx
    Method.tsx, Founder.tsx, Principles.tsx, Contact.tsx
  data/
    products.ts, ecosystem.ts, principles.ts
  i18n/
    es.ts, ca.ts, en.ts, de.ts, fr.ts, it.ts
  styles/
    tokens.css, globals.css
  assets/
    logo/   (todos los archivos del zip, copiados literalmente)
    favicon/ (favicon.ico + PNGs 32/64/180/512)
```

Requisitos mínimos:

```text
TypeScript estricto (si aplica al stack elegido).
Sin datos hardcodeados repartidos por componentes — contenido centralizado en /data e /i18n.
Diseño responsive mobile-first. Componentes reutilizables. Código legible.
Sin dependencias innecesarias. Sin llamadas externas salvo fuentes tipográficas.
Los archivos de /assets/logo/ se copian literalmente del zip — no regenerar, no recomprimir con pérdida, no recolorear.
```

---

## 15. Requisitos SEO

```text
title: Anclora Group · Tecnología aplicada para operar con claridad
description: Anclora Group crea productos digitales propios para fiscalidad, automatización, eficiencia, inteligencia inmobiliaria, contenido y operaciones empresariales.
canonical: https://anclora.com
og:title: Anclora Group
og:description: Tecnología aplicada para operar con más claridad, control e inteligencia.
og:type: website
og:url: https://anclora.com
og:image: versión 1200×630 derivada del lockup horizontal sobre oscuro
hreflang: es, ca, en, de, fr, it (si las rutas por idioma existen)
```

Añadir datos estructurados `Organization` (JSON-LD) con nombre, URL, logo y email. No hacer afirmaciones exageradas de liderazgo, certificaciones o clientes no confirmados.

---

## 16. Requisitos de accesibilidad

```text
Contraste AA como mínimo, aplicando la tabla medida de la sección 6 (crítico: Command Purple).
Botones con labels claros que nombran su acción.
Navegación por teclado completa y estados focus visibles.
Alt text descriptivo para el logo en todas sus variantes.
No depender solo del color para comunicar estados (usar también texto/icono).
Respetar prefers-reduced-motion.
Menú móvil accesible (aria-expanded, cierre con Escape, foco gestionado).
```

---

## 17. Requisitos de contenido

**Evitar:** humo IA, claims grandilocuentes, promesas no verificables, jargon innecesario, exceso de tecnicismos, listas caóticas de apps.

**Usar:** frases cortas, jerarquía clara, copy accionable, tono premium sin artificio, descripciones concretas.

Frases correctas:
```text
Diseñamos productos digitales para reducir fricción operativa.
Convertimos procesos complejos en sistemas claros.
Creamos herramientas propias para operar con más control.
Construimos tecnología aplicada, no ruido.
```

Frases a evitar:
```text
Revolucionamos el futuro de la IA.
Somos líderes mundiales en transformación digital.
Automatizamos todo con inteligencia artificial.
La solución definitiva para todos los negocios.
```

---

## 18. Verificación acotada (no iterar en bucle)

Verificar en pasadas acotadas, no en bucle abierto:

```text
1. Construir la landing completa.
2. Una única ronda de inspección con capturas desktop (1440px) y mobile (390px) a la vez.
3. Corregir en un solo batch todo lo que esa ronda revele (overflows, contraste, jerarquía, estados).
4. Máximo una ronda de confirmación adicional. Después, parar: no seguir puliendo.
5. Si el entorno lo permite: build + lint sin errores.
```

---

## 19. Criterios de aceptación

```text
La landing explica Anclora Group en menos de 5 segundos.
La jerarquía de productos respeta los niveles 1/2/3 de la sección 10.
La estética es premium, tecnológica y naval — no editorial ni genérica (sección 12).
El logo real se usa correctamente en todas sus variantes, sin regenerar ni recolorear.
La paleta y los tokens implementados coinciden exactamente con las secciones 6 y 8.
Los contrastes aplicados respetan la tabla medida de la sección 6.
El email principal es antonio@anclora.com. El dominio objetivo es anclora.com.
El idioma por defecto es ES, con i18n centralizado para ES/CAT/EN/DE/FR/IT.
La web es responsive y accesible (AA), con prefers-reduced-motion respetado.
No se muestran productos de Nivel 3. No hay claims no demostrados.
```

---

## 20. Entregables esperados

```text
1. Landing page implementada.
2. Componentes reutilizables.
3. Diccionario multilingüe centralizado.
4. Datos de productos centralizados.
5. Sistema visual con tokens (coincidente con secciones 6 y 8).
6. Assets de logo y favicons integrados literalmente desde el zip.
7. SEO básico + JSON-LD Organization.
8. Responsive desktop/tablet/mobile.
9. Informe breve de cambios.
10. Checklist de validación final.
```

---

## 21. Checklist final de validación

```text
[ ] Header con lockup horizontal real (no wordmark de sustitución).
[ ] Logo visible y proporcionado, sin deformación ni recolor.
[ ] Hero claro con medalla real en .webp.
[ ] Favicons instalados desde los archivos entregados (no regenerados).
[ ] CTA principal: Explorar el ecosistema. CTA secundario: Contactar con Antonio.
[ ] Email correcto: antonio@anclora.com con mailto y asunto sugerido.
[ ] Paleta exacta a la sección 6 (Anchor Navy #0A1F3D, no #0B1020 de versiones anteriores).
[ ] Tokens de espaciado/radio/movimiento de la sección 8 implementados.
[ ] Command Purple nunca como texto pequeño sobre navy (regla 3.8:1).
[ ] Secciones completas (11.1 a 11.10).
[ ] Productos de Nivel 1 y 2 visibles y correctos. Nivel 3 ausente.
[ ] Idiomas centralizados en /i18n, ES por defecto.
[ ] Responsive validado a 1440px y 390px sin overflows.
[ ] Contraste AA validado con la tabla medida.
[ ] prefers-reduced-motion respetado. Focus visible. Teclado completo.
[ ] Metadatos SEO + JSON-LD Organization definidos.
[ ] Sin gradient text, sin stock, sin ilustraciones genéricas de IA.
[ ] Sin textos genéricos ni claims no verificados.
[ ] Sin estética editorial de Anclora Insights.
[ ] Assets de logo copiados literalmente, sin regenerar.
[ ] Verificación ejecutada en pasadas acotadas (sección 18), build/lint ejecutados si el entorno lo permite.
```

---

## 22. Resultado esperado

```text
Anclora Group = boutique tecnológica founder-led + ecosistema de productos premium.
```

El ángulo fuerte no es «hacemos IA». El ángulo fuerte es: **construimos sistemas digitales claros para operar mejor.**
