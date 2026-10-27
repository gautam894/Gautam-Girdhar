import { createContext, useContext, useEffect, useState } from "react";

const RecentlyViewedContext = createContext();

export function RecentlyViewedProvider({ children }) {
    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        const saved = localStorage.getItem(
            "medguide-recently-viewed"
        );

        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "medguide-recently-viewed",
            JSON.stringify(recentlyViewed)
        );
    }, [recentlyViewed]);

    function addRecentlyViewed(item) {
        setRecentlyViewed((current) => {
            const withoutDuplicate = current.filter(
                (oldItem) =>
                    !(
                        oldItem.type === item.type &&
                        oldItem.id === item.id
                    )
            );

            return [item, ...withoutDuplicate].slice(0, 5);
        });
    }

    return (
        <RecentlyViewedContext.Provider
            value={{
                recentlyViewed,
                addRecentlyViewed
            }}
        >
            {children}
        </RecentlyViewedContext.Provider>
    );
}

export function useRecentlyViewed() {
    return useContext(RecentlyViewedContext);
}