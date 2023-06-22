// styles 
import './Pagination.css'
// images
import leftArrow from "../images/arrow-left.svg"
import rightArrow from "../images/arrow-right.svg"

export default function Pagination({ setCurrentPage, pages, currentPage, totalPages, handlePageChange }) {
    return (
        <nav className="pagination">
            {currentPage > 1 &&
                <a onClick={() => handlePageChange(setCurrentPage(prevPage => prevPage - 1))}>
                    <img src={leftArrow} alt="" />
                    <span>prev</span>
                </a>
            }
            {pages.length > 1 && pages.map((page, index) => (
                <button
                    className={page == currentPage ? 'active' : ''}
                    key={index}
                    onClick={() => page !== currentPage && handlePageChange(setCurrentPage(page))}>
                    {page}
                </button>
            ))}
            {currentPage < totalPages &&
                <a onClick={() => handlePageChange(setCurrentPage(prevPage => prevPage + 1))}>
                    <span>next</span>
                    <img src={rightArrow} alt="" />
                </a>
            }
        </nav>
    )
}