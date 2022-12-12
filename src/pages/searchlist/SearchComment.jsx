import React from "react";
import "./Searchlist.scss";

const SearchComment = ({ commentList, postPerPage, currentPage2 }) => {
  const offset = (currentPage2 - 1) * postPerPage;
  return (
    <>
      <tbody className="BoardTbody5">
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
              <span> {data.date}</span>
            </tr>
          )
        )}
      </tbody>
    </>
  );
};

export default SearchComment;
