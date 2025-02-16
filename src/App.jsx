import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pdfToText from 'react-pdftotext'
import ExtractPDF from './components/ExtractPDF'
import './pdfWorker';


function App() {
  return (
    <div>
    <ExtractPDF/>
    </div>
  )
}

export default App
