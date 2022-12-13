import axios from "axios";
import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
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
        {" "}
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              코인
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              증시
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div class="aaaaaaa">
                <div class="img_box">
                  <img
                    class="logo_img"
                    src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg"
                  />
                </div>
                <span class="first_name">BTC</span>
                <div class="aaa1">
                  <div>
                    <span>
                      {test[0].opening_price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원{" "}
                    </span>
                  </div>
                  <div>
                    <span
                      style={
                        test[0].signed_change_price > 0
                          ? { color: "red" }
                          : { color: "blue" }
                      }
                    >
                      {test[0].signed_change_price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원{" "}
                    </span>
                    <span
                      style={
                        test[0].signed_change_rate > 0
                          ? { color: "red" }
                          : { color: "blue" }
                      }
                    >
                      {(test[0].signed_change_rate.toFixed(3) * 100).toFixed(2)}
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div class="border_line"></div>
              <div>
                <div class="aaaaaaa">
                  <div class="img_box">
                    <img
                      class="logo_img"
                      src="https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg"
                    />
                  </div>
                  <span class="first_name">ETH</span>
                  <div class="aaa1">
                    <div>
                      <span>
                        {test[1].opening_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </span>
                    </div>
                    <div>
                      <span
                        style={
                          test[1].signed_change_price > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      >
                        {test[1].signed_change_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </span>
                      <span
                        style={
                          test[1].signed_change_rate > 0
                            ? { color: "red" }
                            : { color: "blue" }
                        }
                      >
                        {(test[1].signed_change_rate.toFixed(3) * 100).toFixed(
                          2
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border_line"></div>
              <div class="aaaaaaa">
                <div class="img_box">
                  <img
                    class="logo_img"
                    src="https://static.upbit.com/logos/XRP.png"
                  />
                </div>
                <span class="first_name">XRP</span>
                <div class="aaa1">
                  <div>
                    <span>
                      {test[2].opening_price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                  </div>
                  <div>
                    <span
                      style={
                        test[2].signed_change_price > 0
                          ? { color: "red" }
                          : { color: "blue" }
                      }
                    >
                      {test[2].signed_change_price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                    <span
                      style={
                        test[2].signed_change_rate > 0
                          ? { color: "red" }
                          : { color: "blue" }
                      }
                    >
                      {(test[2].signed_change_rate.toFixed(3) * 100).toFixed(2)}
                      %
                    </span>
                  </div>
                </div>
              </div>
              <div class="border_line"></div>
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div class="tbl_type">
                <div class="aaaaaaa">
                  <div class="img_box">
                    <img
                      class="logo_img"
                      src="https://s3-symbol-logo.tradingview.com/country/KR.svg"
                    />
                  </div>
                  <span class="first_name">코스피</span>
                  <div class="aaa1">
                    <div>
                      <span>{kospi.value}</span>
                      <span
                        style={
                          kospi.avg > 0 ? { color: "red" } : { color: "blue" }
                        }
                      >
                        {kospi.avg.toFixed(2)} %
                      </span>
                    </div>
                    <div>
                      <span class="span_high">{kospi.high}</span>
                      <span class="span_low">{kospi.low}</span>
                    </div>
                  </div>
                </div>
                <div class="border_line"></div>
                <div>
                  <div class="aaaaaaa">
                    <div class="img_box">
                      <img
                        class="logo_img"
                        src="https://s3-symbol-logo.tradingview.com/country/KR.svg"
                      />
                    </div>
                    <span class="first_name">코스닥</span>
                    <div class="aaa1">
                      <div>
                        <span>{kosdaq.value}</span>
                        <span
                          style={
                            kosdaq.avg > 0
                              ? { color: "red" }
                              : { color: "blue" }
                          }
                        >
                          {kosdaq.avg.toFixed(2)} %
                        </span>
                      </div>
                      <div>
                        <span class="span_high">{kosdaq.high}</span>
                        <span class="span_low">{kosdaq.low}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border_line"></div>
                <div class="aaaaaaa">
                  <div class="img_box">
                    <img
                      class="logo_img_sam"
                      src="https://www.samsung.com/sec/static/_images/common/logo_samsung_black.svg"
                    />
                  </div>
                  <span class="first_name">삼성증권</span>
                  <div class="aaa1">
                    <div>
                      <span>
                        {samsung.value
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </span>
                      <span
                        style={
                          samsung.avg > 0 ? { color: "red" } : { color: "blue" }
                        }
                      >
                        {samsung.avg} %
                      </span>
                    </div>
                    <div>
                      <span class="span_high">
                        {samsung.high
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        원
                      </span>
                      <span class="span_low">
                        {samsung.low
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        원
                      </span>
                    </div>
                  </div>
                </div>
                <div class="border_line"></div>
                <div class="aaaaaaa">
                  <div class="img_box">
                    <img
                      class="logo_img_kakao"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAZCAMAAACsCjhdAAAAYFBMVEX/////ygD/ywD/yQD/zAD/yAD/9d3/45j/78X/+u7//fn/+Ob/8cz/xgD/6a7/5Z//8tP/11v/67b/0C7/0j7/34T/7Lz/1E3/zhv/2m7/3Xz/4Yz/+/P/2GH/2Wf/1EfAVPLxAAACIklEQVQ4je2V2W6rMBCGmcUk2GC2sJP0/d/y2B6znaiRKvWyvgCJGX+z/TZJ8qur7+wHq7ZT/gNYAbcP1lTR/QcwhR9hAH+w72Fm/2SqVL/BDnNapdeA6W7bYEZNgdDXQABUZ1dYU5T+pe3DWQHmPfCT3MJOX2Ajkw+QFkBjy8iozzBDPPq3VQBji4gPYfWE1A4jIGcnWM0k6pyb1ScCOJ9hI4Ok+rr7IB1CE2O0PoU7SiyBlQDlpREz8gn2RKou5hafkgKskiGA3WAV4evinPQY3AT2FipZsHXPlbjb6PwVYStye3VOKgh1BZgLNf1nLkPi+SGcjinCHszr7pc1t67rXrzDNIeocRm7OPPAHmYRNlVYpMzDykpxfTSLSLlFOywv4dD1WqtghgArAyGsJnB9ZjfArfYJsDRau/kcZdZI/d54brz5hpIZHZltsOSFJLdaRij78lPPXHdJRN9D3C09c1PahnxDpTdpOPdKvEG/wzKn4fUY4g4zhNuUhyA0gWmUHrlYAjuX6aUjouw22CIybOWzwwIuOyxJxT0lDPWWwGdYYinMyHXG17vOFAbgT1MQzeoqWw9Y0hD78/ZgeHZPUMMV5g/QHArAqRtIiTTc7AHHpZyQ5XYv1BIzV/40ru5WIDXahIsAK1SU5aB8e1J2N4p65O7XsU+R3I5WBmHMpte4K20aX0oWxqaNiVebjnOrmj4L2+KuJLelvV5wv7L+AdvxGDZuaoGFAAAAAElFTkSuQmCC"
                    />
                  </div>
                  <span class="first_name">카카오</span>
                  <div class="aaa1">
                    <div>
                      <span>
                        {kakao.value
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        원
                      </span>
                      <span
                        style={
                          kakao.avg > 0 ? { color: "red" } : { color: "blue" }
                        }
                      >
                        {kakao.avg} %
                      </span>
                    </div>
                    <div>
                      <span class="span_high">
                        {kakao.high
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        원
                      </span>
                      <span class="span_low">
                        {kakao.low
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          {" "}
          <a href="/Board/notice/i">문의 / 건의</a>
        </div>
      </div>
      <div className="advertisement">
        <img
          src="https://i.ibb.co/ydHv4vh/9246251720993146233.png"
          alt="9246251720993146233"
          border="0"
        />
      </div>
    </div>
  );
};

export default Sidbar;
