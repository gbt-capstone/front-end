import '../styles/components/Write.scss';

const Write = () => {
  return (
    <div className='Write'>
      <form>
        <textarea
          placeholder='리뷰 작성'
          rows='6'
          //   style={{
          //     width: '95%',
          //     height: '80px',
          //     padding: '11px',
          //     margin: '5px 0px',
          //   }}
        />
        <input type='submit' value='완료' />
      </form>
    </div>
  );
};

export default Write;
