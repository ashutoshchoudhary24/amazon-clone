import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Hello Ashutosh, let's build the Amazon Store clone 🎈 </h1> */}
        {/* Header */}
        {/* Home */}
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
