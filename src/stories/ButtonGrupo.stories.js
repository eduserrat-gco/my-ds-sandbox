import ButtonGrupo from './ButtonGrupo';

export default {
  title: 'Botón grupo',
  component: ButtonGrupo,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'link'],
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
    },
    icon: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const PrimaryDefault = {
  args: { type: 'primary', state: 'default', icon: true, label: 'Guardar' },
};

export const PrimaryHover = {
  args: { type: 'primary', state: 'hover', icon: true, label: 'Guardar' },
};

export const PrimaryDisabled = {
  args: { type: 'primary', state: 'disabled', icon: true, label: 'Guardar' },
};

export const SecondaryDefault = {
  args: { type: 'secondary', state: 'default', icon: true, label: 'Cancelar' },
};

export const SecondaryHover = {
  args: { type: 'secondary', state: 'hover', icon: true, label: 'Cancelar' },
};

export const SecondaryDisabled = {
  args: { type: 'secondary', state: 'disabled', icon: true, label: 'Cancelar' },
};

export const LinkDefault = {
  args: { type: 'link', state: 'default', icon: false, label: 'Ver detalle' },
};