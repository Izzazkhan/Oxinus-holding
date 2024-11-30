import React from "react";
import { fetchRandomMeal } from "../../services/api";
import MealCard from "../../components/mealCard";

export default async function RandomMeal() {

    const meal = await fetchRandomMeal()

    // if (!meal) return <div>Loading...</div>;

    return (
        <div className="random-meal mt-20">
        <h1 className="text-3xl mt-4 font-bold text-gray-800 text-center mb-8">Random Meal</h1>
            <MealCard 
                key={meal.idMeal}
                meal={meal}
            />
        </div>
    );
}
