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
Los valores concretos de color viven en `src/tokens/tokens.css`.
Las reglas de uso semántico en `docs/tokens/tokens-usage.md`.

### Reglas generales
- Usar siempre tokens semánticos en los componentes, nunca valores hexadecimales directamente
- Los tokens primitivos solo se referencian desde el archivo de tokens, nunca desde un componente
- Todo color debe tener un token semántico que describa su intención de uso

---

## Componentes documentados
*(Se irán añadiendo a medida que se documenten)*

---

## Reglas globales de diseño
- Los componentes siguen el patrón definido en `GUIA-CONTROLES.md`
- El código generado debe respetar los tipos `FieldComponentProps`, `FieldDefinicion` y `FieldMensaje`
- Los componentes son puramente visuales y declarativos — no ejecutan lógica de negocio
- Todo componente nuevo debe registrarse en `src/components/index.ts`
