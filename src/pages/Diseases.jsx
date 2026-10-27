import { useMemo, useState } from "react";
import DiseaseCard from "../components/DiseaseCard";
import diseases from "../data/diseases";

function Diseases() {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOption, setSortOption] = useState("default");

    // Get unique categories
    const categories = [
        ...new Set(
            diseases.map(
                (disease) => disease.category
            )
        )
    ];

    // Filter and sort diseases
    const filteredDiseases = useMemo(() => {
        let result = [...diseases];

        // Category filter
        if (selectedCategory) {
            result = result.filter(
                (disease) =>
                    disease.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
            );
        }

        // Search
        if (searchText.trim()) {
            const query = searchText
                .toLowerCase()
                .trim();

            result = result.filter((disease) =>
                `${disease.name} ${disease.category} ${disease.description}`
                    .toLowerCase()
                    .includes(query)
            );
        }

        // Sorting
        if (sortOption === "az") {
            result.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        }

        if (sortOption === "za") {
            result.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        }

        return result;
    }, [
        searchText,
        selectedCategory,
        sortOption
    ]);

    function clearFilters() {
        setSearchText("");
        setSelectedCategory("");
        setSortOption("default");
    }

    return (
        <main className="diseases-page">

            {/* =========================
                PAGE HEADER
            ========================= */}

            <section className="page-header">

                <span>
                    MEDGUIDE
                </span>

                <h1>
                    Explore Diseases
                </h1>

                <p>
                    Explore general educational information
                    about common health conditions, symptoms,
                    and precautions.
                </p>

            </section>


            {/* =========================
                DISEASE SECTION
            ========================= */}

            <section className="diseases-section">

                {/* =========================
                    SEARCH / FILTER / SORT
                ========================= */}

                <div className="disease-controls">

                    {/* Search */}

                    <div className="disease-search">

                        <input
                            type="text"
                            placeholder="Search diseases..."
                            value={searchText}
                            onChange={(event) =>
                                setSearchText(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    {/* Category */}

                    <div className="disease-filter">

                        <select
                            value={selectedCategory}
                            onChange={(event) =>
                                setSelectedCategory(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                All Categories
                            </option>

                            {categories.map(
                                (category) => (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                )
                            )}

                        </select>

                    </div>


                    {/* Sort */}

                    <div className="disease-sort">

                        <select
                            value={sortOption}
                            onChange={(event) =>
                                setSortOption(
                                    event.target.value
                                )
                            }
                        >

                            <option value="default">
                                Sort: Default
                            </option>

                            <option value="az">
                                Name: A → Z
                            </option>

                            <option value="za">
                                Name: Z → A
                            </option>

                        </select>

                    </div>

                </div>


                {/* Result Count */}

                <div className="disease-result-count">

                    <p>
                        Showing{" "}
                        <strong>
                            {filteredDiseases.length}
                        </strong>{" "}
                        of{" "}
                        <strong>
                            {diseases.length}
                        </strong>{" "}
                        diseases
                    </p>

                </div>


                {/* Clear Filters */}

                {(searchText ||
                    selectedCategory ||
                    sortOption !== "default") && (

                    <div className="disease-clear">

                        <button
                            type="button"
                            onClick={clearFilters}
                        >
                            Clear Filters
                        </button>

                    </div>
                )}


                {/* =========================
                    DISEASE CARDS
                ========================= */}

                {filteredDiseases.length > 0 ? (

                    <div className="disease-grid">

                        {filteredDiseases.map(
                            (disease) => (

                                <DiseaseCard
                                    key={disease.id}
                                    disease={disease}
                                />

                            )
                        )}

                    </div>

                ) : (

                    <div className="no-results">

                        <h2>
                            No diseases found
                        </h2>

                        <p>
                            Try a different disease name,
                            category, or search term.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                        >
                            View All Diseases
                        </button>

                    </div>

                )}

            </section>

        </main>
    );
}

export default Diseases;