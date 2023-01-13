import React, { useState, useEffect } from "react";
import axios from "axios";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useNavigate, Link } from "react-router-dom";
import { recoilPersist } from "recoil-persist";
import SignUp from "../components/login/SignUp";
import { BACK_URL } from "../config";
import SearchIcon from "@mui/icons-material/Search";

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
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const aaa = useState("");

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
      console.log(lonned);
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

  const handleOnKeyPress1 = (e) => {
    if (e.key === "Enter") {
      deleteList(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      lonned(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div class="menubar1">
          <ul class="navbarul ">
            <a href="/">
              <img
                src="https://i.ibb.co/M9ZDk5c/zz.png"
                alt="zz"
                border="0"
                class="navbarRogo"
              />
            </a>
            <li>
              <a class="flex1 " href="/Board/stock/dsi">
                한국 증시
              </a>
            </li>

            <li>
              <a class="flex1" href="/Board/stock/osi">
                미국 증시
              </a>
            </li>

            <li>
              <a class="flex1" href="/Board/coin/ci">
                암호 화폐
              </a>
            </li>

            <li>
              <a class="flex1" href="/Board/community/fb">
                유머&잡담
              </a>
            </li>

            <li>
              <a class="flex1" href="/Board/community/hot">
                인기글
              </a>
            </li>
            <li>
              <a class="flex1" href="/Board/community/pro">
                전문가의 방
              </a>
            </li>
          </ul>
        </div>

        <div className="items">
          <div className="Hader_Login1">
            {lonned ? (
              <>
                <div className="navbar_span">
                  <Link to="/Privacy">{check}</Link>
                </div>

                <div className="navbar_span1"> 님</div>
                <button
                  className="LoginNamedaci"
                  onClick={() => {
                    setLonned(false);

                    sessionStorage.clear();
                    window.location.reload();
                  }}>
                  로그아웃
                </button>
              </>
            ) : (
              <div className="Hader_Login1">
                <div className="Login1">
                  <label for="my-modal-1" className="sadasdar34">
                    로그인
                  </label>

                  <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box relative">
                      <h1 class="font-bold">로그인 페이지</h1>
                      <p class="py-4">
                        <div>
                          <div className="Login_input">
                            아이디
                            <input
                              className="loginId"
                              type="text"
                              placeholder="ID"
                              onChange={(e) => {
                                setUserId(e.target.value);
                              }}
                            />
                            {error1 && (
                              <div style={{ color: "red" }}>{error1}</div>
                            )}
                            <br />
                          </div>
                          <div className="Login_input1">
                            비밀번호
                            <input
                              className="loginPw"
                              type="password"
                              placeholder="Password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                            {error && (
                              <div style={{ color: "red" }}>{error}</div>
                            )}
                            <br />
                          </div>
                          <div className="loginMid"></div>
                        </div>

                        <div className="socialBox">
                          <div className="socialBox1">
                            <div className="kakao">
                              <a href="">
                                <img
                                  className="kakaoLogo"
                                  src="https://ifh.cc/g/kQKZkD.png"
                                />
                              </a>
                              <div className="kakaoText"></div>
                            </div>
                            <div className="facebook">
                              <a href="">
                                <img
                                  className="facebookLogo"
                                  src="https://ifh.cc/g/dMb9h7.png"
                                />
                              </a>
                              <div className="facebookText"></div>
                            </div>
                            <a href="">
                              <div className="Google">
                                <img
                                  className="GoogleLogo"
                                  src="https://ifh.cc/g/Lg7R0R.png"
                                />
                                <div className="GoogleText"></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="asdaskjdha">
                          SNS계정으로 간편 로그인
                        </div>
                        <button
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
                            if (!userId || !userId) {
                              // userid is invalid

                              setError1("아이디는 5~12자 이내로 입력해주세요.");
                              setError("비밀번호가 8자 이상으로 입력해주세요");

                              return;
                            }
                            if (
                              !userId ||
                              userId.length < 5 ||
                              userId.length > 12
                            ) {
                              // userid is invalid

                              setError1("아이디는 5~12자 이내로 입력해주세요.");

                              return;
                            }
                            if (password.length < 8) {
                              setError("비밀번호가 8자 이상으로 입력해주세요");

                              return;
                            }

                            if (lonned.data.aboolean == true) {
                              setLonned(lonned.data);
                              setLonned(lonned.data.aboolean);
                              setTimeout(() => {});
                              alert("로그인 성공");
                            } else if (lonned.data.aboolean == false) {
                              setLonned(lonned.data.userName);
                              alert("입력하신 정보를 다시한번 확인하여주세요.");
                              sessionStorage.clear();
                            }
                            setError("");
                            setError1("");

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
                            sessionStorage.setItem("role", lonned.data.role);
                          }}>
                          {" "}
                          로그인{" "}
                        </button>
                        <div className="asdasdasd3424">
                          <label for="my-modal-1" class="btnasd2">
                            나가기
                          </label>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                <SignUp />
              </div>
            )}{" "}
          </div>
          <div className="search1">
            <input
              placeholder="검색어를 입력해주세요"
              type="value"
              onKeyPress={handleOnKeyPress1}
              onChange={(e) => {
                setGggg(e.target.value);
              }}></input>
            <button
              onClick={() => {
                deleteList();
              }}>
              <Link>
                <SearchIcon className="idnasla" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
