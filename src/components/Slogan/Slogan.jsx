import React from "react";
import "./css/index.css";
function Slogan({ type, nav, agent }) {
  return (
    <div className={`slogan ${type}slogan ${nav}slogan`}>
      <div className="pack">
        <img
          src={`/assets/common/${
            nav === "homeclean"
              ? "home-"
              : nav === "business"
              ? "business-"
              : ""
          }quotes.svg`}
          alt=""
          className="left"
        />
        <div className="title">
          {type === "aircon" ? (
            <>
              에어컨 내부에 존재하는{" "}
              <b>
                세균과 곰팡이를 <br /> 제거
              </b>
              하는 서비스로
              <b>
                {" "}
                각종 질병 예방 및 <br /> 건강을 위해
              </b>
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "wash" ? (
            <>
              세탁기 내부에 존재하는{" "}
              <b>
                섬유찌꺼기 및 세균과{agent !== "pc" ? <br /> : undefined}{" "}
                곰팡이를 {agent === "pc" ? <br /> : undefined} 제거
              </b>
              하는 서비스로{" "}
              {agent === "pc" ? (
                <>
                  세탁물 관리와{" "}
                  <b>
                    각종 피부질환을 일으킬 수 있는 <br /> 위험요소를 제거 및
                    예방
                  </b>
                  하기 위해
                </>
              ) : (
                <b>
                  각종 질병 예방 및 <br /> 건강을 위해{" "}
                </b>
              )}
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "hood" ? (
            <>
              주방후드 내부에 존재하는{" "}
              <b>
                기름 및 음식찌꺼기를 <br /> 제거
              </b>
              하는 서비스로{" "}
              <b>
                각종 질병 예방 및 <br /> 건강을 위해
              </b>{" "}
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "air" ? (
            <>
              공기청정기 케어는 필터 내부에 있는{" "}
              <b>
                세균과{agent === "mb" ? <br /> : undefined} 곰팡이를
                {agent !== "mb" ? <br /> : undefined} 제거
              </b>
              하는 서비스로{" "}
              <b>
                각종 질병 예방 및 <br /> 건강을 위해
              </b>{" "}
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "filter" ? (
            <>
              공기정화장치 필터 교체는{" "}
              <b>
                각종 질병 예방 및 <br /> 건강을 위해 꼭
              </b>{" "}
              해야하는 서비스입니다!
            </>
          ) : type === "mat" ? (
            <>
              매트리스에 존재하는{" "}
              <b>
                세균과 곰팡이를 <br /> 제거
              </b>
              하는 서비스로{" "}
              <b>
                각종 질병 예방 및 <br /> 건강을 위해
              </b>{" "}
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "joint" ? (
            <>
              백시멘트에 존재하는{" "}
              <b>
                세균과 곰팡이를 <br /> 제거
              </b>
              하는 서비스로{" "}
              <b>
                각종 질병 예방 및 <br /> 건강을 위해
              </b>{" "}
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "bird" ? (
            <>
              비둘기 퇴치는 여러{" "}
              <b>
                바이러스와 박테리아를 <br /> 제거
              </b>{" "}
              하는 서비스로{" "}
              <b>
                각종 질병 예방 및 <br /> 건강
              </b>
              을 위해 꼭 해야하는 서비스입니다!
            </>
          ) : type === "bug" ? (
            <>
              해충·방역 서비스는 지속적인 예방을 통하여 <br />{" "}
              <b>
                쾌적하고 안전한 생활환경을 유지 및 <br /> 건강을 위해
              </b>{" "}
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "aircare" ? (
            <>
              공기질케어는 필터 내부에 있는{" "}
              <b>
                세균과 곰팡이를 <br /> 제거
              </b>
              하는 서비스로{" "}
              <b>
                각종 질병 예방 및 <br /> 건강을 위해
              </b>{" "}
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "airfilter" ? (
            <>
              공기정화장치 필터 교체는 실내 공기질 개선효과를 <br />{" "}
              극대화시켜주는 서비스로{" "}
              <b>
                각종 질병 예방 및 <br /> 건강을 위해
              </b>{" "}
              꼭 해야하는 서비스입니다!
            </>
          ) : type === "purify" ? (
            <>
              방역소독을 하기 위해서는{agent === "mb" ? <br /> : undefined}{" "}
              소독업 신고가 되어있는 업체여야합니다 <br />
              에버퓨리는 <b>소독업신고</b>와{" "}
              <b>
                건물위생관리업 {agent === "mb" ? <br /> : undefined}영업신고증도
                보유중
              </b>
              이며 <br />
              <b>소독증명서도 발급이 가능</b>합니다
            </>
          ) : (
            ""
          )}
        </div>
        <img
          src={`/assets/common/${
            nav === "homeclean"
              ? "home-"
              : nav === "business"
              ? "business-"
              : ""
          }quotes.svg`}
          alt=""
          className="right"
        />
      </div>
    </div>
  );
}

export default Slogan;
