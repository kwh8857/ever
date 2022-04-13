import React, { useEffect, useRef } from "react";

function Card({
  agent,
  data: { title, sub, img, link, category },
  idx,
  handleScroll,
}) {
  const dom = useRef(null);
  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(
        (e) => {
          handleScroll(e, dom);
        },
        {
          threshold: 0.1,
          root: null,
          rootMargin: "0px",
        }
      );
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [dom, handleScroll]);
  return (
    <div className="card" ref={dom}>
      <img
        src={`/assets/main/${img}.png`}
        srcSet={`/assets/main/${img}@2x.png 2x , /assets/main/${img}@3x.png 3x`}
        alt=""
      />
      <div className="content">
        <span className="title">
          <b>{title}</b>
        </span>
        <span className="sub">{sub}</span>
        <div
          className="category"
          style={{
            gridTemplateColumns: `repeat(${category.length},${
              agent === "pc" ? 60 : 32
            }px)`,
          }}
        >
          {agent === "mb" && idx === 1 ? (
            <>
              <div className="top">
                <div>
                  <img
                    src={`/assets/main/${category[0].type}.svg`}
                    alt={category[0].type}
                  />
                  <div>{category[0].title}</div>
                </div>
                <div>
                  <img
                    src={`/assets/main/${category[1].type}.svg`}
                    alt={category[1].type}
                  />
                  <div>{category[1].title}</div>
                </div>
              </div>
              <div className="bottom">
                <div>
                  <img
                    src={`/assets/main/${category[2].type}.svg`}
                    alt={category[2].type}
                  />
                  <div>{category[2].title}</div>
                </div>{" "}
                <div>
                  <img
                    src={`/assets/main/${category[3].type}.svg`}
                    alt={category[3].type}
                  />
                  <div>{category[3].title}</div>
                </div>{" "}
                <div>
                  <img
                    src={`/assets/main/${category[4].type}.svg`}
                    alt={category[4].type}
                  />
                  <div>{category[4].title}</div>
                </div>
              </div>
            </>
          ) : (
            category.map(({ type, title }, idx) => {
              return (
                <div key={idx}>
                  <img src={`/assets/main/${type}.svg`} alt={type} />
                  <span>{title}</span>
                </div>
              );
            })
          )}
        </div>
        <a href={link} className="btn">
          <span>자세히보기</span>
          <img src="/assets/common/rightarrow.svg" alt="이동" />
        </a>
      </div>
    </div>
  );
}

export default Card;
