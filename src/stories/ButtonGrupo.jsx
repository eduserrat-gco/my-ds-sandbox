import React from 'react';
import '../tokens/primitives.css';
import '../tokens/tokens.css';
import './button-grupo.css';

const ButtonGrupo = ({ type = 'primary', state = 'default', icon = true, label = 'Button' }) => {
  
  if (type === 'link') {
    return (
      <div className="btn-grupo-link">
        <span className="btn-grupo-link__label">{label}</span>
      </div>
    );
  }

  return (
    <button
      className={`btn-grupo btn-grupo--${type} btn-grupo--${state}`}
      disabled={state === 'disabled'}
    >
      <div className="btn-grupo__state-layer">
        {icon && <span className="btn-grupo__icon">+</span>}
        <span className="btn-grupo__label">{label}</span>
      </div>
    </button>
  );
};

export default ButtonGrupo;