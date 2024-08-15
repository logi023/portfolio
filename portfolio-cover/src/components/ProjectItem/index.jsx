import './index.css';

function ProjectItem({ title, description, imageSrc }) {
  return (
    <article className='project-item'>
      <div className="project-text">
        <div className="item-title">{title}</div>
        <p className='item-desc'>{description}</p>
      </div>
      <div className='item-thumb'>
        <img src={imageSrc} alt='썸네일 이미지' />
      </div>
    </article>
  );
}

export default ProjectItem
