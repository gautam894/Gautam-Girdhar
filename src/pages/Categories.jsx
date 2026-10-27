import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";

function Categories() {
    return (
        <main className="categories-page">
            <section className="page-header">
                <span>MEDICINE CATEGORIES</span>

                <h1>Explore Medicine Categories</h1>

                <p>
                    Browse general educational information organized into
                    different health and medicine categories.
                </p>
            </section>

            <section className="categories-section">
                <div className="category-grid">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Categories;