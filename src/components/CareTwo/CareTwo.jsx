import React from "react";
import "./css/index.css";
function CareTwo({ type, arr }) {
  return (
    <div className="caretwo">
      <div className="pack">
        <div className="category">EVERPURI CARE 02</div>
        <div className="title">
          {type === "aircon" ? (
            <>
              에어컨 <b>분해세척의 중요성</b>
            </>
          ) : type === "wash" ? (
            <>
              세탁기 <b>분해세척의 중요성</b>
            </>
          ) : undefined}
        </div>
        <div className="sub">
          {type === "aircon" ? (
            <>
              친환경 에어컨 전용세제과 최첨단 전문 장비로 <br /> 바이러스,
              곰팡이 등 <b>유해물질을 99.9% 제거합니다</b>
            </>
          ) : type === "wash" ? (
            <>
              영유아가 있는 집에서는 주기적으로 1년에 1~2회 케어를 받는 것이{" "}
              <br />
              알레르기나 아토피로부터 아이를 보호할 수 있는 방법입니다
            </>
          ) : undefined}
        </div>
        <div className="list">
          {arr.map(({ img, title, sub }, idx) => {
            return (
              <div key={idx} className="card">
                <img src={img} alt="" />
                <b className="title">{title}</b>
                <div className="line" />
                <div className="sub">{sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CareTwo;