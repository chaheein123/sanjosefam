import axios from "../utils/httpClient";
// import React from 'react';
// import { useCookies } from 'react-cookie';
import { Cookies } from 'react-cookie';

class AuthApi {

  static checkAndSetErrors(setLogError, userNickname, userEmail, userPw, userPw2) {
    let isValid = true;
    if (!userNickname) {
      setLogError(prevState => {
        return({
          ...prevState,
          userNickname: "닉네임을 입력해 주세요."
        })
      });
      isValid = false;
    } else {
      if (userNickname.length < 3 || userNickname.length > 14) {
        setLogError(prevState => {
          return({
            ...prevState,
            userNickname: "입력한 닉네임이 3 ~ 14자 이어야 합니다."
          })
        });
        isValid = false;
      } else {
        let regex = /^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
        if (!regex.test(userNickname)) {
          setLogError(prevState => {
            return({
              ...prevState,
              userNickname: "닉네임은 한영글자나 번호만 입력하실수 있습니다."
            })
          });
          isValid = false;
        }
      }
    }

    if (!userEmail) {
      setLogError(prevState => {
        return({
          ...prevState,
          userEmail: "이메일을 입력해 주세요."
        })
      });
      isValid = false;
    }

    if (!userPw || !userPw2) {
      setLogError(prevState => {
        return({
          ...prevState,
          userPw: "비밀번호를 입력해 주세요."
        })
      });
    } else {
      if (userPw !== userPw2) {
        setLogError(prevState => {
          return({
            ...prevState,
            userPw: "입력한 비밀번호가 매칭하지 않습니다. 다시 입력해 주세요."
          })
        });
        isValid = false;
      } else {
        if (userPw.length < 6 || userPw.length > 32) {
          setLogError(prevState => {
            return({
              ...prevState,
              userPw: "입력한 비밀번호가 6~32자 이어야 합니다."
            })
          });
          isValid = false;
        }
      }
    };
    return isValid;
  };

  static async register(userNickname, userEmail, userPw) {
    await axios
      .post(
        "http://localhost:5000/api/auth/register",
        {
          userName : userNickname,
          userEmail: userEmail,
          userPw: userPw
        },
        { withCredentials: true }
      );
    return this.authenticateTokenRedux();
  };

  static authenticateTokenRedux() {
    const cookies = new Cookies();
    const token = cookies.get("token");
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
}

export default AuthApi;
