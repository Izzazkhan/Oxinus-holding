'use client'
import { useState } from "react";
import { Meal } from "../../utils/types";
import { useFavorites } from "../../context/FavoriteContext";
import MealCard from "../../components/mealCard";

export default function Favorites() {
    const { favorites } = useFavorites()

    return (
        <div className="favorites">
            <h1>My Favorites</h1>
            <div className="meal-list">
                {favorites.map((meal) => (
                    <MealCard
                        key={meal.idMeal}
                        meal={meal}
                    />
                ))}
            </div>
        </div>
    );
}
