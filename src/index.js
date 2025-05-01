import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

//console.log('Hello, world! This is a test alert from the index.js file.');
const root = createRoot(document.getElementById('root'));
root.render(<App />);

