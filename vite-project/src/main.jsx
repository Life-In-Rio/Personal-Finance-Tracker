import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Hawal from './HalamanAwal.jsx'
import Routering from './HalamanRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routering />
  </StrictMode>,
)
