import React from "react";
import "./css/index.css";
function Floating({ agent }) {
  return (
    <div className="floating">
      {arr.map(({ img, title, link }, idx) => {
        return (
          <a href={link} key={idx}>
            {img === "coupang" || img === "bot" ? (
              <img
                className={img}
                src={`/assets/main/${img}.png`}
                srcSet={`/assets/main/${img}@2x.png 2x , /assets/main/${img}@3x.png 3x`}
                alt=""
              />
            ) : (
              <img src={`/assets/main/${img}.svg`} alt="" className={img} />
            )}
            {agent === "pc" ? <div className="title">{title}</div> : undefined}
          </a>
        );
      })}
    </div>
  );
}

export default Floating;

const arr = [
  {
    img: "coupang",
    title: "구매하기",
    link: "",
  },
  {
    img: "naver",
    title: "구매하기",
    link: "",
  },
  {
    img: "kakao",
    title: "상담하기",
    link: "",
  },
  {
    img: "bot",
    title: "상담하기",
    link: "",
  },
];