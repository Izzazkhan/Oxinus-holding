'use client'
import { fetchMealsByCategory } from "../../../services/api";
import MealCard from "../../../components/mealCard";
import { Meal } from "../../../utils/types";

export default async function Page({ params }: { params: { category: string } }) {
    console.log('params', params)
    const data = await fetchMealsByCategory(params.category)


  return (
    <main className="px-7 pt-24 text-center">
      {/* <h1 className="text-5xl font-semibold mb-7">{data.name}</h1>
      <p className="max-w-[700px] mx-auto">{data.body}</p> */}
      {/* {data.map((meal: Meal) => (
            <MealCard
                key={meal.idMeal}
                meal={meal}
            />
        ))} */}
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 capitalize">
                {data.body} Meals
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((meal: Meal) => (
                    <MealCard key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    </main>
  );
}