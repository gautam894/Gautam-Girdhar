import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem(
            "medguide-favorites"
        );

        return savedFavorites
            ? JSON.parse(savedFavorites)
            : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "medguide-favorites",
            JSON.stringify(favorites)
        );
    }, [favorites]);

    function toggleFavorite(medicineId) {
        setFavorites((currentFavorites) => {
            if (currentFavorites.includes(medicineId)) {
                return currentFavorites.filter(
                    (id) => id !== medicineId
                );
            }

            return [...currentFavorites, medicineId];
        });
    }

    function isFavorite(medicineId) {
        return favorites.includes(medicineId);
    }

    function clearFavorites() {
        setFavorites([]);
    }

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                toggleFavorite,
                isFavorite,
                clearFavorites
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}