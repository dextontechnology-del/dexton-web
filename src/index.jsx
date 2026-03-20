import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Hero from './components/hero';
import About from './components/about';
import Portfolio from './components/portfolio';

window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App >
      <Hero />
      <About />
      <Portfolio />
    </App>
  </React.StrictMode>
);


reportWebVitals();
