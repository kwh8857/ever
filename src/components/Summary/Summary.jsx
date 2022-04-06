import React from "react";
import "./css/index.css";
function Summary({ type, nav }) {
  return (
    <div className={`summary ${type}summary ${nav}summary`}>
      <div className="pack">
        <div className={`back `} />
        <img
          className="backimg"
          src={`/assets/${nav}/${type}.png`}
          srcSet={`/assets/${nav}/${type}@2x.png 2x , /assets/${nav}/${type}@3x.png 3x`}
          alt=""
        />
        <div className="content-wrapper">
          <div className="title">
            {type === "aircon" ? (
              <>
                우리집
                <b>
                  {" "}
                  에어컨 관리 <br /> 어떻게
                </b>
                하고 계신가요?
              </>
            ) : type === "wash" ? (
              <>
                우리집{" "}
                <b>
                  세탁기 관리 <br /> 어떻게
                </b>{" "}
                하고 계신가요?
              </>
            ) : type === "hood" ? (
              <>
                주방후드
                <b>
                  분해세척이 <br /> 꼭 필요한
                </b>{" "}
                이유
              </>
            ) : type === "air" ? (
              <>
                우리집
                <b>
                  공기청정기 케어 <br /> 어떻게
                </b>{" "}
                하고 계신가요?
              </>
            ) : type === "filter" ? (
              <>
                <b>공기정화장치 필터 교체</b>를 <br /> 왜 해야할까요?
              </>
            ) : type === "mat" ? (
              <>
                잠깐! <br /> <b>매트리스 청소</b> 하셨나요?
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="line" />
          <div className="sub">
            {type === "aircon" ? (
              <>
                에어컨 작동시 냉각판은 습도가 높고 먼지 및 오염물질이 있는
                상태로 <br /> 작동이 멈추면 온도가 상승되어
                <b>세균이 더욱 왕성하게 증식</b>됩니다. <br /> 이로 인해,
                <b>악취 및 냉방병, 폐렴 등 각종 호흡기질환</b>에 영향을 줍니다.
              </>
            ) : type === "wash" ? (
              <>
                세탁기 구입 후 2~3년의 지나면{" "}
                <b>
                  내부에 이물질(섬유, 먼지, 유분 등) 및 <br /> 세제 찌꺼기가
                  점점 쌓입니다.
                </b>
                이런 잔여물들로 인해 세탁기 내부에 <br /> 세균 및 곰팡이가
                번식하여
                <b>
                  {" "}
                  심한 악취가 나고 천식, 아토피, 가려움증, <br /> 알레르기를
                  유발하는 원인
                </b>
                이 됩니다.
              </>
            ) : type === "hood" ? (
              <>
                후드에 누적된 기름 및 음식찌꺼기를
                <b> 청소해줌으로써 악취를 제거</b>하고, <br /> 해충의 서식지가
                되는 것을 방지하며 <b>환기능력을 향상시키는 서비스</b>입니다
              </>
            ) : type === "air" ? (
              <>
                공기청정기{" "}
                <b>내부에 존재하는 세균과 곰팡이를 제거하는 서비스</b>로 <br />
                청결하고 위생적인 공기청정기 사용을 위해 꼭 해야하는
                서비스입니다.
              </>
            ) : type === "filter" ? (
              <>
                전열교환기(공기정화장치)의 내장된 필터로 오염물질을 제거 후{" "}
                <br />
                깨끗한 실외공기를 실내공기로 유입을 시키는 역할을 합니다. <br />
                <b> 필터교체를 통해 실내 공기질 개선효과를 극대화</b>시켜주는
                서비스입니다.
              </>
            ) : type === "mat" ? (
              <>
                잠을 잘 때 우리 몸의 모공에서는 많은 노폐물이 배출이 됩니다.{" "}
                <br />
                매트리스에 조금씩 스며든 노폐물은{" "}
                <b>
                  박테리아 및 각종 세균과 <br /> 집먼지 진드기가 번식하기 좋은
                  환경
                </b>{" "}
                이 됩니다. 특히나 위험한 <br /> 집먼지{" "}
                <b>
                  진드기의 배설물과 사체잔해가 아토피,천식,비염과 같은 <br />{" "}
                  각종 알르레기성 질환을 유발
                </b>
                하게 됩니다.
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
