import React from "react";
import "./css/index.css";
function Tel() {
  return (
    <div className="tel">
      {" "}
      <div className="pack">
        <img
          src="/assets/main/everpuri.png"
          srcSet="/assets/main/everpuri@2x.png 2x , /assets/main/everpuri@3x.png 3x"
          alt=""
        />
      </div>
      <div className="bottom">
        <div className="pack">
          <div className="title">
            <b>깨끗한 환경</b>으로 <b>건강한 내일</b>을 약속하는 <br />{" "}
            에버퓨리가 여러분의 건강을 지켜드립니다
          </div>
          <div className="call-wrapper">
            <div className="tel-wrapper">
              <img src="/assets/main/tel.svg" alt="전화" />
              <div className="tel">1522-4396</div>
            </div>
            <div className="address">
              대구광역시 동구 동내로 76 한국메디벤처센터 210호, 211호
            </div>
          </div>
          <img className="background" src="/assets/main/section6.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Tel;
