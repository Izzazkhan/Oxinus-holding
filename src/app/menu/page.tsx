import React from "react";
import { fetchCategories } from "../../services/api";
import { Category } from "../../utils/types";
import Link from "next/link";

export default async function Menu() {
    const data = await fetchCategories()
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((category: Category) => (
                    <div
                        key={category.idCategory}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                            className="w-full h-40 object-cover"
                        />
                        <div key={category.idCategory} className="text-xl font-semibold text-gray-600">
                            <h2 className="text-xl font-semibold text-gray-600">{category.idMeal}</h2>
                            {/* <button className="mt-4 w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition"> */}
                                <Link href={`/menu/${category.strCategory}`}>{category.strCategory}</Link>
                            {/* </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
