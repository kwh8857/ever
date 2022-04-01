import React from "react";
import "./css/index.css";
function Sponsor({ type }) {
  return (
    <div
      className="sponsor"
      style={type === "about" ? { backgroundColor: "#f8f8f8" } : undefined}
    >
      <div className="pack">
        <span className="title">
          에버퓨리는 <br />
          <b> 다양한 기업들과 함께합니다</b>
        </span>
        <div className="content">
          <div className="card first">
            <img
              className="icon"
              src="/assets/sponsor/sponsor1icon.svg"
              alt=""
            />
            <div className="title">
              <b>공공기관</b>
            </div>
            <div className="content-wrapper">
              <img
                src="/assets/sponsor/sponsor1.png"
                srcSet="/assets/sponsor/sponsor1@2x.png 2x , /assets/sponsor/sponsor1@3x.png 3x"
                alt=""
              />
            </div>
          </div>
          <div className="card first">
            <img
              className="icon medi"
              src="/assets/sponsor/sponsor2icon.svg"
              alt=""
            />
            <div className="title" style={{ width: "190px" }}>
              <b>의료·복지기관</b>
            </div>
            <div className="content-wrapper">
              <img
                src="/assets/sponsor/sponsor2.png"
                srcSet="/assets/sponsor/sponsor2@2x.png 2x , /assets/sponsor/sponsor2@3x.png 3x"
                alt=""
              />
            </div>
          </div>
          <div className="card two">
            <img
              className="icon school"
              src="/assets/sponsor/sponsor3icon.svg"
              alt=""
            />
            <div className="title">
              <b>학교</b>
            </div>
            <div className="content-wrapper">
              <img
                src="/assets/sponsor/sponsor3.png"
                srcSet="/assets/sponsor/sponsor3@2x.png 2x , /assets/sponsor/sponsor3@3x.png 3x"
                alt=""
              />
              <div className="line" />
              <span>
                현풍중·현풍고·경북 기계금속고·영천고·구미 석적고 <br /> 대구
                상원중·영천여자중·경산 자인중·경산 서부초 <br /> 금청초·영천
                단포초·옥곡초·경산 명산초·칠곡 학림초
              </span>
            </div>
          </div>
          <div className="card two">
            <img
              style={{ opacity: 1 }}
              className="icon"
              src="/assets/sponsor/sponsor4icon.svg"
              alt=""
            />
            <div className="title">
              <b>은행·상점</b>
            </div>
            <div className="content-wrapper">
              <img
                src="/assets/sponsor/sponsor4.png"
                srcSet="/assets/sponsor/sponsor4@2x.png 2x , /assets/sponsor/sponsor4@3x.png 3x"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
