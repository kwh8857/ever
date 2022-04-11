import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/index.css";

function Header({ agent }) {
  const loaction = useLocation().pathname;
  const [isback, setIsback] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const root = document.getElementById("root");
    function change() {
      if (root.scrollTop > 110) {
        if (!isback) {
          setIsback(true);
        }
      } else {
        if (isback) {
          setIsback(false);
        }
      }
    }
    root.addEventListener("scroll", change);
    return () => {
      root.removeEventListener("scroll", change);
    };
  }, [isback]);

  return (
    <header
      className="header"
      style={
        isback || isOpen
          ? {
              backgroundColor: "white",
            }
          : undefined
      }
    >
      <a href="/">
        <img
          className="logo"
          src="/assets/common/logo.png"
          srcSet="/assets/common/logo@2x.png 2x , /assets/common/logo@3x.png 3x"
          alt="로고"
        />
      </a>
      {agent !== "mb" ? (
        <nav className="link-wrapper">
          {LinkArr.map(({ title, link }, idx) => {
            return (
              <a
                href={link}
                key={idx}
                style={
                  loaction !== "/about" && loaction !== "/" && !isback
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
      ) : (
        <img
          src={`/assets/main/${isOpen ? "close" : "menu"}.svg`}
          alt="메뉴"
          className="menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}
      {agent === "mb" ? (
        <div className="mb-menu" style={{ height: isOpen ? "100%" : "0" }}>
          {LinkArr.map(({ title, link }, idx) => {
            return (
              <a href={link} key={idx}>
                {title}
                {idx !== 4 ? <div className="line" /> : undefined}
              </a>
            );
          })}
        </div>
      ) : undefined}
    </header>
  );
}

export default Header;
const LinkArr = [
  { title: "ABOUT US", link: "/about" },
  { title: "가전제품케어", link: "/product" },
  { title: "홈클리닝", link: "/homeclean" },
  { title: "비즈니스케어", link: "/business" },
  { title: "창업 교육 및 파트너 제휴", link: "/partner" },
];
