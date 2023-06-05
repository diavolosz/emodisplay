
import { useState, useRef, useEffect } from 'react'

import "./Dropdown.css"

const DropdownMenu = (props) => {

  let {itemList, title} = props

  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedItem(item.title);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-menu" ref={dropdownRef}>
      <h2>{title}</h2>
      <button
        className={`dropdown-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? selectedItem : 'Select an item'}
      </button>
      <ul className={`dropdown-list ${isOpen ? 'open' : ''}`}>
        {itemList.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
