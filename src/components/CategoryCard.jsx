import { Link } from "react-router-dom";

function CategoryCard({ category }) {
    return (
        <article className="category-card">
            <div className="category-icon">
                {category.icon}
            </div>

            <div className="category-content">
                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <Link to={`/medicines?category=${encodeURIComponent(category.name)}`}>
                    Explore Category
                </Link>
            </div>
        </article>
    );
}

export default CategoryCard;