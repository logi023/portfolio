import './index.css';

function ContactItem({ logo, icon, text, url }) {
  return (
    <article className='contact-item'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="content">
        {icon === 'copy' ? (
          <button 
            className="button" 
            onClick={() => {
              window.navigator.clipboard.writeText(url).then(() => {
                alert('복사되었습니다.');
              }).catch(err => {
                console.error('Failed to copy: ', err);
              });
            }}>
            <span className={icon + ' icon'}></span>
            {text}
          </button>
        ) : icon === 'link' ? (
          <a href={url} className="button" target="_blank" rel="noopener noreferrer">
            <span className={icon + ' icon'}></span>
            {text}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ContactItem
