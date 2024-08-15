import { useState } from 'react';
import './index.css';

function SideBar() {
  const menuItems = ['About', 'Project', 'Post', 'Contact'];
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <nav className='side-bar'>
      <ul className='side-bar-list'>
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className={activeItemIndex === index ? 'active' : ''}
            onClick={() => setActiveItemIndex(index)}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBar;
