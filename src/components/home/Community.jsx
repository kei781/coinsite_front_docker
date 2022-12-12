import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BACK_URL } from "../../config";
const Community = ({ lcategory, mcategory }) => {
  const [boardList, setBoardList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/${lcategory}/${mcategory}/get5`,
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
          <span>{boardTitle[lcategory + "/" + mcategory]}</span>
          <a
            href={
              "/Board/" + lcategory + "/" + mcategory + "/detail/" + data.id
            }
          >
            {data.subject}
          </a>
        </div>
      ))}
    </>
  );
};

export default Community;
