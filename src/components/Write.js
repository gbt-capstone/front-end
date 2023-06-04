import { useState } from 'react';
import axios from 'axios';

import '../styles/components/Write.scss';

const Write = (toiletId) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const postReview = async (event) => {
    event.preventDefault();

    let length = 0;
    await axios.get('http://127.0.0.1:8000/api/review/get/').then((result) => {
      length = result.data.length; // 생성할 리뷰의 id값 구하기 위해 전체 review length 구하기
    });

    await axios
      .post('http://127.0.0.1:8000/api/review/post/', {
        toilet: toiletId.toiletId,
        user_name: '조수진',
        review_id: length + 1,
        comment: comment,
      })
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className='Write'>
      <form>
        <textarea
          onChange={handleChange}
          value={comment}
          placeholder='리뷰 작성'
          rows='6'
        />
        <button onClick={postReview}>완료</button>
      </form>
    </div>
  );
};

export default Write;
