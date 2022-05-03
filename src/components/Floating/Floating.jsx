import React from "react";
import "./css/index.css";
function Floating({ agent }) {
  return (
    <div className="floating">
      {arr.map(({ img, title, link }, idx) => {
        return (
          <a href={link} key={idx} target="_blank" rel="noreferrer">
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
    link:
      "https://store.coupang.com/vp/vendors/A00479925/products?vendorName=%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC+%EC%97%90%EB%B2%84%ED%93%A8%EB%A6%AC&productId=5985589977&outboundShippingPlaceId=4563061",
  },
  {
    img: "naver",
    title: "구매하기",
    link: "https://smartstore.naver.com/everpuri ",
  },
  {
    img: "kakao",
    title: "상담하기",
    link: "https://pf.kakao.com/_wZxbCs",
  },
  {
    img: "bot",
    title: "상담하기",
    link: "",
  },
];
