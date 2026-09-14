# Textbox

Campo de texto de una sola línea para entrada libre. Base de la familia de inputs especializados (Email, Teléfono, IBAN, números, etc.).

---

## Descripción

El Textbox es el control base para capturar texto libre de una sola línea. Soporta múltiples estados funcionales, validación con mensaje de error, campo obligatorio y dos variantes de dispositivo (desktop y mobile).

---

## Cuándo usarlo

**Úsalo cuando:**
- Búsquedas en la Zona A de layouts de búsqueda
- Consultas o modo solo lectura en grupos de apariencia consulta
- Si un Radiobutton tiene una sola opción, conviértelo en Textbox deshabilitado
- En layouts por defecto
- Respeta el espaciado y la altura del layout por defecto

**Evítalo cuando:**
- Información estructurada o selección de opciones — usa el control adecuado (Combo, Radiobutton…)
- Texto de varias líneas — usa TextArea

---

## Anatomía

[ Label * ]
[ placeholder / valor ✕ ] ?
[ Mensaje de error ]

1. **Label** — Etiqueta descriptiva del control. Siempre visible, nunca sustituir por placeholder
2. **Borde** — Refleja el estado del control: normal, foco, error o deshabilitado
3. **Obligatorio (*)** — Asterisco rojo junto al label indica campo obligatorio
4. **Icono acción (inside)** — Botón de borrar/limpiar el valor introducido (✕)
5. **Icono acción (outside)** — Botón de más información (?)

---

## Props

| Prop | Tipo | Valores | Default |
|---|---|---|---|
| `device` | string | `desktop` · `mobile` | `desktop` |
| `state` | string | `default` · `hover` · `focus` · `filled` · `error` · `disabled` · `solo lectura` | `default` |
| `mandatory` | boolean | `true` · `false` | `true` |
| `placeholder` | boolean | `true` · `false` | `true` |
| `iconInside` | boolean | `true` · `false` | `true` |
| `iconOutside` | boolean | `true` · `false` | `true` |
| `label` | string | texto libre | `Etiqueta descriptiva del control:` |
| `value` | string | texto libre | `''` |
| `errorMessage` | string | texto libre | `Indicar el dato requerido` |

### Estados funcionales

| Estado | Aplica |
|---|---|
| Solo lectura | ✅ |
| Disponible | ✅ |
| Obligatorio | ✅ |
| Visible | ✅ |

---

## Variantes

| State | Descripción |
|---|---|
| `default` | Campo vacío, sin interacción |
| `hover` | El usuario pasa el cursor por encima |
| `focus` | El campo tiene el foco — borde oscuro 2px |
| `filled` | El campo tiene valor introducido |
| `error` | Validación fallida — borde rojo 2px + mensaje de error |
| `disabled` | Campo no editable — fondo gris claro |
| `solo lectura` | Muestra valor sin permitir edición — fondo gris claro |

---

## Tokens

### Fondo

| Parte | Token | Valor |
|---|---|---|
| Input normal | `--fondo-superficie` | `#ffffff` |
| Input disabled / solo lectura | `--fondo-componente-input-disabled` | `#f4f4f4` |

### Texto

| Parte | Token | Valor |
|---|---|---|
| Label | `--texto-cuerpo` | `#505050` |
| Obligatorio (*) | `--texto-brand` | `#dc0028` |
| Placeholder | `--texto-placeholder` | `#c7c7c7` |
| Valor introducido (filled) | `--texto-cuerpo` | `#505050` |
| Mensaje de error | `--texto-error` | `#b91e1e` |

### Borde

| Estado | Token | Grosor | Valor |
|---|---|---|---|
| default / filled | `--border-claro` | `1px` | `#d6d8d8` |
| hover | `--border-default` | `1px` | `#919191` |
| focus | `--border-oscuro` | `2px` | `#505050` |
| error | `--border-error` | `2px` | `#b91e1e` |
| disabled / solo lectura | `--border-claro` | `1px` | `#d6d8d8` |

### Espaciado y dimensiones

| Propiedad | Token | Valor |
|---|---|---|
| Altura desktop | `--textbox-height-desktop` | `30px` |
| Altura mobile | `--textbox-height-mobile` | `44px` |
| Padding interno | `--textbox-padding` | `6px` |
| Borde default | `--textbox-border-width-default` | `1px` |
| Borde focus/error | `--textbox-border-width-focus` | `2px` |
| Icono interior | `--textbox-icon-size` | `24px` |
| Icono exterior | `--textbox-icon-outside-size` | `32px` |
| Gap label-input | `--textbox-label-gap` | `8px` |

### Tipografía

| Parte | Familia | Tamaño desktop | Tamaño mobile |
|---|---|---|---|
| Label | `Catalana Sans` | `12px` | `14px` |
| Placeholder / valor | `Catalana Sans` | `12px` | `14px` |
| Mensaje de error | `Catalana Sans` | `12px` | `12px` |

---

## Historias Storybook sugeridas

Textbox/
Default
Hover
Focus
Filled
Error
Disabled
Solo lectura


---

## Reglas de uso

- Incluir siempre un label — el placeholder no es suficiente para identificar el campo
- El placeholder es opcional y describe el formato esperado, no el label
- El mensaje de error debe explicar por qué falló la validación, no solo indicar que hay un error
- Para texto multilínea usar TextArea, no Textbox
- `MinCaracteres` y `MaxCaracteres` limitan la longitud del valor

---

## Comportamiento UX

- El usuario introduce texto libremente dentro de los límites configurados
- `MinCaracteres` y `MaxCaracteres` limitan la longitud del valor
- El estado `error` muestra un mensaje debajo del input explicando el problema
- El estado `solo lectura` muestra el valor sin permitir edición
- El icono inside (✕) permite limpiar el valor introducido
- El icono outside (?) abre información adicional sobre el campo

---

## Patrón React (GAAN)

Sigue el patrón estándar de control definido en `docs/GUIA-CONTROLES.md`:

```typescript
import { FieldComponentProps } from "../../types";
import { useFieldConfig } from "../../common/useFieldConfig";
import { useChangeEvent } from "../../common/useConfigEvent";
import { useGaanContext } from "../../context";

const Textbox: React.FC<FieldComponentProps> = (props) => {
  const config = useFieldConfig(props, "textbox");
  const { dispatch } = useGaanContext();
  const handleChange = useChangeEvent(config.definicion.eventoChange);

  return (
    <div className="textbox-wrapper">
      <label htmlFor={config.definicion.id}>
        {config.definicion.titulo}
        {config.mensaje.isObligatorio && <span className="textbox__mandatory"> *</span>}
      </label>
      <input
        id={config.definicion.id}
        type="text"
        value={config.mensaje.Valor || ''}
        disabled={config.mensaje.isDisabled}
        readOnly={config.mensaje.isSoloLectura}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textbox;
```

---

## Referencia

- Figma componente: `node-id=2633-3566`
- Figma documentación: `node-id=9605-500`
- Confluence: https://soporte.gco.global/display/SOPDES/TextBox