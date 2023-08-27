
import './App.css'
import { ProductPage } from './pages/ProductPage';
import Nav2 from './components/Nav2'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav2 />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )


}

export default App
