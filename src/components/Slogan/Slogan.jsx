import React from "react";
import "./css/index.css";
function Slogan({ type }) {
  return (
    <div className="slogan">
      <div className="pack">
        <img src="/assets/common/quotes.svg" alt="" className="left" />
        <div className="title">
          {type === "aircon" ? (
            <>
              에어컨 내부에 존재하는{" "}
              <b>
                세균과 곰팡이를 <br /> 제거
              </b>
              하는 서비스로
              <b>
                {" "}
                각종 질병 예방 및 <br /> 건강을 위해
              </b>
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "wash" ? (
            <>
              세탁기 내부에 존재하는{" "}
              <b>
                섬유찌꺼기 및 세균과 곰팡이를 <br /> 제거
              </b>
              하는 서비스로 세탁물 관리와{" "}
              <b>
                각종 피부질환을 일으킬 수 있는 <br /> 위험요소를 제거 및 예방
              </b>
              하기 위해 꼭 해야하는 서비스입니다!
            </>
          ) : undefined}
        </div>
        <img src="/assets/common/quotes.svg" alt="" className="right" />
      </div>
    </div>
  );
}

export default Slogan;