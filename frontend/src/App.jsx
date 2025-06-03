import "./App.css";
import Home from "./pages/HomePage";
import Favorites from "./pages/FavoritesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoris' element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
