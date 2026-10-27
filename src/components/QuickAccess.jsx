import { Link } from "react-router-dom";

function QuickAccess() {
    return (
        <section className="quick-access">
            <div className="section-heading">
                <span>QUICK ACCESS</span>

                <h2>Find What You Need</h2>

                <p>
                    Quickly explore diseases, medicines, categories, and
                    important safety information.
                </p>
            </div>

            <div className="quick-access-grid">
                <Link to="/diseases" className="quick-card">
                    <span className="quick-icon">🩺</span>
                    <h3>Explore Diseases</h3>
                    <p>
                        Learn about common conditions and their symptoms.
                    </p>
                </Link>

                <Link to="/medicines" className="quick-card">
                    <span className="quick-icon">💊</span>
                    <h3>Explore Medicines</h3>
                    <p>
                        Find general information about medicines and their
                        common uses.
                    </p>
                </Link>

                <Link to="/categories" className="quick-card">
                    <span className="quick-icon">📚</span>
                    <h3>Medicine Categories</h3>
                    <p>
                        Browse medicines and information by category.
                    </p>
                </Link>

                <Link to="/safety" className="quick-card">
                    <span className="quick-icon">🛡️</span>
                    <h3>Safety Information</h3>
                    <p>
                        Understand responsible use of health information.
                    </p>
                </Link>

                <Link to="/symptom-checker" className="quick-card">
                    <span className="quick-icon">🩺</span>
                    <h3>Symptom Checker</h3>
                    <p>
                        Select symptoms to explore educational guidance and relevant care options.
                    </p>
                </Link>
            </div>
        </section>
    );
}

export default QuickAccess;