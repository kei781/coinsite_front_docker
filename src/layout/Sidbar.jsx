import axios from "axios";
import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import style from "./sidbar.module.css";
import "./Layout.scss";
import { BACK_URL } from "../config";
const Sidbar = () => {
  const [toggleState, setToggleState] = useState(1);
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [kospi, setKospi] = useState("");
  const [kosdaq, setKosdaq] = useState("");
  const [boardList, setBoardList] = useState([]);
  const [samsung, setSamsung] = useState("");
  const [kakao, setKakao] = useState("");
  const images = [
    "https://i.ibb.co/ydHv4vh/9246251720993146233.png",
    "https://ifh.cc/g/77SxR1.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setTest(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const data = await axios.get(`${BACK_URL}board/notice/n/get3`);
      setBoardList(data.data);

      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC%2C%20KRW-ETH%2C%20KRW-XRP"
      );
      setTest(response.data); // 데이터는 response.data 안에 들어있습니다.
      const kospiGet = await axios.get(
        `${BACK_URL}chart/Market/get?name=코스피`
      );

      setKospi(kospiGet.data);
      const kosdaqGet = await axios.get(
        `${BACK_URL}chart/Market/get?name=코스닥`
      );
      setKosdaq(kosdaqGet.data);
      const samsungGet = await axios.get(
        `${BACK_URL}chart/Stock/get?name=삼성전자`
      );
      setSamsung(samsungGet.data);
      const kakaoGet = await axios.get(
        `${BACK_URL}chart/Stock/get?name=카카오뱅크`
      );
      setKakao(kakaoGet.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!test) return null;

  if (0 < kospi.avg && kospi.avg < 1) {
    kospi.avg = (kospi.avg * 10) / 10;
  }
  if (0 > kospi.avg && kospi.avg > -1) {
    kospi.avg = (kospi.avg * 10) / 10;
  }
  if (0 < kosdaq.avg && kosdaq.avg < 1) {
    kosdaq.avg = (kosdaq.avg * 10) / 10;
  }
  if (0 > kosdaq.avg && kosdaq.avg > -1) {
    kosdaq.avg = (kosdaq.avg * 10) / 10;
  }

  if (0 < samsung.avg && samsung.avg < 1) {
    samsung.avg = (samsung.avg * 10) / 10;
  }
  if (0 > samsung.avg && samsung.avg > -1) {
    samsung.avg = (samsung.avg * 10) / 10;
  }

  if (0 < kakao.avg && kakao.avg < 1) {
    kakao.avg = (kakao.avg * 10) / 10;
  }
  if (0 > kakao.avg && kakao.avg > -1) {
    kakao.avg = (kakao.avg * 10) / 10;
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div class="Sidbar">
      <div className="Sidbarss">
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              증시
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              코인
            </button>
          </div>
          <>
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div class={style.list}>
                <div class={style.listItem}>
                  <div class={style.companyIco}>
                    <img
                      src="https://s3-symbol-logo.tradingview.com/country/KR.svg"
                      alt="KR flag"
                    />
                  </div>
                  <div class={style.listContent}>
                    <div>
                      <div class={style.companyInfo}>
                        <div class={style.title}>코스피</div>
                        <div class={style.price}>{kospi.value}</div>
                      </div>
                      <div
                        class={style.priceChange}
                        style={
                          kospi.avg > 0 ? { color: "red" } : { color: "blue" }
                        }
                      >
                        <span>{kospi.avg > 0 ? "▴" : "▾"}</span>
                        {parseFloat(kospi.avg).toFixed(2)} %
                      </div>
                    </div>
                    <div>
                      <div class={style.highPrice}>{kospi.high}</div>
                      <div class={style.lowPrice}>{kospi.low}</div>
                    </div>
                  </div>
                </div>
                <div class={style.listItem}>
                  <div class={style.companyIco}>
                    <img
                      src="https://s3-symbol-logo.tradingview.com/country/KR.svg"
                      alt="KR flag"
                    />
                  </div>
                  <div class={style.listContent}>
                    <div>
                      <div class={style.companyInfo}>
                        <div class={style.title}>코스닥</div>
                        <div class={style.price}>{kosdaq.value}</div>
                      </div>
                      <div
                        class={style.priceChange}
                        style={
                          kosdaq.avg > 0 ? { color: "red" } : { color: "blue" }
                        }
                      >
                        <span>{kosdaq.avg > 0 ? "▴" : "▾"}</span>
                        {parseFloat(kosdaq.avg).toFixed(2)} %
                      </div>
                    </div>
                    <div>
                      <div class={style.highPrice}>{kosdaq.high}</div>
                      <div class={style.lowPrice}>2{kosdaq.low}</div>
                    </div>
                  </div>
                </div>
                <div class={style.listItem}>
                  <div class={style.companyIco}>
                    <img
                      src="https://i.postimg.cc/kGbVYJ4w/Samsung-Electronics-png.png"
                      alt=""
                    />
                  </div>
                  <div class={style.listContent}>
                    <div>
                      <div class={style.companyInfo}>
                        <div class={style.title}>삼성전자</div>
                        <div class={style.price}>
                          {samsung.value
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                      </div>
                      <div
                        class={style.priceChange}
                        style={
                          samsung.avg > 0 ? { color: "red" } : { color: "blue" }
                        }
                      >
                        <span>{samsung.avg > 0 ? "▴" : "▾"}</span>
                        {samsung.avg.toFixed(2)} %
                      </div>
                    </div>
                    <div>
                      <div class={style.highPrice}>
                        {samsung.high
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                      <div class={style.lowPrice}>
                        {samsung.low
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </div>
                  </div>
                </div>
                <div class={style.listItem}>
                  <div class={style.companyIco}>
                    <img
                      src="https://i.postimg.cc/3Nv9T09v/kakao.png"
                      alt="kakao logo"
                    />
                  </div>
                  <div class={style.listContent}>
                    <div>
                      <div class={style.companyInfo}>
                        <div class={style.title}>카카오</div>
                        <div class={style.price}>
                          {kakao.value
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                      </div>
                      <div
                        class={style.priceChange}
                        style={
                          kakao.avg > 0 ? { color: "red" } : { color: "blue" }
                        }
                      >
                        <span>{kakao.avg > 0 ? "▴" : "▾"}</span>
                        {parseFloat(kakao.avg).toFixed(2)} %
                      </div>
                    </div>
                    <div>
                      <div class={style.highPrice}>
                        {kakao.high
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                      <div class={style.lowPrice}>
                        {kakao.low
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          <>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div class={style.list}>
                <div class={style.listItem}>
                  <div class={style.companyIco}>
                    <img
                      src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg"
                      alt="KR flag"
                    />
                  </div>
                  <div class={style.listContent}>
                    <div>
                      <div class={style.companyInfo}>
                        <div class={style.title}>BTC</div>
                        <div class={style.price}>
                          {test[0].opening_price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                      </div>
                      <div
                        class={style.priceChange}
                        style={
                          test[0].signed_change_rate > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      >
                        <span>
                          {test[0].signed_change_rate > 0 ? "▴" : "▾"}
                        </span>
                        {(test[0].signed_change_rate.toFixed(3) * 100).toFixed(
                          2
                        )}
                        %
                      </div>
                    </div>
                    <div>
                      <div
                        class={style.highPrice}
                        style={
                          test[0].signed_change_price > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      >
                        {test[0].signed_change_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </div>
                  </div>
                </div>
                <div class={style.listItem}>
                  <div class={style.companyIco}>
                    <img
                      src="https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg"
                      alt="KR flag"
                    />
                  </div>
                  <div class={style.listContent}>
                    <div>
                      <div class={style.companyInfo}>
                        <div class={style.title}>ETH</div>
                        <div class={style.price}>
                          {test[1].opening_price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                      </div>
                      <div
                        class={style.priceChange}
                        style={
                          test[1].signed_change_rate > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      >
                        <span>
                          {test[1].signed_change_rate > 0 ? "▴" : "▾"}
                        </span>
                        {(test[1].signed_change_rate.toFixed(3) * 100).toFixed(
                          2
                        )}
                        %
                      </div>
                    </div>
                    <div>
                      <div
                        class={style.highPrice}
                        style={
                          test[1].signed_change_price > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      >
                        {test[1].signed_change_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </div>
                  </div>
                </div>
                <div class={style.listItem}>
                  <div class={style.companyIco}>
                    <img
                      src="https://i.postimg.cc/ZqZ41rb1/d1da3e364444683013c6a7ac67d67063.png"
                      alt=""
                    />
                  </div>
                  <div class={style.listContent}>
                    <div>
                      <div class={style.companyInfo}>
                        <div class={style.title}>XRP</div>
                        <div class={style.price}>
                          {test[2].opening_price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                      </div>
                      <div
                        class={style.priceChange}
                        style={
                          test[2].signed_change_rate > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      >
                        <span>
                          {test[2].signed_change_rate > 0 ? "▴" : "▾"}
                        </span>
                        {(test[2].signed_change_rate.toFixed(3) * 100).toFixed(
                          2
                        )}
                        %
                      </div>
                    </div>
                    <div>
                      <div
                        class={style.highPrice}
                        style={
                          test[2].signed_change_price > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      >
                        {test[2].signed_change_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
      <a href="https://kr.tradingview.com/markets/">
        <div className="Sidbarss1">
          <KeyboardDoubleArrowRightIcon className="Sidbarss1icon" /> 트레이딩뷰
          제공
          <span className="Sidbarss1span"> 파이낸셜 마켓 </span>
        </div>
      </a>
      <div className="Sidbarbanner">
        <img src="https://i.postimg.cc/52YsHxHG/banner-android.png" />
      </div>
      <div className="SidbarNotice">
        <div>
          <a href="/Board/notice/n">공지 사항</a>
        </div>
        {boardList.map((data) => (
          <div>
            <a href={"/Board/notice/n/detail/" + data.id}>
              <span className="Sidbarbanner">공지</span>
              {data.subject}
            </a>
          </div>
        ))}
        <div>
          <a href="/Board/notice/e">패치 노트</a>
        </div>
        <div>
          <a href="/Board/notice/i">문의 / 건의</a>
        </div>
      </div>
      <div className="advertisement">
        <div>
          <img src={images[currentIndex]} alt="slider" className="imfasdask" />
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
