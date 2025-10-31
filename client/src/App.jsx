import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Enquiry from "./pages/Enquiry";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-theme text-theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;