import React from "react";
import "./Searchlist.scss";

const SearchComment = ({ commentList, postPerPage, currentPage2 }) => {
  const offset = (currentPage2 - 1) * postPerPage;
  return (
    <>
      <tbody className="BoardTbody5">
        <div className="boardtobdy5">
          {commentList.slice(offset, offset + postPerPage).map(
            (
              data // 각 페이지 첫 게시글 부터 마지막 게시글
            ) => (
              <tr key={data.id}>
                <div>
                  <a
                    href={
                      "/Board/" +
                      data.lcategory +
                      "/" +
                      data.mcategory +
                      "/detail/" +
                      data.boardIndex
                    }>
                    {data.contents}
                  </a>
                </div>
                <span> {data.author}</span>
                <span>
                  {" "}
                  {data.date.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3")}
                </span>
                <hr />
              </tr>
            )
          )}
        </div>
      </tbody>
    </>
  );
};

export default SearchComment;
