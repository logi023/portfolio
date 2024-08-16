import './index.css';

function PostItem({ imgUrl, title, desc, linkUrl }) {
  return (
    <article className='post-item'>
      <a href={linkUrl}>
        <div className="thumb">
          <img src={imgUrl} alt="" />
        </div>
        <div className="text-container">
          <div className="title">{title}</div>
          <p className="desc">{desc}</p>
        </div>
      </a>
    </article>
  );
}

export default PostItem
