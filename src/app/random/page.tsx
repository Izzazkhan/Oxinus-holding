'use client'
import React, { useEffect, useState } from "react";
import { fetchRandomMeal } from "@/services/api";
import MealCard from "@/components/mealCard";
import { Meal } from "@/utils/types";
import { Suspense } from 'react';

export default function RandomMeal() {
    const [meal, setMeal] = useState<Meal>({
        idMeal: "",
        strMeal: "",
        strMealThumb: ""
      })

    useEffect(() => {
        async function fetchCall() {
            const res = await fetchRandomMeal()
            setMeal(res)
        }
        fetchCall()
    }, [])

    const generateRandom = async () => {
        const res = await fetchRandomMeal()
        setMeal(res)
    }
    return (
        <div className="random-meal mt-20">
        <h1 className="text-3xl mt-4 font-bold text-gray-800 text-center mb-8">Random Meal</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <MealCard 
                key={meal.idMeal}
                meal={meal}
                random={true}
                generateRandom={() => generateRandom()}
            />
        </Suspense>
        </div>
    )
}
