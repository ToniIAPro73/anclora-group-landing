<!-- markdownlint-disable MD013 MD024 -->

# Anclora Repository Visibility Contract

## Objetivo

Definir la visibilidad por defecto de los repositorios del ecosistema Anclora y evitar que
código interno, datos sensibles, contratos no propagados o materiales privados se publiquen
sin revisión previa.

Ámbito:

- todos los repos registrados en `00-governance/registry/ecosystem-repos.json`
- productos independientes registrados en `00-governance/registry/independent-products.json`
- futuros repos Anclora antes de su primera publicación

## Visibilidad por familia

| Familia | Visibilidad por defecto |
| --- | --- |
| `matrix` | Público |
| `internal` | Privado |
| `premium` | Privado; showcase público separado |
| `ultra_premium` | Privado; solo la landing pública |
| `portfolio_showcase` | Público |
| `microsaas` | Público *(añadido 2026-09-25, CHG-0014: `anclora-tableextractor`, `anclora-clearsheet`, `anclora-purgedoc`)* |
| `independent_product` | Público |
| `shared` | Privado salvo declaración open-source aprobada |
| `labs` | Privado o archivado |

Familias compartidas (`shared`) se tratan como repos de infraestructura: pueden ser públicas
solo si superan los requisitos previos de este contrato y no contienen material operativo
privado.

## Regla crítica de artefactos generados

Ningún repositorio con posibilidad de publicación puede versionar artefactos generados desde
la Bóveda cuando esos artefactos deriven de `personas/`, `ideas/`, `knowledge-vault/`,
`resources/` o de cualquier fuente operativa privada.

Ejemplos de artefactos sujetos a esta regla:

- `src/generated/*`
- datasets exportados desde la Bóveda
- snapshots operativos creados para que una app compile o despliegue
- JSON enriquecidos con rutas locales, nombres reales, leads, activos o decisiones internas

Si una build necesita datos para renderizar, debe usar una de estas vías:

- generar el artefacto durante el pipeline privado de build
- consumir una fuente privada no versionada
- incluir un dataset sintético marcado de forma explícita con `"synthetic": true`

## Regla de acoplamiento a la Bóveda

Toda app que lea datos reales de la Bóveda por sistema de archivos, `vaultRoot` o rutas
equivalentes queda clasificada como privada permanente mientras mantenga ese acoplamiento.

Una app acoplada a la Bóveda no puede publicarse como producto abierto ni como showcase. Si
necesita presencia pública, debe separarse en un repositorio `portfolio_showcase` o landing
sin lógica interna, sin datos reales y sin dependencia de `vaultRoot`.

## Requisitos antes de hacer público un repositorio

Un repositorio no puede pasar a público hasta verificar:

- ausencia de secretos, claves API, tokens, credenciales completas y `.env` reales
- ausencia de datos personales, expedientes, leads, facturas, turnos reales o muestras privadas
- licencia declarada cuando el repositorio vaya a ser reutilizable fuera del grupo
- `README.md` completo con propósito, alcance, instalación, uso, estado y limitaciones
- contratos aplicables copiados o referenciados en `10-group/brand/`
- ausencia de claims de cumplimiento, certificación, ahorro o resultados no verificados
- revisión de assets de marca y derechos de uso

## Criterios de excepción

Se admite excepción cuando exista una razón documentada:

- demo pública separada de una app privada
- paquete compartido que debe consumirse desde varios repos
- landing comercial sin lógica interna ni datos privados
- producto independiente diseñado para distribución pública
- repo archivado que debe permanecer privado por historia, datos o dependencia sensible

La excepción no puede contradecir contratos de marca, privacidad, AI Act, texto o familia.

Excepción registrada: `anclora-insights` puede permanecer privado aunque se clasifique como
`independent_product`, porque conserva materiales editoriales originales y contexto estratégico
no preparado para distribución pública.

## Procedimiento para solicitar excepción

1. Abrir entrada en `00-governance/decisions/CONTRACT_CHANGE_QUEUE.md` o revisión local equivalente.
2. Identificar repo, familia, visibilidad actual, visibilidad propuesta y motivo.
3. Ejecutar auditoría de secretos, datos personales, licencia, README y contratos aplicables.
4. Registrar riesgos y mitigaciones en una revisión `CHG-XXXX.md` si afecta a la Bóveda.
5. Obtener aprobación humana antes de cambiar la visibilidad en GitHub.
6. Registrar la decisión final en `00-governance/decisions/CONTRACT_CHANGE_HISTORY.md` si el cambio queda cerrado.

## Gate de aceptación

Un cambio de visibilidad no está listo si:

- existen secretos o datos personales en el historial o en el árbol de trabajo
- el README no explica alcance y limitaciones reales
- la licencia falta en un repo destinado a reutilización externa
- una app interna, premium o ultra premium se publica sin separación explícita de showcase
- una excepción no queda documentada con responsable y fecha
