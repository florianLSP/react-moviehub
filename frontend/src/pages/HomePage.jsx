import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Bones and all", release_date: "2024" },
    { id: 2, title: "The Whale", release_date: "2023" },
    { id: 3, title: "Soul", release_date: "2018" },
  ];

  return (
    <div className='home'>
      <div className='movie-grid'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
