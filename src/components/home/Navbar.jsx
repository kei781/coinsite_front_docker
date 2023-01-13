import React, { useState, useEffect } from "react";
import "../style/Navbar.scss";
import { useNavigate, Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const navigate = useNavigate();
  const [lonned, setLonned] = useState("");

  const check = sessionStorage.getItem("logined") || true;
  useEffect(() => {
    if (check) {
      setLonned(sessionStorage.getItem("userid"));
    }
  }, []);

  return (
    <div class="Navbar">
      <div class="top-bar">
        <div class="con ">
          <a href="#" class="logo "></a>
          <nav class="menu menu__menu-1">
            <ul class="flex ">
              <a href="/">
                <img
                  src="https://i.ibb.co/jJZZvzs/2.png"
                  alt="zz"
                  border="0"
                  class="navbarRogo"
                />
              </a>

              <li>
                <a class="flexs " href="/Board/stock/dsi">
                  커뮤니티
                </a>
              </li>

              <li>
                <a class="flex" href="/Board/stock/osi">
                  스토어
                </a>
              </li>

              <li>
                <a class="flex" href="/Board/coin/ci">
                  이사/시공/수리
                </a>
              </li>

              <div>
                <button>
                  <SearchIcon />
                </button>
                <input type="text" />
              </div>
              <li>
                <button
                  onClick={() => {
                    navigate("/write");
                  }}>
                  글 작성
                </button>
              </li>
              <li>
                <button>고객센터</button>
              </li>
              {!lonned && (
                <>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/signup");
                      }}>
                      회원가입
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/Login");
                      }}>
                      로그인
                    </button>
                  </li>
                </>
              )}
              {lonned && (
                <>
                  <li>
                    <button
                      onClick={() => {
                        // perform logout action here
                        setLonned(false);
                        sessionStorage.removeItem("logined");
                        sessionStorage.removeItem("user");
                      }}>
                      로그아웃
                    </button>
                  </li>
                  <li>
                    <span>{`Welcome, ${lonned}`}</span>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
