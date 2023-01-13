import React, { useEffect, useState } from "react";
import "./style/BoardDetail.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BACK_URL } from "../../config";

const BoardDetail = ({ lcategory, mcategory, boardList, setBoardList }) => {
  const { boardid } = useParams();
  const navigate = useNavigate();
  const backnavigate = useNavigate();
  // 게시글 상세내용
  const [boardDetail, setboardDetail] = useState([]);
  // 댓글 작성
  const [comment, setComment] = useState("");
  // 댓글 리스트
  const [comList, setComList] = useState([]);
  const [boardtext, setBoardText] = useState([]);
  boardList.sort(function (a, b) {
    return b.id - a.id;
  });
  useEffect(() => {
    const getBoardData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/${lcategory}/${mcategory}/getid`,
          method: "GET",
          params: {
            id: boardid,
          },
        });
        setboardDetail(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getBoardData();
    const getCommentData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/${lcategory}/${mcategory}/getid/comment`,
          method: "GET",
          params: {
            id: boardid,
          },
        });
        setComList(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCommentData();
  }, []);
  let aaa = false;
  if (
    sessionStorage.getItem("userid") === boardDetail.author ||
    sessionStorage.getItem("role") == "ADMIN"
  ) {
    aaa = true;
  }
  let bbb = false;
  if (
    sessionStorage.getItem("userid") === boardDetail.author ||
    sessionStorage.getItem("role") == "ADMIN"
  ) {
    bbb = true;
  }
  let ccc = false;
  if (sessionStorage.getItem("userid") === boardDetail.author) {
    ccc = true;
  }

  const deleteList = async () => {
    try {
      const data = await axios({
        url: `${BACK_URL}board/${lcategory}/${mcategory}/delete`,
        method: "DELETE",
        data: {
          id: boardid,
          author: sessionStorage.getItem("userid"),
        },
      });
      if (data.data === true) {
        alert("삭제완료");
        navigate(-1);
      } else if (data.data === false) {
        alert("삭제실패");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const compost = async () => {
    if (sessionStorage.getItem("logined") || false) {
      try {
        const data = await axios({
          url: `${BACK_URL}board/${lcategory}/${mcategory}/post/comment`,
          method: "POST",
          data: {
            contents: comment,
            author: sessionStorage.getItem("userid"),
            id: boardid,
          },
        });

        if (data.data === true) {
          alert("댓글 작성 완료");
          window.location.reload();
        } else if (data.data === false) {
          alert("관리자가 아닙니다.");
        }
      } catch (e) {
        console.log(e);
      }
    } else if (sessionStorage.getItem("logined") || true) {
      alert("로그인 해주세요");
    }
  };
  const comdelete = (x) => {
    axios.delete(`${BACK_URL}board/${lcategory}/${mcategory}/delete/comment`, {
      data: {
        id: x,
        author: sessionStorage.getItem("userid"),
      },
    });
    window.location.reload();
  };
  const boardTitle = {
    "stock/dsi": "한국 증시",
    "stock/osi": "미국 증시",
    "coin/ci": "암호화폐",
    "coin/b": "코인 게시판",
    "community/fb": "유머&잡담",
    "community/hot": "인기글",
    "community/pro": "전문가의 방",
    "notice/n": "공지사항",
    "notice/e": "패치노트",
    "notice/i": "문의/건의",
  };

  return (
    <div className="DetailPage">
      <div className="DetailPageMain">
        <h1> {boardTitle[lcategory + "/" + mcategory]}</h1>
        <div className="DetailPageMain">
          <span className="DetailPageTitle">{boardDetail.subject} </span>
        </div>
        <div className="DetailPagelist">
          <div className="DetailPagelistdiv">
            <div className="Detail">
              <div>
                <span>{boardDetail.author}</span>
                <span>{boardDetail.date}</span>
              </div>
              <div> 조회 {boardDetail.views}</div>
            </div>
            <div className="asddgiuhi23">
              <div className="Deletebuttonor">
                {ccc ? (
                  <>
                    <a
                      href={`/Board/${lcategory}/${mcategory}/update/
                        ${boardDetail.id}`}
                    >
                      수정
                    </a>
                  </>
                ) : (
                  <></>
                )}
                {aaa ? (
                  <>
                    <button
                      className="DetailPageButton2"
                      onClick={() => {
                        deleteList();
                      }}
                    >
                      삭제
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="DetailPage_List_cjah_div">
          <p className="DetailPage_List_cjah">{boardDetail.contents}</p>
        </div>
      </div>
      <button
        className="sdsdaw4efr34"
        type="button"
        onClick={() => {
          backnavigate(-1);
        }}
      >
        <ArrowBackIcon className="icon" /> &nbsp; 목록으로
      </button>
      <div className="DetailPageList1">
        <div className="DetailPage_Booot">
          <div className="DetailPage_BoootMaindiv">
            <div>댓글</div>
          </div>
          <hr className="DetailPageHr" />
          <div className="DetailPage_BoootList">
            {comList.map((list) => (
              <div className="DetailPageTd" key={list.id}>
                <div className="DetailPageTd_Span1">
                  <span>{list.author} &nbsp;</span>
                  <span>{list.date}</span>
                </div>
                <div className="DetailPageTddiv">
                  <div>{list.contents} </div>

                  <div>
                    {bbb ? (
                      <>
                        <button
                          onClick={() => {
                            comdelete(list.id);
                          }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <hr className="DetailPageHr" />
              </div>
            ))}
          </div>
          <div className="DetailPage-div">
            <input
              className="DetailPage-mimee"
              type="text"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <div className="DetailPageButtonend">
            <button
              className="DetailPage_button1"
              onClick={() => {
                compost();
              }}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
