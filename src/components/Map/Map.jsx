import React, { useCallback } from "react";
import "./css/index.css";
function Map({ agent }) {
  const __clipboard = useCallback(() => {
    navigator.clipboard
      .writeText("대구광역시 동구 동내로 76 한국메디벤처센터 210호, 211호")
      .then(() => {
        alert("주소가 복사되었습니다");
      })
      .catch(() => {});
  }, []);
  return (
    <div className="map">
      <div className="pack">
        <div className="back" />
        <div className="content">
          <div className="category">MAP</div>
          <div className="title">찾아오시는 길</div>
          <img
            src="/assets/map/map.png"
            srcSet="/assets/map/map@2x.png 2x, /assets/map/map@3x.png 3x"
            alt=""
            className="main"
          />
          <div className="list">
            {layout.map(({ img, category, content }, idx) => {
              return (
                <div key={idx} className="wrapper">
                  <div className="left">
                    <img src={img} alt={category} className="icon" />
                    <div className="content-wrapper">
                      <b className="category">{category}</b>
                      <div className="content">{content}</div>
                    </div>
                  </div>
                  {category === "ADDRESS" ? (
                    <button className="copy" onClick={__clipboard}>
                      주소복사
                    </button>
                  ) : undefined}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;

const layout = [
  {
    img: "/assets/map/pin.svg",
    category: "ADDRESS",
    content: `대구광역시 동구 동내로 76
한국메디벤처센터 210호, 211호`,
  },
  {
    img: "/assets/map/tel.svg",
    category: "TEL",
    content: "1522 - 4396",
  },
  {
    img: "/assets/map/fax.svg",
    category: "FAX",
    content: "053-965-0708",
  },
];
