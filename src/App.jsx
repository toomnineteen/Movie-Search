import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AppPage from './components/AppPage'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import AppDetail from './components/AppDetail'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<AppPage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/Movie-Detaile/:id' element={<AppDetail />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App