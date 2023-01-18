import React, { useState, useEffect } from "react";
import "./SignUp.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACK_URL } from "../../config";
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [inputText, setInputText] = useState("");

  const [checkedItems, setCheckedItems] = useState({
    fruit1: false,
    fruit2: false,
    fruit3: false,
    fruit4: false,
  });

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSelectAll = (event) => {
    setCheckedItems({
      fruit1: event.target.checked,
      fruit2: event.target.checked,
      fruit3: event.target.checked,
      fruit4: event.target.checked,
    });
  };

  const registerd = () => {
    if (!Object.values(checkedItems).every((item) => item)) {
      setError("약관에 모두 동의해주세요.");
      return;
    }
    axios
      .post(`${BACK_URL}account/signUp`, {
        userId,
        userName,
        password,
        confirmPassword,
      })
      .then((response) => {
        // Handle success.
        // setSignUp(response.data);
        if (response.data == true) {
          alert("회원가입 성공!! 로그인 하세요");
          window.location.reload();
        } else if (response.data == false) {
          alert("정보를 확인하세요");
        }
        setTimeout(() => {}, 2000);
      });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      registerd(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  return (
    <div className="SignUp">
      <label for="my-modal" class="SignUplable">
        회원가입
      </label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font">회원가입</h3>

          <p class="py-4">
            <div className="SigUp_input">
              <div>
                이름 or 닉네임
                <input
                  class="sdasds343"
                  type="text"
                  name="userId"
                  placeholder="이름 or 닉네임 을 입력해주세요"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                  onKeyPress={handleOnKeyPress}
                />
              </div>

              {error2 && <div style={{ color: "red" }}>{error2}</div>}
            </div>{" "}
            <div className="SigUp_input">
              <div>
                아이디
                <input
                  type="text"
                  class="sdasds343"
                  name="userId"
                  placeholder="아이디를 입력해주세요"
                  value={userId}
                  onChange={(event) => setUserId(event.target.value)}
                  onKeyPress={handleOnKeyPress}
                />
              </div>
              {error1 && <div style={{ color: "red" }}>{error1}</div>}
            </div>{" "}
            <div className="SigUp_input">
              <div>
                비밀번호
                <input
                  type="password"
                  class="sdasds343"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onKeyPress={handleOnKeyPress}
                />
              </div>

              <div className="SigUp_input">
                비밀번호 재입력
                <input
                  class="sdasds343"
                  type="password"
                  name="confirmPassword"
                  placeholder="비밀번호를 재 입력하세요"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  onKeyPress={handleOnKeyPress}
                />
              </div>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <br />
            </div>
            <div className="SignUpcheckboxtitle">약관동의</div>
            <div className="SignUpcheckbox">
              <div>
                <div className="SignUpssds">
                  <input
                    type="checkbox"
                    name="selectAll"
                    checked={Object.values(checkedItems).every((item) => item)}
                    onChange={handleSelectAll}
                  />
                  <span>전체동의</span>
                  <span>(필수)</span>
                </div>

                <div>
                  <div className="SignUpssds">
                    <input
                      type="checkbox"
                      name="fruit1"
                      value="apple"
                      checked={checkedItems.fruit1}
                      onChange={handleChange}
                    />

                    <div>만 14세 이상입니다</div>
                  </div>
                </div>
                <div>
                  <div className="SignUpssds">
                    <input
                      type="checkbox"
                      name="fruit2"
                      value="banana"
                      checked={checkedItems.fruit2}
                      onChange={handleChange}
                    />
                    <div>개인정보수집 및 이용동의</div>
                  </div>
                </div>
                <div>
                  <div className="SignUpssds">
                    <input
                      type="checkbox"
                      name="fruit3"
                      value="banana"
                      checked={checkedItems.fruit3}
                      onChange={handleChange}
                    />
                    <div>개인정보 마케팅 활용 동의</div>
                  </div>
                </div>
                <div>
                  <div className="SignUpssds">
                    <input
                      type="checkbox"
                      name="fruit4"
                      value="banana"
                      checked={checkedItems.fruit4}
                      onChange={handleChange}
                    />
                    <label for="cb1"></label>
                    <div>이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SignUpbutton1">
              <button
                onClick={() => {
                  if (!userName || !userId || !confirmPassword || !password) {
                    // userid is invalid

                    setError1("아이디는 5~12자 이내로 입력해주세요.");
                    setError("비밀번호가 8자 이상으로 입력해주세요");
                    setError2("이름 또는 닉네임 3~12자 이내로 입력해주세요.");
                    return;
                  } else if (
                    !userId ||
                    userId.length < 5 ||
                    userId.length > 12
                  ) {
                    // userid is invalid
                    setError1("아이디는 5~12자 이내로 입력해주세요.");
                    return;
                  } else if (password.length < 8) {
                    setError("비밀번호가 8자 이상으로 입력해주세요");
                    return;
                  } else if (!/^[a-zA-Z0-9]+$/.test(userId)) {
                    // userid is invalid
                    setError1("아이디는 영문과 숫자만 사용 가능합니다.");
                    return;
                  } else if (password !== confirmPassword) {
                    setError("비밀번호가 일치하지 않습니다.");
                    return;
                  }

                  // check if userid already exists

                  // userid is valid
                  setError1("");
                  setError2("");
                  registerd();

                  console.log(userId, password, userName, confirmPassword);
                }}>
                회원 가입하기
              </button>
            </div>
            <label className="SignUpBtn11dasd" for="my-modal">
              나가기
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
