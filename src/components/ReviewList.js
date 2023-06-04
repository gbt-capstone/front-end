import { useEffect, useState } from 'react';

import axios from 'axios';

import Review from './Review';

import '../styles/components/ReviewList.scss';

const ReviewList = (toiletId) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/review/get/').then((result) => {
      let list = result.data;

      let temp = [];
      list.forEach((review) => {
        // toiletId가 특정 마커 화장실 id와 동일한 리뷰만 가져오기
        if (review.toilet_id === toiletId.toiletId) {
          temp.push(review);
        }
      });

      setReviews(temp);
    });
  }, []);

  return (
    <div className='ReviewList'>
      {reviews.map((review) => {
        return <Review key={review.review_id} {...review} />;
      })}
    </div>
  );
};

export default ReviewList;
