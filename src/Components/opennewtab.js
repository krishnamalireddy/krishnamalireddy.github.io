import React from 'react';
import { useNavigate } from 'react-router-dom';

function Newtab({ to, buttonText }) {
  const navigate = useNavigate();

  const handleOpenInNewTab = () => {
    const newTab = window.open(to, '_blank');
        if (newTab) {
      newTab.focus(); 
    } else {
      navigate(to);
    }
  };

  return (
    <div>
      <button onClick={handleOpenInNewTab}>{buttonText}</button>
    </div>
  );
}

Newtab.propTypes = {
  to: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string') {
      return new Error(`${componentName}: '${propName}' must be a string`);
    }
  },
  buttonText: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string') {
      return new Error(`${componentName}: '${propName}' must be a string`);
    }
  },
};

export default Newtab;
