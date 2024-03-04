import React from 'react';

const Link = (props) => {
  const { text, icon, disabled, active } = props;
  let buttonClass = 'link__buton';
  
  if (disabled) {
    buttonClass += ' disabled';
  }
  
  if (active) {
    buttonClass += ' active';
  }
  
  return (
    <a href="#" className={buttonClass} disabled={disabled}>
      {text}
      <span className="link__buton__icon">{icon}</span>
    </a>
  );
};

export default Link;
