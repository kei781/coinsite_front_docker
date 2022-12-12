import React from "react";
import "../style/Pagebtn.scss";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <div className="main_btn">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="pre_btn"
        >
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
              className="current_btn"
            >
              {i + 1}
            </button>
          ))}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
          className="post_btn"
        >
          &gt;
        </button>
      </div>
    </>
  );
};
export default Pagination;
