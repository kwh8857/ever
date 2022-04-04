import React from "react";
import "./css/index.css";
function Point({ type, arr }) {
  return (
    <div className="point">
      <div className="back">
        <div className="pack">
          <img
            src="/assets/product/section6-back.png"
            srcSet="/assets/product/section6-back@2x.png 2x , /assets/product/section6-back@3x.png 3x"
            alt=""
          />
        </div>
      </div>
      <div className="pack">
        <div className="category">EVERPURI POINT</div>
        <div className="title">
          에버퓨리만의 <br /> <b>차별성은 무엇일까요?</b>
        </div>
        <div className="list">
          {arr.map(({ title, bold, content, img }, idx) => {
            return (
              <div key={idx} className="card">
                <img
                  src={`/assets/product/${img}.png`}
                  srcSet={`/assets/product/${img}@2x.png 2x,/assets/product/${img}@3x.png 3x`}
                  alt=""
                />
                <div className="title">
                  {idx > 1 ? (
                    <b>
                      {bold} <br />
                    </b>
                  ) : undefined}
                  {title}
                  {idx < 2 ? (
                    <b>
                      <br />
                      {bold}
                    </b>
                  ) : undefined}
                </div>
                <div className="content">{content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Point;
