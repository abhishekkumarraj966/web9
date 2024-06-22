import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blogpage from "./components/Blogpage";
import ServicePage from "./components/ServicePage"
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-[#421921]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/blogpage/:id" element={<Blogpage />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/servicePage/:id" element={<ServicePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
