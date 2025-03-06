import Header from "./Components/Header"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Careers from "./Pages/Careers"
import Spinner from "./Components/Spinner"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import ErrorPage from "./Components/ErrorPage"
import ContactUs from "./Pages/ContactUs"
const App = () => {

  const [loader, setLoader] = useState(true)

  useEffect(() =>{
     setTimeout(() =>{
      setLoader(false)
     },700)
  },[])

  if(loader){
    return <Spinner />
  }


  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </Router>
        </>
  )
}

export default App
