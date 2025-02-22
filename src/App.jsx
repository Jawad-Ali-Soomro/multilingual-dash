import './App.css'
import { DashboardLayout } from './dashboardlayout'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
   <>
   <BrowserRouter>
      <DashboardLayout />
   </BrowserRouter>
   </>
  )
}

export default App
