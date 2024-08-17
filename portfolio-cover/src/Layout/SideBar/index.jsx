import './index.css';

function SideBar({ activeItemIndex, setActiveItemIndex }) {
  const menuItems = ['About', 'Project', 'Post', 'Contact'];

  const handleMenuClick = (index) => {
    const sectionId = `section-${menuItems[index].toLowerCase()}`;
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='side-bar'>
      <ul className='side-bar-list'>
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className={(activeItemIndex === index ? 'active' : '') + ' side-bar-menu'}
            onClick={() => handleMenuClick(index)}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      {console.log(activeItemIndex)}
    </nav>
  );
}

export default SideBar;
