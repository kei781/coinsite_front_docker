import React, { useState, useEffect } from "react";
import "./BoardPost";
import "./style/BoardDetail.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BACK_URL } from "../../config";

const BoardUpdate = ({ lcategory, mcategory }) => {
  const { boardid } = useParams();
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [contents, setContents] = useState("");
  const navigate = useNavigate();
  const [boardtext, setBoardText] = useState([]);

  const patch = async () => {
    try {
      const data = await axios({
        url: `${BACK_URL}board/${lcategory}/${mcategory}/patch`,
        method: "PATCH",
        data: {
          id: boardid,
          subject: subject,
          contents: contents,
          author: sessionStorage.getItem("userid"),
        },
      });
      setBoardText(data.data);

      if (data.data === true) {
        alert("수정완료");
        navigate(-1);
        console.log(data.data);
      } else if (data.data === false) {
        alert("실패");
      }
    } catch (e) {}
  };

  const check = sessionStorage.getItem("logined") || false;
  useEffect(() => {
    if (check) {
      setAuthor(sessionStorage.getItem("userid"));
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/${lcategory}/${mcategory}/getid`,
          method: "GET",
          params: {
            id: boardid,
          },
        });
        setBoardText(data.data);
        setContents(data.data.contents);
        setSubject(data.data.subject);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <div className="select-MainDiv">
      <div class="con">
        <h1>수정 페이지</h1>
        <div class="article-write">
          <form>
            <div>
              <input
                className="write-title"
                type="text"
                placeholder="제목을 입력해주세요"
                defaultValue={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>

            <div className="write-mimee-div">
              <textarea
                className="write-mimee"
                type="text"
                defaultValue={contents}
                onChange={(e) => {
                  setContents(e.target.value);
                }}
              />
            </div>
          </form>
          <div className="Write_button">
            <button
              className="Write_button1"
              onClick={() => {
                patch();
              }}
            >
              수정 하기
            </button>
            <button
              className="Write_button2"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              돌아기기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardUpdate;
