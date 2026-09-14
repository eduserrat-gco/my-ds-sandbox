import Textbox from './Textbox';

export default {
  title: 'Textbox',
  component: Textbox,
  argTypes: {
    device: {
      control: 'select',
      options: ['desktop', 'mobile'],
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'filled', 'error', 'disabled', 'solo lectura'],
    },
    mandatory: { control: 'boolean' },
    placeholder: { control: 'boolean' },
    iconInside: { control: 'boolean' },
    iconOutside: { control: 'boolean' },
    label: { control: 'text' },
    value: { control: 'text' },
    errorMessage: { control: 'text' },
  },
};

export const Default = {
  args: { device: 'desktop', state: 'default', mandatory: true, placeholder: true, iconInside: true, iconOutside: true },
};

export const Hover = {
  args: { device: 'desktop', state: 'hover', mandatory: true, placeholder: true, iconInside: true, iconOutside: true },
};

export const Focus = {
  args: { device: 'desktop', state: 'focus', mandatory: true, placeholder: true, iconInside: true, iconOutside: true },
};

export const Filled = {
  args: { device: 'desktop', state: 'filled', mandatory: true, placeholder: true, iconInside: true, iconOutside: true },
};

export const Error = {
  args: { device: 'desktop', state: 'error', mandatory: true, placeholder: true, iconInside: true, iconOutside: true },
};

export const Disabled = {
  args: { device: 'desktop', state: 'disabled', mandatory: true, placeholder: true, iconInside: false, iconOutside: true },
};

export const SoloLectura = {
  args: { device: 'desktop', state: 'solo lectura', mandatory: false, placeholder: true, iconInside: false, iconOutside: true },
};

export const DefaultMobile = {
  args: { device: 'mobile', state: 'default', mandatory: true, placeholder: true, iconInside: true, iconOutside: true },
};