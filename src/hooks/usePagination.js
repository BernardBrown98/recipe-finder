// hooks
import { useState } from "react";

export default function Pagination(recipesPerPage, data) {
    const [currentPage, setCurrentPage] = useState(1)
    const lastRecipeIndex = recipesPerPage * currentPage
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage
    const recipes = data?.slice(firstRecipeIndex, lastRecipeIndex)

    const pages = []
    const totalPages = Math.ceil(data?.length / recipesPerPage)
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    return { recipes, setCurrentPage, pages, currentPage, totalPages }
}