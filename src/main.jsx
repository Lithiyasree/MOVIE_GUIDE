import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
)