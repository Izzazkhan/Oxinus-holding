"use client";

import React from "react";
import { Meal } from "../utils/types";
import { useFavorites } from "../context/FavoriteContext";

interface MealCardProps {
    meal: Meal;
    random?: Boolean
    generateRandom?: () => void
}

const MealCard: React.FC<MealCardProps> = ({ meal, random, generateRandom }) => {
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
    const handleToggleFavorite = () => {
        if (isFavorite(meal?.idMeal)) {
            removeFromFavorites(meal?.idMeal)
        } else {
            addToFavorites(meal)
        }
    }
    return (
        <div className="text-center bg-white shadow-md padding-45 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
                <img
                    src={meal?.strMealThumb}
                    alt={meal?.strMeal}
                    className="w-auto h-auto"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{meal?.strMeal.split(' ').slice(0,4).join(' ')}</h2>
                <div className="space-x-4">
                    <button
                        className={`mt-4 w-auto py-2 p-12 rounded-lg transition ${
                            isFavorite(meal?.idMeal)
                                ? "bg-red-500 text-white hover:bg-red-600"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                        onClick={handleToggleFavorite}
                    >
                        {isFavorite(meal?.idMeal) ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                    {random && 
                        <button className={`mt-4 w-auto py-2 p-12 rounded-lg transition bg-green-500 text-white hover:bg-green-600`}
                            onClick={generateRandom}
                        >
                            Generate Random Meal
                        </button>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default MealCard
