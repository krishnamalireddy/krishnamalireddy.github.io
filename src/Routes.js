import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileApp from './pages/website';
import Privacypolicy from './pages/privacy';
import ContactUs from './pages/contact';
import NoPage from './pages/NoPage';

function Routeslink() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Routes>
            <Route index element={<ProfileApp />} />
            <Route path="/privacy" element={<Privacypolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        }
      />
    </Routes>
  );
}

export default Routeslink;
