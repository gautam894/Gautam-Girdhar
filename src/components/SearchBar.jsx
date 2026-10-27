import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import medicines from "../data/medicines";
import diseases from "../data/diseases";

function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchText = query.toLowerCase().trim();

    const medicineSuggestions = searchText
        ? medicines
              .filter((medicine) =>
                  medicine.name
                      .toLowerCase()
                      .includes(searchText)
              )
              .slice(0, 5)
        : [];

    const diseaseSuggestions = searchText
        ? diseases
              .filter((disease) =>
                  disease.name
                      .toLowerCase()
                      .includes(searchText)
              )
              .slice(0, 5)
        : [];

    const hasSuggestions =
        medicineSuggestions.length > 0 ||
        diseaseSuggestions.length > 0;

    function handleSearch(event) {
        event.preventDefault();

        const trimmedQuery = query.trim();

        if (!trimmedQuery) {
            return;
        }

        navigate(
            `/search?q=${encodeURIComponent(trimmedQuery)}`
        );

        setQuery("");
    }

    function handleSuggestionClick() {
        setQuery("");
    }

    return (
        <div className="search-container">

            <form
                className="search-bar"
                onSubmit={handleSearch}
            >
                <input
                    type="text"
                    placeholder="Search medicines, diseases..."
                    value={query}
                    onChange={(event) =>
                        setQuery(event.target.value)
                    }
                />

                <button type="submit">
                    Search
                </button>
            </form>

            {searchText && (
                <div className="search-suggestions">

                    {hasSuggestions ? (
                        <>
                            {medicineSuggestions.map(
                                (medicine) => (
                                    <Link
                                        key={`medicine-${medicine.id}`}
                                        to={`/medicines/${medicine.id}`}
                                        onClick={
                                            handleSuggestionClick
                                        }
                                    >
                                        <strong>
                                            {medicine.name}
                                        </strong>

                                        <span>
                                            Medicine ·{" "}
                                            {medicine.category}
                                        </span>
                                    </Link>
                                )
                            )}

                            {diseaseSuggestions.map(
                                (disease) => (
                                    <Link
                                        key={`disease-${disease.id}`}
                                        to={`/diseases/${disease.id}`}
                                        onClick={
                                            handleSuggestionClick
                                        }
                                    >
                                        <strong>
                                            {disease.name}
                                        </strong>

                                        <span>
                                            Disease ·{" "}
                                            {disease.category}
                                        </span>
                                    </Link>
                                )
                            )}
                        </>
                    ) : (
                        <div className="no-search-suggestions">
                            No matching medicines or diseases found.
                        </div>
                    )}

                </div>
            )}

        </div>
    );
}

export default SearchBar;