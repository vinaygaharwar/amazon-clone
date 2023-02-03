import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../contextApi/StateProvider';
import { auth } from '../firebase';

function Header() {
    const [{basket,user}]=useStateValue()
    const login=()=>{
        if(user){
            auth.signOut()
        }
    }
  return (
    <nav className='header'>
        <Link to="/">
            <img className='header__logo'
             src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
        </Link>
        <div className='header__search'>
        <input className='header__searchInput'/>
        <SearchIcon className='header__searchIcon'/>
        </div>
        <div className='header__Nav'>
            <Link className='header__link' to={!user && "/login"}>
            <div onClick={login} className='header__option'>
                <span className='header__optionLineOne'>Hello {user?.email}</span>
                <span className='header__optionLineTwo'>{user?'Sign Out':'Sign In'}</span>
            </div>
            </Link>
            <Link className='header__link' to="/login">
            <div className='header__option'>
                <span className='header__optionLineOne'>Return</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            </Link>
            <Link className='header__link' to="/login">
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            </Link>
            <Link to="/checkout" className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingCartIcon/>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header