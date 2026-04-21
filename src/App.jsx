import { useState } from 'react'
import Header from './component/Header.jsx'
import Profile from './component/Profile.card.jsx'
import Skills from './component/Skills.jsx'
import Footer from './component/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Profile />
      </main>
        <Skills />
      <Footer />
    </>
  )
}

export default App