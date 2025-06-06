import "../css/FavoritesPage.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className='favorites'>
        <h2>Vos favoris</h2>
        <div className='movies-grid'>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='favorites-empty'>
      <h2>Pas de favoris pour le moment !</h2>
      <p>Ajoutez des films dans vos favoris et ils apparaîtront ici.</p>
    </div>
  );
}

export default Favorites;
