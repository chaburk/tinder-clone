import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';


function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
        <img className='header__logo' src="https://filecache.mediaroom.com/mr5mr_tinder/178085/flame-gradient-RGB_tn1100-category.png" alt=""/>
        <IconButton>
            <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  )
}

export default Header