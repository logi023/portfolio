import './index.css';

function MoreBtn({ children }) {
  return (
    <a href={children} className='btn-more'>More</a>
  )
}

export default MoreBtn
