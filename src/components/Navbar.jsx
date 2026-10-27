import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
    const { favorites } = useFavorites();

    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav className="navbar">

            <Link
                to="/"
                className="navbar-logo"
                onClick={closeMenu}
            >
                MedGuide
            </Link>

            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div
                className={`navbar-links ${
                    menuOpen ? "navbar-links-open" : ""
                }`}
            >
                <Link to="/" onClick={closeMenu}>
                    Home
                </Link>

                <Link to="/diseases" onClick={closeMenu}>
                    Diseases
                </Link>

                <Link to="/medicines" onClick={closeMenu}>
                    Medicines
                </Link>

                <Link to="/symptom-checker" onClick={closeMenu}>
                    Symptom Checker
                </Link>

                <Link to="/categories" onClick={closeMenu}>
                    Categories
                </Link>

                <Link to="/favorites" onClick={closeMenu}>
                    Favorites ({favorites.length})
                </Link>

                <Link to="/safety" onClick={closeMenu}>
                    Safety
                </Link>

                <Link to="/about" onClick={closeMenu}>
                    About
                </Link>

                <Link to="/dashboard" onClick={closeMenu}>
    Dashboard
</Link>
            </div>

        </nav>
    );
}

export default Navbar;