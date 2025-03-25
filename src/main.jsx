import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

// font poppins
import "@fontsource/poppins"; 
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/600.css";

// font josefin
import "@fontsource/josefin-sans"; 
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/600.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
