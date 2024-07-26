import { Navbar } from './components/Navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './routes/Home'
import { Contacto } from './routes/contacto/Contacto'
import { SobreMi } from './routes/SobreMi'
import { SignIn } from './routes/SignIn'
import { SignUp } from './routes/SignUp'

export const App = () => {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/><Route/>
        <Route path="/contacto" element={<Contacto/>}></Route>
        <Route path="/sobremi" element={<SobreMi/>}/><Route/>
        <Route path="/signin" element={<SignIn/>}/><Route/>
        <Route path="/signup" element={<SignUp/>}/><Route/>
        <Route path="/*" element={<Navigate to="/"/>}/><Route/>
      </Routes>
    </>
  )
}


