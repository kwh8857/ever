import React from "react";
import "./css/index.css";
function Check({ type, circleArr, checkArr, nav, agent }) {
  return (
    <div className={`check-section ${type}check ${nav}check`}>
      <div className="back" />
      <div className="pack">
        {type === "hood" ||
        type === "air" ||
        type === "filter" ||
        type === "airfilter" ? (
          <></>
        ) : (
          <>
            {" "}
            <div className="title">
              {type === "aircon"
                ? "에어컨 관리를 하지 않았을 때"
                : type === "mat"
                ? "매트리스 관리를 하지 않았을 때"
                : type === "joint"
                ? "백시멘트 관리를 하지 않았을 때"
                : type === "bird"
                ? "실외기비둘기 퇴치를 하지 않으면"
                : type === "bug"
                ? "해충ㆍ방역 서비스를 하지 않으면"
                : type === "wash"
                ? "세탁기 케어를 하지 않을 경우"
                : ""}
              <br />
              {type !== "wash" ? (
                <>
                  <b>이런 문제가 발생합니다!</b>
                </>
              ) : (
                <>
                  <b>세균으로 오염된{agent === "mb" ? <br /> : undefined} 옷</b>
                  을 입고 다니는 것입니다!
                </>
              )}
            </div>
            <div
              className="circle-wrapper"
              style={{
                gridTemplateColumns: `repeat(${
                  agent === "mb"
                    ? type === "aircon" || type === "bird"
                      ? 2
                      : circleArr.length
                    : circleArr.length
                },${agent === "pc" ? 148 : agent === "mb" ? 96 : 102}px)`,
              }}
            >
              {circleArr.map(({ img, title }, idx) => {
                return (
                  <div key={idx} className="circle">
                    <img
                      src={`/assets/product/${img}.png`}
                      srcSet={`/assets/product/${img}@2x.png 2x,/assets/product/${img}@3x.png 3x`}
                      alt=""
                    />
                    <div
                      className="title"
                      style={
                        title.includes("알레르기") && agent === "mb"
                          ? { whiteSpace: "pre-wrap" }
                          : undefined
                      }
                    >
                      {title}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        <div className="content">
          {type === "aircon" ? (
            <>
              <b>필터 청소로만{agent === "mb" ? <br /> : ""} 해결되지 않는 </b>
              에어컨
            </>
          ) : type === "wash" ? (
            <>
              <b>
                집에서 관리해도{agent === "mb" ? <br /> : ""} 해결되지 않는
                세탁기
              </b>
            </>
          ) : type === "hood" ? (
            <>
              <b>
                집에서 관리해도{agent === "mb" ? <br /> : ""} 해결되지 않는
                주방후드
              </b>
            </>
          ) : type === "air" ? (
            <>
              <b>
                집에서 관리해도 {agent === "mb" ? <br /> : ""}해결되지 않는
                공기청정기
              </b>
            </>
          ) : type === "filter" || type === "airfilter" ? (
            <>
              <b>
                공기정화장치 필터 교체의 <br /> 시기
              </b>
              를 체크해 보세요!
            </>
          ) : type === "mat" ? (
            <>
              <b>
                청소 스프레이로만 {agent === "mb" ? <br /> : ""}해결되지 않는{" "}
              </b>{" "}
              매트리스
            </>
          ) : type === "joint" ? (
            <>
              <b>청소로만 해결되지 않는</b> 줄눈 곰팡이
            </>
          ) : type === "bird" ? (
            <>
              실외기 비둘기 퇴치의{agent === "mb" ? <br /> : ""} 적절한 시기는
            </>
          ) : type === "bug" ? (
            <>
              <b>해충·방역 서비스의 적절한 시기</b>를
            </>
          ) : (
            <></>
          )}{" "}
          <br />{" "}
          {type === "bird" ? (
            <>
              <b>발견 초기에 이루어지는게</b>
              {agent === "mb" ? <br /> : ""} 제일 좋습니다!
            </>
          ) : type === "bug" ? (
            "체크해 보세요!"
          ) : type !== "filter" && type !== "airfilter" ? (
            "아래 내용을 체크해 보세요!"
          ) : undefined}
        </div>
        <div className={`check-box ${type}`}>
          <div className="title">Check Point</div>
          <div className="check">
            {checkArr.map((item, idx) => {
              return (
                <img
                  src={`/assets/common/${
                    nav === "homeclean"
                      ? "green"
                      : nav === "business"
                      ? "aqua"
                      : ""
                  }check.svg`}
                  alt="check"
                  key={idx}
                />
              );
            })}
          </div>
          <div className="content">
            {type === "aircon" ? (
              <>
                에어컨 가동시
                <b>
                  <span> 불쾌한 냄새</span>
                  <span className="back" />
                </b>
                가 날 때 <br /> 에어컨 가동시
                <b>
                  <span> 두통이나 기침</span>
                  <span className="back" />
                </b>
                이 나올 때 <br /> 에어컨 바람의
                <b>
                  <span> 세기가 약해</span>
                  <span className="back" />
                </b>
                졌을 때 <br /> 전년도에 비해
                <b>
                  <span> 전기요금이 많이</span>
                  <span className="back" />
                </b>
                나올 때 <br /> 에어컨
                <b>
                  <span> 청소를 한 지 1년</span>
                  <span className="back" />
                </b>
                이 지났을 때
              </>
            ) : type === "wash" ? (
              <>
                세탁물에 검은
                <b>
                  <span>이물질이 보이거나 묻어 나올 때</span>
                  <span className="back" />
                </b>
                <br />
                세탁을 해도
                <b>
                  <span> 상쾌하지 않을 때</span>
                  <span className="back" />
                </b>
                <br />
                세탁기 내부 {agent === "mb" ? "/" : "또는"}
                <b>
                  <span> 세탁물에서 퀴퀴한 냄새가 날 때</span>
                  <span className="back" />
                </b>
              </>
            ) : type === "hood" ? (
              <>
                후드에
                <b>
                  <span> 기름때 및 찌든때</span>
                  <span className="back" />
                </b>
                를 발견했을 때 <br /> 주방에서
                <b>
                  <span> 악취가 느껴졌을 때</span>
                  <span className="back" />
                </b>
                <br />
                주방에서
                <b>
                  <span> 벌레를 발견했을 때</span>
                  <span className="back" />
                </b>
                <br /> 후드
                <b>
                  <span> 환기배출 기능이 저하</span>
                  <span className="back" />
                </b>
                되었을 때 <br /> 청소한지
                <b>
                  <span> 최소 6개월이 경과</span>
                  <span className="back" />
                </b>
                했을 때
              </>
            ) : type === "air" ? (
              <>
                <b>
                  <span>공기 정화 기능이 저하</span>
                  <span className="back" />
                </b>
                되었을 때<br /> 공기청정기 사용시
                <b>
                  <span> 냄새가 날 때</span>
                  <span className="back" />
                </b>
                <br />
                <b>
                  <span>1년 이상 세척케어를 진행하지 않았을 때</span>
                  <span className="back" />
                </b>
                <br />
                <b>
                  <span>유아, 청소년 자녀</span>
                  <span className="back" />
                </b>
                를 둔 가정
                <br />
                <b>
                  <span>반려동물이 있는 </span>
                  <span className="back" />
                </b>
                가정
              </>
            ) : type === "filter" ? (
              <>
                <b className="filter-first">
                  <span>
                    6개월~1년에 한번씩 {agent === "mb" ? <br /> : undefined}{" "}
                    교체해주는 것
                  </span>
                  <span className="back" />
                </b>
                이 제일 좋습니다
                <br />
                <b>
                  <span>이사를 왔을 때</span>
                  <span className="back" />
                </b>
                <br />
                <b>
                  <span>공기 정화 기능이 저하</span>
                  <span className="back" />
                </b>
                되었을 때
                <br />
                <b>
                  <span>유아, 청소년 자녀</span>
                  <span className="back" />
                </b>
                를 둔 가정
                <br />
                <b>
                  <span>반려동물이 있는 </span>
                  <span className="back" />
                </b>
                가정
              </>
            ) : type === "mat" ? (
              <>
                매트리스에
                <b>
                  <span> 노폐물로 인한 얼룩이 생긴 경우</span>
                  <span className="back" />
                </b>
                <br />
                매트리스에
                <b>
                  <span> 냄새가 나는 경우</span>
                  <span className="back" />
                </b>
                <br />
                <b>
                  <span>반려동물이 매트리스에 용변</span>
                  <span className="back" />
                </b>
                을 본 경우
                <br />
                소변으로 인한
                <b>
                  <span> 자국이 생긴 경우</span>
                  <span className="back" />
                </b>
                <br />
                <b>
                  <span>면연력이 약한 유아, 청소년</span>
                  <span className="back" />
                </b>
                이 있는 가정 <br />
                <b>
                  <span>호흡기, 피부 질환 환자</span>
                  <span className="back" />
                </b>
                가 있는 가정
              </>
            ) : type === "joint" ? (
              <>
                <b>
                  <span>면연력이 약한 유아, 청소년이 있는</span>
                  <span className="back" />
                </b>
                가정
                <br />
                <b>
                  <span>천식과 같은 호흡기 질환 </span>
                  <span className="back" />
                </b>
                환자가 있는 가정
                <br />
                <b>
                  <span>피부염과 같은 피부 질환 </span>
                  <span className="back" />
                </b>
                환자가 있는 가정
                <br />
                <b>
                  <span>물때와 곰팡이가 증식</span>
                  <span className="back" />
                </b>
                한 줄눈
                <br />
                <b>
                  <span>기존 백시멘트가 시공 </span>
                  <span className="back" />
                </b>
                되어있는 가정
              </>
            ) : type === "bird" ? (
              <>
                <b>
                  <span>비둘기 둥지가 발견 </span>
                  <span className="back" />
                </b>
                되었을 때
                <br />
                <b>
                  <span>비둘기 분변이 발견 </span>
                  <span className="back" />
                </b>
                되었을 때
              </>
            ) : type === "bug" ? (
              <>
                <b>
                  <span>해충이 발견</span>
                  <span className="back" />
                </b>
                되었을시
                <br />
                <b>
                  <span>신축 아파트, 빌라, 단독주택에 입주 전</span>
                  <span className="back" />
                </b>
                <br />
                해충ㆍ방역 서비스 후
                <b>
                  <span> 월 1회의 정기적 서비스</span>
                  <span className="back" />
                </b>
              </>
            ) : type === "airfilter" ? (
              <>
                <b>
                  <span>6개월~1년에 한번씩 </span>
                  <span className="back" />
                </b>
                교체해주는 것이 제일 좋습니다
                <br />
                <b>
                  <span>사무실 이전</span>
                  <span className="back" />
                </b>
                을 했을 때
                <br />
                <b>
                  <span>공기 정화 기능이 저하</span>
                  <span className="back" />
                </b>
                되었을 때
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
