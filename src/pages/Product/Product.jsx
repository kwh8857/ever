import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./css/index.css";
function Product() {
  const [now, setNow] = useState(0);
  return (
    <div className="product">
      <div className="banner">
        <div className="title">가전제품케어</div>
      </div>
      <Nav now={now} setnow={setNow} navArr={navArr} />
      {now === 0 ? (
        <div className="aircon">
          <div className="section1">
            <div className="pack">
              <div className="back" />
              <img
                className="backimg"
                src="/assets/product/aircon.png"
                srcSet="/assets/product/aircon@2x.png 2x , /assets/product/aircon@3x.png 3x"
                alt=""
              />
              <div className="content-wrapper">
                <div className="title">
                  우리집
                  <b>
                    에어컨 관리 <br /> 어떻게
                  </b>
                  하고 계신가요?
                </div>
                <div className="line" />
                <div className="sub">
                  에어컨 작동시 냉각판은 습도가 높고 먼지 및 오염물질이 있는
                  상태로 <br /> 작동이 멈추면 온도가 상승되어
                  <b>세균이 더욱 왕성하게 증식</b>됩니다. <br /> 이로 인해,
                  <b>악취 및 냉방병, 폐렴 등 각종 호흡기질환</b>에 영향을
                  줍니다.
                </div>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="back" />
            <div className="pack">
              <div className="title">
                에어컨 관리를 하지 않았을 때 <br />
                <b>이런 문제가 발생합니다!</b>
              </div>
              <div className="circle-wrapper">
                {airconArr.map(({ img, title }, idx) => {
                  return (
                    <div key={idx} className="circle">
                      <img
                        src={`/assets/product/${img}.png`}
                        srcSet={`/assets/product/${img}@2x.png 2x,/assets/product/${img}@3x.png 3x`}
                        alt=""
                      />
                      <div className="title">{title}</div>
                    </div>
                  );
                })}
              </div>
              <div className="content">
                <b>필터 청소로만 해결되지 않는 </b>에어컨 <br /> 아래 내용을
                체크해 보세요!
              </div>
              <div className="check-box">
                <div className="title">Check Point</div>
                <div className="check">
                  {checkArr.map((item, idx) => {
                    return (
                      <img
                        src="/assets/common/check.svg"
                        alt="check"
                        key={idx}
                      />
                    );
                  })}
                </div>
                <div className="content">
                  에어컨 가동시 <b>불쾌한 냄새</b>가 날 때 <br /> 에어컨 가동시
                  <b> 두통이나 기침</b>이 나올 때 <br /> 에어컨 바람의
                  <b> 세기가 약해</b>졌을 때 <br /> 전년도에 비해
                  <b> 전기요금이 많이</b> 나올 때 <br /> 에어컨
                  <b> 청소를 한 지 1년</b>이 지났을 때
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}

export default Product;

const navArr = [
  "에어컨 분해청소",
  "세탁기 분해청소",
  "주방후드 분해세척",
  "공기청정기 케어",
  "공기정화장치 필터 교체",
];
const airconArr = [
  { img: "germ", title: "각종 세균 번식" },
  { img: "cold", title: "악취 및 냉방병" },
  { img: "illness", title: "호흡기 질환 영향" },
  { img: "price", title: "높은 전기요금" },
];
const checkArr = [0, 0, 0, 0, 0];
