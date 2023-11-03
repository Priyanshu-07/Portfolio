import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/PriyanshuLogo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contactimg.png';
import menu from '../../assets/menu.png';

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return ( 
        <div id='navbar'>
            <img src={logo} alt='Priyanshu Logo' className='logo'/>
            <div className='Menu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500} className='MenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className='MenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='photos' spy={true} smooth={true} offset={-80} duration={500} className='MenuListItem'>Photos</Link>
            </div>
            <button className='MenuButton' onClick={()=>
            {
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img className='MenuIcon' src={contactImg} alt='Contact Image'/>
                Contact Me
            </button>

            <img src={menu} alt='Burger Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='burgerMenu' style={{display:showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='burgerMenuListItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500} className='burgerMenuListItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className='burgerMenuListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='photos' spy={true} smooth={true} offset={-80} duration={500} className='burgerMenuListItem' onClick={()=>setShowMenu(false)}>Photos</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='burgerMenuListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </div>
     );
}

export default NavBar;