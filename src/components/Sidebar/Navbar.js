import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
   
  return (
    <>
    
        <div className='navbar'>
          <div className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
            <div style={{display: 'flex'}}>
              <div className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </div>
               <div>
            <div className = 'logo'>MAGNETO BAZAAR</div>
            
            <div className = 'logosub'>GODOWN</div>
            </div>
            </div>   
            </li>
           
            <li className='nav-text '>
                  <Link to='/home'>
                   
                  <FaIcons.FaRegClipboard /> <span>DashBoard</span>
                  </Link>
                </li>
                <hr className='rule'/>
            <li className='nav-text'>
            <Link to='/login'>
                  <AiIcons.AiOutlineImport className={'icon'}/>
                   
                    <span>STOCK IN</span>
                  </Link>
                </li>
                <li className='nav-text'>
            <Link to='/login'>
                  <AiIcons.AiOutlineExport className={'icon'}/>
                   
                    <span>STOCK OUT</span>
                  </Link>
                </li>
            
          </ul>
        </nav>

    </>
  );
}

export default Navbar;