import React from "react";
import "./Event.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const Event = () => {
  return (
    <div class="Event">
      <div className="EventTitel">
        <div className="EventDiv">
          <h1>이벤트 게시판</h1>
          <h2>이벤트 공지 사항</h2>
        </div>
        <div className="EventList">
          <div>
            <a href="">|</a>
            <a href="">이메일</a>
            <a href="">|</a>
            <a href="">팩스</a>
            <a href="">|</a>
            <a href="">고객센터 1588 - 1588</a>
            <a href="">|</a>
          </div>
        </div>
      </div>
      <div className="meailinputton">
        <input placeholder="찾을내용을 입력하세요" type="text" />
        <button>
          <ZoomInIcon />
        </button>
        <button className="EventListbutton">글쓰기</button>
      </div>
      <table class="tbl_type">
        <caption>게시판 리스트</caption>

        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">제목</th>
            <th scope="col">글쓴이</th>
            <th scope="col">날짜</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="num">8</td>
            <td class="title">
              <a href="#">이벤트 공지</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">7</td>
            <td class="title">
              <a href="#">1 + 1 이벤트</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">6</td>
            <td class="title">
              <a href="#">추천인 이벤트</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">5</td>
            <td class="title">
              <a href="#">친구야 놀자</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">4</td>
            <td class="title">
              <a href="#">이벤트 공지</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">3</td>
            <td class="title">
              <a href="#">이벤트 공지</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">2</td>
            <td class="title">
              <a href="#">이벤트 공지</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">1</td>
            <td class="title">
              <a href="#">이벤트 공지</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
        </tbody>
      </table>
      <div className="EventEndDiv1">
        <a href="">◀</a>

        <a href="">1</a>

        <a href="">2</a>

        <a href="">3</a>

        <a href="">4</a>
        <a href="">5</a>
        <a href="">▶</a>
      </div>
    </div>
  );
};

export default Event;
