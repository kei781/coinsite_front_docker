import React from "react";
import "./Searchlist.scss";

const SearchBoard = ({ boardList, postPerPage, currentPage }) => {
  const offset = (currentPage - 1) * postPerPage;
  return (
    <>
      <tbody className="BoardTbody10">
        <div className="boardtbody11">
          {boardList.slice(offset, offset + postPerPage).map(
            (
              data // 각 페이지 첫 게시글 부터 마지막 게시글
            ) => (
              <div className="djdjfl23" key={data.id}>
                <div>
                  <a
                    href={
                      "/Board/" +
                      data.lcategory +
                      "/" +
                      data.mcategory +
                      "/detail/" +
                      data.id
                    }
                  >
                    {data.subject}
                  </a>
                </div>
                <span> {data.author}</span>
                <span> {data.date}</span>
                <span>조회수 : {data.views}</span>
                <div>
                  <a
                    href={
                      "/Board/" +
                      data.lcategory +
                      "/" +
                      data.mcategory +
                      "/detail/" +
                      data.id
                    }
                  >
                    {data.contents}
                  </a>
                </div>
                <hr />
              </div>
            )
          )}
        </div>
      </tbody>
    </>
  );
};

export default SearchBoard;
