import '../styles/components/Review.scss';

const Review = ({ comment, user_name }) => {
  return (
    <div className='Review'>
      <p>{comment}</p>
      <p>
        {'|'} 작성자 : {user_name}
      </p>
    </div>
  );
};

export default Review;
