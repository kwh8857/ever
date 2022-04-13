import React, { useRef, useState } from "react";

function ScrollImg({ arr, agent }) {
  const imgRef = useRef(null);
  const [Scroll, setScroll] = useState(0);
  return (
    <>
      <div
        className="img-wrapper"
        ref={imgRef}
        onScroll={() => {
          const left = imgRef.current.scrollLeft;
          setScroll((left / 352) * 70);
        }}
      >
        {arr.map((item, idx) => {
          return (
            <img
              alt=""
              src={`/asssets/partner/${item}.png`}
              srcSet={`/assets/partner/${item}@2x.png 2x , /assets/partner/${item}@3x.png 3x`}
              key={idx}
            />
          );
        })}
      </div>
      {agent === "mb" ? (
        <div className="scroll-wrapper">
          <div className="bar" style={{ left: `${Scroll}%` }} />
        </div>
      ) : undefined}
    </>
  );
}

export default ScrollImg;
