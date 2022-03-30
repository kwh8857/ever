import React from "react";
import "./css/index.css";
function Nav({ now, setnow, navArr }) {
  return (
    <div className="nav">
      <div className="wrapper">
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
        <div className="bar" style={{ left: `${now * 140}px` }} />
      </div>
    </div>
  );
}

export default Nav;
