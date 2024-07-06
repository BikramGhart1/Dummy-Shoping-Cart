import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  //this is our home page and outlet contains all the children which can be visited using routes

  return (
    <div className='min-h-screen  bg-slate-50 flex flex-col '>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
