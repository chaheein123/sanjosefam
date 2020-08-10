import axios from "../utils/httpClient";
import React from 'react';

// const myFunction = (setFunction) => {
//   console.log(setFunction);
//   setFunction({userNickname: "aaaaaa"})
// }
class AuthApi {

  static checkAndSetErrors(setLogError, userNickname, userEmail, userPw, userPw2) {
    if (!userNickname) {
      setLogError(prevState => {
        return({
          ...prevState,
          userNickname: "닉네임을 입력해 주세요."
        })
      });
    } else {
      if (userNickname.length < 3 || userNickname.length > 14) {
        setLogError(prevState => {
          return({
            ...prevState,
            userNickname: "입력한 닉네임이 3 ~ 14자 이어야 합니다."
          })
        });
      } else {
        let regex = /^[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
        if (!regex.test(userNickname)) {
          setLogError(prevState => {
            return({
              ...prevState,
              userNickname: "닉네임은 한영글자나 번호만 입력하실수 있습니다."
            })
          });
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
      } else {
        if (userPw.length < 6 || userPw.length > 32) {
          setLogError(prevState => {
            return({
              ...prevState,
              userPw: "입력한 비밀번호가 6~32자 이어야 합니다."
            })
          });
        }
      }
    }
  }
}





export default AuthApi;
