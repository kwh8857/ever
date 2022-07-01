import React from "react";
import "./css/index.css";
function CareOne({ type, cleanArr, nav, agent }) {
  return (
    <div className={`careone ${type}clean ${nav}care`}>
      <div className="pack">
        <div className="category">EVERPURI CARE 01</div>
        <div className="title">
          {type === "bird" ? (
            <>
              <b>
                비둘기 퇴치부터 {agent === "mb" ? <br /> : undefined}차단망까지
              </b>{" "}
              <br />
              완벽하게 케어합니다
            </>
          ) : (
            <>
              {" "}
              보이지 않는 곳까지
              {agent === "mb" ? <br /> : undefined}
              <b className="circle"> 완벽 케어</b>
              하는 <br />
              {type === "aircon" ? (
                <b> 16단계 완전분해케어</b>
              ) : type === "wash" ? (
                <b> 6단계 완전분해케어</b>
              ) : type === "hood" ? (
                <b> 주방후드 분해세척</b>
              ) : type === "air" ? (
                <b>공기청정기 분해케어</b>
              ) : type === "filter" || type === "airfilter" ? (
                <b>공기정화장치 필터 교체</b>
              ) : type === "mat" ? (
                <b>4중 완벽 소독ㆍ살균 서비스</b>
              ) : type === "joint" ? (
                <b>5단계 완벽 케어 줄눈시공</b>
              ) : type === "bug" ? (
                <b>해충ㆍ방역 서비스</b>
              ) : type === "aircare" ? (
                <b>공기청정기 분해 케어</b>
              ) : (
                <></>
              )}
            </>
          )}
          {/* {type !== "bird" && type !== "bug" ? (
            <div className="circle-wrapper">
              <div className="left">
                <div />
                <div />
              </div>
              <div className="right">
                <div />
                <div />
              </div>
            </div>
          ) : undefined} */}
        </div>
        <div className="sub">
          {type === "aircon" ? (
            <>
              16단계로 진행되는 완전 분해 케어로 새제품처럼 <br /> 깨끗하게
              보이지 않는 곳까지 아주 완벽하게 케어합니다
            </>
          ) : type === "hood" ? (
            <>에버퓨리는 주방후드 완전 분해 케어로 완벽하게 케어합니다</>
          ) : type === "wash" ? (
            <>6단계로 진행되는 완전 분해 케어로 완벽하게 케어합니다</>
          ) : type === "air" ? (
            "6단계로 진행되는 완전 분해 케어로 완벽하게 케어합니다"
          ) : type === "joint" ? (
            <>
              곰팡이가 잘 발생하게 되는 기존 백시멘트를 제거 후{" "}
              {agent !== "pc" ? <br /> : undefined}친환경 줄눈제로 시공을 하는
              서비스입니다
            </>
          ) : type === "bird" ? (
            <>
              세척살균차단망 설치로 100% 해결!{" "}
              {agent === "pc" ? <br /> : undefined} 비둘기의 배설물,
              {agent === "mb" ? <br /> : undefined} 알, 비둘기 새끼로 인한 질병,
              {agent === "tablet" ? <br /> : undefined} 실외기 부식 및 화재를{" "}
              {agent === "mb" ? <br /> : undefined} 막기 위한 서비스입니다
            </>
          ) : type === "bug" ? (
            <>
              각종 질병 및 전염병의 원인이 되는 각종 해충들의{" "}
              {agent === "mb" ? <br /> : undefined} 종류, 서식처, 생장주기,
              발생장소 등 환경적 요인을 <br /> 전문가가 정확히 진단하여 1:1 통합
              맞춤 방제 {agent === "mb" ? <br /> : undefined} 솔루션을 제공하여
              해충 문제를 케어하는 서비스입니다.
            </>
          ) : type === "mat" ? (
            <>
              매트리스에 숨어있는 집먼지 진드기, 곰팡이 등 유해세균을{" "}
              {agent !== "pc" ? <br /> : undefined} 제거하고 자녀와
              {agent === "pc" ? <br /> : undefined} 반려동물의 용변으로 인한{" "}
              {agent !== "pc" ? <br /> : undefined} 얼룩 및 악취를 제거하기 위한
              서비스입니다
            </>
          ) : undefined}
        </div>
        <div className="list">
          {cleanArr.map(({ img, title }, idx) => {
            return (
              <div key={idx} className="card">
                {type !== "airfilter" ? (
                  <div className="number">{idx + 1}</div>
                ) : undefined}
                {img ? (
                  <img
                    src={`/assets/${nav}/${img}.png`}
                    srcSet={`/assets/${nav}/${img}@2x.png 2x, /assets/${nav}/${img}@3x.png 3x`}
                    alt=""
                  />
                ) : (
                  <img />
                )}
                <div className="title">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CareOne;
