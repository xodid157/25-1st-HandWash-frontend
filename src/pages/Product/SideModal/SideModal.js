import React from 'react';
import './SideModal.scss';
class SideModal extends React.Component {
  render() {
    return (
      <section>
        <article>
          <div className="a">
            <div className="titleBox">
              <span className="title"> 배송 및 결제</span>
              <button>
                <div className="close"></div>
              </button>
            </div>
            <span className="content">{`나이가 18세 이상이고 대한민국에 거주하는 이용자만 주문할 수
             있습니다. 배송: 집주소로 배송됩니다. 표준 배송1-2일<영업일
              기준일 내, 일반 배송; 배송료는 ￦2,500입니다. 월요일부터 
              토요일(공휴일 제외)까지 배송됩니다. 성수기와 세일 기간 중에는 
              배송이 좀 더 오래 걸릴 수 있습니다. 결제 시 선호하는 배송 옵션
              을 선택할 수 있습니다. 반품/취소: 제품 구매 후 30 일 이내에 반품
              이 가능합니다. 반품 수수료는 ￦2,500입니다. H&M은 반품 아이템이 
              양호한 상태를 유지하고 있다는 전제 하에, 모든 아이템에 대한 환불
              을 보증합니다. 단, 위생상의 이유로 속옷, 수영복(위생 테이프가 제
              거되지 않은 경우), 이어링 제품은 7일 이내에 반품할 수 있습니다.
               H&M의 모든 포장에는 해당 제품을 반품하는 데 사용하는 반품 주소 
               라벨이 들어 있습니다. 결제: 페이코 전자 지갑(Payco e-wallet)을 
               포함한 대부분의 일반 카드 종류를 사용할 수 있습니다. 또한 은행 
               계좌 이체로도 결제할 수 있습니다. 또는 기프트 카드 결제 시 본인에
               게 가장 적합한 결제 방법을 선택할 수 있습니다. H&M 고객 서비스 페이
               지에서 자세한 내용을 확인하십시오.`}</span>
          </div>
        </article>
      </section>
    );
  }
}

export default SideModal;
