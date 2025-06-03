import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/HomePage.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Bones and all", release_date: "2024" },
    { id: 2, title: "The Whale", release_date: "2023" },
    { id: 3, title: "Soul", release_date: "2018" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Rechercher un film...'
          className='search-input'
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type='submit' className='search-button'>
          Rechercher
        </button>
      </form>

      <div className='movie-grid'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
