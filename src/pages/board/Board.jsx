import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import BoardList from "../../components/board/BoardList";
import BoardPost from "../../components/board/BoardPost";
import BoardDetail from "../../components/board/BoardDetail";
import BoardUpdate from "../../components/board/BoardUpdate";

const Board = ({ boardList, setBoardList }) => {
  const { lcategory, mcategory } = useParams();

  return (
    <>
      <Routes>
        {/* 게시판 리스트 */}
        <Route
          path="/"
          element={
            <BoardList
              lcategory={lcategory}
              mcategory={mcategory}
              boardList={boardList}
              setBoardList={setBoardList}
            />
          }
        />
        {/* 게시글 상세페이지 */}
        <Route
          path="/detail/:boardid"
          element={
            <BoardDetail
              lcategory={lcategory}
              mcategory={mcategory}
              boardList={boardList}
            />
          }
        />
        {/* 게시글 작성 */}
        <Route
          path="/post"
          element={<BoardPost lcategory={lcategory} mcategory={mcategory} />}
        />
        {/* 게시글 수정 */}
        <Route
          path="/update/:boardid"
          element={<BoardUpdate lcategory={lcategory} mcategory={mcategory} />}
        />
      </Routes>
    </>
  );
};

export default Board;
