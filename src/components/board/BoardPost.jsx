import React, { useState, useEffect } from "react";
import "./style/BoardPost.scss";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BACK_URL } from "../../config";

import { useNavigate } from "react-router-dom";

const BoardPost = ({ lcategory, mcategory }) => {
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [lonned, setLonned] = useState(false);
  const [contents, setContents] = useState("");
  const navigate = useNavigate();
  const post = async () => {
    try {
      const data = await axios({
        url: `${BACK_URL}board/${lcategory}/${mcategory}/post`,
        method: "POST",
        data: {
          subject: subject,
          contents: contents,
          author: author,
        },
      });
      if (data.data === true) {
        alert("작성완료");
        navigate(-1);
      } else if (data.data === false) {
        alert("접근이 불가능 합니다");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const check = sessionStorage.getItem("logined") || false;
  useEffect(() => {
    if (check) {
      setAuthor(sessionStorage.getItem("userid"));
    }
  }, []);
  return (
    <div className="select-MainDiv">
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}>
          <h1>
            <ArrowBackIcon className="icon" />
            &nbsp; 돌아가기
          </h1>
        </button>
      <div class="con">
        <div class="article-write">
          <form>
            <div></div>
            <div>
              <input
                className="write-title"
                type="text"
                placeholder="제목을 입력해주세요"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>

            <div className="write-mimee-div">
              <textarea
                className="write-mimee"
                type="text"
                value={contents}
                onChange={(e) => {
                  setContents(e.target.value);
                }}
              />
            </div>
          </form>
          <div class="filebox">
            <input type="file" id="ex_file" />
          </div>
          <div className="Write_button">
            <button
              className="Write_button2"
              type="button"
              onClick={() => {
                navigate(-1);
              }}>
              돌아기기
            </button>
            <button
              className="Write_button1"
              onClick={() => {
                if (subject === "") {
                  alert("제목을 입력해주세요");
                  return;
                }
                if (contents === "") {
                  alert("내용을 입력해주세요");
                  return;
                }
                post();
              }}>
              작성 하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPost;
