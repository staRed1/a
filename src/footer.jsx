import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>João Arthur</p>
    </footer>
  );
  };

  main 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Footer from './footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
)