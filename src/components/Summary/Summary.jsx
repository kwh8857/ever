import React from "react";
import "./css/index.css";
function Summary({ type, nav, agent }) {
  return (
    <div className={`summary ${type}summary ${nav}summary`}>
      <div className="pack">
        <div className={`back `} />
        <img
          className="backimg"
          src={`/assets/${nav}/${type}.png`}
          srcSet={`/assets/${nav}/${type}@2x.png 2x , /assets/${nav}/${type}@3x.png 3x`}
          alt=""
        />
        <div className="content-wrapper">
          <div className="title">
            {type === "aircon" ? (
              <>
                우리집
                <b>
                  {" "}
                  에어컨 관리 <br /> 어떻게
                </b>
                하고 계신가요?
              </>
            ) : type === "wash" ? (
              <>
                우리집{" "}
                <b>
                  세탁기 관리 <br /> 어떻게
                </b>{" "}
                하고 계신가요?
              </>
            ) : type === "hood" ? (
              <>
                주방후드
                <b>
                  분해세척이 <br /> 꼭 필요한
                </b>{" "}
                이유
              </>
            ) : type === "air" ? (
              <>
                우리집{" "}
                <b>
                  공기청정기 케어 <br /> 어떻게
                </b>{" "}
                하고 계신가요?
              </>
            ) : type === "filter" || type === "airfilter" ? (
              <>
                <b>공기정화장치 필터 교체</b>를 <br /> 왜 해야할까요?
              </>
            ) : type === "mat" ? (
              <>
                잠깐! <br /> <b>매트리스 청소</b> 하셨나요?
              </>
            ) : type === "joint" ? (
              <>
                <b>
                  곰팡이, 물때가 잘생기는 <br /> 백시멘트
                </b>{" "}
                때문에 고민이신가요?
              </>
            ) : type === "bird" ? (
              <>
                <b>
                  매일 날아오는 비둘기와 <br /> 배설물
                </b>{" "}
                때문에 고민이신가요?
              </>
            ) : type === "bug" ? (
              <b>새집에 이사오셨나요?</b>
            ) : type === "building" ? (
              <>
                <b>오랜 경험과 실력</b>을 바탕으로
                <br />
                <b>최고의 건물 관리 서비스</b>를
                <br />
                제공하고 있습니다
              </>
            ) : type === "aircare" ? (
              <>
                공기청정기
                <b>
                  분해 청소 <br /> 왜 해야할까요?
                </b>
              </>
            ) : type === "purify" ? (
              <>
                <b>개인생활 방역은 필수</b>이며
                <br /> <b>다중시설 방역은 의무</b>입니다!
              </>
            ) : (
              <></>
            )}
          </div>
          {type !== "purify" ? <div className="line" /> : undefined}
          <div className="sub">
            {type === "aircon" ? (
              agent !== "mb" ? (
                <>
                  에어컨 작동시 냉각판은 습도가 높고 먼지 및 오염물질이 있는
                  상태로 <br /> 작동이 멈추면 온도가 상승되어
                  <b>세균이 더욱 왕성하게 증식</b>됩니다. <br /> 이로 인해,
                  <b>악취 및 냉방병, 폐렴 등 각종 호흡기질환</b>에 영향을
                  줍니다.
                </>
              ) : (
                <>
                  에어컨 작동시 냉각판은 습도가 높고 먼지 및 오염 <br /> 물질이
                  있는 상태로 작동이 멈추면 온도가 상승되어 <br />
                  <b>세균이 더욱 왕성하게 증식</b>됩니다. <br /> 이로 인해,
                  <b>
                    악취 및 냉방병, 폐렴 등 각종 <br /> 호흡기질환
                  </b>
                  에 영향을 줍니다.
                </>
              )
            ) : type === "wash" ? (
              <>
                세탁기 구입 후 2~3년의 지나면{" "}
                <b>
                  내부에 이물질{agent === "mb" ? <br /> : undefined}(섬유, 먼지,
                  유분 등) 및 {agent !== "mb" ? <br /> : undefined} 세제
                  찌꺼기가 점점 쌓입니다.
                  {agent === "mb" ? <br /> : undefined}
                </b>
                이런 잔여물들로 인해 세탁기 내부에{" "}
                {agent !== "mb" ? <br /> : undefined} 세균 및 곰팡이가
                {agent === "mb" ? <br /> : undefined}
                번식하여
                <b>
                  {" "}
                  심한 악취가 나고 천식, 아토피, 가려움증, <br /> 알레르기를
                  유발하는 원인
                </b>
                이 됩니다.
              </>
            ) : type === "hood" ? (
              <>
                후드에 누적된 기름 및 음식찌꺼기를
                <b>
                  {" "}
                  청소해줌으로써 {agent === "mb" ? <br /> : undefined} 악취를
                  제거
                </b>
                하고, {agent !== "mb" ? <br /> : undefined} 해충의 서식지가 되는
                것을 {agent === "mb" ? <br /> : undefined} 방지하며{" "}
                <b>환기능력을 향상시키는 서비스</b>입니다
              </>
            ) : type === "air" ? (
              <>
                공기청정기{" "}
                <b>
                  내부에 존재하는 세균과 곰팡이를{" "}
                  {agent === "mb" ? <br /> : undefined} 제거하는 서비스
                </b>
                로 {agent !== "mb" ? <br /> : undefined}
                청결하고 위생적인 공기청정기
                {agent === "mb" ? <br /> : undefined} 사용을 위해 꼭 해야하는
                서비스입니다.
              </>
            ) : type === "filter" ? (
              <>
                전열교환기(공기정화장치)의 내장된 필터로
                {agent === "mb" ? <br /> : undefined} 오염물질을 제거 후
                {agent !== "mb" ? <br /> : undefined}
                깨끗한 실외공기를 실내공기로
                {agent === "mb" ? <br /> : undefined} 유입을 시키는 역할을
                합니다. {agent !== "mb" ? <br /> : undefined}
                <b>
                  {" "}
                  필터교체를 통해{agent === "mb" ? <br /> : undefined} 실내
                  공기질 개선효과를 극대화
                </b>
                시켜주는 서비스입니다.
              </>
            ) : type === "mat" ? (
              <>
                잠을 잘 때 우리 몸의 모공에서는 많은 노폐물이 배출이 됩니다.{" "}
                <br />
                매트리스에 조금씩 스며든 노폐물은{" "}
                <b>
                  박테리아 및 각종 세균과 <br /> 집먼지 진드기가 번식하기 좋은
                  환경
                </b>{" "}
                이 됩니다. 특히나 위험한 <br /> 집먼지{" "}
                <b>
                  진드기의 배설물과 사체잔해가 아토피,천식,비염과 같은 <br />{" "}
                  각종 알르레기성 질환을 유발
                </b>
                하게 됩니다.
              </>
            ) : type === "joint" ? (
              <>
                기존 백시멘트는 비위생적이고 오염이 쉽게 되며, 파손이 잘됩니다.{" "}
                <br />
                백시멘트가{" "}
                <b>
                  파손되어 나오는 가루는 각종 알레르기와 <br /> 호흡기 질환을
                  초래
                </b>
                합니다.
              </>
            ) : type === "bird" ? (
              <>
                비둘기 배설물이 옮기는 박테리아는 최소 6가지, 진균 3가지, <br />
                바이러스 2가지, 기생충 2가지 이상이 존재합니다. <br /> 이로 인해{" "}
                <b>
                  발생할 수 있는 질병은 무려 60여 가지이며 <br /> 사람에게 심한
                  해가 되는 미생물도 많습니다.
                </b>
              </>
            ) : type === "bug" ? (
              <>
                새로 지은 집에서 발생되는 환경호르몬이 입주자에게 건강이상을{" "}
                <br />
                유발하게 하는 새집증후군 제거 및 각종 질병 및 전염병의 원인이
                되는 <br /> 각종 해충들의 종류, 서식처, 생장주기, 발생장소 등{" "}
                <b>
                  환경적 요인을 <br /> 전문가가 정확히 진단하여 1:1 통합 맞춤
                  방제 솔루션을 제공
                </b>
                하여 <br /> 해충 문제를 케어하는 서비스입니다.
              </>
            ) : type === "building" ? (
              <>
                어느 곳 이던 생활하게 되는 공간은{" "}
                <b>
                  청결이 중요시 되어야 하는 공간인 만큼 <br /> 깨끗한 관리가
                  이루어져야합니다.
                </b>{" "}
                생활공간을 오랫동안 깨끗하게 <br />{" "}
                <b>유지할 수 있는 전문 클리닝</b>입니다.
              </>
            ) : type === "aircare" ? (
              <>
                공기 청정기 내부나 필터 등에 존재하는 세균과 곰팡이를 제거하는{" "}
                <br />
                서비스로 청결하고 위생적인 공기청정기 사용을 위해 꼭 해야하는
                서비스입니다.
              </>
            ) : type === "airfilter" ? (
              <>
                공기정화장치(전열교환기)의{" "}
                <b>
                  내장된 필터로 오염물질을 제거 후 깨끗한 <br /> 실외공기를
                  실내공기로 유입을 시키는 역할
                </b>
                을 합니다. <br />
                필터교체를 통해 실내 <b>공기질 개선효과를 극대화시킵니다.</b>
              </>
            ) : (
              <></>
            )}
          </div>
          {type === "building" ? (
            <div className="category-wrapper">
              <div className="one">
                <div>관공서</div>
                <div>병원</div>
                <div>학교</div>
              </div>
              <div className="two">
                <div>공장</div>
                <div>회사</div>
                <div>사무실</div>
                <div>매장청소</div>
              </div>
            </div>
          ) : undefined}
        </div>
      </div>
    </div>
  );
}

export default Summary;
