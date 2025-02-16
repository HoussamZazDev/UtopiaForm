import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import LoginForm from './LoginForm';
import AdminForm from './AdminForm';
import GoogleForm from './GoogleForm';
import CountryRoleSelector from './CountryRoleSelector';
import LoggedIn from './LoggedIn'; // Create this component for the logged-in page
import AdminPanel from './AdminPanel';





const App = () => {
  return (

    
   
      <Routes>
        {/* Route for the LoginForm */}
        <Route path="/" element={<LoginForm />} />

        {/* Route for the AdminForm */}
        <Route path="/admin" element={<AdminForm />} />

        {/* Route for the GoogleForm */}
        <Route path="/google" element={<GoogleForm />} />

        {/* Route for the CountryRoleSelector */}
        <Route path="/country-role" element={<CountryRoleSelector />} />

        {/* Route for the LoggedIn page */}
        <Route path="/logged-in" element={<LoggedIn />} />

        <Route path="/admin-panel" element={<AdminPanel />} />


        {/* 404 Not Found */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />



       
      </Routes>
  
  );
};

export default App;