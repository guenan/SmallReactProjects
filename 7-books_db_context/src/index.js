// 1) Import the React and ReactDOM librairies
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {Provider} from './context/books';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component


// 5) Show the component on the screen
root.render(
<Provider>
    <App />
</Provider>
);