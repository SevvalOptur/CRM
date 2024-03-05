import React, { useState } from 'react';
import './app.scss';
import './assets/style/color.scss';
import Header from './components/header.jsx'
import CardText from './components/card__text.jsx'
import Dropdown from './components/dropdown.jsx';
import Buton from './components/buton__components.jsx'
import Link from './components/link__components.jsx'
import TextInput from './components/input__components.jsx'
import CardButon from './components/card__buton__components.jsx'
import AddIcon from './assets/svg/add_active.jsx'; 
import SendIcon from './assets/svg/send.jsx'; 
import ArrowRightICon from './assets/svg/right_arrow.jsx';
import BoardUnselectedIcon from './assets/svg/board_unselected.jsx'
import ListIcon from './assets/svg/list_active.jsx'

function App() {
  const handleClick = () => {
    console.log('HEllo');
  };

  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { label: 'Current Projects', value: 'Current Projects' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className='container'>
        <Header text="UI Components" fontSize="36px"/>
        <div className='grid'>
          <CardText text1="Buttons" text2="Types and states of buttons" fontSize="36px"/>
          <div className='buttons'>
            <h3 className='button__title'>Enabled</h3>
            <Buton
              type="iconText"
              onClick={handleClick}
              icon={<AddIcon width="24" height="24" fill="white"/>}
              text="Add Project"
            />
            <Buton
              type="text"
              onClick={handleClick}
              text="Button"
            />
            <Buton
              type="icon"
              onClick={handleClick}
              icon={<SendIcon width="24" height="24" fill="white" />}
            />
          <Link text="View All"  icon={<ArrowRightICon width="24" height="24" fill="#3F8CFF"/>}/>
          <CardButon  icon={<BoardUnselectedIcon width="24" height="24" />}/>
          </div>
          <div className='buttons'>
            <h3 className='button__title'>Hover</h3>
            <Buton
              type="iconText"
              onClick={handleClick}
              icon={<AddIcon width="24" height="24" fill="white"/>}
              text="Add Project"
            />
            <Buton
              type="text"
              onClick={handleClick}
              text="Button"
            />
            <Buton
              type="icon"
              onClick={handleClick}
              icon={<SendIcon width="24" height="24" fill="white" />}
            />
            <Link text="View All"  icon={<ArrowRightICon width="24" height="24" fill="#3F8CFF"/>}/>
            <CardButon  icon={<BoardUnselectedIcon width="24" height="24" />}/>
          </div>
          <div className='buttons'>
            <h3 className='button__title'>Pressed</h3>
            <Buton
              type="iconText"
              onClick={handleClick}
              icon={<AddIcon width="24" height="24" fill="white"/>}
              text="Add Project"
              active={true} 
            />
            <Buton
              type="text"
              onClick={handleClick}
              text="Button"
              active={true} 
            />
            <Buton
              type="icon"
              onClick={handleClick}
              icon={<SendIcon width="24" height="24" fill="white" />}
              active={true} 
            />
            <Link text="View All" icon={<ArrowRightICon width="24" height="24" fill="#3F8CFF"/>} active={true} />
            <CardButon newIcon={<ListIcon width="24" height="24" />} disabled={false}  icon={<BoardUnselectedIcon width="24" height="24" />} active={true} />
          </div>
          <div className='buttons'>
            <h3 className='button__title'>Disabled</h3>
            <Buton
              type="iconText"
              disabled
              onClick={handleClick}
              icon={<AddIcon width="24" height="24" fill="white"/>}
              text="Add Project"
            />
            <Buton
              type="text"
              disabled
              onClick={handleClick}
              text="Button"
            />
            <Buton
              type="icon"
              disabled
              onClick={handleClick}
              icon={<SendIcon width="24" height="24" fill="white" />}
            />
            <Link text="View All" disabled icon={<ArrowRightICon width="24" height="24" fill = "#CED5E0"/>}/>
            <CardButon disabled  icon={<BoardUnselectedIcon width="24" height="24" />}/>
          </div>
        </div>
        <div className='grid'>
          <CardText text1="Inputs" text2="States, text styles" fontSize="36px"/>
          <div className='inputs'>
            <div className='input'>
              <h3 className='button__title'>Inactive</h3>
              <TextInput
                label="Position"
                value=""
                onChange={() => {}}
                placeholder="UI/UX Designer"
              />
            </div>
            <div className='input'>
              <h3 className='button__title'>Active</h3>
              <TextInput
                label="Position"
                value=""
                onChange={() => {}}
                placeholder="UI/UX Designer"
                active={true}
              />
            </div>
            <div className='input'>
              <h3 className='button__title'>Disabled</h3>
              <TextInput
                label="Position"
                value=""
                onChange={() => {}}
                placeholder="UI/UX Designer"
                disabled={true}
              />
            </div>
            <div className='input'>
              <h3 className='button__title'>Error</h3>
              <TextInput
                label="Position"
                value=""
                onChange={() => {}}
                placeholder="UI/UX Designer"
                error={true}
                errorText="Incorrect data"
              />
            </div>
          </div>
        </div>
        <div className='grid'>
          <CardText text1="Dropdowns" text2="How component works" fontSize="36px"/>
          <div className='card'>
            <div>
              <Dropdown
                options={options}
                selectedOption={selectedOption}
                onChange={handleDropdownChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
    </div>
    </>
  )
}

export default App
