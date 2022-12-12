import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACK_URL } from "../../config";
const ProReport = () => {
  const [boardList, setBoardList] = useState([]);
  const [lonned, setLonned] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/community/pro/get5`,
          method: "GET",
        });
        setBoardList(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const registerd = () => {
    if (sessionStorage.getItem("logined") || false) {
      navigate("/Write");
    } else if (sessionStorage.getItem("logined") || true) {
      alert("로그인 해주세요");
    }
  };

  return (
    <>
      {/* 전문가 리포트 5개*5 */}
      {boardList.map((data) => (
        <div className="Homelistspan">
          <div className="Homelistspandiv">
            <a href={"/Board/community/pro/detail/" + data.id}>
              {data.subject}
            </a>
          </div>
          <span>{data.author}</span>
          <span>{data.date}</span>
        </div>
      ))}
    </>
  );
};

export default ProReport;
