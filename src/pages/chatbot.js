/* global Landbot */

import React, { useEffect } from 'react';

const LandbotChatbot = () => {
  useEffect(() => {
    // Create a new Landbot instance
    var myLandbot = new Landbot.Fullpage({
      configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1722525-QO3GG01PO0PD7UO0/index.json',
    });
  }, []);

  return (
    <div>
      {/* Your chatbot UI will be rendered here */}
    </div>
  );
};

export default LandbotChatbot;
