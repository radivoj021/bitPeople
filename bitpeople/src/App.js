import React from 'react';
import Header from "./Header";

import Footer from './Footer'
import './App.css';
import UsersPage from './UserPage';

function App() {
  return (
    <div className="App">
      <Header />
      <UsersPage />
      <Footer />
    </div>
  );
}

export default App;
