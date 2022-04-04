import React from "react";
import "./css/index.css";
function Summary({ type }) {
  return (
    <div className="summary">
      <div className="pack">
        <div className="back" />
        <img
          className="backimg"
          src={`/assets/product/${type}.png`}
          srcSet={`/assets/product/${type}@2x.png 2x , /assets/product/${type}@3x.png 3x`}
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
            ) : undefined}
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
            ) : undefined}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
