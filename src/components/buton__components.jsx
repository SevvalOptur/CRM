import React from 'react';

const Button = (props) => {

  const { type, disabled, onClick, icon, text, active } = props;
  let buttonClass = 'buton';

  if (type === 'iconText') {
    buttonClass += ' icon-text';
  } else if (type === 'text') {
    buttonClass += ' text';
  } else if (type === 'icon') {
    buttonClass += ' icon';
  }

  if (active) {
    buttonClass += ' active';
  }

  if (disabled) {
    buttonClass += ' disabled';
  }

  return (
    <button  className={buttonClass} onClick={onClick} disabled={disabled}>
      {type === 'iconText' && icon && <span className="buton__icon">{icon}</span>}
      {type === 'iconText' && text && <span className="buton__text">{text}</span>}
      {type === 'text' && <span className="buton__text">{text}</span>}
      {type === 'icon' && icon && <span className="buton__first-icon">{icon}</span>}
    </button>
  );
};

export default Button;