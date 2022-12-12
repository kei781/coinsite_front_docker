import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BACK_URL } from "../../config";
const AntockNews = () => {
  const [boardList, setBoardList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/community/pro/get3`,
          method: "GET",
        });
        setBoardList(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <>
      {/* 전문가 리포트 5개*5 */}
      {boardList.map((data) => (
        <div className="Newsimg">
          <a href={"/Board/community/pro/detail/" + data.id}>
            <img
              src="http://cdn.edujin.co.kr/news/photo/202105/35768_68227_247.jpg"
              alt=""
            />
          </a>
          <div className="Newsimgdiv">
            <a href={"/Board/community/pro/detail/" + data.id}>
              {data.subject}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default AntockNews;
