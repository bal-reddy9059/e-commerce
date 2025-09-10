
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ShopContextProvider from './Context/ShopContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Deploy1">
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
</BrowserRouter>

);
