import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import MedicineCard from "../components/MedicineCard";
import medicines from "../data/medicines";

function Medicines() {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedCategory = searchParams.get("category");

    const [searchText, setSearchText] = useState("");
    const [sortOption, setSortOption] = useState("default");

    // Get unique categories from medicine data
    const categories = [
        ...new Set(
            medicines.map(
                (medicine) => medicine.category
            )
        )
    ];

    // Filter and sort medicines
    const filteredMedicines = useMemo(() => {
        let result = [...medicines];

        // Category filter
        if (selectedCategory) {
            result = result.filter(
                (medicine) =>
                    medicine.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
            );
        }

        // Search filter
        if (searchText.trim()) {
            const query = searchText
                .toLowerCase()
                .trim();

            result = result.filter((medicine) =>
                `${medicine.name} ${medicine.genericName} ${medicine.category} ${medicine.description}`
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
        selectedCategory,
        searchText,
        sortOption
    ]);

    function handleCategoryChange(event) {
        const category = event.target.value;

        if (category) {
            setSearchParams({
                category: category
            });
        } else {
            setSearchParams({});
        }
    }

    function clearFilters() {
        setSearchParams({});
        setSearchText("");
        setSortOption("default");
    }

    return (
        <main className="medicines-page">

            {/* =========================
                PAGE HEADER
            ========================= */}

            <section className="page-header">

                <span>
                    MEDGUIDE
                </span>

                <h1>
                    {selectedCategory
                        ? `${selectedCategory} Medicines`
                        : "Medicine Information"}
                </h1>

                <p>
                    Explore general educational information
                    about medicines, their common uses,
                    categories, and important precautions.
                </p>

            </section>


            {/* =========================
                MEDICINES SECTION
            ========================= */}

            <section className="medicines-section">

                {/* Active Category Filter */}

                {selectedCategory && (
                    <div className="active-filter">

                        <span>
                            Showing:{" "}
                            <strong>
                                {selectedCategory}
                            </strong>
                        </span>

                        <button
                            type="button"
                            onClick={clearFilters}
                        >
                            Clear Filter
                        </button>

                    </div>
                )}


                {/* =========================
                    SEARCH / FILTER / SORT
                ========================= */}

                <div className="medicine-controls">

                    {/* Search */}

                    <div className="medicine-search">

                        <input
                            type="text"
                            placeholder="Search medicines..."
                            value={searchText}
                            onChange={(event) =>
                                setSearchText(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    {/* Category */}

                    <div className="medicine-filter">

                        <select
                            value={
                                selectedCategory || ""
                            }
                            onChange={
                                handleCategoryChange
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


                    {/* Sorting */}

                    <div className="medicine-sort">

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

                <div className="medicine-result-count">

                    <p>
                        Showing{" "}
                        <strong>
                            {filteredMedicines.length}
                        </strong>{" "}
                        of{" "}
                        <strong>
                            {medicines.length}
                        </strong>{" "}
                        medicines
                    </p>

                </div>


                {/* =========================
                    MEDICINE CARDS
                ========================= */}

                {filteredMedicines.length > 0 ? (

                    <div className="medicine-grid">

                        {filteredMedicines.map(
                            (medicine) => (
                                <MedicineCard
                                    key={medicine.id}
                                    medicine={medicine}
                                />
                            )
                        )}

                    </div>

                ) : (

                    <div className="no-results">

                        <h2>
                            No medicines found
                        </h2>

                        <p>
                            Try a different medicine name,
                            category, or search term.
                        </p>

                        <button
                            type="button"
                            onClick={clearFilters}
                        >
                            View All Medicines
                        </button>

                    </div>

                )}

            </section>

        </main>
    );
}

export default Medicines;