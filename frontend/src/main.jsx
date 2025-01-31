import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import New from './components/new/New.jsx';
import Header from './components/header/Header.jsx';
import NotaView from './components/notas/NotaView.jsx';
import NotFound from './components/404/NotFound.jsx';
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <Toaster />
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/nueva-nota" element={<New />} />
        <Route path="/nota/:id" element={<NotaView />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
