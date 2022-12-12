import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BACK_URL } from "../../config";
const CommunityHot = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/1/1/get5hot`,
          method: "GET",
        });
        setBoardList(data.data);
        console.log(boardList);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  const boardTitle = {
    "stock/dsi": "한국 증시",
    "stock/osi": "미국 증시",
    "coin/ci": "암호화폐",
    "coin/b": "코인 게시판",
    "community/fb": "유머&잡담",
    "community/hot": "인기글",
    "community/pro": "전문가의 방",
  };

  return (
    <>
      {/* 인기글*5 */}
      {boardList.map((data) => (
        <div className="Homemiddrspan">
          <span>{boardTitle[data.lcategory + "/" + data.mcategory]}</span>
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
      ))}
    </>
  );
};

export default CommunityHot;
