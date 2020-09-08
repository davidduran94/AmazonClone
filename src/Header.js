import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img alt="logo" className="header__logo" src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" />

            <div className="header__search">
                <input className="heacer__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="heacer__nav">
                <div className="hears__option">
                    <span className="hear__optionLineOne">
                        Hello David
                    </span>
                    <span className="hear__optionLineTwo">
                        Hello David
                    </span>
                </div>

                <div className="hears__option">
                    <span className="hear__optionLineOne">
                        Retunr 
                    </span>
                    <span className="hear__optionLineTwo">
                        Orders
                    </span>
                    
                </div>

                <div className="hears__option">
                    
                </div>

                <div className="hears__option">
                    
                </div>
            </div>

        </div>
    )
}

export default Header
