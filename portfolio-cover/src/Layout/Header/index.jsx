import './index.css';

function Header() {
  return (
    <header className='header'>
      <div className='inner'>
        <div className="header-contents">
          <h2 className='header-title'>Web Portfolio</h2>
          <div className='header-links'>
            <a href='https://tomato-cheese.tistory.com/' target='_blank'>blog</a>
            <a href='https://github.com/logi023' target='_blank'>github</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
