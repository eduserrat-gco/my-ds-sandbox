import React from 'react';
import '../tokens/primitives.css';
import '../tokens/tokens.css';
import './textbox.css';

const Textbox = ({
  device = 'desktop',
  state = 'default',
  mandatory = true,
  placeholder = true,
  iconInside = true,
  iconOutside = true,
  label = 'Etiqueta descriptiva del control:',
  value = '',
  errorMessage = 'Indicar el dato requerido',
}) => {
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'solo lectura';
  const isError = state === 'error';

  return (
    <div className={`textbox textbox--${device} textbox--${state}`}>

      {/* Label */}
      <div className="textbox__label">
        <span className="textbox__label-text">{label}</span>
        {mandatory && device === 'desktop' && (
          <span className="textbox__mandatory"> *</span>
        )}
        {mandatory && device === 'mobile' && (
          <span className="textbox__mandatory textbox__mandatory--mobile"> *</span>
        )}
      </div>

      {/* Input row */}
      <div className="textbox__row">
        <div className={`textbox__input-wrapper textbox__input-wrapper--${state}`}>
          {/* Placeholder / valor */}
          {placeholder && (
            <span className={`textbox__placeholder textbox__placeholder--${state}`}>
              {state === 'filled' ? 'Filled' :
               state === 'focus' ? 'Filling' :
               state === 'disabled' ? 'Disabled' :
               state === 'solo lectura' ? 'Solo lectura' :
               state === 'hover' ? 'Hovered' :
               state === 'error' ? 'Error' : 'Default'}
            </span>
          )}
          {/* Icono inside */}
          {iconInside && !isDisabled && !isReadOnly && state !== 'default' && state !== 'hover' && (
            <span className="textbox__icon-inside">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.7 6.7a1 1 0 0 1 1.414 0L12 10.586l3.886-3.886a1 1 0 1 1 1.414 1.414L13.414 12l3.886 3.886a1 1 0 0 1-1.414 1.414L12 13.414l-3.886 3.886A1 1 0 0 1 6.7 15.886L10.586 12 6.7 8.114A1 1 0 0 1 6.7 6.7z"/>
              </svg>
            </span>
          )}
        </div>

        {/* Icono outside */}
        {iconOutside && (
          <span className="textbox__icon-outside">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 16C4 22.6168 9.38328 28 16.0002 28C22.617 28 28.0002 22.6168 28.0002 16C28.0002 9.3832 22.617 4 16.0002 4C9.38328 4 4 9.3832 4 16ZM5.6 16C5.6 10.2654 10.2655 5.6 16.0002 5.6C21.7348 5.6 26.4002 10.2654 26.4002 16C26.4002 21.7346 21.7348 26.4 16.0002 26.4C10.2655 26.4 5.6 21.7346 5.6 16ZM15.7129 19.5901C15.2711 19.5901 14.9129 19.2319 14.9129 18.7901V18.4426C14.9129 17.5947 15.2484 16.8262 15.8339 16.331L17.2598 15.0479C17.7591 14.6041 18 14.0951 18 13.4889C18 12.9492 17.7777 12.4396 17.374 12.0538C16.972 11.6696 16.4311 11.464 15.8927 11.4878C14.873 11.5388 14.0612 12.3443 14.0001 13.365C14.0022 13.558 14.0345 13.6824 14.0868 13.8842L14.1197 14.0126C14.2269 14.4412 13.9663 14.8756 13.5377 14.9828C13.1084 15.0901 12.6746 14.8293 12.5675 14.4007L12.538 14.286L12.5379 14.2856C12.4733 14.0363 12.4 13.7537 12.4 13.3452C12.4 13.3318 12.4003 13.3185 12.401 13.3053C12.4938 11.4507 13.9621 9.98237 15.8166 9.88963C16.7955 9.84463 17.7631 10.2126 18.4794 10.8971C19.1916 11.5776 19.6 12.5223 19.6 13.4889C19.6 14.5483 19.1597 15.4998 18.3266 16.2405L16.8941 17.5296C16.8866 17.5363 16.8789 17.5429 16.8712 17.5494C16.6468 17.7363 16.5129 18.0703 16.5129 18.4426V18.7901C16.5129 19.2319 16.1547 19.5901 15.7129 19.5901ZM15.7127 22.7493C15.5031 22.7493 15.2967 22.6645 15.1479 22.5157C14.9991 22.3669 14.9127 22.1605 14.9127 21.9493C14.9127 21.7397 14.9991 21.5333 15.1479 21.3845C15.3335 21.1989 15.6086 21.1125 15.8695 21.1653C15.9207 21.1765 15.9703 21.1909 16.0182 21.2117C16.0679 21.2309 16.1143 21.2565 16.1575 21.2853C16.2007 21.3141 16.2422 21.3477 16.2791 21.3845C16.4279 21.5333 16.5127 21.7397 16.5127 21.9493C16.5127 22.1605 16.4279 22.3669 16.2791 22.5157C16.2422 22.5525 16.2007 22.5861 16.1575 22.6149C16.1143 22.6437 16.0679 22.6677 16.0182 22.6885C15.9703 22.7077 15.9207 22.7237 15.8695 22.7349C15.8182 22.7445 15.7654 22.7493 15.7127 22.7493Z" fill="#505050"/>
            </svg>
          </span>
        )}
      </div>

      {/* Mensaje de error */}
      {isError && (
        <span className="textbox__error">{errorMessage}</span>
      )}
    </div>
  );
};

export default Textbox;