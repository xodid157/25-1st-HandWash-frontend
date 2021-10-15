import React from 'react';
import './DetailsModal.scss';

class DetailsModal extends React.Component {
  render() {
    let textElement =
      '걸어서 건조\n필요 시 비염소계 표백제만 사용 가능\n40°C 물에서 기계세탁\n중온 다림질\n드라이클리닝 가능\n단독세탁';
    const { closeModal, detailsModal, product } = this.props;
    return (
      <section className="detailsModal">
        <article>
          <div className={!detailsModal ? 'openSide' : 'openSide closeSide'}>
            <div className="titleBox">
              <span className="title"> 세부 정보</span>
              <button onClick={closeModal}>
                <div className="close"></div>
              </button>
            </div>
            <div className="contentBox">
              <p>기장</p>
              <span>{product.length}</span>
              <p>밑위 길이</p>
              <span>{product.fit}</span>
              {/* <p>스타일</p>
              <span></span> */}
              <p>구성</p>
              <span>{product.configuration}</span>
              <p>취급 방법</p>
              <div className="treat">
                {textElement.split('\n').map((line, index) => {
                  return (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  );
                })}
              </div>
              <p className={product.is_new ? '' : 'new'}>신상품</p>
              <div
                className={product.is_conscious ? 'trueConscious' : 'conscious'}
              >
                <p>알아두면 좋은 사항</p>
                <span>Conscious</span>
              </div>
              <p>생산 국가</p>
              <span>대한민국</span>
              <p>제조일</p>
              <span>2021-10-05</span>
              <p>상품 번호:</p>
              <span>0967542009</span>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default DetailsModal;
