# Reglas de uso de tokens

Este archivo define cómo y cuándo usar cada categoría de token semántico del DS GAAN React.
Los valores concretos viven en `src/tokens/tokens.css` (semánticos) y `src/tokens/primitives.css` (primitivos).

---

## Principios generales

- **Nunca usar valores hexadecimales directamente** en componentes. Siempre a través de tokens semánticos.
- **Nunca referenciar tokens primitivos** desde un componente. Solo desde `tokens.css`.
- **Un token semántico describe intención**, no valor. `--texto-link-default` comunica su propósito; `--Global-red` no.
- Cuando un token semántico no existe para un caso concreto, crearlo antes de hardcodear un valor.

---

## Nomenclatura

Los tokens semánticos siguen esta estructura:
--[categoría]-[contexto]-[variante]-[estado]

Ejemplos:
- `--fondo-componente-boton-primario-default`
- `--texto-boton-secundario-hover`
- `--border-oscuro`

### Categorías disponibles

| Categoría | Uso |
|---|---|
| `--fondo-` | Colores de fondo de componentes y superficies |
| `--texto-` | Colores de texto y etiquetas |
| `--border-` | Colores de bordes y separadores |
| `--button-spacing-` | Espaciado específico del componente botón |

---

## Fondo

| Token | Uso correcto |
|---|---|
| `--fondo-componente-boton-primario-default` | Fondo del botón primario en estado normal |
| `--fondo-componente-boton-primario-hover` | Fondo del botón primario al pasar el cursor |
| `--fondo-control-deshabilitado` | Fondo de cualquier control en estado disabled |
| `--fondo-superficie` | Fondo de superficies neutras (botón secundario, fondos de panel) |

**Reglas:**
- `--fondo-control-deshabilitado` se aplica a **cualquier** control deshabilitado, no solo al botón
- `--fondo-superficie` es el blanco base — nunca hardcodear `#ffffff`

---

## Texto

| Token | Uso correcto |
|---|---|
| `--texto-componente-boton-primario` | Texto e iconos sobre fondo de botón primario |
| `--texto-cuerpo` | Texto principal de la interfaz |
| `--texto-boton-secundario-hover` | Texto del botón secundario en hover |
| `--texto-boton-secundario-disabled` | Texto del botón secundario deshabilitado |
| `--texto-link-default` | Texto de enlaces y tipo link — color corporativo rojo |

**Reglas:**
- `--texto-componente-boton-primario` se usa tanto para el label como para el icono del botón primario
- `--texto-link-default` es el rojo corporativo (`#dc0028`) — solo para acciones de navegación interna, nunca decorativo

---

## Borde

| Token | Uso correcto |
|---|---|
| `--border-oscuro` | Borde del botón secundario en estado default |
| `--border-default` | Borde del botón secundario en estado hover |
| `--border-claro` | Borde del botón secundario en estado disabled |

**Reglas:**
- Los tres tokens de borde siguen la misma escala tonal — oscuro → default → claro
- Aplicar siempre junto con `border-style: solid` y `border-width: var(--button-secondary-border-width)`

---

## Espaciado

| Token | Valor | Uso |
|---|---|---|
| `--button-spacing-gap` | `8px` | Separación entre icono y texto del botón |
| `--button-spacing-horizontal-padding` | `16px` | Padding horizontal interno del botón |
| `--button-spacing-vertical-padding` | `8px` | Padding vertical interno del botón |
| `--button-secondary-border-width` | `2px` | Grosor del borde del botón secundario |

**Nota:** Los tokens de espaciado actuales son específicos del botón. A medida que se documenten más componentes, se generalizarán en una escala de espaciado global.

---

## Tipografía

El DS usa **CatalanaSans** como fuente corporativa. Los valores tipográficos del botón son:

| Propiedad | Valor |
|---|---|
| Familia | `'Catalana Sans', sans-serif` |
| Tamaño | `12px` |
| Peso | `bold` |
| Altura de línea | `16px` |

**Nota:** Los tokens tipográficos todavía no están definidos como variables CSS. Están pendientes de añadir a `tokens.css` a medida que se documenten más componentes.

---

## Tokens pendientes de definir

A medida que se documenten nuevos componentes, se irán añadiendo tokens semánticos para:
- Tipografía (tamaños, pesos, familias)
- Espaciado global (escala general, no específica por componente)
- Estados de feedback (error, éxito, advertencia)
- Sombras y elevación