/* global Landbot */

import React, { useEffect } from 'react';

const LandbotChatbot = () => {
  useEffect(() => {
    // Load the Landbot JavaScript library
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/landbot.js'; 
    script.async = true;
    script.onload = () => {
      var myLandbot = new Landbot.Container({
        container: '#myLandbot',
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1722525-QO3GG01PO0PD7UO0/index.json',
      });
    };

  
    document.body.appendChild(script);
  
    return () => {
      // Cleanup: remove the script from the DOM when unmounting the component
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div id="myLandbot" style={{ width: '100%', height: '500px' }}>
    {/* Your chatbot UI will be rendered here */}
  </div>
  );
};

export default LandbotChatbot;
