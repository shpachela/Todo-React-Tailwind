import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/screens/Home/Home.jsx'
import Layout from './components/layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>

  </StrictMode>,
)
