

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='min-h-screen  bg-slate-50 flex flex-col '>
      <Navbar />
      <Outlet />

      <Footer />

    </div>
  )
}

export default App
