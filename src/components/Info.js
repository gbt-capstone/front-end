import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faCheckCircle } from '@fortawesome/fontawesome-free-solid';

import '../styles/components/Info.scss';

import { ToiletInfoStateContext } from '../App';

fontawesome.library.add(faCheckCircle);

const Info = () => {
  const toiletInfo = useContext(ToiletInfoStateContext).data;
  console.log(toiletInfo);

  return (
    <div className='Info'>
      <div className='Info__wrapper'>
        <div className='info__header'>
          <h1>{toiletInfo.name}</h1>
          <button>수정하기</button>
        </div>
        <div className='info__detail'>
          <h3>주소: {toiletInfo.address}</h3>
          <h3>좌변기 개수: {toiletInfo.toilet_count}개</h3>
          <h3>청결도: {toiletInfo.cleanliness}</h3>
          <h3>
            {toiletInfo.separate === 'Y' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            남녀분리
          </h3>
          <h3>
            {toiletInfo.washstand === 'Y' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            세면대
          </h3>
          <h3>
            {toiletInfo.hand_sanitizer === 'Y' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            손세정제
          </h3>
          <h3>
            {toiletInfo.toilet_paper === 'Y' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            휴지
          </h3>
          <h3>
            {toiletInfo.for_disabled === 'Y' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            장애인 전용
          </h3>
          <h3>
            {toiletInfo.for_children === 'Y' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            아동 전용
          </h3>
          <h3>
            {toiletInfo.diaper_change === 'Y' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            기저귀 교환대
          </h3>
          <h3>
            {toiletInfo.women_safe === 'Y' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            여성 안심 화장실
          </h3>
          <h3>
            {toiletInfo.bellYN === '여' && (
              <FontAwesomeIcon icon='fa-check-circle' id='check-icon' />
            )}
            비상벨 여부
          </h3>
        </div>
        <div className='info__btn'>
          <button>리뷰 쓰기</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Info);
