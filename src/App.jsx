import {   Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Inventory from './pages/Inventory'   
import Clearance from './pages/Clearence'
import Volkswagen from './pages/Volkswagen'
import Approved from './pages/Approved'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Support from './pages/Support'
import Trade from './pages/Trade'
import ContactUs from './pages/ContactUs'
import Team from './pages/Team'
import About from './pages/About'
import Vehicle from './pages/Vehicle'


export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/clearance" element={<Clearance />} />
        <Route path="/volkswagen" element={<Volkswagen />} />
        <Route path="/approved" element={<Approved />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle" element={<Vehicle />} />
      </Routes>
      <Footer />
    </>
  )
}

 