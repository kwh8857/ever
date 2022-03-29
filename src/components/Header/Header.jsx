import React from "react";
import "./css/index.css";

const LinkArr = [
  { title: "ABOUT US", link: "/about" },
  { title: "가전제품케어", link: "/about" },
  { title: "홈클리닝", link: "/about" },
  { title: "비즈니스케어", link: "/about" },
  { title: "창업 교육 및 파트너 제휴", link: "/about" },
];

function Header() {
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
            <a href={link} key={idx}>
              {title}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
