# Botón grupo

Control de acción que opera sobre un grupo GAAN o valida una pantalla completa. Soporta variantes Principal, Secundario y Enlace.

---

## Descripción

El Botón grupo es el control de acción principal de la pantalla. Se usa para ejecutar acciones que afectan a un grupo GAAN completo o validan una pantalla entera. Al hacer click, ejecuta primero el evento JavaScript asociado y luego la navegación interna configurada.

---

## Cuándo usarlo

**Úsalo cuando:**
- La acción opera sobre un grupo GAAN o valida una pantalla completa
- En layouts por defecto, búsqueda y consulta
- Al final del formulario

**Evítalo cuando:**
- El texto de la etiqueta es largo y requeriría puntos suspensivos
- La navegación es externa (solo permite navegación interna)
- Son botones de continuar / volver (estos se configuran a nivel de pantalla)

---

## Anatomía

```
[ icono ]  [ Etiqueta ]
```

1. **Etiqueta** — Texto de acción, claro y orientado a verbo (Guardar, Editar, Solicitar)
2. **Icono** — Opcional, posicionado a la izquierda de la etiqueta

---

## Props

| Prop | Tipo | Valores | Default |
|---|---|---|---|
| `type` | string | `primary` · `secondary` · `link` | `primary` |
| `state` | string | `default` · `hover` · `disabled` | `default` |
| `icon` | boolean | `true` · `false` | `true` |
| `label` | string | texto libre | `Button` |

### Estados funcionales

| Estado | Aplica |
|---|---|
| Solo lectura | ❌ |
| Disponible | ✅ |
| Obligatorio | ❌ |
| Visible | ✅ |

---

## Variantes

| Variante | Estado | Descripción |
|---|---|---|
| Primary | default | Acción principal de la pantalla |
| Primary | hover | Al pasar el cursor |
| Primary | disabled | Acción no disponible |
| Secondary | default | Acción de apoyo o menor prioridad |
| Secondary | hover | Al pasar el cursor |
| Secondary | disabled | Acción no disponible |
| Link | default | Navegación interna dentro de la intranet |

---

## Tokens

### Fondo

| Parte | Token | Valor |
|---|---|---|
| Primary default | `Fondo/Componente/boton-primario-default` | `#505050` |
| Primary hover | `Fondo/Componente/boton-primario-hover` | `#919191` |
| Primary disabled | `Fondo/control-deshabilitado` | `#d6d8d8` |
| Secondary (todos) | `Fondo/superficie` | `#ffffff` |

### Texto

| Parte | Token | Valor |
|---|---|---|
| Primary (todos) | `Texto/Componente/boton-primario` | `#ffffff` |
| Secondary default | `Texto/cuerpo` | `#505050` |
| Secondary hover | `Texto/boton-secundario-hover` | `#919191` |
| Secondary disabled | `Texto/boton-secundario-disabled` | `#d6d8d8` |
| Link default | `Texto/Link/default` | `#dc0028` |

### Borde (Secondary)

| Estado | Token | Valor |
|---|---|---|
| default | `Border/oscuro` | `#505050` |
| hover | `Border/default` | `#919191` |
| disabled | `Border/claro` | `#d6d8d8` |

### Espaciado

| Propiedad | Token | Valor |
|---|---|---|
| Gap icono-texto | `components/button/spacing/gap` | `8px` |
| Padding horizontal | `components/button/spacing/horitzontal-padding` | `16px` |
| Padding vertical | `components/button/spacing/vertical-padding` | `8px` |
| Ancho borde Secondary | `components/button/secondary/border-width` | `2px` |

### Tipografía

| Propiedad | Token | Valor |
|---|---|---|
| Familia | `Alias/font-family/Body` | `Catalana Sans` |
| Tamaño | `Alias/size/sm` | `12px` |
| Peso | `Alias/weight/Bold` | `Bold` |
| Altura de línea | `Alias/line-height/sm` | `16px` |

---

## Historias Storybook sugeridas

```
Button grupo/
  Primary/
    Default
    Hover
    Disabled
  Secondary/
    Default
    Hover
    Disabled
  Link/
    Default
```

---

## Reglas de uso

- Máximo 4 botones por pantalla — más de 4 saturan y dispersan la atención
- Una única acción Primary por pantalla — dos Primary compiten por la atención
- Reservar Secondary para acciones de menor prioridad junto al Primary
- Usar Link para navegación interna, nunca para URLs externas
- Etiqueta siempre orientada a verbo y texto corto — evitar puntos suspensivos
- Jerarquía clara: un Primary + hasta 3 Secondary o Link

---

## Comportamiento UX

- Al hacer click: ejecuta primero el evento JS `click` y luego la navegación interna asociada
- Si la validación falla: muestra errores en la parte superior con acceso directo al control afectado
- Click derecho, rueda media o Ctrl+click: abren en pestaña nueva (solo tipo Link con condiciones)
- Propiedad "Abrir en pestaña nueva": fuerza nueva sesión
- Validación de grupo o pantalla completa según configuración

---

## Patrón React (GAAN)

Sigue el patrón estándar de control definido en `docs/GUIA-CONTROLES.md`:

```typescript
import { FieldComponentProps } from "../../types";
import { useFieldConfig } from "../../common/useFieldConfig";
import { useClickEvent } from "../../common/useConfigEvent";
import { useGaanContext } from "../../context";

const ButtonGrupo: React.FC<FieldComponentProps> = (props) => {
  const config = useFieldConfig(props, "botongrupo");
  const { dispatch } = useGaanContext();
  const handleClick = useClickEvent(
    config.definicion.eventoClick,
    config.definicion.navegacionClick
  );

  return (
    <button
      id={config.definicion.id}
      disabled={config.mensaje.isDisabled}
      onClick={handleClick}
    >
      {config.definicion.label}
    </button>
  );
};

export default ButtonGrupo;
```

---

## Referencia

- Figma componente: `node-id=10054-3341`
- Figma documentación: `node-id=9628-465`
- Confluence: https://soporte.gco.global/pages/viewpage.action?pageId=11534713
