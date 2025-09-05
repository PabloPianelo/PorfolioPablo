// src/components/Pagination.jsx
import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css"; // Puedes crear un archivo CSS separado

const Pagination = ({ pageCount, currentPage, onPageChange, className = "" }) => {
  if (pageCount <= 1) return null;

  return (
    <div className={`pagination-container ${className}`}>
      <ReactPaginate
        previousLabel={"← Anterior"}
        nextLabel={"Siguiente →"}
        pageCount={pageCount}
        onPageChange={onPageChange}
        forcePage={currentPage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageClassName={"pagination__item"}
        pageLinkClassName={"pagination__link"}
      />
    </div>
  );
};

export default Pagination;