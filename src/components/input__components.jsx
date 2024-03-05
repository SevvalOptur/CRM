import React from 'react';

const TextInput = (props) => {
  const { value, onChange, placeholder, disabled, active, error, label, errorText } = props;
  let inputClass = 'text-input';
  let inputLabel = 'text';

  if (active) {
    inputClass += ' active';
  }

  if (disabled) {
    inputClass += ' disabled';
    inputLabel += ' disabled';
  }

  if (error) {
    inputClass += ' error';
    inputLabel += ' error';
  }

  return (
    <div className='text__input'>
        <label className={inputLabel} disabled={disabled}>{label}</label>
        <input
        type="text"
        className={inputClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        />
        {error && <p className="text__input__error">{errorText}</p>}
    </div>
 
  );
};

export default TextInput;
