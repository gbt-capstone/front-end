import React, { useContext } from 'react';

import '../styles/components/Info.scss';

import { ToiletInfoStateContext } from '../App';

const Info = () => {
  const toiletInfo = useContext(ToiletInfoStateContext);
  console.log(toiletInfo);

  return (
    <div className='Info'>
      <div className='info__header'>~화장실 헤더</div>
      <div className='info__detail'>디테일 정보</div>
      <div className='info__btn'>리뷰 쓰기</div>
    </div>
  );
};

export default React.memo(Info);
