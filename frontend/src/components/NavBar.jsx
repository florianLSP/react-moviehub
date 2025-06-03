import { Link } from "react-router-dom";
import "../css/NavBar.css";

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>Movie Hub</Link>
      </div>

      <div className='navbar-links'>
        <Link to='/' className='nav-link'>
          Accueil
        </Link>
        <Link to='/favorites' className='nav-link'>
          Favoris
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
