import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.util';

const Header = ({currentUser})=>(
    <div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
            {
                !currentUser ? 
                <Link  to="/signIn" className="option">SIGN IN</Link>
                :
                <div className="option" onClick={()=>auth.signOut()}>
                    SIGN OUT
                </div>
            }
        </div>
    </div>
)

export default Header;