import toilet from '../assets/toilet.png';

import '../styles/components/Intro.scss';

const Intro = () => {
  return (
    <div className='Intro'>
      <img src={toilet} className='toilet__img'></img>
      <h1 className='title'>화슐랭 가이드</h1>
      <h3 className='sub_title'>Where is the toilet?</h3>
    </div>
  );
};

export default Intro;
