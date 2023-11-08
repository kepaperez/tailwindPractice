
import { ProductPage } from './pages/ProductPage';
import Nav2 from './components/Nav'
import HomePage from './pages/HomePage'
import {  Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import { ProductsPage } from './pages/ProductsPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav2 />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="carrito" element={<CartPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  )


}

export default App
