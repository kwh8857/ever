import React, { useState } from "react";
import "./css/index.css";
function Nav({ now, setnow, navArr, type, agent }) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="nav">
      <div className="wrapper">
        {agent !== "mb" ? (
          <>
            {navArr.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={`${now === idx ? "on" : ""}`}
                  onClick={() => {
                    setnow(idx);
                  }}
                >
                  {item}
                </button>
              );
            })}
            <div
              className={`bar ${type}color`}
              style={{ left: `${now * 140}px` }}
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
        <div className={`nav-wrapper ${isOpen ? "open" : ""}`}>
          {navArr.map((item, idx) => {
            return (
              <button
                key={idx}
                className={`${now === idx ? `on ${type}menu` : ""} menu`}
                onClick={() => {
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
