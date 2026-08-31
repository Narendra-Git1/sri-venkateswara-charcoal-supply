import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home/Home"
import Products from "../pages/Products/Products"
import ProductDetails from "../pages/ProductDetails/ProductDetails"
import About from "../pages/About/About"
import WholesaleRetail from "../pages/WholesaleRetail/WholesaleRetail"
import Gallery from "../pages/Gallery/Gallery"
import FAQ from "../pages/FAQ/FAQ"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/products/:productId"
        element={<ProductDetails />}
      />
      <Route path="/about" element={<About />} />
      <Route
  path="/wholesale-retail"
  element={<WholesaleRetail />}
/>
<Route path="/gallery" element={<Gallery />} />
<Route path="/faq" element={<FAQ />} />
    </Routes>

  )
}

export default AppRoutes