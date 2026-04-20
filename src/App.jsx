import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import heroImg from './assets/hero.png'
import Header from './assets/header'
import Profile from './assets/profile'
import Footer from './assets/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Profile />
      </main>
      <Footer />
    </>
  )
}

export default App