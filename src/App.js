import "./App.css";
import Fetching from "./Components/Fetching";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes exact path="/" element={<Fetching apiUrl = "https://fakestoreapi.com/products" />}>
          <Route exact path="" element={<Fetching apiUrl = "https://fakestoreapi.com/products" />} />
          <Route exact path="electronics/" element={<Fetching apiUrl = "https://fakestoreapi.com/products/category/electronics" />} />
          <Route exact path="jewelery/" element={<Fetching apiUrl = "https://fakestoreapi.com/products/category/jewelery" />} />
          <Route exact path="mensclothing/" element={<Fetching apiUrl = "https://fakestoreapi.com/products/category/men's%20clothing" />} />
          <Route exact path="womensclothing/" element={<Fetching apiUrl = "https://fakestoreapi.com/products/category/women's%20clothing" />} />
        </Routes>
        <Fetching />
      </Router>
    </div>
  );
}

export default App;
