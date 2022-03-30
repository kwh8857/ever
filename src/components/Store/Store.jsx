import React from "react";
import "./css/index.css";
function Store() {
  return (
    <div className="store">
      <div className="pack">
        <div className="title">
          <b> 간편하게 서비스를 이용하고 싶다면</b> <br /> 지금 바로 에버퓨리를
          만나보세요
        </div>
        <div className="button-wrapper">
          <button>
            <div className="left">
              <div className="img-wrapper">
                <img src="/assets/common/smartstore.svg" alt="" />
              </div>
              <span>
                <b>스마트스토어</b> 바로가기
              </span>
            </div>
            <img src="/assets/common/greyarrow.svg" alt="" />
          </button>
          <button>
            <div className="left">
              <div className="img-wrapper">
                <img src="/assets/common/coupang.svg" alt="" />
              </div>
              <span>
                <b>쿠팡</b> 바로가기
              </span>
            </div>
            <img src="/assets/common/greyarrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Store;
