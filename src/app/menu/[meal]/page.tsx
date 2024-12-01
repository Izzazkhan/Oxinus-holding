
import { fetchMealsByCategory } from "@/services/api"
import MealCard from "@/components/mealCard"
import { Meal } from "@/utils/types"
import Loading from "@/components/loading"

export default async function Page({ params }: { params: { meal: string } }) {

    const data = await fetchMealsByCategory(params.meal)
    if (!data) return <Loading />

    return (
        <main className="bg-gray-100 mt-20 min-h-screen p-6">
            <div className="bg-gray-100 min-h-screen p-6">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Meals</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((meal: Meal) => (
                        <MealCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>
            </div>
        </main>
    )
}