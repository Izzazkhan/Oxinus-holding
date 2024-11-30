import React from "react";
import { fetchCategories } from "../../../services/api";
import { Category } from "../../../utils/types";
import Link from "next/link";

export default async function Menu() {
    const data = await fetchCategories()
    return (
        <div className="bg-gray-100 min-h-screen p-6 mt-20">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Menu Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((category: Category) => (
                    <div
                        key={category.idCategory}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                            className="w-auto h-auto object-cover"
                        />
                        <div key={category.idCategory} className="text-xl text-center font-semibold text-gray-600">     
                            <Link href={`/menu/${category.strCategory}`}>
                                <button className="mt-4 w-full bg-gray-600 text-white py-2 hover:bg-gray-800 transition">
                                    {category.strCategory}
                                </button>
                            </Link>                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
