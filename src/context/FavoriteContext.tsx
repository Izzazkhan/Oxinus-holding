"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Meal } from "../utils/types";

interface FavoriteContextType {
    favorites: Meal[];
    addToFavorites: (meal: Meal) => void;
    removeFromFavorites: (mealId: string) => void;
    isFavorite: (mealId: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Meal[]>([]);

    const addToFavorites = (meal: Meal) => {
        setFavorites((prev) => [...prev, meal]);
    };

    const removeFromFavorites = (mealId: string) => {
        setFavorites((prev) => prev.filter((meal) => meal.idMeal !== mealId));
    };

    const isFavorite = (mealId: string) => {
        return favorites.some((meal) => meal.idMeal === mealId);
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoriteProvider");
    }
    return context;
};
