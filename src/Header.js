import React from 'react'
import { Link } from 'react-router-dom'
//import { Search, ShoppingBasket } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Header.css'
import { useStateValue } from './StateProvider';


function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <nav className='header'>
      <Link to="/">
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className="header__nav">
      <Link to= '/login'>
    
          <div className="header__option">
            <span className='header__optionLineOne'>Hello user</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
      </Link>
       
          <div className="header__option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        
      
          <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        
        <Link to="/checkout" className='header__link'>
          <div className="header__optionBasket" >
          <AddShoppingCartIcon/>
            <span className='header__optionLineTwo header__basketCount'>{basket?.length} </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;