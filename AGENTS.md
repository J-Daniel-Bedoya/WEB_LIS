# AGENTS.md

Guia operativa para agentes que trabajen en este workspace.

Este archivo se construye a partir de las skills disponibles en `C:\Users\jbedo\.agents\skills`.
Solo cubre esas skills locales y define cuando deben usarse, como combinarlas y que prioridad darles segun el tipo de tarea.

## Proposito del proyecto

Este workspace existe para redisenar y modernizar la presencia web de `Logistica Integral Satelital`, una empresa ISP del Occidente Antioqueno.

El proyecto tiene dos referencias principales:

- una copia funcional del sitio original en `site-clone-v2`, usada como fuente de contenido, estructura, documentos legales, PQRSF, PDFs, historicos de calidad y material institucional
- una nueva implementacion en `lis-redesign`, construida con React y Sass, usada como base del rediseno visual, estructural y comercial

La meta no es hacer una landing generica. La meta es convertir el sitio en una web multipagina, mas clara, mas comercial y mas confiable, sin perder fidelidad frente al contenido legal y regulatorio del sitio original.

## Uso actual del workspace

Este proyecto se esta usando para:

- conservar el contenido real del sitio original mediante una copia navegable
- migrar progresivamente ese contenido a una arquitectura moderna en React
- separar la home comercial del resto de paginas institucionales, legales y de soporte
- mantener visibles PQRSF, normatividad, indicadores, calidad del servicio, encuesta, contrato y demas documentos exigidos
- mejorar identidad visual, jerarquia, navegacion, redaccion y experiencia mobile/desktop

## Expectativa sobre los cambios

Los cambios en este repo deben responder a este contexto:

- `site-clone-v2` es referencia funcional y documental, no producto final
- `lis-redesign` es el producto que debe evolucionar
- el apartado legal debe mantenerse fiel al clon en contenido, aunque mejore su estructura y experiencia
- la home debe enfocarse en conversion comercial, pero debe conectar con las demas paginas del sitio
- la marca debe transmitir empresa real, soporte cercano, cumplimiento y capacidad tecnica

## Objetivo

- Mantener decisiones tecnicas consistentes.
- Evitar cambios impulsivos o superficiales.
- Forzar una forma de trabajo mas segura en frontend, backend, API, base de datos y depuracion.

## Regla base

- Antes de implementar, entender el contexto real del proyecto.
- Si la tarea implica crear, redisenar, modificar comportamiento o proponer una solucion nueva, usar `brainstorming` primero.
- Si la tarea implica un bug, falla, build roto, test fallando o comportamiento inesperado, usar `systematic-debugging` primero.
- Si varias skills aplican, usar la combinacion minima necesaria y en orden.

## Orden recomendado de uso

1. Entender el problema
2. Elegir la skill principal
3. Ejecutar skills complementarias solo si agregan rigor real
4. Implementar cambios pequenos y verificables

## Skills disponibles

### Planeacion y descubrimiento

- `brainstorming`
  - Uso obligatorio antes de trabajo creativo o de producto.
  - Aplica para nuevas features, redisenos, cambios de flujo, nuevos componentes o cambios de comportamiento.
  - Sirve para aclarar objetivo, restricciones, enfoque y tradeoffs antes de tocar codigo.

- `find-skills`
  - Usar cuando el usuario pregunte si existe una skill para cierta capacidad o quiera descubrir nuevas habilidades.
  - No usar para tareas normales de implementacion.

### Depuracion y confiabilidad

- `systematic-debugging`
  - Primera skill para bugs, builds rotos, tests fallando, integraciones inestables o errores no entendidos.
  - Obliga a investigar causa raiz antes de proponer fixes.

- `error-handling-patterns`
  - Usar cuando el problema o la implementacion requiera mejorar manejo de errores, resiliencia o degradacion controlada.
  - Complementa bien a `systematic-debugging`.

### Frontend e interfaces

- `interface-design`
  - Usar para dashboards, paneles, apps internas, herramientas e interfaces interactivas.
  - No usar para marketing sites o landing pages.

- `vercel-react-best-practices`
  - Usar en tareas de React o Next.js donde importen performance, estructura de componentes, renderizado, bundle o patrones modernos.
  - Complementa implementaciones y refactors en frontend React.

### APIs y contratos

- `api-design-principles`
  - Usar al disenar APIs nuevas, revisar contratos o corregir inconsistencias de endpoints.
  - Aplica a REST y GraphQL.

- `openapi-spec-generation`
  - Usar si hay que crear, mantener o corregir especificaciones OpenAPI 3.1.
  - Ideal para flujos design-first o documentacion formal de contrato.

- `api-documentation-generator`
  - Usar cuando el objetivo sea producir documentacion clara para desarrolladores a partir del codigo o del contrato API.

- `api-security-best-practices`
  - Usar para endurecer autenticacion, autorizacion, validacion, rate limiting y proteccion contra vulnerabilidades comunes de API.

- `auth-implementation-patterns`
  - Usar cuando la tarea toque JWT, OAuth2, sesiones, RBAC o control de acceso.

- `better-auth-best-practices`
  - Usar solo si el proyecto implementa o va a implementar Better Auth.
  - Tratarla como skill especializada, no como regla general de autenticacion.

### Arquitectura

- `clean-architecture`
  - Usar para decisiones estructurales de separacion de capas, dependencias y mantenibilidad.
  - Especialmente util si hay servicios, casos de uso, repositorios o modulos con mucho acoplamiento.

### Base de datos

- `database-design`
  - Skill general para diseno de esquemas, indices, ORM y decisiones de persistencia.
  - Usar cuando la tecnologia no este cerrada o el problema sea mas conceptual que especifico de motor.

- `mysql-best-practices`
  - Usar si la base es MySQL y se necesitan buenas practicas de modelado, consulta o administracion.

- `postgresql-table-design`
  - Usar si la tarea es especifica de Postgres y requiere decisiones de tablas, tipos, constraints o indices.

- `supabase-postgres-best-practices`
  - Usar cuando el proyecto corra sobre Supabase/Postgres o haya que optimizar consultas y configuracion dentro de ese ecosistema.

## Combinaciones recomendadas

### Nuevas features

- Primero `brainstorming`
- Luego la skill del dominio:
  - React/UI: `vercel-react-best-practices`
  - API: `api-design-principles`
  - DB: `database-design` o la especifica del motor

### Bugs o regresiones

- Primero `systematic-debugging`
- Luego, segun el caso:
  - errores y resiliencia: `error-handling-patterns`
  - React: `vercel-react-best-practices`
  - API/auth: `api-security-best-practices` o `auth-implementation-patterns`

### APIs nuevas o refactor de backend

- `brainstorming`
- `api-design-principles`
- `openapi-spec-generation` si hay contrato formal
- `api-documentation-generator` si hay que entregar docs
- `api-security-best-practices` si hay acceso, datos sensibles o superficie publica

### Auth

- `brainstorming`
- `auth-implementation-patterns`
- `api-security-best-practices`
- `better-auth-best-practices` solo si aplica Better Auth

### Trabajo de datos

- `brainstorming` si hay diseno nuevo
- `database-design` como skill base
- `mysql-best-practices` o `postgresql-table-design` segun motor
- `supabase-postgres-best-practices` si el stack usa Supabase

### Arquitectura y refactor grande

- `brainstorming`
- `clean-architecture`
- `systematic-debugging` si el refactor nace de un problema no entendido o de fallas repetidas

## Reglas de decision

- No usar una skill "porque si"; cada una debe responder a una necesidad concreta.
- No saltarse `brainstorming` en trabajo creativo.
- No saltarse `systematic-debugging` en bugs.
- Si una tarea toca varias capas, empezar por la causa o por el contrato, no por el sintoma visual.
- Para frontend de marketing, no usar `interface-design` como skill principal.
- Para auth, no improvisar: priorizar `auth-implementation-patterns` y `api-security-best-practices`.
- Para base de datos, elegir la skill especifica del motor cuando exista.

## Criterio de cierre

Antes de cerrar cualquier tarea, validar:

- que la skill correcta fue aplicada
- que la solucion responde al problema real
- que el cambio es mantenible
- que no introduce regresiones obvias
- que el resultado esta listo para verificacion o produccion segun el alcance
