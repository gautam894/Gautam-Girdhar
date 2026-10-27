import { Link, useSearchParams } from "react-router-dom";
import medicines from "../data/medicines";
import diseases from "../data/diseases";

function SearchResults() {
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";
    const searchText = query.toLowerCase().trim();

    const medicineResults = medicines.filter((medicine) =>
        `${medicine.name} ${medicine.genericName} ${medicine.category} ${medicine.description}`
            .toLowerCase()
            .includes(searchText)
    );

    const diseaseResults = diseases.filter((disease) =>
        `${disease.name} ${disease.category} ${disease.description}`
            .toLowerCase()
            .includes(searchText)
    );

    const totalResults =
        medicineResults.length + diseaseResults.length;

    return (
        <main className="search-page">

            <section className="page-header">
                <span>MEDGUIDE SEARCH</span>

                <h1>Search Results</h1>

                <p>
                    Results for:
                    <strong> "{query}"</strong>
                </p>
            </section>

            <section className="search-results-section">

                {totalResults === 0 ? (
                    <div className="no-results">
                        <h2>No Results Found</h2>

                        <p>
                            We could not find any diseases or medicines
                            matching your search.
                        </p>

                        <Link to="/medicines">
                            Browse Medicines
                        </Link>
                    </div>
                ) : (
                    <>
                        {medicineResults.length > 0 && (
                            <section className="search-result-group">

                                <h2>Medicines</h2>

                                <div className="search-result-list">
                                    {medicineResults.map((medicine) => (
                                        <Link
                                            key={medicine.id}
                                            to={`/medicines/${medicine.id}`}
                                            className="search-result-card"
                                        >
                                            <span>
                                                {medicine.category}
                                            </span>

                                            <h3>
                                                {medicine.name}
                                            </h3>

                                            <p>
                                                {medicine.description}
                                            </p>
                                        </Link>
                                    ))}
                                </div>

                            </section>
                        )}

                        {diseaseResults.length > 0 && (
                            <section className="search-result-group">

                                <h2>Diseases</h2>

                                <div className="search-result-list">
                                    {diseaseResults.map((disease) => (
                                        <Link
                                            key={disease.id}
                                            to={`/diseases/${disease.id}`}
                                            className="search-result-card"
                                        >
                                            <span>
                                                {disease.category}
                                            </span>

                                            <h3>
                                                {disease.name}
                                            </h3>

                                            <p>
                                                {disease.description}
                                            </p>
                                        </Link>
                                    ))}
                                </div>

                            </section>
                        )}
                    </>
                )}

            </section>

        </main>
    );
}

export default SearchResults;