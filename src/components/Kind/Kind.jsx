import React from "react";
import "./css/index.css";
function Kind({ type, arr, nav, agent }) {
  return (
    <div className={`kind ${type}kind ${nav}kind`}>
      <div className="pack">
        {type === "hood" || type === "filter" ? (
          <b className="category">EVERPURI SERVICE</b>
        ) : undefined}
        <div className="title">
          {type === "hood" ? (
            <>
              <b>
                다양한 형태의 주방후드{agent === "mb" ? <br /> : undefined}{" "}
                분해세척
              </b>
              이 가능하며 <br />
              <b>완전분해를 원칙</b>으로 합니다
            </>
          ) : type === "filter" || type === "airfilter" ? (
            <b>에버퓨리가 제공하는 서비스</b>
          ) : (
            <>
              {" "}
              <b>
                다양한 형태의 세탁기{agent === "mb" ? <br /> : undefined}{" "}
                분해세척
              </b>
              이 가능합니다
            </>
          )}
        </div>
        <div className="list">
          {type === "wash" && agent === "mb"
            ? washmbarr.map((item, idx) => {
                return (
                  <div key={idx} className="card">
                    {type !== "wash" ? (
                      <img
                        className="circle"
                        src={`/assets/product/kind-${type}${idx + 1}.png`}
                        srcSet={`/assets/product/kind-${type}${
                          idx + 1
                        }@2x.png 2x , /assets/product/kind-${type}${
                          idx + 1
                        }@3x.png 3x`}
                        alt=""
                      />
                    ) : (
                      <div className="circle" />
                    )}
                    <div className="title">
                      {item}
                      {idx === 3 ? <span>통돌이/드럼</span> : undefined}
                    </div>
                  </div>
                );
              })
            : arr.map((item, idx) => {
                return (
                  <div key={idx} className="card">
                    {type !== "wash" ? (
                      <img
                        className="circle"
                        src={`/assets/product/kind-${type}${idx + 1}.png`}
                        srcSet={`/assets/product/kind-${type}${
                          idx + 1
                        }@2x.png 2x , /assets/product/kind-${type}${
                          idx + 1
                        }@3x.png 3x`}
                        alt=""
                      />
                    ) : (
                      <div className="circle" />
                    )}
                    <div className="title">
                      {item}
                      {type === "wash" && idx === 0 ? (
                        <span>통돌이/드럼</span>
                      ) : undefined}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Kind;

const washmbarr = [
  "통돌이 세탁기",
  "드럼세탁기",
  "빌트인 세탁기",
  "아기사랑",
  "트윈워시 세탁기",
  "플렉스워시",
  "LG 꼬망스",
];
