import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DisplayBox from './Display/DisplayBox/DisplayBox.jsx'
import { handleClick, selectedParagraph } from './Display/RandomParaDisplay/RandomPara.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} />
      <Route path='/DisplayBox'
        element={
          <DisplayBox
            paragraph={selectedParagraph}
            onStart={handleClick}
          />
        }>

      </Route>

    </Routes>
  </BrowserRouter>
)
