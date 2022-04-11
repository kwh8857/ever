import React from "react";
import "./css/index.css";
function CareTwo({ type, arr, nav, agent }) {
  return (
    <div className={`caretwo ${type}two ${nav}two`}>
      <div className="pack">
        <div className="category">EVERPURI CARE 02</div>
        <div className="title">
          {type === "aircon"
            ? "에어컨"
            : type === "wash"
            ? "세탁기"
            : type === "hood"
            ? "주방후드"
            : type === "filter"
            ? "공기정화장치"
            : type === "joint"
            ? "줄눈"
            : type === "bird"
            ? "비둘기"
            : type === "bug"
            ? "해충·방역"
            : ""}{" "}
          <b>
            {type === "filter"
              ? "필터 교체의 중요성"
              : type === "joint"
              ? "시공의 중요성"
              : type === "bird"
              ? "퇴치의 효과"
              : type === "bug"
              ? "서비스의 효과"
              : "분해세척의 중요성"}
          </b>
        </div>
        <div className="sub">
          {type === "aircon" || type === "bird" ? (
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
          ) : type === "mat" ? (
            <>
              최첨단 전문 장비로 바이러스, 곰팡이 등 <br /> 매트리스에 있는{" "}
              <b>유해물질을 99.9% 제거합니다</b>
            </>
          ) : type === "joint" ? (
            <>
              친환경 전용세제과 최첨단 전문 장비로 바이러스, 곰팡이 등 <br />
              <b>유해물질을 99.9% 제거하고 시공합니다</b>
            </>
          ) : type === "bug" ? (
            <>
              친환경 전용세제과 최첨단 전문 장비로 <br /> 바이러스, 곰팡이 등
              <b>유해물질을 99.9% 제거합니다</b>
            </>
          ) : undefined}
        </div>
        <div className="list">
          {arr.map(({ img, title, sub, tabletsub }, idx) => {
            return (
              <div key={idx} className="card">
                <img src={img} alt="" />
                <b className="title">{title}</b>
                <div className="line" />
                <div className="sub">
                  {agent === "tablet" && tabletsub ? tabletsub : sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CareTwo;
