import React, { useState, useEffect } from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import axios from "axios";
import "./Notice.scss";

const Notice = () => {
  return (
    <div class="Notice">
      <div className="NoticeTitel">
        <div className="NoticeDiv">
          <h1>공지 사항 게시판</h1>
          <h2> 공지 사항</h2>
        </div>
        <div className="NoticeList">
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
        <button className="NoticeListbutton">글쓰기</button>
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
              <a href="#"> 공지</a>
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
              <a href="#">사항</a>
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
              <a href="#">공지사항</a>
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
              <a href="#">공지사항</a>
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
              <a href="#">공지사항</a>
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
              <a href="#">공지사항</a>
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
              <a href="#">공지사항</a>
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
              <a href="#">공지사항</a>
            </td>
            <td>
              <a href="#">관리자</a>
            </td>
            <td class="date">2022.02.14</td>
            <td class="hit">1</td>
          </tr>
        </tbody>
      </table>
      <div className="NoticeEndDiv1">
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

export default Notice;
