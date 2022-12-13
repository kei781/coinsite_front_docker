import React, { useState, useEffect } from "react";
import axios from "axios";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useNavigate, Link } from "react-router-dom";
import { recoilPersist } from "recoil-persist";
import SignUp from "../components/login/SignUp";
import { BACK_URL } from "../config";
const Navbar = () => {
  const [lonned, setLonned] = useState(false);
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState("");
  const { persistAtom } = recoilPersist();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [gggg, setGggg] = useState("");
  const [BoardText, setBoardText] = useState("");
  const [deleteListsd, setDeleteListsd] = useState();
  const [serComment, setSerComment] = useState("");

  const deleteList = async () => {
    const response = await axios.get(
      `${BACK_URL}board/1/2/searchAll?value=${gggg}`
    );
    const response2 = await axios.get(
      `${BACK_URL}board/1/2/searchAll/comment?value=${gggg}`
    );
    // console.log(response.data);
    setBoardText(response.data);
    setSerComment(response2.data);
    console.log(BoardText);
    console.log(response2.data);
    if (response.data != false || response2.data != false) {
      navigate("/searchlist", {
        state: {
          test: response.data,
          test2: response2.data,
        },
      });
    } else if (response.data == false && response2.data == false) {
      alert("입력하신 정보가 없습니다");
    }
  };

  const check = sessionStorage.getItem("logined") || false;
  useEffect(() => {
    if (check) {
      setLonned(sessionStorage.getItem("user"));
      setUserId(sessionStorage.getItem("userid"));
    }
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div class="menu-bar">
          <div class="top-bar">
            <div class="con flex flex-jc-sb height-100p">
              <a href="#" class="logo top-bar__logo img-box flex flex-ai-c"></a>
              <nav class="menu menu__menu-1">
                <ul class="flex ">
                  <a href="/">
                    <img
                      src="https://i.ibb.co/M9ZDk5c/zz.png"
                      alt="zz"
                      border="0"
                      class="navbarRogo"
                    />
                  </a>
                  <li>
                    <a class="flexs " href="/Board/stock/dsi">
                      한국 증시
                    </a>
                  </li>

                  <li>
                    <a class="flex" href="/Board/stock/osi">
                      미국 증시
                    </a>
                  </li>

                  <li>
                    <a class="flex" href="/Board/coin/ci">
                      암호 화폐
                    </a>
                  </li>

                  <li>
                    <a class="flex" href="/Board/community/fb">
                      유머&잡담
                    </a>
                  </li>

                  <li>
                    <a class="flex" href="/Board/community/hot">
                      인기글
                    </a>
                  </li>
                  <li>
                    <a class="flex" href="/Board/community/pro">
                      전문가의 방
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="search1">
          <input
            placeholder="검색어를 입력해주세요"
            type="value"
            onChange={(e) => {
              setGggg(e.target.value);
            }}
          />

          <button
            onClick={() => {
              deleteList();
            }}
          >
            <Link>
              <ZoomInIcon />
            </Link>
          </button>
        </div>

        <div className="items">
          <div className="Hader_Login1">
            {lonned ? (
              <>
                <span className="navbar_span">
                  <Link to="/Privacy">{check}</Link>
                </span>

                <span className="navbar_span1">님</span>
                <button
                  className="LoginNamedaci"
                  onClick={() => {
                    setLonned(false);

                    sessionStorage.clear();
                    window.location.reload();
                  }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <div className="Hader_Login1">
                <div className="Login">
                  <label for="my-modal-1">로그인</label>

                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box relative">
                      <label
                        for="my-modal-1"
                        class="btn-sm absolute right-6 top-9"
                      >
                        ✕
                      </label>

                      <h1 class="text-lg font-bold">로그인 페이지</h1>
                      <p class="py-4">
                        <div>
                          <div className="Login_input">
                            <input
                              className="loginId"
                              type="text"
                              placeholder="ID"
                              onChange={(e) => {
                                setUserId(e.target.value);
                              }}
                            />
                          </div>
                          <div className="Login_input1">
                            <input
                              className="loginPw"
                              type="password"
                              placeholder="Password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>
                          <div className="loginMid"></div>
                          <div className="autoLogin">아이디/비밀번호 찾기</div>
                          <label
                            type="submit"
                            className="loginBtn"
                            for="my-modal-1"
                            onClick={async () => {
                              const lonned = await axios({
                                url: `${BACK_URL}account/signIn`,
                                method: "POST",
                                data: { userId, password },
                              });

                              setName(lonned.data.username);

                              setId(lonned.data.userId);
                              if (lonned.data.aboolean == true) {
                                setLonned(lonned.data);
                                setLonned(lonned.data.aboolean);
                                setTimeout(() => {});
                                alert("로그인 성공");
                                window.location.reload();
                              } else if (lonned.data.aboolean == false) {
                                setLonned(lonned.data.userName);
                                alert(
                                  "입력하신 정보를 다시한번 확인하여주세요."
                                );
                              }
                              console.log(lonned);
                              sessionStorage.setItem(
                                "logined",
                                lonned.data.userName
                              );
                              sessionStorage.setItem(
                                "user",
                                lonned.data.userName
                              );
                              sessionStorage.setItem(
                                "userid",
                                lonned.data.userId
                              );
                            }}
                          >
                            {" "}
                            로그인{" "}
                          </label>
                        </div>
                        <div className="socialBox">
                          <div className="kakao">
                            <img
                              className="kakaoLogo"
                              src="https://t1.daumcdn.net/cfile/tistory/99DD44345F33780309"
                            />
                            <div className="kakaoText">
                              <a href="">카카오 계정으로 신규가입</a>
                            </div>
                          </div>
                          <div className="facebook">
                            <img
                              className="facebookLogo"
                              src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
                            />
                            <div className="facebookText">
                              <a href="">페이스북 계정으로 신규가입</a>
                            </div>
                          </div>
                          <div className="Google">
                            <img
                              className="GoogleLogo"
                              src="http://asq.kr/y7pd84Th"
                            />
                            <div className="GoogleText">
                              <a href="">구글 계정으로 신규가입</a>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                <SignUp />
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
