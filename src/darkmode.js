import React from 'react';

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </div>
  );
}

export default DarkModeToggle;
