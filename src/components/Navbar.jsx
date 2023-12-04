import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbox">
                <div className="left-side">
                    <ul>
                        <li>
                            <p className="logo">
                                Reeco
                            </p>
                        </li>
                        <li>
                            Store
                        </li>
                        <li>
                            Orders
                        </li>
                        <li>
                            Analytics
                        </li>
                    </ul>
                </div>
                <div className="right-side">
                    <ul>
                        <li className='cart-icon'>
                            <ShoppingCartOutlinedIcon />
                        </li>
                        <li>Hello, James
                             <span className='down-arrow'>
                                   <KeyboardArrowDownOutlinedIcon />
                             </span>
                           </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar