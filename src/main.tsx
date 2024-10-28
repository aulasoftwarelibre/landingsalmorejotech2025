import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Call4Paper from './pages/call4paper/call4paper.tsx';
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />               
        <Route path="/call4paper" element={<Call4Paper />} /> 
      </Routes>
    </Router>
  </StrictMode>,
)
