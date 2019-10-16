import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <nav>
      <ul className="pagination">
        <li>
          <a
            onClick={() => paginate(currentPage - 1)}
            href="#/"
            className="page-link"
          >
            Back
          </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#/" className="page-link">
              {console.log(number, "numbers")}
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            onClick={() => paginate(currentPage + 1)}
            href="#/"
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
