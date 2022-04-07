import React from "react";
import "./css/index.css";
function Reviews({ title, sub, arr, type, nav }) {
  return (
    <div className={`review ${nav}nv ${type}re`}>
      <div className="back" />
      <div className="pack">
        <div className="title">
          <img
            src={`/assets/common/${
              nav === "product" ? "mint" : nav === "business" ? "aqua" : "green"
            }-quotes.svg`}
            alt=""
            className="left"
          />
          <b>{title}</b>
          <img
            src={`/assets/common/${
              nav === "product" ? "mint" : nav === "business" ? "aqua" : "green"
            }-quotes.svg`}
            alt=""
            className="right"
          />
        </div>
        <div className="sub">
          {type === "product" ? (
            <>
              {sub}
              <b>에버퓨리가 하면 다릅니다!</b>
            </>
          ) : type === "home" ? (
            <>
              신축입주청소·이사청소·인테리어 청소·외창/외벽청소 등 <br />
              <b>오랫동안 깨끗하게 유지할 수 있는 전문 클리닝</b>입니다
            </>
          ) : type === "building" ? (
            <>
              관공서·병원·학교·공장·회사·사무실·매장 청소 등 <br />{" "}
              <b>오랫동안 깨끗하게 유지할 수 있는 전문 클리닝</b>입니다
            </>
          ) : undefined}
        </div>
        <div className="list" style={{ gridTemplateColumns: `repeat(4,1fr)` }}>
          {arr.map((item, idx) => {
            return (
              <img
                src={`/assets/${nav}/${type}-review${idx + 1}.png`}
                srcSet={`/assets/${nav}/${type}-review${
                  idx + 1
                }@2x.png 2x,/assets/${nav}/${type}-review${idx + 1}@3x.png 3x`}
                key={idx}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
