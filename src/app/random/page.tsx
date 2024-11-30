import React from "react";
import { fetchRandomMeal } from "../../services/api";
import { Meal } from "../../utils/types";
import MealCard from "../../components/mealCard";

export default async function RandomMeal() {
 
    const meal = await fetchRandomMeal()

    // if (!meal) return <div>Loading...</div>;
    console.log('meal', meal)

    return (
        <div className="random-meal">
            <h1>Random Meal</h1>
            <MealCard 
                key={meal.idMeal}
                meal={meal} 
            />
        </div>
    );
}
