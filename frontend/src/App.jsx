import "./css/App.css";
import Home from "./pages/HomePage";
import Favorites from "./pages/FavoritesPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
