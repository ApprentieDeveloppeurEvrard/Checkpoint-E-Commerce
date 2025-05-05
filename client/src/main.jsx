import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/banner.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import './index.css' // assure-toi que ce fichier existe bien
import CtaAction from './components/cta-action.jsx'
import Category from './components/category.jsx'
import ProductContainer from "./containers/ProductContainer";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner />
    <Navbar />
    <CtaAction/>
    <Category/>
    <ProductContainer />
    <Footer />
  </React.StrictMode>
)
