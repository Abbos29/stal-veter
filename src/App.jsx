import './reset.css'
import './App.css'
import '/public/fonts/stylesheet.css'
import Header from './components/layout/Header/Header'
import Hero from './components/layout/Hero/Hero'
import Types from './components/layout/Types/Types'
import FreeWrap from './components/layout/FreeWrap/FreeWrap'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Types />
      <FreeWrap />
    </>
  )
}

export default App