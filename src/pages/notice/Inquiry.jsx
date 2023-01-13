import React from "react";
import "./Inquiry.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const Inquiry = () => {
  return (
    <div class="Inquiry">
      <div className="InquiryTitel">
        <div className="InquiryDiv">
          <h1>1:1 문의 게시판</h1>
          <h2>궁금하신 사항이 있으시가면 언제든지 문의해주세요</h2>
          <h2>
            고객센터 연결이 힘들 경우 1:1문의를 이용하시면 답변을 빠르게
            드리겠습니다
          </h2>
        </div>
        <div className="InquiryList">
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
        <button className="InquiryListbutton">글쓰기</button>
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
        <tbody className="InquiryTbody">
          <tr>
            <td class="num">8</td>
            <td class="title">
              <a href="#">문의합니다문의합니다문의합니다문의합니다</a>
            </td>
            <td>
              <a href="#">강아지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">7</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">고양이</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">6</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">5</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">4</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">3</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">2</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
          <tr>
            <td class="num">1</td>
            <td class="title">
              <a href="#">건의합니다</a>
            </td>
            <td>
              <a href="#">돼지</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
        </tbody>
      </table>
      <div className="InquiryEndDiv1">
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

export default Inquiry;
