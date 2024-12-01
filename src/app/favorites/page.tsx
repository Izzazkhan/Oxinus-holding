'use client'
import { Meal } from "@/utils/types";
import { useFavorites } from "@/context/FavoriteContext";
import MealCard from "@/components/mealCard";
import Loading from "@/components/loading";

export default function FavoritesPage() {
    const { favorites } = useFavorites()
    if (!favorites) return <Loading />
    return (
        <main className="mt-20 bg-gray-100 min-h-screen p-6">
        <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-3xl mt-4 font-bold text-gray-800 text-center mb-8">Favorites Meal</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.length ==0 ? <h1>There is no Favorite meal selected</h1> : favorites.map((meal: Meal) => (
                    <MealCard key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    </main>
    )
}
