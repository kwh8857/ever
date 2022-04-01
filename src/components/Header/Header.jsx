import React from "react";
import { useLocation } from "react-router-dom";
import "./css/index.css";

function Header() {
  const loaction = useLocation().pathname;
  console.log(loaction);
  return (
    <header className="header">
      <a href="/">
        <img
          className="logo"
          src="/assets/common/logo.png"
          srcSet="/assets/common/logo@2x.png 2x , /assets/common/logo@3x.png 3x"
          alt="로고"
        />
      </a>
      <nav className="link-wrapper">
        {LinkArr.map(({ title, link }, idx) => {
          return (
            <a
              href={link}
              key={idx}
              style={
                loaction !== "/about" && loaction !== "/"
                  ? {
                      color: "white",
                    }
                  : undefined
              }
            >
              {title}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
const LinkArr = [
  { title: "ABOUT US", link: "/about" },
  { title: "가전제품케어", link: "/product" },
  { title: "홈클리닝", link: "/home" },
  { title: "비즈니스케어", link: "/about" },
  { title: "창업 교육 및 파트너 제휴", link: "/about" },
];
