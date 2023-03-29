import classNames from 'classnames';
import React from 'react';
import './PrimaryInput.css';

function PrimaryInput(props) {
  const classNameInput = classNames(props.className);
  const placeholderText = classNames(props.placeholderText);

  return (
    <div className='input-body'>
      <input
        type='text'
        className={classNameInput}
        onChange={props.onHandleChange}
        required
      />
      <div className='placeholder'>{placeholderText}</div>
    </div>
  );
}

export default PrimaryInput;
