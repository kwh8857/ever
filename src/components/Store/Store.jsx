import React from "react";
import "./css/index.css";
function Store({ agent }) {
  return (
    <div className="store">
      <div className="pack">
        <div className="title">
          <b>
            {" "}
            간편하게 서비스를{agent === "mb" ? <br /> : undefined} 이용하고
            싶다면
          </b>{" "}
          <br /> 지금 바로 에버퓨리를{agent === "mb" ? <br /> : undefined}
          만나보세요
        </div>
        <div className="button-wrapper">
          <a
            href="https://smartstore.naver.com/everpuri"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="left">
              <div className="img-wrapper naver">
                <img src="/assets/common/smartstore.svg" alt="" />
              </div>
              <span>
                <b>스마트스토어</b> 바로가기
              </span>
            </div>
            <img src="/assets/common/greyarrow.svg" alt="" />
          </a>
          <a
            href="https://store.coupang.com/vp/vendors/A00479925/products?vendorName=%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC+%EC%97%90%EB%B2%84%ED%93%A8%EB%A6%AC&productId=5985589977&outboundShippingPlaceId=4563061"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="left">
              <div className="img-wrapper">
                <img src="/assets/common/coupang.svg" alt="" />
              </div>
              <span>
                <b>쿠팡</b> 바로가기
              </span>
            </div>
            <img src="/assets/common/greyarrow.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Store;
