import React, { useEffect, useRef, useState } from "react";
import "./css/index.css";
function Nav({ now, setnow, navArr, type, agent }) {
  const barRef = useRef(null);
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    const btn = document.getElementById(`btn-${now}`);
    barRef.current.style.width = `${btn.offsetWidth}px`;
    barRef.current.style.left = `${btn.offsetLeft}px`;
    return () => {};
  }, [now]);

  return (
    <div className={`nav`}>
      <div className={`wrapper ${type}grid`}>
        {agent !== "mb" ? (
          <>
            {navArr.map((item, idx) => {
              return (
                <button
                  id={`btn-${idx}`}
                  key={idx}
                  className={`${now === idx ? "on" : ""}`}
                  onClick={(e) => {
                    setnow(idx);
                    // barRef.current.style.width = `${e.target.offsetWidth}px`;
                    // barRef.current.style.left = `${e.target.offsetLeft}px`;
                  }}
                >
                  {item}
                </button>
              );
            })}
            <div
              ref={barRef}
              className={`bar ${type}color`}
              // style={{ left: `${now * 140}px` }}
            />
          </>
        ) : (
          <div
            className="now-nav"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            {navArr[now]}
            <img
              src="/assets/common/nav-arrow.svg"
              alt=""
              style={
                isOpen
                  ? {
                      transform: "scaleY(-1)",
                    }
                  : undefined
              }
            />
          </div>
        )}
      </div>
      {agent === "mb" ? (
        <div className={`nav-wrapper ${isOpen ? `open ${type}op` : ""} `}>
          {navArr.map((item, idx) => {
            return (
              <button
                key={idx}
                className={`${now === idx ? `on ${type}menu` : ""} menu`}
                onClick={(e) => {
                  setnow(idx);
                  setisOpen(!isOpen);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
}

export default Nav;
