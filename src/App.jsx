import {BrowserRouter, Route, Routes} from "react-router-dom";
import CryptoHome from "./pages/CryptoHome.jsx";
import CryptoDetail from "./pages/CryptoDetail.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<CryptoHome />}></Route>
            <Route path="/coin/:id" element={<CryptoDetail />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
