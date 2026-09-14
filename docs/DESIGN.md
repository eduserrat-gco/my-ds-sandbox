# Design System — GAAN React

## Descripción
Documentación de diseño del Design System GAAN React. Este archivo actúa como índice general y recoge las reglas globales de diseño. La documentación técnica y de arquitectura vive en archivos separados referenciados a continuación.

---

## Arquitectura técnica
Ver `docs/ARQUITECTURA.md` para entender el ecosistema de tres paquetes y el flujo de datos.

## Guía de controles
Ver `docs/GUIA-CONTROLES.md` para el patrón estándar de un control React en TypeScript.

---

## Tokens

### Archivos de referencia
- Valores primitivos: `src/tokens/primitives.css`
- Valores semánticos: `src/tokens/tokens.css`
- Reglas de uso: `docs/tokens/tokens-usage.md`

### Reglas generales
- Usar siempre tokens semánticos en los componentes, nunca valores hexadecimales directamente
- Los tokens primitivos solo se referencian desde `tokens.css`, nunca desde un componente
- Todo color debe tener un token semántico que describa su intención de uso
- Cuando un token semántico no existe para un caso concreto, crearlo antes de hardcodear un valor

### Nomenclatura de tokens semánticos
Los tokens semánticos siguen esta estructura:
--[categoría]-[contexto]-[variante]-[estado]

Ejemplos: `--fondo-componente-boton-primario-default`, `--texto-link-default`, `--border-oscuro`

---

## Tipografía

El DS usa **CatalanaSans** como fuente corporativa principal.

| Propiedad | Valor |
|---|---|
| Familia principal | `'Catalana Sans', sans-serif` |
| Fallback | `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` |

**Nota:** Los tokens tipográficos están pendientes de definir como variables CSS. Ver `docs/tokens/tokens-usage.md` para el estado actual.

---

## Componentes documentados

| Componente | Archivo | Storybook |
|---|---|---|
| Botón grupo | `docs/components/button-grupo.md` | `Botón grupo/` |
| Textbox | `docs/components/textbox.md` | `Textbox/` |

---

## Reglas globales de diseño

### Estructura de componentes
- Los componentes siguen el patrón definido en `docs/GUIA-CONTROLES.md`
- El código generado debe respetar los tipos `FieldComponentProps`, `FieldDefinicion` y `FieldMensaje`
- Los componentes son puramente visuales y declarativos — no ejecutan lógica de negocio
- Todo componente nuevo debe registrarse en `src/components/index.ts`

### Variantes y estados
- Cada componente expone sus variantes como props en Storybook
- Los estados (default, hover, disabled) se documentan como historias separadas
- El estado hover se implementa como prop explícita, no como pseudoclase CSS, para permitir su documentación en Storybook

### Tokens en componentes
- Los imports de tokens en cada componente siguen este orden:
  1. `../tokens/primitives.css`
  2. `../tokens/tokens.css`
  3. `./nombre-componente.css`
- Los tokens semánticos se aplican via variables CSS (`var(--nombre-token)`)
- El icono de un componente hereda el color del token de texto correspondiente

### Buenas prácticas
- Máximo 4 botones por pantalla para no saturar la interfaz
- Una única acción primaria por pantalla
- Las etiquetas siempre orientadas a verbo y texto corto
- Evitar puntos suspensivos en etiquetas de botón

---

## Estructura de archivos del DS

my-ds-sandbox/
├── docs/
│ ├── DESIGN.md ← este archivo
│ ├── ARQUITECTURA.md ← arquitectura técnica del ecosistema
│ ├── GUIA-CONTROLES.md ← patrón de desarrollo de controles
│ ├── tokens/
│ │ └── tokens-usage.md ← reglas de uso de tokens semánticos
│ └── components/
│ └── button-grupo.md ← documentación del Botón grupo
├── src/
│ ├── tokens/
│ │ ├── primitives.css ← tokens primitivos (paleta base)
│ │ └── tokens.css ← tokens semánticos (intención de uso)
│ └── stories/
│ ├── ButtonGrupo.jsx
│ ├── ButtonGrupo.stories.js
│ └── button-grupo.css