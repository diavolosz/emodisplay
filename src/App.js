import logo from './logo.svg';
import './App.scss';

import DropdownMenu from './components/Dropdown';


function App() {

  const items = ['Item 1', 'Item 2', 'Item 3'];

  const itemList = [
    {
      title: "item A",
      image: "url 1"
    },
    {
      title: "item B",
      image: "url 2"
    },
    {
      title: "item V",
      image: "url 3"
    }
  ]


  return (
    <div className="App">
      <div className='background'></div>

      <h1>Dropdown Menu Example</h1>
      <div className='dropdown-container'>
        <DropdownMenu className='dropdown-block' itemList={itemList} title={"block 1"} />
        <DropdownMenu className='dropdown-block' itemList={itemList} title={"block 2"} />
        <DropdownMenu className='dropdown-block' itemList={itemList} title={"block 3"} />

      </div>
    </div>
  );
}

export default App;
