import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VibePlayground from './components/VibePlayground'
import Comparison from './components/Comparison'
import Curriculum from './components/Curriculum'
import ToolsGrid from './components/ToolsGrid'
import RoiCalculator from './components/RoiCalculator'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import EnrollModal from './components/EnrollModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="app-root">
      <Navbar onOpenEnrollModal={handleOpenModal} />
      <main>
        <Hero onOpenEnrollModal={handleOpenModal} />
        <VibePlayground />
        <Comparison />
        <Curriculum />
        <ToolsGrid />
        <RoiCalculator onOpenEnrollModal={handleOpenModal} />
        <Testimonials />
      </main>
      <Footer onOpenEnrollModal={handleOpenModal} />
      <EnrollModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default App
