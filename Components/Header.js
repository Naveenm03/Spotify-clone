import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'
import { useStateValue } from './StateProvider'

function Header({ spotify }) {
    const [{ user }, dispatch] = useStateValue();
  
    return (
      <div className="header">
        <div className="header__left">
          <SearchIcon />
          <input
            placeholder="Search for Artists, Songs, or Podcasts "
            type="text"
          />
        </div>
        <div className="header__right">
           <Avatar  />  
          
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    );
  }
  
  export default Header;
 