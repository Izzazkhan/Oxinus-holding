import { fetchRandomMeal } from "@/services/api";
import MealCard from "@/components/mealCard";
import { Suspense } from 'react';

export default async function RandomMeal() {

    const meal = await fetchRandomMeal()

    return (
        <div className="random-meal mt-20">
        <h1 className="text-3xl mt-4 font-bold text-gray-800 text-center mb-8">Random Meal</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <MealCard 
                    key={meal.idMeal}
                    meal={meal}
                />
        </Suspense>
        </div>
    )
}
