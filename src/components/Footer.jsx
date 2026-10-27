import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2>MedGuide</h2>

                    <p>
                        A health education platform designed to make
                        information about diseases, medicines, and
                        general health awareness easier to explore.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Explore</h3>

                    <Link to="/">Home</Link>
                    <Link to="/diseases">Diseases</Link>
                    <Link to="/medicines">Medicines</Link>
                    <Link to="/categories">Categories</Link>
                </div>

                <div className="footer-column">
                    <h3>Information</h3>

                    <Link to="/about">About MedGuide</Link>
                    <Link to="/safety">Safety Information</Link>
                </div>

                <div className="footer-column">
                    <h3>Important</h3>

                    <p>
                        MedGuide provides general educational information
                        and does not provide diagnosis or personalized
                        medical treatment.
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 MedGuide. Educational Project.
                </p>

                <p>
                    Built with React + Vite
                </p>
            </div>
        </footer>
    );
}

export default Footer;