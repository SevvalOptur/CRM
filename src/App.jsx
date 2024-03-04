import './app.scss';
import './assets/style/color.scss';
import Header from './components/header.jsx'
import Card from './components/card.jsx'
import Buton from './components/buton__components.jsx'
import Link from './components/link__components.jsx'
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


  return (
    <>
      <div className='container'>
        <Header text="UI Components" fontSize="36px"/>
        <div className='grid'>
          <Card text1="Buttons" text2="Types and states of buttons" fontSize="36px"/>
          {/* <Icon /> */}
          {/* <Buton text="Add Project"/> */}
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

      </div>
      <div>
      
      {/* <Buton type="text" onClick={handleClick} text="Text Button" />
      <Buton type="icon" onClick={handleClick}  icon={<MySVGIcon width="24" height="24" />} />
      <Buton
        type="iconText"
        disabled
        onClick={handleClick}
        icon={<MySVGIcon width="24" height="24" />}
        text="Disabled Icon Text Button"
      />
      <Buton
        type="text"
        disabled
        onClick={handleClick}
        text="Disabled Text Button"
      />
      <Buton
        type="icon"
        disabled
        onClick={handleClick}
        icon={<MySVGIcon width="24" height="24" />}
      /> */}
    </div>
    </>
  )
}

export default App
