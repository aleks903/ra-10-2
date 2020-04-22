import React from 'react';
import './App.css';
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime';
import ServiceAdd from './components/ServiceAdd.js';
import ServiceList from './components/ServiceList.js';
import ServiceFiltr from './components/ServiceFiltr.js';


export default function App() {
  // const urlEnv = process.env.REACT_APP_URL;

  return (
    <React.Fragment>
      <ServiceFiltr />
      <ServiceAdd />
      <ServiceList />
    </React.Fragment>
  );
}
