import React, { useState, useRef } from "react";

export default function SignIn() {
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");
  const idRef = useRef(null);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const passwordRef = useRef(null);

  const [complete, setComplete] = useState(false);
  const ID = (e) => {
    setId(e.target.value);
    if (id.length < 5 || id.length > 19) {
      setIdError("6자리 이상 20자리 이하로 작성해주세요");
    } else {
      setIdError("");
    }
  };

  const PW = (e) => {
    setPassword(e.target.value);
    if (password.length < 11 || password.length > 19) {
      setPasswordError("12자리 이상 20자리 이하로 작성해주세요.");
    } else {
      setPasswordError("");
    }
  };

  const handleClick = () => {
    if (id.length < 6 || id.length > 20) {
      alert("아이디는 6자리이상 20자리 이하입니다");
      setId("");
      idRef.current.focus();
    } else if (password.length < 12 || password.length > 19) {
      alert("패스워드는 12자리 이상 20자리 이하입니다.");
      setPassword("");
      passwordRef.current.focus();
    } else {
      alert("완료");
    }
  };

  return (
    <>
      <div>
        <input type="text" value={id} onChange={ID} ref={idRef} />
        {idError}
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={PW}
          ref={passwordRef}
        />
        {passwordError}
      </div>
      <button disabled={complete} value={complete} onClick={handleClick}>
        회원가입
      </button>
    </>
  );
}
