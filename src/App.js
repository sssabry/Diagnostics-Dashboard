import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
